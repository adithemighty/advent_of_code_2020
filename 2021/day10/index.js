const isOpening = (input) =>
  input === "<" || input === "{" || input === "[" || input === "(";

const removeValid = (input) => {
  let res = input;
  for (let i = 0; i < input.length; i++) {
    res = res.replaceAll("()", "");
    res = res.replaceAll("[]", "");
    res = res.replaceAll("{}", "");
    res = res.replaceAll("<>", "");
  }

  return res;
};

const closingMapper = {
  "{": "}",
  "(": ")",
  "<": ">",
  "[": "]",
};

const getIncomplete = (input) => {
  const res = removeValid(input);

  let closing = "";

  for (let i = res.length - 1; i >= 0; i--) {
    // start from end
    closing += closingMapper[res[i]];
  }

  return closing;
};

const isCorrupted = (input) => {
  // remove all valid ones
  const res = removeValid(input);

  // find the invalid pair
  let corruptPair = "";

  for (let i = 0; i < res.length - 1; i++) {
    if (isOpening(res[i]) && !isOpening(res[i + 1])) {
      corruptPair = res[i] + res[i + 1];
    }
  }

  return corruptPair[1];
};

const getIncompleteScore = (input) => {
  let score = 0;
  for (let i = 0; i < input.length; i++) {
    score *= 5;

    if (input[i] === ")") score += 1;
    if (input[i] === "]") score += 2;
    if (input[i] === "}") score += 3;
    if (input[i] === ">") score += 4;
  }

  return score;
};

const p1 = (input) => {
  return input.reduce((acc, val) => {
    const checkScore = isCorrupted(val);
    if (checkScore) {
      if (checkScore === ")") acc += 3;
      if (checkScore === "]") acc += 57;
      if (checkScore === "}") acc += 1197;
      if (checkScore === ">") acc += 25137;
    }
    return acc;
  }, 0);
};

const p2 = (input) => {
  const scores = input
    .reduce((acc, val) => {
      const checkScore = isCorrupted(val);
      if (!checkScore) acc.push(getIncompleteScore(getIncomplete(val)));

      return acc;
    }, [])
    .sort((a, b) => a - b);

  const mid = Math.floor(scores.length / 2);
  return scores[mid];
};

module.exports = {
  p1,
  p2,
  isCorrupted,
  getIncomplete,
  getIncompleteScore,
};
