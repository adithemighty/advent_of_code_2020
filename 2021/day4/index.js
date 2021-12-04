class Board {
  constructor(input) {
    this.input = input;
    this.grid = [];
    this.markedNumbers = [];
    this.unmarkedNumbers = [];
  }

  cleanInput() {
    return this.input.split("\n").map((row) => {
      return row
        .replaceAll("  ", " ")
        .trim()
        .split(" ")
        .map((col) => Number(col));
    });
  }

  init() {
    // create grid
    this.grid = this.cleanInput();

    this.markedNumbers = this.input
      .split("\n")
      .map(() => new Array(5).fill(undefined));

    this.unmarkedNumbers = this.cleanInput();
  }

  markNumber(number) {
    // Mark number
    this.grid.forEach((row, rInd) => {
      for (let i = 0; i < row.length; i++) {
        // if there's
        const match = row[i] === number;
        if (match) {
          // remove the marked num from the unmarked nums
          this.unmarkedNumbers[rInd][i] = undefined;
          this.markedNumbers[rInd][i] = number;
        }
      }
    });
  }

  hasFullRow() {
    const [filteredRow] = this.markedNumbers.filter((row) => {
      return row.filter((val) => val !== undefined).length === 5;
    });

    // check if row is full
    return filteredRow || false;
  }

  hasFullColumn() {
    let flipped = [];

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (flipped[i]) flipped[i].push(this.markedNumbers[j][i]);
        else flipped[i] = [this.markedNumbers[j][i]];
      }
    }

    const [filteredRow] = flipped.filter((row) => {
      return row.filter((val) => val !== undefined).length === 5;
    });

    return filteredRow || false;
  }

  checkBingo() {
    return this.hasFullColumn() || this.hasFullRow();
  }

  calculateScore() {
    return this.unmarkedNumbers.reduce((acc, row) => {
      row.forEach((col) => {
        if (col) acc += col;
      });

      return acc;
    }, 0);
  }
}

class Bingo {
  constructor({ input, firstWins = true }) {
    this.numbers = [];
    this.boards = [];
    this.input = input;
    this.score = 0;
    this.firstWins = firstWins;
    this.winningBoards = new Set([]);
  }

  init() {
    // handle input
    const [input, ...rest] = this.input.split("\n\n");

    // Make bingo board
    this.boards = rest.map((val) => {
      const board = new Board(val);
      board.init();
      return board;
    });

    // set numbers
    this.numbers = input.split(",").map(Number);
  }

  keepGoing() {
    return this.firstWins
      ? !this.score
      : this.winningBoards.size < this.boards.length;
  }

  start() {
    let i = 0;

    while (this.keepGoing()) {
      const draw = this.numbers[i];

      for (let j = 0; j < this.boards.length; j++) {
        const board = this.boards[j];

        board.markNumber(draw);

        if (board.checkBingo()) {
          if (this.firstWins) {
            // In case there are 2 matches at the same draw, only set the first
            if (!this.score) this.score = board.calculateScore() * draw;
          } else {
            // when bingoing board is in list do nothing
            if (this.winningBoards.has(j)) continue;

            this.winningBoards.add(j);
            this.score = board.calculateScore() * draw;
          }
        }
      }

      i++;
    }
  }
}

module.exports = { Bingo, Board };
