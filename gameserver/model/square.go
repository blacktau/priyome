package model

// Square represents an index of the chess Board.
type Square int

// corners
const (
	A1 Square = 91
	H1 Square = 98
	A8 Square = 21
	H8 Square = 28
)

func (s Square) Flip() Square {
	return 119 - s
}

func (s Square) String() string {
	return string([]byte{" abcdefgh "[s%10], "  87654321  "[s/10]})
}

func (s Square) Abs() Square {
	if s < 0 {
		return -s
	}
	return s
}

func ParseSquare(c string) Square {
	fil, rank := Square(c[0])-Square('a'), Square(c[1])-1
	return A1 + fil - 10*rank
}
