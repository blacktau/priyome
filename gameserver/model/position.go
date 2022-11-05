package model

type Colour int

const (
	Black Colour = 1
	White Colour = 0
)

// Position describes a Board with the current game state (en passant and castling rules).
type Position struct {
	Board Board   // current Board
	Score int     // Board score, the higher, the better
	wc    [2]bool // the castling rights, [west/queen side, east/king side]
	bc    [2]bool // the opponent castling rights, [west/king side, east/queen side]
	ep    Square  // en-passant square where pawn can be captured
	kp    Square  // king passant during castling, where king can be captured
}

func NewPositionFromBoard(b Board) Position {
	return Position{
		Board: b,
	}
}

func NewPosition(b Board, wc [2]bool, bc [2]bool, ep Square, kp Square) Position {
	return Position{
		Board: b,
		wc:    wc,
		bc:    bc,
		ep:    ep,
		kp:    kp,
	}
}

func (pos Position) String() string {
	return pos.Board.String()
}

// Flip returns a modified position where the Board is flipped, score is
// inverted, castling rules are preserved, en-passant and king passant rules
// are reset.
func (pos Position) Flip() Position {
	np := Position{
		Score: -pos.Score,
		wc:    [2]bool{pos.bc[0], pos.bc[1]},
		bc:    [2]bool{pos.wc[0], pos.wc[1]},
		ep:    pos.ep.Flip(),
		kp:    pos.kp.Flip(),
	}
	np.Board = pos.Board.Flip()
	return np
}

// GenerateMoves returns a list of valid potential next moves
func (pos Position) GenerateMoves() (moves []Move) {
	// For each of our pieces, iterate through each possible 'ray' of moves,
	// as defined in the 'directions' map. The rays are broken e.g. by
	// captures or immediately in case of pieces such as knights.
	for idx, piece := range pos.Board {
		if !piece.Mine() {
			continue
		}

		square := Square(idx)
		// check all the move directions for the piece
		for _, dir := range directions[piece] {
			for j := square + dir; ; j = j + dir {
				possibleTarget := pos.Board[j]

				// can't move into padded area or square with another of our pieces
				if possibleTarget.IsPadding() || (!possibleTarget.IsEmpty() && possibleTarget.Mine()) {
					break
				}

				// handle pawns
				if piece == 'P' {
					// if moving From initial and pawn has piece in front of it
					if (dir == N || dir == N+N) && !possibleTarget.IsEmpty() {
						break
					}

					// block trying To move two squares if pawn is not on initial square or there is a piece
					if dir == N+N && (square < A1+N || !pos.Board[square+N].IsEmpty()) {
						break
					}

					// handle en-passant and king passant
					if (dir == N+W || dir == N+E) && possibleTarget.IsEmpty() && (j != pos.ep && j != pos.kp && j != pos.kp-1 && j != pos.kp+1) {
						break
					}
				}

				moves = append(moves, Move{From: square, To: j})
				// crawlers only move once
				if piece == 'P' || piece == 'N' || piece == 'K' || (possibleTarget != ' ' && possibleTarget != '.' && !possibleTarget.Mine()) {
					break
				}

				// Castling
				if square == A1 && pos.Board[j+E] == 'K' && pos.wc[0] {
					moves = append(moves, Move{From: j + E, To: j + W})
				}

				if square == H1 && pos.Board[j+W] == 'K' && pos.wc[1] {
					moves = append(moves, Move{From: j + W, To: j + E})
				}
			}
		}
	}

	return moves
}

func (pos Position) Move(m Move) (np Position) {
	i, j, p := m.From, m.To, pos.Board[m.From]
	np = pos
	np.ep = 0
	np.kp = 0
	np.Score = pos.Score + pos.Value(m)
	np.Board[m.To] = pos.Board[m.From]
	np.Board[m.From] = '.'

	if i == A1 {
		np.wc[0] = false
	}

	if i == H1 {
		np.wc[1] = false
	}

	if j == A8 {
		np.bc[1] = false
	}

	if j == H8 {
		np.bc[0] = false
	}

	if p == 'K' {
		// castling
		np.wc[0], np.wc[1] = false, false
		if (j - i).Abs() == 2 {
			if j < i {
				np.Board[H1] = '.'
			} else {
				np.Board[A1] = '.'
			}

			np.Board[(i+j)/2] = 'R'
		}
	}

	if p == 'P' {
		// promotion
		if j >= A8 && j <= H8 {
			np.Board[j] = 'Q'
		}

		// first move
		if j-i == 2*N {
			np.ep = i + N
		}

		// en-passant
		if j == pos.ep {
			np.Board[j+S] = '.'
		}
	}

	return np.Flip()
}

func (pos Position) Value(m Move) int {
	i, j := m.From, m.To
	p, q := Piece(pos.Board[i]), Piece(pos.Board[j])
	score := pieceSquareTables[p][j] - pieceSquareTables[p][i]
	if q != '.' && q != ' ' && !q.Mine() {
		score += pieceSquareTables[q.Flip()][j.Flip()]
	}

	// Castling Check Direction
	if (j - pos.kp).Abs() < 2 {
		score += pieceSquareTables['K'][j.Flip()]
	}

	// Castling
	if p == 'K' && (i-j).Abs() == 2 {
		score = score + pieceSquareTables['R'][(i+j)/2]
		if j < i {
			score -= pieceSquareTables['R'][A1]
		} else {
			score -= pieceSquareTables['R'][H1]
		}
	}

	if p == 'P' {
		// Promotion
		if j >= A8 && j <= H8 {
			score += pieceSquareTables['Q'][j] - pieceSquareTables['P'][j]
		}

		// En-passant
		if j == pos.ep {
			score += pieceSquareTables['P'][(j + S).Flip()]
		}
	}

	return score
}

func (pos Position) ToPlay() Colour {
	if pos.Board[0] == '\n' {
		return Black
	}

	return White
}
