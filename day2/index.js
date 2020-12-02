const getCharLimit = (string) => {
  return string.split("-").map(Number);
};
const getPositions = (string) => {
  return string.split("-").map((num) => Number(num) - 1);
};

const getChar = (string) => {
  return string[0];
};

const isOrderValid = (string) => {
  const splitString = string.split(" ");
  const [pos1, pos2] = getPositions(splitString[0]);

  const char = getChar(splitString[1]);
  const sequence = splitString[2];

  const letter1 = sequence[pos1];
  const letter2 = sequence[pos2];

  return (
    (letter1 === char && letter2 !== char) ||
    (letter2 === char && letter1 !== char)
  );
};

const isSequenceValid = (string) => {
  const splitString = string.split(" ");
  const [min, max] = getCharLimit(splitString[0]);

  const char = getChar(splitString[1]);
  const sequence = splitString[2];
  const regex = new RegExp(`[${char}]`, "gi");
  const found = sequence.match(regex);

  if (!found) return false;

  return found.length >= min && found.length <= max;
};

const solve1 = (input) => {
  return input.filter(isSequenceValid).length;
};
const solve2 = (input) => {
  return input.filter(isOrderValid).length;
};

module.exports = {
  getCharLimit,
  getChar,
  isSequenceValid,
  solve1,
  isOrderValid,
  solve2,
};
