package dbstore

import (
	"github.com/blacktau/priyome/internal/hash"
	"github.com/blacktau/priyome/internal/store"
	"gorm.io/gorm"
)

type UserStore struct {
	db           *gorm.DB
	passwordHash hash.PasswordHash
}

func NewUserStore(db *gorm.DB, passwordHash hash.PasswordHash) *UserStore {
	return &UserStore{
		db:           db,
		passwordHash: passwordHash,
	}
}

func (s *UserStore) CreateUser(email string, password string) error {
	hashedPassword, err := s.passwordHash.GenerateFromPassword(password)
	if err != nil {
		return err
	}

	return s.db.Create(&store.User{
		Email:    email,
		Password: hashedPassword,
	}).Error
}

func (s *UserStore) GetUser(email string) (*store.User, error) {
	var user store.User

	err := s.db.Where("email = ?", email).First(&user).Error
	if err != nil {
		return nil, err
	}

	return &user, err
}
