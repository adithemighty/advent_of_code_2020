const { getMinFuel } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 5", () => {
  it("p1", () => {
    // uncomment for test input
    // expect(getMinFuel(input)).toBe(37);
    expect(getMinFuel(input)).toBe(344297);
  });

  it("p2", () => {
    // uncomment for test input
    // expect(getMinFuel(input, true)).toBe(168);
    expect(getMinFuel(input, true)).toBe(97164301);
  });
});
