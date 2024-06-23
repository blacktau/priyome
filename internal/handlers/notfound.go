package handlers

import (
	"net/http"

	"github.com/blacktau/priyome/internal/templates"
)

type NotFoundHandler struct{}

func NewNotFoundHandler() *NotFoundHandler {
	return &NotFoundHandler{}
}

func (h *NotFoundHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	c := templates.NotFound()
	w.WriteHeader(http.StatusNotFound)
	renderPage(c, w, r)
}
