const { getSeatId, getLimit, solve1, solve2 } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");
const input = fs.readFileSync(pathname, "utf8", (err, data) => data);
const testInput = input.split("\n");

const expectedRows = [
  [0, 63],
  [32, 63],
  [32, 47],
  [40, 47],
  [44, 47],
  [44, 45],
];
const expectedColumns = [
  [4, 7],
  [4, 5],
];

describe("day 5", () => {
  let prevRows = [0, 127];
  let prevCols = [0, 7];
  const rows = testInput[0];
  const columns = testInput[0].slice(-3);

  for (let i = 0; i < expectedRows.length; i++) {
    it("parse row " + i, () => {
      const actual = getLimit(rows[i], prevRows);
      prevRows = actual;

      expect(actual).toEqual(expectedRows[i]);
    });
  }

  for (let i = 0; i < expectedColumns.length; i++) {
    it("parse column " + i, () => {
      const actual = getLimit(columns[i], prevCols);
      prevCols = actual;

      expect(actual).toEqual(expectedColumns[i]);
    });
  }

  [
    { input: testInput[0], expected: 357 },
    { input: "BFFFBBFRRR", expected: 567 },
    { input: "FFFBBBFRRR", expected: 119 },
    { input: "BBFFBBFRLL", expected: 820 },
  ].forEach(({ input, expected }) => {
    it("should get seat id for " + input, () => {
      const actual = getSeatId(input);
      expect(actual).toEqual(expected);
    });
  });

  it("should solve first part", () => {
    expect(solve1(testInput)).toBe(820);
  });
});
