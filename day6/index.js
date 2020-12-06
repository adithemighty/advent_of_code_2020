const splitGroups = (input) => input.split("\n\n");

const getUniqueAnswers = (string) => {
  const splitByRow = string.split("\n").join("").split("");
  const uniqueAnswers = new Set(splitByRow);
  return uniqueAnswers.size;
};

const getAgreedAnswers = (string) => {
  const splitByRow = string.split("\n");
  // If there's only one person all answers are in agreement.
  if (splitByRow.length === 1) return splitByRow[0].length;

  // Keep track of all answers and their occurrences
  const agreedAnswers = {};
  splitByRow.forEach((row) => {
    for (let i = 0; i < row.length; i++) {
      if (agreedAnswers[row[i]]) {
        agreedAnswers[row[i]]++;
      } else {
        agreedAnswers[row[i]] = 1;
      }
    }
  });

  const keys = Object.keys(agreedAnswers);

  // Filter out answers that don't match number of all answers
  return keys.filter((key) => {
    return agreedAnswers[key] === splitByRow.length;
  }).length;
};

const solve1 = (input) => {
  return splitGroups(input).reduce((acc, val) => {
    acc += getUniqueAnswers(val);
    return acc;
  }, 0);
};

const solve2 = (input) => {
  return splitGroups(input).reduce((acc, val) => {
    acc += getAgreedAnswers(val);
    return acc;
  }, 0);
};

module.exports = {
  splitGroups,
  getUniqueAnswers,
  getAgreedAnswers,
  solve1,
  solve2,
};
