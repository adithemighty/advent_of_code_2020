const makeRange =
  (noDiagonals = true) =>
  (string) => {
    const [[x1, y1], [x2, y2]] = string
      .split(" -> ")
      .map((q) => q.split(",").map(Number));
    const xEnd = Math.max(x1, x2);
    const xStart = Math.min(x1, x2);
    const yEnd = Math.max(y1, y2);
    const yStart = Math.min(y1, y2);
    const range = [];

    if (x1 !== x2 && y1 !== y2) {
      if (noDiagonals) return {};

      for (let i = 0; i < xEnd - xStart + 1; i++) {
        // the direction is either
        // down+right and up+left
        // down+right => x1 < x2 && y1 < y2
        // up+left => x1 > x2 && y1 > y2
        // OR down+left and up+right
        // down+left => x1 < x2 && y1 > y2
        // up+right => x1 > x2 && y1 < y2
        const direction =
          (x1 < x2 && y1 < y2) || (x1 > x2 && y1 > y2) ? "down" : "up";

        if (direction === "down") {
          range.push([xStart + i, yStart + i]);
        } else {
          range.push([xStart + i, yEnd - i]);
        }
      }

      return { range, xEnd, yEnd };
    }

    for (let x = xStart; x <= xEnd; x++) {
      for (let y = yStart; y <= yEnd; y++) range.push([x, y]);
    }

    return { range, xEnd, yEnd };
  };

class Map {
  constructor(input, noDiagonals = true) {
    this.input = input;
    this.ranges = [];
    this.noDiagonals = noDiagonals;
    this.vents = [];
    this.max = 0;
  }

  makeRange = makeRange;

  init() {
    // figure out length of every row
    let x = 0;
    // handle input
    this.ranges = this.input.split("\n").map((a) => {
      const { range, xEnd, yEnd } = this.makeRange(this.noDiagonals)(a);
      if (xEnd > x) x = xEnd;

      return range;
    });

    this.max = x;
  }

  setVent(x, y) {
    if (this.vents[y]) {
      const curr = this.vents[y][x];
      this.vents[y][x] = curr ? curr + 1 : 1;
    } else {
      this.vents[y] = new Array(this.max + 1);
      this.vents[y][x] = 1;
    }
  }

  mapVents() {
    this.ranges.forEach((range, ind) => {
      if (!range) return;
      range.forEach((point, i) => {
        const [x, y] = point;
        this.setVent(x, y);
      });
    });
  }

  countOverlap() {
    return this.vents.reduce((acc, val) => {
      val.forEach((a) => {
        if (a > 1) acc++;
      });

      return acc;
    }, 0);
  }
}

module.exports = { Map, makeRange };
