const p1 = (input, days) => {
  const initial = input.split(",").map(Number);
  let map = {};

  // map initial fishes
  for (let fish of initial) {
    if (map[fish] === undefined) map[fish] = 0;
    map[fish] += 1;
  }

  for (let day = 0; day < days; day++) {
    const next = {};
    for (const key in map) {
      const value = map[key];

      if (key > 0) {
        if (next[key - 1] === undefined) next[key - 1] = 0;
        next[key - 1] += value;
      } else {
        if (next[6] === undefined) next[6] = 0;
        if (next[8] === undefined) next[8] = 0;
        next[6] += value;
        next[8] += value;
      }
    }
    map = next;
  }

  return Object.values(map).reduce((a, b) => a + b);
};

module.exports = { p1 };
