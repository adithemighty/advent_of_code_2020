const trackDepth = (input) => {
  return input.reduce(
    (acc, val, ind, arr) => {
      const x = Number(val);

      if (ind !== 0 && ind !== 1) {
        const y = Number(arr[ind - 1]);
        const z = Number(arr[ind - 2]);
        const currentWindow = x + y + z;

        if (currentWindow > acc.lastWindow) acc.windowCounter++;

        acc.lastWindow = currentWindow;
      }

      if (x > acc.last) acc.counter++;

      acc.last = x;

      return acc;
    },
    // We don't count the first depth, so init counters at -1
    { last: 0, counter: -1, lastWindow: 0, windowCounter: -1 }
  );
};

module.exports = {
  trackDepth,
};
