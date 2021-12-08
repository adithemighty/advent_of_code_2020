const unique = new Set([2, 4, 3, 7]);

const getUnique = (input) => {
  const [_, x] = input.split(" | ");

  return x.split(" ").filter((a) => {
    if (unique.has(a.length)) {
      return true;
    }

    return false;
  });
};

const getNumbers = (input) => {
  const split = input.split(" ");
  const one = split.find((val) => val.length === 2);
  const seven = split.find((val) => val.length === 3);
  const eight = split.find((val) => val.length === 7);
  const four = split.find((val) => val.length === 4);
  const all = new Set(eight);
  const right = new Set(one.split(""));
  const top = seven.split("").find((val) => !right.has(val));
  const restFour = new Set(
    four.split("").filter((val) => !right.has(val) && val !== top)
  );

  // zero, six and nine have a length of 6
  const zeroNineAndSix = split.filter((val) => val.length === 6);
  // six is the one that doesn't contain a 1
  const six = zeroNineAndSix.find((n) => {
    return n.split("").filter((x) => right.has(x)).length === 1;
  });
  // nine contains 4, zero doesn't
  const nine = zeroNineAndSix.find((n) => {
    if (n === six) return false;

    return n.split("").filter((x) => restFour.has(x)).length === 2;
  });
  const zero = zeroNineAndSix.find((x) => x !== six && x !== nine);

  // two, three and five have a length of 5
  const twoThreeAndFive = split.filter((x) => x.length === 5);
  // 3 is the one that matches with 1
  const three = twoThreeAndFive.find((val) => {
    return val.split("").filter((x) => right.has(x)).length === right.size;
  });
  // the difference between 2 and 5 is the sides
  const nineElements = new Set([...nine]);
  // figure out lower left side by finding what 9 is missing
  const lowerLeft = [...all].find((x) => !nineElements.has(x));
  const two = twoThreeAndFive.find((x) => x.includes(lowerLeft));
  const five = twoThreeAndFive.find((x) => x !== two && x !== three);

  const map = {
    0: zero,
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
    6: six,
    7: seven,
    8: eight,
    9: nine,
  };

  return split.reduce((acc, val, ind) => {
    acc[map[ind].split("").sort().join("")] = ind;

    return acc;
  }, {});
};

const p1 = (input) => {
  return input.split("\n").reduce((acc, val) => {
    const x = getUnique(val);
    acc += x.length;

    return acc;
  }, 0);
};

const p2 = (input) => {
  return input
    .split("\n")
    .map((val) => {
      const [map, els] = val.split(" | ");
      const nums = getNumbers(map);

      return els.split(" ").reduce((acc, val) => {
        acc += nums[val.split("").sort().join("")];

        return acc;
      }, "");
    })
    .reduce((acc, val) => acc + Number(val), 0);
};

module.exports = { getUnique, p1, getNumbers, p2 };
