package engines

import "github.com/blacktau/priyome/gameserver/model"

var (
	// MateValue is a position score at checkmate
	MateValue = model.Piece('K').Value() + 10*model.Piece('Q').Value()
	// MaxTableSize defines how many positions to keep in transposition table
	MaxTableSize = 10000000
	// EvalRoughness is used in search algorithm
	EvalRoughness = 13
)

type entry struct {
	depth int
	score int
	gamma int
	move  model.Move
}

// Searcher is a recursive alpha-beta search algorithm with transposition memory
type Searcher struct {
	tp    map[model.Position]entry
	nodes int
}

func NewSearcher() Searcher {
	return Searcher{tp: map[model.Position]entry{}}
}

func (s *Searcher) bound(pos model.Position, gamma, depth int) (score int) {
	s.nodes++
	e, ok := s.tp[pos]
	if ok && e.depth >= depth && ((e.score < e.gamma && e.score < gamma) ||
		(e.score >= e.gamma && e.score >= gamma)) {
		return e.score
	}
	if abs(pos.Score) >= MateValue {
		return pos.Score
	}
	nullScore := pos.Score
	if depth > 0 {
		nullScore = -s.bound(pos.Flip(), 1-gamma, depth-3)
	}
	if nullScore >= gamma {
		return nullScore
	}

	bestScore, bestMove := -3*MateValue, model.Move{}

	for _, m := range pos.GenerateMoves() {
		if depth <= 0 && pos.Value(m) < 150 {
			break
		}
		score := -s.bound(pos.Move(m), 1-gamma, depth-1)
		if score > bestScore {
			bestScore, bestMove = score, m
		}
		if score >= gamma {
			break
		}
	}
	if depth <= 0 && bestScore < nullScore {
		return nullScore
	}
	// Stalemate check: best move loses king + null move is better
	if depth > 0 && bestScore <= -MateValue && nullScore > -MateValue {
		bestScore = 0
	}

	if !ok || depth >= e.depth && bestScore >= gamma {
		s.tp[pos] = entry{depth: depth, score: bestScore, gamma: gamma, move: bestMove}
		if len(s.tp) > MaxTableSize {
			s.tp = map[model.Position]entry{}
		}
	}

	return bestScore
}

func (s *Searcher) Search(pos model.Position, maxNodes int) (m model.Move) {
	s.nodes = 0
	for depth := 1; depth < 99; depth++ {
		lower, upper := -3*MateValue, 3*MateValue
		score := 0
		for lower < upper-EvalRoughness {
			gamma := (lower + upper + 1) / 2
			score = s.bound(pos, gamma, depth)
			if score >= gamma {
				lower = score
			}
			if score < gamma {
				upper = score
			}
		}
		if abs(score) >= MateValue || s.nodes >= maxNodes {
			break
		}
	}
	return s.tp[pos].move
}

func abs(v int) int {
	if v < 0 {
		return -v
	}
	return v
}
