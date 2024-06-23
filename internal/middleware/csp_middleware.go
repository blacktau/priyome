package middleware

import (
	"context"
	"crypto/rand"
	"encoding/hex"
	"fmt"
	"log"
	"net/http"

	"github.com/blacktau/priyome/internal/config"
)

type key string

var NonceKey key = "nonces"

const (
	ScriptNonce      string = "Priyome"
	TailWindCSSNonce string = "TailWindCSS"
)

func generateRandomString(length int) string {
	bytes := make([]byte, length)
	_, err := rand.Read(bytes)
	if err != nil {
		return ""
	}

	return hex.EncodeToString(bytes)
}

func CSPMiddleware(next http.Handler) http.Handler {
	// To use the same nonces in all responses, move the Nonces
	// struct creation to here, outside the handler.

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		// Create a new Nonces struct for every request when here.
		// move to outside the handler to use the same nonces in all responses
		nonceMap := make(map[string]string)
		nonceMap[ScriptNonce] = generateRandomString(16)
		nonceMap[TailWindCSSNonce] = generateRandomString(16)

		scriptHashes := []string{
			"sha256-DeFlW09kNDi+7qBxBneQOmsfpVyb+TKLonyvci6nvCg=",
		}

		cssHashes := []string{
			"sha256-LvlS/B1qAj78sT1D0qfbmubNvkMYAGhya5cC6E1gINY=",
			"sha256-3JX/CigBfjGaHM/HWGeYuNkfOJHu2HYCgOpcmlnE3e8=",
			"sha256-pgn1TCGZX6O77zDvy0oTODMOxemn0oj0LeCnQTRj7Kg=",
		}

		// set nonces in context
		ctx := context.WithValue(r.Context(), NonceKey, nonceMap)

		// insert the nonces into the content security policy header
		cspHeader := "default-src 'self';"
		// append script-src
		cspHeader = cspHeader + fmt.Sprintf(" script-src 'nonce-%s'", nonceMap[ScriptNonce])

		for _, i := range scriptHashes {
			cspHeader = cspHeader + fmt.Sprintf(" '%s'", i)
		}

		cspHeader = cspHeader + ";"

		// append css
		cspHeader = cspHeader + fmt.Sprintf(" style-src 'unsafe-hashes' 'nonce-%s'", nonceMap[TailWindCSSNonce])

		for _, v := range cssHashes {
			cspHeader = cspHeader + fmt.Sprintf(" '%s'", v)
		}

		cspHeader = cspHeader + ";"

		w.Header().Set("Content-Security-Policy", cspHeader)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// get the Nonce from the context, it is a struct called Nonces,
// so we can get the nonce we need by the key, i.e. HtmxNonce
func GetNonces(ctx context.Context) map[string]string {
	nonceSet := ctx.Value(NonceKey)
	if nonceSet == nil {
		log.Fatal("error getting nonce set - is nil")
	}

	nonces, ok := nonceSet.(map[string]string)

	if !ok {
		log.Fatal("error getting nonce set - not ok")
	}

	return nonces
}

func GetNonce(ctx context.Context, key string) string {
	if !config.CspEnabled() {
		return ""
	}

	return GetNonces(ctx)[key]
}
