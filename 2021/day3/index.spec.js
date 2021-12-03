const { getPowerConsumption } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 2", () => {
  it("solve part 1", () => {
    if (input.length > 13) expect(getPowerConsumption(input)).toBe(3633500);
    else expect(getPowerConsumption(input)).toBe(198);
  });
});
