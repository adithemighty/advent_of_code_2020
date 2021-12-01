const isUpper = (val) => val === "L" || val === "F";

const getLimit = (val, [lower, upper]) => {
  const mid = Math.floor((upper - lower) / 2);

  return isUpper(val) ? [lower, lower + mid] : [upper - mid, upper];
};

const getNextLimit = (string, limits, ind) => {
  const val = string[ind];
  const [lower, upper] = limits;
  if (upper - lower === 1) return isUpper(val) ? lower : upper;

  const curr = getLimit(val, limits);

  return getNextLimit(string, curr, ind + 1);
};

const getSeatId = (input) => {
  const rowLimits = [0, 127];
  const colLimits = [0, 7];
  let row = getNextLimit(input, rowLimits, 0);
  let col = getNextLimit(input, colLimits, 7);

  return row * 8 + col;
};

const solve1 = (input) => {
  return input.reduce((acc, val) => {
    const curr = getSeatId(val);
    return Math.max(curr, acc);
  }, 0);
};

const solve2 = (input) => {
  return (
    input
      .map((val) => getSeatId(val))
      .sort((a, b) => a - b)
      .find((val, ind, arr) => {
        const next = arr[ind + 1];
        return val + 1 === next - 1;
      }) + 1
  );
};

module.exports = { getSeatId, getLimit, solve1, solve2 };
