const { separateBags } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve("./day7/testInput.txt");

const thing = fs.readFileSync(pathname, "utf8", (err, data) => data);

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 7", () => {
  it("should find bags that hold gold after 2 iterations", () => {
    const actual = separateBags({ rest: input });
    const expected = {
      valid: new Set([
        "bright white",
        "muted yellow",
        "light red",
        "dark orange",
        "wavy teal",
        "plaid beige",
        "clear lavender",
      ]),
      invalid: new Set([
        "dotted black",
        "faded blue",
        "dark olive",
        "vibrant plum",
      ]),
      rest: ["shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags."],
    };

    expect(actual.valid).toEqual(expected.valid);
    expect(actual.invalid).toEqual(expected.invalid);
    expect(actual.rest).toEqual(expected.rest);
  });
});
