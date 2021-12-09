const getLowest = (input) =>
  input.reduce((acc, val, ind, arr) => {
    val.split("").forEach((x, i, a) => {
      let isLowest = true;

      // same row
      if (a[i - 1] && a[i - 1] <= x) isLowest = false;
      if (a[i + 1] && a[i + 1] <= x) isLowest = false;

      const north = arr[ind - 1];
      if (north && north[i] && north[i] <= x) isLowest = false;

      const south = arr[ind + 1];
      if (south && south[i] && south[i] <= x) isLowest = false;

      if (isLowest) acc += Number(x) + 1;
    });

    return acc;
  }, 0);

module.exports = { getLowest };
