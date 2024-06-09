package models

import (
	"database/sql"
	"embed"
	"fmt"
	"io/fs"
	"log/slog"
	"path/filepath"
	"slices"
	"strings"
)

var db *sql.DB

const db_type = "sqllite"

//go:embed db_scripts
var dbFiles embed.FS

func getConnection() error {
	var err error

	if db != nil {
		return nil
	}

	db, err = sql.Open("sqlite3", "./app_data.db")
	if err != nil {
		return fmt.Errorf("failed to connect to database: %w", err)
	}

	slog.Info("connected to database")
	return nil
}

func RunMigrations() error {
	err := getConnection()
	if err != nil {
		return fmt.Errorf("Failed to connect to database for migrations: %w", err)
	}

	return migrateDB()
}

func migrateDB() error {
	err := runFile(fmt.Sprintf("%s/utils/01_CreateMigrationsTable.sql", db_type))

	if err != nil {
		return fmt.Errorf("Failed to initialise Migrations table: %w", err)
	}

	files, err := dbFiles.ReadDir(fmt.Sprintf("%s/migrations/*.sql", db_type))

	if err != nil {
		return fmt.Errorf("Error reading migration file list: %w", err)
	}

	slices.SortStableFunc(files, func(a, b fs.DirEntry) int {
		return strings.Compare(a.Name(), b.Name())
	})

	latest, err := readLatestMigration()

	if err != nil {
		return fmt.Errorf("Error retrieving current database state: %w", err)
	}

	slog.Info(fmt.Sprintf("Found database latest version at '%s'", latest))

	for _, migration := range files {
		migrationVersion := migrationVersionFromFileName(migration.Name())
		if migrationVersion <= latest || migration.IsDir() {
			continue
		}

		err := runFile(filepath.Join(db_type, "migrations", migration.Name()))
		if err != nil {
			return fmt.Errorf("Failed to apply migration %q: %w", migration.Name(), err)
		}

		err = recordMigrationApplied(migration)
		if err != nil {
			return fmt.Errorf("Failed to record migration %q applied: %w", migration.Name(), err)
		}

		slog.Info("Migration applied", "Migration", migrationVersion)
	}

	slog.Info("Database migration complete")

	return nil
}

func recordMigrationApplied(migration fs.DirEntry) error {
	const sql = "INSERT INTO Migrations (Version, CreatedAt) VALUES ($1, NOW())"

	_, err := db.Exec(sql, migrationVersionFromFileName(migration.Name()))

	return err
}

func readLatestMigration() (string, error) {
	sql := "SELECT Version FROM Migrations ORDER BY Id DESC LIMIT 1"

	rows, err := db.Query(sql)

	if err != nil {
		return "", fmt.Errorf("Error trying to read database current migration state: %w", err)
	}

	defer rows.Close()
	for rows.Next() {
		var version string
		err := rows.Scan(&version)
		if err != nil {
			return "", fmt.Errorf("Error reading latest migiration applied from database: %w", err)
		}

		return version, nil
	}

	return "", nil
}

func runFile(file string) error {
	sql, err := dbFiles.ReadFile(file)
	if err != nil {
		return fmt.Errorf("failed to read sql file %q: %w", file, err)
	}

	_, err = db.Exec(string(sql))
	if err != nil {
		return fmt.Errorf("Failed to apply %q to database: %w", file, err)
	}

	return nil
}

func migrationVersionFromFileName(fileName string) string {
	return strings.Split(fileName, ".")[0]
}
