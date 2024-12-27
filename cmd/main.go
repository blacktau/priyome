package main

import (
	"context"
	"errors"
	"log/slog"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"github.com/blacktau/priyome/internal/config"
	"github.com/blacktau/priyome/internal/handlers/about"
	"github.com/blacktau/priyome/internal/handlers/home"
	"github.com/blacktau/priyome/internal/handlers/login"
	"github.com/blacktau/priyome/internal/handlers/logout"
	"github.com/blacktau/priyome/internal/handlers/notfound"
	"github.com/blacktau/priyome/internal/handlers/register"
	"github.com/blacktau/priyome/internal/hash/passwordhash"
	m "github.com/blacktau/priyome/internal/middleware"
	"github.com/blacktau/priyome/internal/models"
	database "github.com/blacktau/priyome/internal/store/db"
	"github.com/blacktau/priyome/internal/store/dbstore"

	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/chi/v5"
)

var Environment = "development"

func init() {
	os.Setenv("env", Environment)

	models.RunMigrations()
}

func main() {
	log := slog.New(slog.NewTextHandler(os.Stdout, nil))
	slog.SetDefault(log)

	r := chi.NewRouter()

	cfg := config.MustLoadConfig()

	db := database.MustOpen(cfg.DatabaseName)

	passwordhash := passwordhash.NewHPasswordHash()

	userStore := dbstore.NewUserStore(db, passwordhash)

	sessionStore := dbstore.NewSessionStore(db)

	fileServer := http.FileServer(http.Dir("./static"))
	r.Handle("/static/*", http.StripPrefix("/static/", fileServer))
	r.Handle("/favicon.svg", fileServer)

	authMiddleware := m.NewAuthMiddleware(sessionStore, cfg.SessionCookieName)

	r.Group(func(r chi.Router) {
		middlewares := chi.Middlewares{
			middleware.Logger,
			m.TextHTMLMiddleware,
			authMiddleware.AddUserToContext,
		}

		if config.CspEnabled() {
			middlewares = append(middlewares, m.CSPMiddleware)
		}

		r.Use(middlewares...)

		r.NotFound(notfound.NewHandler().ServeHTTP)

		r.Get("/", home.NewHandler().ServeHTTP)
		r.Get("/about", about.NewHandler().ServeHTTP)
		r.Get("/register", register.NewGetHandler().ServeHTTP)
		r.Post("/register", register.NewPostHandler(userStore).ServeHTTP)
		r.Get("/login", login.NewGetHandler().ServeHTTP)
		r.Post("/login", login.NewPostHandler(userStore, sessionStore, passwordhash, cfg.SessionCookieName).ServeHTTP)
		r.Post("/logout", logout.NewPostHandler(cfg.SessionCookieName).ServeHTTP)
	})

	killSig := make(chan os.Signal, 1)
	signal.Notify(killSig, os.Interrupt, syscall.SIGTERM)

	srv := &http.Server{
		Addr:    cfg.Port,
		Handler: r,
	}

	go func() {
		err := srv.ListenAndServe()

		if errors.Is(err, http.ErrServerClosed) {
			slog.Info("server shutdown complete")
		} else if err != nil {
			slog.Error("Server error", slog.Any("err", err))
			os.Exit(1)
		}
	}()

	slog.Info("Server started", slog.String("port", cfg.Port), slog.String("env", Environment))
	<-killSig

	slog.Info("Shutting down server")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	if err := srv.Shutdown(ctx); err != nil {
		slog.Error("Server shutdown failed", slog.Any("err", err))
		os.Exit(1)
	}

	slog.Info("Server shutdown complete")
}
