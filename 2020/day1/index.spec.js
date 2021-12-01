const {
  minus,
  makeMap,
  findPair,
  solvePart1,
  findTriple,
  solvePart2,
} = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");
const input = fs.readFileSync(pathname, "utf8", (err, data) => data);
const testInput = input.split("\n");

describe("day 1", () => {
  it("deducts 2020 - 1933 to equal 87", () => {
    expect(minus(2020, 1933)).toBe(87);
  });

  it("minus returns absolute value", () => {
    expect(minus(1933, 2020)).toBe(87);
  });

  it("makes a map", () => {
    const { remainder, map } = makeMap([1933]);
    expect(remainder).toEqual([87]);
    expect(map).toEqual({
      1933: 87,
    });
  });

  it("finds pair", () => {
    const result = findPair(testInput);
    const result1 = findTriple(testInput);

    expect(result).toContain(1721);
    expect(result).toContain(299);
  });

  it("finds triple", () => {
    const result = findTriple(testInput);

    expect(result).toContain(366);
    expect(result).toContain(675);
    expect(result).toContain(979);
  });

  it("solves problem", () => {
    const result = solvePart1(testInput);

    expect(result).toBe(514579);
  });

  it("solves problem", () => {
    const result = solvePart2(testInput);

    expect(result).toBe(241861950);
  });
});
