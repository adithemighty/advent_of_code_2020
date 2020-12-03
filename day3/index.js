const goToLocation = (string) => {
  return [1, 3];
};

const isTree = (string) => string === "#";

const solve1 = (input, pointers) => {
  let counter = 0;
  let [a, b] = pointers;
  let x = 1;
  let y = 1;

  for (let i = 1; i < input.length; i++) {
    x = a * i < input.length ? a * i : (a * i) % input.length;

    y = b * i <= input[a].length ? b * i : (b * i) % input[a].length;
    // console.log({ x, y });

    const position = input[x][y];

    if (isTree(position)) {
      counter++;
    }
  }
  return counter;
};

const solve2 = (input) => {
  const pointers = [
    [1, 1],
    // [1, 3],
    // [1, 5],
    // [1, 7],
    // [2, 1],
  ];

  let counter = 0;

  pointers.forEach((pointer) => {
    console.log(solve1(input, pointer));
    counter *= solve1(input, pointer);
  });

  return counter;
};

module.exports = {
  goToLocation,
  isTree,
  solve1,
  solve2,
};
