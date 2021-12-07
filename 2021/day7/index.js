const getMinFuel = (input, p2 = false) => {
  const split = input.split(",").map(Number);
  const max = Math.max(...split);
  const map = split.reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1;

    return acc;
  }, {});

  const tracker = {
    1: {},
    2: {},
  };

  for (let i = 0; i < max; i++) {
    let distance = 0;

    Object.keys(map).reduce((acc, a) => {
      if (p2) {
        const n = Math.abs(a - i);
        const triangularNum = (n * (n + 1)) / 2;
        distance += triangularNum * map[a];
        acc[2][i] = distance;
      } else {
        distance += Math.abs(a - i) * map[a];
        acc[1][i] = distance;
      }

      return acc;
    }, tracker);
  }

  return p2
    ? Math.min(...Object.values(tracker[2]))
    : Math.min(...Object.values(tracker[1]));
};

module.exports = { getMinFuel };
