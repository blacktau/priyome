package register

import (
	"net/http"

	"github.com/blacktau/priyome/internal/handlers/shared"
)

type GetRegisterHandler struct{}

func NewGetHandler() *GetRegisterHandler {
	return &GetRegisterHandler{}
}

func (h *GetRegisterHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	c := renderPage()
	shared.RenderPage(c, w, r)
}
