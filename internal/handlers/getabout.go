package handlers

import (
	"net/http"

	"github.com/blacktau/priyome/internal/templates"
)

type AboutHandler struct{}

func NewAboutHandler() *AboutHandler {
	return &AboutHandler{}
}

func (h *AboutHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	c := templates.About()
	renderPage(c, w, r)
}
