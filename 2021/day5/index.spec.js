const { Map, makeRange } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/testInput.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 5", () => {
  it("ranges", () => {
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

    // uncomment for testInput
    expect(actual).toEqual(expected);
    expect(actual1).toEqual(expected1);
    // expect(map.score).toBe(46920);
  });

  it("p1", () => {
    const map = new Map(input);
    map.init();
    map.mapVents();
    const overlap = map.countOverlap();

    // uncomment for testInput
    expect(overlap).toEqual(5);
    // expect(overlap).toEqual(6666);
  });
});
