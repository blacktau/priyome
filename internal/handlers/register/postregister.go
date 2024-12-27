package register

import (
	"net/http"

	"github.com/blacktau/priyome/internal/store"
)

type PostRegisterHandler struct {
	userStore store.UserStore
}

func NewPostHandler(userStore store.UserStore) *PostRegisterHandler {
	return &PostRegisterHandler{
		userStore: userStore,
	}
}

func (h *PostRegisterHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	email := r.FormValue("email")
	password := r.FormValue("password")

	err := h.userStore.CreateUser(email, password)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		c := renderError()
		c.Render(r.Context(), w)
		return
	}

	c := renderSuccess()
	err = c.Render(r.Context(), w)
	if err != nil {
		http.Error(w, "error rendering template", http.StatusInternalServerError)
		return
	}
}
