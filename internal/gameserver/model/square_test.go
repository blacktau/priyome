package model_test

import (
	"testing"

	"github.com/blacktau/priyome/gameserver/model"
)

func TestSquare(t *testing.T) {
	for sq, s := range map[model.Square]string{
		model.A1: "a1", model.H1: "h1", model.A1 + 1: "b1", model.A1 - 10: "a2", model.A8: "a8", model.H8: "h8",
	} {
		if sq.String() != s {
			t.Error(int(sq), sq.String())
		}
	}
}
