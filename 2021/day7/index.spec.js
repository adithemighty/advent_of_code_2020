const { p1 } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 5", () => {
  it("p1", () => {
    // uncomment for test input
    expect(p1(input)).toBe(37);
    // expect(p1(input, 80)).toBe(396210);
  });
});
