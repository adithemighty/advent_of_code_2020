const { trackDepth } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 1", () => {
  it("solve part 1", () => {
    expect(trackDepth(input).counter).toBe(7);
  });
  it("solve part 2", () => {
    expect(trackDepth(input).windowCounter).toBe(5);
  });
});
