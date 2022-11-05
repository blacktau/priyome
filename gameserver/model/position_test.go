package model_test

import (
	"sort"
	"strings"
	"testing"

	"github.com/blacktau/priyome/gameserver/encoding"
	"github.com/blacktau/priyome/gameserver/model"
)

func TestPosition_GenerateMoves(t *testing.T) {
	for game, expected := range map[string]string{
		"r4rk1/ppp2ppp/2n2n2/5P2/2pb4/2N2N2/PPP2PPP/RQ2K2R": "a2a3 a2a4 b1c1 b1d1 b2b3 b2b4 c3a4 c3b5 c3d1 c3d5 c3e2 c3e4 e1d1 e1d2 e1e2 e1f1 f3d2 f3d4 f3e5 f3g1 f3g5 f3h4 g2g3 g2g4 h1f1 h1g1 h2h3 h2h4",
	} {
		b, err := encoding.ParseFEN(game)
		if err != nil {
			t.Error(game, b, err)
		}
		p := model.NewPositionFromBoard(b)
		moves := []string{}
		for _, m := range p.GenerateMoves() {
			moves = append(moves, m.String())
		}
		sort.Strings(moves)
		if s := strings.Join(moves, " "); s != expected {
			t.Error("\n", expected, "\n", s)
		}
	}
}
