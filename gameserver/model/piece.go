package model

type Piece byte

const (
	padding Piece = ' '
	empty   Piece = '.'
)

var (
	values    = map[Piece]int{'P': 100, 'N': 280, 'B': 320, 'R': 479, 'Q': 929, 'K': 60000}
	pieceFlip = map[Piece]Piece{
		'P':     'p',
		'N':     'n',
		'B':     'b',
		'R':     'r',
		'Q':     'q',
		'K':     'k',
		'p':     'P',
		'n':     'N',
		'b':     'B',
		'r':     'R',
		'q':     'Q',
		'k':     'K',
		padding: padding,
		empty:   empty,
	}
)

// Value returns the numerical value of a piece
func (p Piece) Value() int {
	return values[p]
}

// Mine returns true if a piece belongs To the current player
func (p Piece) Mine() bool {
	return p.Value() > 0
}

// Flip returns the same piece but belonging To the opposite player
func (p Piece) Flip() Piece {
	return pieceFlip[p]
}

func (p Piece) IsEmpty() bool {
	return p == empty
}

func (p Piece) IsPadding() bool {
	return p == padding
}
