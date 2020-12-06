const {
  splitGroups,
  getUniqueAnswers,
  solve1,
  getAgreedAnswers,
  solve2,
} = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve("./day6/testInput.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);

describe("day 5", () => {
  it("splits into groups", () => {
    expect(splitGroups(input)).toHaveLength(5);
  });

  it("gets unique answers in group", () => {
    const groups = splitGroups(input);
    expect(getUniqueAnswers(groups[0])).toBe(3);
    expect(getUniqueAnswers(groups[1])).toBe(3);
    expect(getUniqueAnswers(groups[2])).toBe(3);
    expect(getUniqueAnswers(groups[3])).toBe(1);
    expect(getUniqueAnswers(groups[4])).toBe(1);
  });

  it("gets same answers in group", () => {
    const groups = splitGroups(input);
    expect(getAgreedAnswers(groups[0])).toBe(3);
    expect(getAgreedAnswers(groups[2])).toBe(1);
    expect(getAgreedAnswers(groups[1])).toBe(0);
    expect(getAgreedAnswers(groups[3])).toBe(1);
    expect(getAgreedAnswers(groups[4])).toBe(1);
  });

  it("solves part 1", () => {
    expect(solve1(input)).toBe(11);
  });
  it("solves part 2", () => {
    expect(solve2(input)).toBe(6);
  });
});
