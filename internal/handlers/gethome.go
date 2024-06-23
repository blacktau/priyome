package handlers

import (
	"net/http"

	"github.com/blacktau/priyome/internal/middleware"
	"github.com/blacktau/priyome/internal/store"
	"github.com/blacktau/priyome/internal/templates"
)

type HomeHandler struct{}

func NewHomeHandler() *HomeHandler {
	return &HomeHandler{}
}

func (h *HomeHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	user, ok := r.Context().Value(middleware.UserKey).(*store.User)

	if !ok {
		c := templates.GuestIndex()

		renderPage(c, w, r)
		return
	}

	c := templates.Index(user.Email)
	renderPage(c, w, r)
}
