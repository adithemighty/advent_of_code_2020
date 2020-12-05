const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];

const isValid = (string) => {
  const regex = new RegExp(`(${fields.join("|")})`, "gi");
  const found = string.match(regex);

  const allFieldsPresent = found.length === fields.length;
  if (!allFieldsPresent) {
    if (!found.includes("cid") && found.length === fields.length - 1) {
      return true;
    }
  }
  return found.length === fields.length;
};

const validationMap = {
  // four digits; at least 1920 and at most 2002.
  byr: (input) => {
    const yearAsNumber = Number(input);
    return yearAsNumber >= 1920 && yearAsNumber <= 2002;
  },
  // four digits; at least 2010 and at most 2020.
  iyr: (input) => {
    const yearAsNumber = Number(input);
    return input >= 2010 && input <= 2020;
  },
  // four digits; at least 2020 and at most 2030.
  eyr: (input) => {
    const yearAsNumber = Number(input);
    return input >= 2020 && input <= 2030;
  },
  // a # followed by exactly six characters 0-9 or a-f.
  hcl: (input) => {
    const match = input.match(/#([0-9a-f]{6})$/g);
    return Boolean(match);
  },
  // ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
  ecl: (input) => {
    const match = input.match(/(amb|blu|brn|gry|grn|hzl|oth)/g);
    return Boolean(match);
  },
  pid: (input) => {
    const match = input.match(/(\d{9})$/g);
    return input.length === 9 && Boolean(match);
  },
  cid: (input) => {
    return true;
  },
  // hgt (Height) - a number followed by either cm or in:
  // If cm, the number must be at least 150 and at most 193.
  // If in, the number must be at least 59 and at most 76.
  hgt: (input) => {
    const regex1 = RegExp("(\\d{2,3})(cm|in)", "gi");

    const match = regex1.exec(input);

    if (!match) return false;

    const [, height, unit] = [...match];

    if (!unit || !height) return false;

    const heightAsNumber = Number(height);
    if (unit === "cm") {
      return heightAsNumber >= 150 && heightAsNumber <= 193;
    }
    if (unit === "in") {
      return heightAsNumber >= 59 && heightAsNumber <= 76;
    }

    return false;
  },
};

const formatInput = (string) => {
  return string.split(" ").reduce((acc, val) => {
    const [key, value] = val.split(":");

    acc[key] = value;
    return acc;
  }, {});
};

const solve1 = (input) =>
  input.filter((string, ind) => {
    const formattedInput = formatInput(string.split("\n").join(" "));
    const keys = Object.keys(formattedInput);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = formattedInput[key];

      if (!validationMap[key](value)) {
        return false;
      }
    }

    if (keys.length === fields.length) return true;

    if (keys.length === fields.length - 1) {
      if (!formattedInput.cid) {
        return true;
      }
    }

    // if there's not enough fields return
    if (keys.length < fields.length - 1) {
      return false;
    }

    return false;
  });

module.exports = { isValid, solve1, formatInput, validationMap };
