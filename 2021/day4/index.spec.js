const { Bingo, Board } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 4", () => {
  it("part 1", () => {
    const game = new Bingo({ input });
    game.init();
    game.start();

    // uncomment for testInput
    // expect(game.score).toBe(4512);
    expect(game.score).toBe(46920);
  });

  it("part 2", () => {
    const game = new Bingo({ input, firstWins: false });
    game.init();
    game.start();

    // uncomment for testInput
    // expect(game.score).toBe(1924);
    expect(game.score).toBe(12635);
  });
});
