const { Map, makeRange } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 5", () => {
  it("ranges without diagonals", () => {
    const input = "1,1 -> 1,3";
    const input1 = "9,7 -> 7,7";
    const { range: actual } = makeRange()(input);
    const { range: actual1 } = makeRange()(input1);
    const expected = [
      [1, 1],
      [1, 2],
      [1, 3],
    ];
    const expected1 = [
      [7, 7],
      [8, 7],
      [9, 7],
    ];

    expect(actual).toEqual(expected);
    expect(actual1).toEqual(expected1);
  });

  it("ranges with diagonals", () => {
    const input = "1,1 -> 3,3";
    const input1 = "3,3 -> 1,1";
    const input2 = "2,0 -> 6,4";
    const input3 = "6,4 -> 2,0";
    const input4 = "9,7 -> 7,9";
    const input5 = "7,9 -> 9,7";
    const { range: actual } = makeRange(false)(input);
    const { range: actual1 } = makeRange(false)(input1);
    const { range: actual2 } = makeRange(false)(input2);
    const { range: actual3 } = makeRange(false)(input3);
    const { range: actual4 } = makeRange(false)(input4);
    const { range: actual5 } = makeRange(false)(input5);
    const expected = [
      [1, 1],
      [2, 2],
      [3, 3],
    ];
    const expected1 = [
      [2, 0],
      [3, 1],
      [4, 2],
      [5, 3],
      [6, 4],
    ];
    const expected2 = [
      [7, 9],
      [8, 8],
      [9, 7],
    ];

    expect(actual).toEqual(expected);
    expect(actual1).toEqual(expected);
    expect(actual2).toEqual(expected1);
    expect(actual3).toEqual(expected1);
    expect(actual4).toEqual(expected2);
    expect(actual5).toEqual(expected2);
  });

  it("p1", () => {
    const map = new Map(input);
    map.init();
    map.mapVents();
    const overlap = map.countOverlap();

    // uncomment for testInput
    // expect(overlap).toEqual(5);
    expect(overlap).toEqual(6666);
  });

  it("p2", () => {
    const map = new Map(input, false);
    map.init();
    map.mapVents();

    const overlap = map.countOverlap();

    // uncomment for testInput
    // expect(overlap).toEqual(12);
    expect(overlap).toEqual(19081);
  });
});
