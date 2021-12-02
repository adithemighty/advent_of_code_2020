const getPosition = (input, withAim) => {
  const { x, y } = input.reduce(
    (acc, val) => {
      const [direction, steps] = val.split(" ");

      const key = direction === "forward" ? "x" : withAim ? "aim" : "y";
      const operation = direction === "up" ? -1 : 1;

      if (direction === "forward" && acc.aim > 0) {
        acc.y += Number(steps) * acc.aim;
      }

      acc[key] += operation * Number(steps);

      return acc;
    },
    { x: 0, y: 0, aim: 0 }
  );

  return x * y;
};

module.exports = {
  getPosition,
};
