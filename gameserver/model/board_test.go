package model_test

import (
	"testing"

	"github.com/blacktau/priyome/gameserver/model"
)

func TestBoard_Flip(t *testing.T) {
	b, _ := model.FromFEN("1k6/2p5/8/8/8/8/8/K7")
	if b.Flip().Flip().String() != b.String() {
		t.Error(b, b.Flip().Flip())
	}
	if b[22] != 'k' || b[33] != 'p' || b[91] != 'K' {
		t.Error(b)
	}
	b = b.Flip()
	if b[28] != 'k' || b[86] != 'P' || b[97] != 'K' {
		t.Error(b)
	}
}
