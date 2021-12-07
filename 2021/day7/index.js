const p1 = (input) => {
  const split = input.split(",").map(Number);
  const max = Math.max(...split);
  const map = split.reduce((acc, val) => {
    acc[val] = acc[val] ? acc[val] + 1 : 1;

    return acc;
  }, {});

  const tracker = {};

  for (let i = 0; i < max; i++) {
    let distance = 0;

    const thing = Object.keys(map).reduce((acc, a) => {
      distance += Math.abs(a - i) * map[a];

      acc[i] = distance;

      return acc;
    }, tracker);
  }

  return Math.min(...Object.values(tracker));
};

module.exports = { p1 };
