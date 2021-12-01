const { CustomConsole } = require("@jest/console");

const minus = (a, b) => Math.abs(a - b);

const makeMap = (input) =>
  input.reduce(
    (acc, num) => {
      const key = minus(2020, num);
      acc.remainder.push(key);
      acc.map[num] = key;

      return acc;
    },
    {
      remainder: [],
      map: {},
    }
  );

function findPair(input) {
  const { remainder, map } = makeMap(input);

  for (let i = 0; i < remainder.length; i++) {
    const num = remainder[i];

    if (map[num]) {
      return [num, map[num]];
    }
  }
}

function findTriple(input) {
  const { map } = makeMap(input);

  for (let i = 0; i < input.length; i++) {
    const num1 = input[i];

    for (let j = input.length - 1; j > 0; j--) {
      const num2 = input[j];
      const num3 = 2020 - num1 - num2;

      if (map[num3]) {
        return [num1, num2, num3].map(Number);
      }
    }
  }
}

function solvePart1(input) {
  const [a, b] = findPair(input);

  return a * b;
}

function solvePart2(input) {
  const [a, b, c] = findTriple(input);

  return a * b * c;
}

module.exports = {
  minus,
  makeMap,
  findPair,
  solvePart1,
  solvePart2,
  findTriple,
};
