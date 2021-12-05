const makeRange =
  (noDiagonals = true) =>
  (string) => {
    const r = string.split(" -> ").map((q) => q.split(",").map(Number));
    const [[x1, y1], [x2, y2]] = r;
    if (noDiagonals) {
      if (x1 !== x2 && y1 !== y2) return [];
    }
    const xEnd = Math.max(x1, x2);
    const xStart = Math.min(x1, x2);
    const yEnd = Math.max(y1, y2);
    const yStart = Math.min(y1, y2);
    const range = [];

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
  }

  makeRange = makeRange(this.noDiagonals);

  init() {
    let x = 0;
    let y = 0;
    // handle input
    this.ranges = this.input.split("\n").map((a) => {
      const { range, xEnd, yEnd } = this.makeRange(a);
      if (xEnd > x) x = xEnd;
      if (yEnd > y) y = yEnd;

      return range;
    });

    this.maxX = x;
    this.maxY = y;
  }

  setVent(x, y) {
    if (this.vents[y]) {
      const curr = this.vents[y][x];
      this.vents[y][x] = curr ? curr + 1 : 1;
    } else {
      this.vents[y] = new Array(this.maxX + 1);
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
