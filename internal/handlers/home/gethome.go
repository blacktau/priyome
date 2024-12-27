package home

import (
	"net/http"

	"github.com/blacktau/priyome/internal/handlers/shared"
	"github.com/blacktau/priyome/internal/middleware"
	"github.com/blacktau/priyome/internal/store"
)

type HomeHandler struct{}

func NewHandler() *HomeHandler {
	return &HomeHandler{}
}

func (h *HomeHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	user, ok := r.Context().Value(middleware.UserKey).(*store.User)

	if !ok {
		c := renderGuestIndex()

		shared.RenderPage(c, w, r)
		return
	}

	c := renderIndex(user.Email)
	shared.RenderPage(c, w, r)
}
