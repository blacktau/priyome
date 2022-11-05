package encoding_test

import (
	"bufio"
	"os"
	"testing"

	"github.com/blacktau/priyome/gameserver/encoding"
)

func TestFromFEN(t *testing.T) {
	if b, err := encoding.ParseFEN("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"); err != nil {
		t.Error(err)
	} else if b.String() != "\nrnbqkbnr\npppppppp\n........\n........\n........\n........\nPPPPPPPP\nRNBQKBNR\n" {
		t.Error(b.String())
	}

	if b, err := encoding.ParseFEN("7K/3P4/8/8/8/8/1p6/k7"); err != nil {
		t.Error(err)
	} else if b[28] != 'K' || b[34] != 'P' || b[82] != 'p' || b[91] != 'k' {
		t.Error(b)
	} else if b[21] != '.' || b[20] != ' ' {
		t.Error(b)
	}
	for _, s := range []string{
		"",
		"hello",
		"8/8/8/8/8/8/8/8/8",
		"8/8/8/8/8/8/8/9",
		"8/8/8/8/8/8/8",
		"8/1p1/8/8/8/8/8/8",
		"8/1x7/8/8/8/8/8/8",
		"8/1 7/8/8/8/8/8/8",
		"8/1.7/8/8/8/8/8/8",
	} {
		if b, err := encoding.ParseFEN(s); err == nil {
			t.Error(s, "should return an error, but got:", b)
		}
	}
}

func TestFromFEN_ChessAtHome(t *testing.T) {
	fenReader, err := os.Open("testdata/chessathome_openings.fen")
	if err != nil {
		t.Error(err, "could not read testdata/chessathome_openings.fen")
	}

	defer fenReader.Close()

	scanner := bufio.NewScanner(fenReader)

	for scanner.Scan() {
		fen := scanner.Text()
		_, err := encoding.ParseFEN(fen)
		if err != nil {
			t.Error(fen, "should have read board but got:", err)
		}
	}

}
