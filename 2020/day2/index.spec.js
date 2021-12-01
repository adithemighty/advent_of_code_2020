const {
  getCharLimit,
  getChar,
  isSequenceValid,
  solve1,
  isOrderValid,
  solve2,
} = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");
const input = fs.readFileSync(pathname, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);

  return data;
});
const testInput = input.split("\n");

describe("day 2", () => {
  it("gets character limits", () => {
    expect(getCharLimit("1-3")).toEqual([1, 3]);
  });
  it("gets character", () => {
    expect(getChar("a:")).toEqual("a");
  });
  it("checks sequence", () => {
    expect(isSequenceValid("1-3 a: abcde")).toBe(true);
    expect(isSequenceValid("1-3 b: cdefg")).toBe(false);
    expect(isSequenceValid("2-9 c: ccccccccc")).toBe(true);
  });
  it("checks order", () => {
    expect(isOrderValid("1-3 a: abcde")).toBe(true);
    expect(isOrderValid("1-3 b: cdefg")).toBe(false);
    expect(isOrderValid("2-9 c: ccccccccc")).toBe(false);
  });
  it("solves day2 / 1", () => {
    expect(solve1(testInput)).toBe(2);
  });
  it("solves day2 / 2", () => {
    expect(solve2(testInput)).toBe(1);
  });
});
