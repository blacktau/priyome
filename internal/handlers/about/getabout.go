package about

import (
	"net/http"

	"github.com/blacktau/priyome/internal/handlers/shared"
)

type AboutHandler struct{}

func NewHandler() *AboutHandler {
	return &AboutHandler{}
}

func (h *AboutHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	c := renderPage()
	shared.RenderPage(c, w, r)
}
