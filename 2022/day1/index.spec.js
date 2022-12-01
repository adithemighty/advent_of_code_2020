const { getMostCalories } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 1", () => {
  it("solve part 1", () => {
    expect(getMostCalories(input).overAll).toBe(24000);
  });
  
  it("solve part 2", () => {
    expect(getMostCalories(input).topThree).toBe(45000);
  });
});
