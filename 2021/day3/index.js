const getMostCommon = (arr1, arr2) =>
  arr1.map((num, ind) => (num > arr2[ind] ? 0 : 1));

const reverseArr = (arr) => arr.map((n) => 1 - n);

const getPowerConsumption = (input, withAim) => {
  const length = input[0].length;

  const [zeroes, ones] = input.reduce(
    (acc, val) => {
      val
        .split("")
        .forEach((val, ind) => (val === "0" ? acc[0][ind]++ : acc[1][ind]++));

      return acc;
    },
    [new Array(length).fill(0), new Array(length).fill(0), ,]
  );

  const mostCommon = getMostCommon(zeroes, ones);
  const notMostCommon = reverseArr(mostCommon);

  const gamma = parseInt(mostCommon.join(""), 2);
  const epsilon = parseInt(notMostCommon.join(""), 2);

  return gamma * epsilon;
};

module.exports = {
  getPowerConsumption,
};
