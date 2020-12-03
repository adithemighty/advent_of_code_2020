const isTree = (string) => string === "#";

const solve1 = (input, pointers) => {
  let counter = 0;
  let [a, b] = pointers;

  let y = 1;

  for (let i = a; i < input.length; i++) {
    y = (b * i) % input[a].length;

    const position = input[i][y];

    if (isTree(position)) {
      counter++;
    }
  }
  return counter;
};

const solve2 = (input) => {
  const pointers = [
    [1, 1],
    [1, 3],
    [1, 5],
    [1, 7],
    [2, 1],
  ];

  let counter = 1;

  pointers.forEach((pointer) => {
    counter *= solve1(input, pointer);
  });

  return counter;
};

module.exports = {
  isTree,
  solve1,
  solve2,
};
