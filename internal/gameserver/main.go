package main

import (
	"bufio"
	"fmt"
	"os"
	"strings"

	"github.com/blacktau/priyome/gameserver/encoding"
	"github.com/blacktau/priyome/gameserver/engines"
	"github.com/blacktau/priyome/gameserver/model"
)

func start() model.Position {
	board, _ := encoding.ParseFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBKQBNR")
	return model.NewPositionFromBoard(board)
}

func cli() {
	pos := start()
	searcher := engines.NewSearcher()
	r := bufio.NewReader(os.Stdin)
	for {
		fmt.Println(pos)
		valid := false
		for !valid {
			fmt.Print("Enter move: ")
			input, _ := r.ReadString('\n')
			input = strings.TrimSpace(input)
			valid = false
			for _, m := range pos.GenerateMoves() {
				if input == m.String() {
					pos = pos.Move(m)
					valid = true
					break
				}
			}
		}
		fmt.Println(pos.Flip())
		m := searcher.Search(pos, 10000)
		score := pos.Value(m)
		if score <= -engines.MateValue {
			fmt.Println("You won")
			return
		}
		if score >= engines.MateValue {
			fmt.Println("You lost")
			return
		}
		pos = pos.Move(m)
	}
}

func uci() {
	pos := start()
	searcher := engines.NewSearcher()
	r := bufio.NewReader(os.Stdin)
	sqr := map[string]model.Square{}
	for i := model.Square(0); i < 120; i++ {
		sqr[i.String()] = i
	}
	white := true
	for {
		input, _ := r.ReadString('\n')
		input = strings.TrimSpace(input)
		switch {
		case input == "quit":
			return
		case input == "isready":
			fmt.Println("readyok")
		case input == "uci":
			fmt.Println("id name carnatus")
			fmt.Println("id author zserge")
			fmt.Println("uciok")
		case input == "ucinewgame" || input == "position startpos":
			pos = start()
			white = true
		case strings.HasPrefix(input, "position startpos moves "):
			pos = start()
			moves := strings.Split(input[24:], " ")
			for i, s := range moves {
				m := model.NewMove(sqr[s[0:2]], sqr[s[2:4]])
				if i%2 != 0 {
					m = model.NewMove(m.From.Flip(), m.To.Flip())
				}
				pos = pos.Move(m)
			}
			white = len(moves)%2 == 0
		case strings.HasPrefix(input, "position fen "):
			b, _ := model.FromFEN(input[13:])
			fmt.Println(b)
			pos = model.NewPositionFromBoard(b)
		case strings.HasPrefix(input, "go"):
			m := searcher.Search(pos, 10000)
			if !white {
				m = model.NewMove(m.From.Flip(), m.To.Flip())
			}
			fmt.Println("bestmove", m)
		}
	}
}

func main() {
	if len(os.Args) == 2 && os.Args[1] == "cli" {
		cli()
	} else {
		uci()
	}
}
