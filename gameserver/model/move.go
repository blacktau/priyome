package model

// Move direction constants, horizontal moves +/-1, vertical moves +/-10
const (
	E = 1
	S = 10
	W = -1
	N = -10
)

// the ways the pieces can move
var directions = map[Piece][]Square{
	'P': {N, N + N, N + W, N + E},
	'N': {N + N + E, E + N + E, E + S + E, S + S + E, S + S + W, W + S + W, W + N + W, N + N + W},
	'B': {N + E, S + E, S + W, N + W},
	'R': {N, E, S, W},
	'Q': {N, E, S, W, N + E, S + E, S + W, N + W},
	'K': {N, E, S, W, N + E, S + E, S + W, N + W},
}

// Move represents a movement of a piece From one square To another.
type Move struct {
	From Square
	To   Square
}

func NewMove(from Square, to Square) Move {
	return Move{From: from, To: to}
}

// Moves are printed in algebraic notation, i.e "e2e4".
func (m Move) String() string {
	return m.From.String() + m.To.String()
}
