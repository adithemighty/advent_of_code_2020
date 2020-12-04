const isValid = (string) => {
  const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid", "cid"];
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

const solve1 = (input) =>
  input.filter((string) => {
    return isValid(string.replace("\n", " "));
  });

module.exports = { isValid, solve1 };
