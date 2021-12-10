const {
  p1,
  isCorrupted,
  getIncomplete,
  getIncompleteScore,
  p2,
} = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 9", () => {
  it("get find corrupt closing", () => {
    expect(isCorrupted("{([(<{}[<>[]}>{[]{[(<()>")).toBe("}");
    expect(isCorrupted("[[<[([]))<([[{}[[()]]]")).toBe(")");
    expect(isCorrupted("[{[{({}]{}}([{[{{{}}([]")).toBe("]");
    expect(isCorrupted("[<(<(<(<{}))><([]([]()")).toBe(")");
    expect(isCorrupted("<{([([[(<>()){}]>(<<{{")).toBe(">");
  });

  it("get find incomplete closing", () => {
    expect(getIncomplete("[({(<(())[]>[[{[]{<()<>>")).toBe("}}]])})]");
    expect(getIncomplete("[(()[<>])]({[<{<<[]>>(")).toBe(")}>]})");
    expect(getIncomplete("(((({<>}<{<{<>}{[]{[]{}")).toBe("}}>}>))))");
    expect(getIncomplete("{<[[]]>}<{[{[{[]{()[[[]")).toBe("]]}}]}]}>");
    expect(getIncomplete("<{([{{}}[<[[[<>{}]]]>[]]")).toBe("])}>");
  });

  it("get incomplete score", () => {
    expect(getIncompleteScore("])}>")).toBe(294);
  });

  it("p1", () => {
    // test input
    // expect(p1(input)).toBe(26397);
    expect(p1(input)).toBe(316851);
  });

  it("p2", () => {
    // test input
    // expect(p2(input)).toBe(288957);
    expect(p2(input)).toBe(2182912364);
  });
});
