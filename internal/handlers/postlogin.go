package handlers

import (
	"encoding/base64"
	"fmt"
	"net/http"
	"time"

	"github.com/blacktau/priyome/internal/hash"
	"github.com/blacktau/priyome/internal/store"
	"github.com/blacktau/priyome/internal/templates"
)

type PostLoginHandler struct {
	userStore         store.UserStore
	sessionStore      store.SessionStore
	passwordHash      hash.PasswordHash
	sessionCookieName string
}

func NewPostLoginHandler(userStore store.UserStore, sessionStore store.SessionStore, passwordHash hash.PasswordHash, sessionCookieName string) *PostLoginHandler {
	return &PostLoginHandler{
		userStore:         userStore,
		sessionStore:      sessionStore,
		passwordHash:      passwordHash,
		sessionCookieName: sessionCookieName,
	}
}

func (h *PostLoginHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	email := r.FormValue("email")
	password := r.FormValue("password")

	user, err := h.userStore.GetUser(email)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		c := templates.LoginError()
		c.Render(r.Context(), w)
		return
	}

	passwordIsValid, err := h.passwordHash.ComparePasswordAndHash(password, user.Password)

	if err != nil || !passwordIsValid {
		w.WriteHeader(http.StatusUnauthorized)
		c := templates.LoginError()
		c.Render(r.Context(), w)
		return
	}

	session, err := h.sessionStore.CreateSession(&store.Session{
		UserID: user.ID,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	userID := user.ID
	sessionID := session.SessionID

	cookieValue := base64.StdEncoding.EncodeToString([]byte(fmt.Sprintf("%s:%d", sessionID, userID)))

	expiration := time.Now().Add(365 * 24 * time.Hour)
	cookie := http.Cookie{
		Name:     h.sessionCookieName,
		Value:    cookieValue,
		Expires:  expiration,
		Path:     "/",
		HttpOnly: true,
		SameSite: http.SameSiteStrictMode,
	}

	http.SetCookie(w, &cookie)
	w.Header().Set("HX-Redirect", "/")
	w.WriteHeader(http.StatusOK)
}
