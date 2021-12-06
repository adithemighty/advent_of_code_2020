const { p1 } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 6", () => {
  it("p1", () => {
    // uncomment for test input
    // expect(p1(input, 80)).toBe(5934);
    expect(p1(input, 80)).toBe(396210);
  });

  it("p2", () => {
    // uncomment for test input
    // expect(p1(input, 256)).toBe(26984457539);
    expect(p1(input, 256)).toBe(1770823541496);
  });
});
