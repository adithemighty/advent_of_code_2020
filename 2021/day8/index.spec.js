const { getUnique, p1, getNumbers, p2 } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 8", () => {
  it("should get unique values", () => {
    const input =
      "be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe";

    expect(getUnique(input)).toEqual(["fdgacbe", "gcbe"]);
    expect(
      getUnique(
        "edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc"
      )
    ).toEqual("cgb dgebacf gc".split(" "));
  });

  it("p1", () => {
    // uncomment for test
    // expect(p1(input)).toBe(26);
    expect(p1(input)).toBe(344);
  });

  it("getNumbers", () => {
    expect(
      getNumbers("acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab")
    ).toEqual({
      abcdeg: 0,
      ab: 1,
      acdfg: 2,
      abcdf: 3,
      abef: 4,
      bcdef: 5,
      bcdefg: 6,
      abd: 7,
      abcdefg: 8,
      abcdef: 9,
    });
  });

  it("p2", () => {
    // uncomment for test input
    // expect(p2(input)).toBe(61229);
    expect(p2(input)).toBe(1048410);
  });
});
