package handlers

import (
	"net/http"

	"github.com/blacktau/priyome/internal/store"
	"github.com/blacktau/priyome/internal/templates"
)

type PostRegisterHandler struct {
	userStore store.UserStore
}

func NewPostRegisterHandler(userStore store.UserStore) *PostRegisterHandler {
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
		c := templates.RegisterError()
		c.Render(r.Context(), w)
		return
	}

	c := templates.RegisterSuccess()
	err = c.Render(r.Context(), w)

	if err != nil {
		http.Error(w, "error rendering template", http.StatusInternalServerError)
		return
	}
}
