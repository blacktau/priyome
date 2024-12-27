package notfound

import (
	"net/http"

	"github.com/blacktau/priyome/internal/handlers/shared"
)

type NotFoundHandler struct{}

func NewHandler() *NotFoundHandler {
	return &NotFoundHandler{}
}

func (h *NotFoundHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	c := renderContent()
	w.WriteHeader(http.StatusNotFound)
	shared.RenderPage(c, w, r)
}
