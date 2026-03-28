package about

import (
	"bytes"
	"context"
	"net/http"
	"net/http/httptest"
	"testing"

	"github.com/blacktau/priyome/internal/middleware"

	"github.com/stretchr/testify/assert"
)

func TestGetAboutHandler(t *testing.T) {
	testCases := []struct {
		name               string
		expectedStatusCode int
		expectedBody       []byte
	}{
		{
			name:               "render successfully",
			expectedStatusCode: http.StatusOK,
			expectedBody:       []byte("Priyome"),
		},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			assertion := assert.New(t)

			handler := NewHandler()

			req, err := http.NewRequest("GET", "/about", nil)
			assertion.NoError(err)

			value := middleware.Nonces{}
			ctx := context.WithValue(req.Context(), middleware.NonceKey, value)
			req = req.WithContext(ctx)

			rr := httptest.NewRecorder()

			handler.ServeHTTP(rr, req)

			assertion.Equal(tc.expectedStatusCode, rr.Code, "handler returned wrong status code: got %v want %v", rr.Code, tc.expectedStatusCode)

			assertion.True(bytes.Contains(rr.Body.Bytes(), tc.expectedBody), "handler returned unexpected body: got %v want %v", rr.Body.String(), string(tc.expectedBody))
		})
	}
}