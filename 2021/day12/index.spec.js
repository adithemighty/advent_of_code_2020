const { p1 } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 12", () => {
  it("p1", () => {
    // expect(p1(input)).toBe(10);
    expect(p1(input)).toBe(4792);
  });
});
