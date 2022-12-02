const { calculateScore } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 1", () => {
  it("solve part 1", () => {
    expect(calculateScore(input)).toBe(15);
  });
  
  it("solve part 2", () => {
    expect(calculateScore(input, false)).toBe(12);
  });
});
