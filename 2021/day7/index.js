const getMinFuel = (input, p2 = false) => {
  const split = input.split(",").map(Number);
  const map = split.reduce(
    (acc, val) => ({ ...acc, [val]: acc[val] ? acc[val] + 1 : 1 }),
    {}
  );

  let x = Infinity;

  for (let i = 0; i < split.length; i++) {
    let distance = 0;

    Object.keys(map).forEach((a) => {
      // Absolute distance between two points
      const n = Math.abs(a - i);
      let diff = 0;

      if (p2) {
        const triangularNum = (n * (n + 1)) / 2;
        diff = triangularNum;
      } else diff = n;

      // Add sum of all occurrences of the number in the map
      distance += diff * map[a];
    });

    // only keep track of the smallest one
    if (distance < x) x = distance;
  }

  return x;
};

module.exports = { getMinFuel };
