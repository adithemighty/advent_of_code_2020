const { getLowest } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 9", () => {
  it("should get lowest points", () => {
    // test input
    // expect(getLowest(input)).toBe(15);
    expect(getLowest(input)).toBe(456);
  });
});
