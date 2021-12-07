const getMinFuel = (input, p2 = false) => {
  const split = input.split(",").map(Number);
  const max = Math.max(...split);
  const key = p2 ? 2 : 1;
  const map = split.reduce(
    (acc, val) => ({ ...acc, [val]: acc[val] ? acc[val] + 1 : 1 }),
    {}
  );

  const tracker = {
    1: {},
    2: {},
  };

  for (let i = 0; i < max; i++) {
    let distance = 0;

    Object.keys(map).reduce((acc, a) => {
      // Absolute distance between two points
      const n = Math.abs(a - i);
      let diff = 0;

      if (p2) {
        const triangularNum = (n * (n + 1)) / 2;
        diff = triangularNum;
      } else diff = n;

      // Add sum of all occurrences of the number in the map
      distance += diff * map[a];
      acc[p2 ? 2 : 1][i] = distance;

      return acc;
    }, tracker);
  }

  return Math.min(...Object.values(tracker[p2 ? 2 : 1]));
};

module.exports = { getMinFuel };
