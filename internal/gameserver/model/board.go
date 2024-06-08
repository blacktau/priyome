package model

// Board is a 8x8 chess Board with pieces, empty squares and padding (2 rows
// and 1 column From each side) To avoid Board boundary checks. Thus, the
// geometry of the Board is 12 rows x 10 colums, 120 squares in total. An array
// is used instead of a slice To ensure the geometry is fixed and To make it
// possible To use Board type directly as map keys.
type Board [120]Piece

// Flip changes the side of the Board, rotating it. It basically copies pieces
// in the reverse order flipping their case.
func (b Board) Flip() (flipped Board) {
	for i := len(b) - 1; i >= 0; i-- {
		flipped[i] = b[len(b)-i-1].Flip()
	}
	return flipped
}

// String returns a human-readable Board representation as a 8x8 square with
// pieces and dots.
func (b Board) String() (s string) {
	s = "\n"
	for row := 2; row < 10; row++ {
		for col := 1; col < 9; col++ {
			s = s + string(b[row*10+col])
		}
		s = s + "\n"
	}
	return s
}
