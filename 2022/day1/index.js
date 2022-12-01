const getSum = require("../../helpers/getSum");
const isLast = require("../../helpers/isLast");

const getMostCalories = (input) => {
  const result = input.reduce(
    (acc, val, index) => {
      acc.currentElf += Number(val) || 0;

      if (!val || isLast(input, index)) {
        if (acc.overAll < acc.currentElf) acc.overAll = acc.currentElf;

        const isBigger = acc.topThree.some((val) => acc.currentElf > val);

        if (isBigger) {
          acc.topThree = [...acc.topThree, acc.currentElf]
            .sort((a, b) => a - b)
            .slice(1);
        }

        acc.currentElf = 0;
      }

      return acc;
    },
    {
      currentElf: 0,
      overAll: 0,
      topThree: [0, 0, 0],
    }
  );

  return {
    overAll: result.overAll,
    topThree: getSum(result.topThree),
  };
};

module.exports = {
  getMostCalories,
};
