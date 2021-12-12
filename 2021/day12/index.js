const getConnections = (input) =>
  input.split("\n").reduce((acc, val) => {
    const [b, e] = val.split("-");
    acc[b] ? acc[b].push(e) : (acc[b] = [e]);
    acc[e] ? acc[e].push(b) : (acc[e] = [b]);

    return acc;
  }, {});

const isUpperCase = (str) => str.toLowerCase() !== str;

const p1 = (input) => {
  let paths = 0;
  const connections = getConnections(input);

  const findPath = (point, path = []) => {
    if (point === "end") {
      paths++;

      return;
    }

    connections[point].forEach((cave) => {
      if (isUpperCase(cave) || !path.find((a) => a === cave)) {
        findPath(cave, [...path, point]);
      }
    });
  };

  findPath("start");

  return paths;
};

module.exports = { p1 };
