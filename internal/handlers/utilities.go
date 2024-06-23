package handlers

import (
	"net/http"

	"github.com/a-h/templ"
	"github.com/blacktau/priyome/internal/templates"
)

func isPartial(r *http.Request) bool {
	v := r.Header.Get("Hx-Target")
	return v != ""
}

func renderPage(comp templ.Component, w http.ResponseWriter, r *http.Request) {
	var err error
	if isPartial(r) {
		err = comp.Render(r.Context(), w)
	} else {
		err = templates.Layout(comp, "Priyome").Render(r.Context(), w)
	}

	if err != nil {
		http.Error(w, "Error rendering template", http.StatusInternalServerError)
		return
	}
}
