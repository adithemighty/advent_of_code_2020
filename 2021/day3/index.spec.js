const { getPowerConsumption, getRating, getLifeSupportRating } = require("./");
const fs = require("fs");
const path = require("path");

const pathname = path.resolve(__dirname + "/input.txt");

const input = fs
  .readFileSync(pathname, "utf8", (err, data) => data)
  .split("\n");

describe("day 3", () => {
  it("part 1", () => {
    if (input.length > 13) expect(getPowerConsumption(input)).toBe(3633500);
    else expect(getPowerConsumption(input)).toBe(198);
  });
});

describe("day 3 / 2", () => {
  it("should get oxygen", () => {
    if (input.length > 13) expect(getRating(input, true)).toBe(1327);
    else expect(getRating(input, true)).toBe(23);
  });
  it("should get CO2", () => {
    if (input.length > 13) expect(getRating(input)).toBe(3429);
    else expect(getRating(input)).toBe(10);
  });
  it("should solve part", () => {
    if (input.length > 13) expect(getLifeSupportRating(input)).toBe(4550283);
    else expect(getLifeSupportRating(input)).toBe(230);
  });
});
