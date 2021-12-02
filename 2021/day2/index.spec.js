const { getPosition } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 2", () => {
  it("solve part 1", () => {
    if (input.length > 10) expect(getPosition(input)).toBe(1868935);
    else expect(getPosition(input)).toBe(150);
  });
  it("solve part 2", () => {
    if (input.length > 10) expect(getPosition(input, true)).toBe(1965970888);
    else expect(getPosition(input, true)).toBe(900);
  });
});
