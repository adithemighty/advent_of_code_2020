const { isValid, solve1 } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve("./day4/testInput.txt");

const input = fs.readFileSync(pathname, "utf8", (err, data) => data);
const testInput = input.split("\n\n");

describe("day 4", () => {
  it("match fields", () => {
    expect(
      isValid(`ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
    byr:1937 iyr:2017 cid:147 hgt:183cm`)
    ).toEqual(true);
    expect(
      isValid(`iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
      hcl:#cfa07d byr:1929`)
    ).toEqual(false);
    expect(
      isValid(`hcl:#cfa07d eyr:2025 pid:166559648
      iyr:2011 ecl:brn hgt:59in
      `)
    ).toEqual(false);
  });
  it("should treat cid field as optional", () => {
    expect(
      isValid(`hcl:#ae17e1 iyr:2013
      eyr:2024
      ecl:brn pid:760753108 byr:1931
      hgt:179cm
      `)
    ).toEqual(true);
  });
  it("solves part 1", () => {
    expect(solve1(testInput)).toHaveLength(2);
  });
});
