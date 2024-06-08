package encoding

import (
	"fmt"
	"regexp"
	"strings"

	"github.com/blacktau/priyome/gameserver/model"
)

// ParseFEN read a board From Forsyth-Edwards Notation
func ParseFEN(fen string) (p model.Position, err error) {
	parts := strings.Split(fen, " ")
	board, colour, castling, enpas := parts[0], parts[1], parts[2], parts[3]

	rows := strings.Split(board, "/")
	if len(rows) != 8 {
		return p, fmt.Errorf("FEN invalid: expect 8 rows got {%d}", len(rows))
	}

	b := model.Board{}

	// initialise board
	for i := 0; i < len(b); i++ {
		b[i] = ' '
	}

	for i := 0; i < 8; i++ {
		idx := i*10 + 21
		for _, c := range rows[i] {
			q := model.Piece(c)
			if q >= '1' && q <= '8' {
				for j := model.Piece(0); q-j >= '1'; j++ {
					b[idx] = '.'
					idx++
				}
			} else if q.Value() == 0 && q.Flip().Value() == 0 {
				return p, fmt.Errorf("FEN invalid: invalid piece value: {%d}", c)
			} else {
				b[idx] = q
				idx++
			}
		}

		if idx%10 != 9 {
			return p, fmt.Errorf("FEN invalid: invalid row length for row {%d}", idx)
		}
	}

	if len(parts) > 1 && colour == "b" {
		b = b.Flip()
	}

	wc := [2]bool{strings.Contains(castling, "K"), strings.Contains(castling, "Q")}
	bc := [2]bool{strings.Contains(castling, "k"), strings.Contains(castling, "q")}
	ep := model.Square(0)
	if enpas != "-" {
		ep = model.ParseSquare(enpas)
	}

	p = model.NewPosition(b, wc, bc, ep, 0)

	return p, nil
}

func RenderFEN(pos model.Position) string {
	toPlay := pos.ToPlay()
	colour := "wb"[toPlay]
	if toPlay == model.Black {
		pos.Flip()
	}

	board := ""
	for i, p := range pos.Board {
		board = board + string(p)
		if i%8 == 0 {
			board = board + "/"
		}
	}

	r, err := regexp.Compile("\\.+")

	if err != nil {
		panic("Invalid regex. what have you done?")
	}

	board = string(r.ReplaceAllFunc([]byte(board), func(bytes []byte) []byte {
		n := len(bytes)
		return []byte{byte(n + 48)}
	}))

	return ""
}
