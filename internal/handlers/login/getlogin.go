package login

import (
	"net/http"

	"github.com/blacktau/priyome/internal/handlers/shared"
)

type GetLoginHandler struct{}

func NewGetHandler() *GetLoginHandler {
	return &GetLoginHandler{}
}

func (h *GetLoginHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	c := renderLogin("Login")
	shared.RenderPage(c, w, r)
}
