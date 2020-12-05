const { isValid, solve1, formatInput, validationMap } = require("./");
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
  it("should construct field", () => {
    expect(
      formatInput(
        `hcl:#ae17e1 iyr:2013 eyr:2024 ecl:brn pid:760753108 byr:1931  hgt:179cm`
      )
    ).toEqual({
      hcl: "#ae17e1",
      iyr: "2013",
      eyr: "2024",
      ecl: "brn",
      pid: "760753108",
      byr: "1931",
      hgt: "179cm",
    });
  });
  it("additional validations", () => {
    const invalidInput = [
      "eyr:1972 cid:100 hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926",
      "iyr:2019 hcl:#602927 eyr:1967 hgt:170cm ecl:grn pid:012533040 byr:1946",

      "hcl:dab227 iyr:2012 ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277",

      "hgt:59cm ecl:zzz eyr:2038 hcl:74454a iyr:2023 pid:3556412378 byr:2007",
    ];

    expect(solve1(invalidInput)).toHaveLength(0);

    const validInput = [
      "pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980 hcl:#623a2f",

      "eyr:2029 ecl:blu cid:129 byr:1989 iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm",

      "hcl:#888785 hgt:164cm byr:2001 iyr:2015 cid:88 pid:545766238 ecl:hzl eyr:2022",

      "iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719",
    ];

    expect(solve1(validInput)).toHaveLength(4);
  });

  it("validate birth year", () => {
    expect(validationMap.byr("1920")).toBe(true);
    expect(validationMap.byr("1919")).toBe(false);
    expect(validationMap.byr("2002")).toBe(true);
    expect(validationMap.byr("2003")).toBe(false);
  });
  it("validate expiration date", () => {
    expect(validationMap.eyr("2020")).toBe(true);
    expect(validationMap.eyr("2030")).toBe(true);
    expect(validationMap.eyr("2019")).toBe(false);
    expect(validationMap.eyr("2031")).toBe(false);
  });
  // iyr (Issue Year) - four digits; at least 2010 and at most 2020.
  it("validate issue year", () => {
    expect(validationMap.iyr("2010")).toBe(true);
    expect(validationMap.iyr("2020")).toBe(true);
    expect(validationMap.iyr("2009")).toBe(false);
    expect(validationMap.iyr("2021")).toBe(false);
  });
  it("validate height", () => {
    // If cm, the number must be at least 150 and at most 193.
    // If in, the number must be at least 59 and at most 76.
    expect(validationMap.hgt("158cm")).toBe(true);
    expect(validationMap.hgt("59in")).toBe(true);
    expect(validationMap.hgt("149cm")).toBe(false);
    expect(validationMap.hgt("170in")).toBe(false);
    expect(validationMap.hgt("194cm")).toBe(false);
    expect(validationMap.hgt("58in")).toBe(false);
    expect(validationMap.hgt("77in")).toBe(false);
    expect(validationMap.hgt("194")).toBe(false);
  });

  it("validate hair color", () => {
    // hcl valid:   #123abc
    // hcl invalid: #123abz
    // hcl invalid: 123abc

    expect(validationMap.hcl("#123abc")).toBe(true);
    expect(validationMap.hcl("#123456")).toBe(true);
    expect(validationMap.hcl("#abcdef")).toBe(true);
    expect(validationMap.hcl("#1234567")).toBe(false);
    expect(validationMap.hcl("#abzdfrty")).toBe(false);
    expect(validationMap.hcl("#123abz")).toBe(false);
    expect(validationMap.hcl("123abc")).toBe(false);
  });

  it("validate eye color", () => {
    // ecl valid:   brn
    // ecl invalid: wat

    expect(validationMap.ecl("amb")).toBe(true);
    expect(validationMap.ecl("blu")).toBe(true);
    expect(validationMap.ecl("brn")).toBe(true);
    expect(validationMap.ecl("gry")).toBe(true);
    expect(validationMap.ecl("grn")).toBe(true);
    expect(validationMap.ecl("hzl")).toBe(true);
    expect(validationMap.ecl("oth")).toBe(true);
    expect(validationMap.ecl("wat")).toBe(false);
  });

  it("validate pid", () => {
    // pid valid:   000000001
    // pid invalid: 0123456789
    expect(validationMap.pid("000000001")).toBe(true);
    expect(validationMap.pid("0a0000001")).toBe(false);
    expect(validationMap.pid("0a000000")).toBe(false);
    expect(validationMap.pid("1100000001")).toBe(false);
    expect(validationMap.pid("0123456789")).toBe(false);
  });

  it("solves part 1", () => {
    expect(solve1(testInput)).toHaveLength(2);
  });
});
