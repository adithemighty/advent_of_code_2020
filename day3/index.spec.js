const { solve1, solve2 } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve("./day3/testInput.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);
const testInput = input.split("\n");

describe("day 3", () => {
  it("solve1", () => {
    expect(solve1(testInput, [1, 1])).toEqual(2);
    expect(solve1(testInput, [1, 3])).toEqual(7);
    expect(solve1(testInput, [1, 5])).toEqual(3);
    expect(solve1(testInput, [1, 7])).toEqual(4);
    expect(solve1(testInput, [2, 1])).toEqual(2);
  });
  it("solve2", () => {
    expect(solve2(testInput)).toEqual(336);
  });
});
