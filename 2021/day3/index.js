const separate = (arr) =>
  arr.reduce(
    (acc, val) => {
      val
        .split("")
        .forEach((val, ind) => (val === "0" ? acc[0][ind]++ : acc[1][ind]++));

      return acc;
    },
    [new Array(arr[0].length).fill(0), new Array(arr[0].length).fill(0)]
  );

const getMostCommon = (arr1, arr2, isOxygen) =>
  arr1.map((num, ind) => {
    if (isOxygen) num >= arr2[ind] ? 0 : 1;
    return num > arr2[ind] ? 0 : 1;
  });

const reverseArr = (arr) => arr.map((n) => 1 - n);

const getDecimal = (arr) => parseInt(arr.join(""), 2);

const getPowerConsumption = (input, withAim) => {
  const [zeroes, ones] = separate(input);

  const mostCommon = getMostCommon(zeroes, ones);
  const notMostCommon = reverseArr(mostCommon);

  const gamma = getDecimal(mostCommon);
  const epsilon = getDecimal(notMostCommon);

  return gamma * epsilon;
};

const keep = (arr, search, ind) => arr.filter((val) => val[ind] === search);

const getRating = (input, isOxygen = false, i = 0) => {
  if (input.length === 1) return getDecimal(input);

  const [zeroes, ones] = separate(input);

  const mostCommon = getMostCommon(zeroes, ones)[i];
  const search = isOxygen ? mostCommon : 1 - mostCommon;

  const filter = keep(input, String(search), i);

  return getRating(filter, isOxygen, i + 1);
};

const getLifeSupportRating = (input) => {
  const x = getRating(input, true);
  const y = getRating(input);
  return x * y;
};

module.exports = {
  getRating,
  getPowerConsumption,
  getLifeSupportRating,
};
