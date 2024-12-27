package shared

import (
	"net/http"

	"github.com/a-h/templ"
)

func isPartial(r *http.Request) bool {
	v := r.Header.Get("Hx-Target")
	return v != ""
}

func RenderPage(comp templ.Component, w http.ResponseWriter, r *http.Request) {
	var err error
	if isPartial(r) {
		err = comp.Render(r.Context(), w)
	} else {
		err = renderLayout(comp, "Priyome").Render(r.Context(), w)
	}

	if err != nil {
		http.Error(w, "Error rendering template", http.StatusInternalServerError)
		return
	}
}
