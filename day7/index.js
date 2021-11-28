const separateContent = (str) => str.split(" bags contain ");

const getInitial = (rest) =>
  rest.reduce(
    (acc, val) => {
      const [bagColor, rest] = separateContent(val);
      if (rest.includes("shiny gold")) acc.valid.add(bagColor);
      else if (rest.includes("no other bags")) acc.invalid.add(bagColor);
      else acc.rest.push(val);

      return acc;
    },
    {
      rest: [],
      valid: new Set([]),
      invalid: new Set([]),
    }
  );

const getColor = (str) => {
  const [number, ...rest] = str.split(" ");
  const [adj, noun] = rest;
  const color = adj + " " + noun;

  return { number, color };
};

const getIsValid = (bagsToCheck, valid) => {
  return bagsToCheck.split(", ").find((bag) => {
    return valid.has(getColor(bag).color);
  });
};

const getIsInvalid = (input, invalid) => {
  const bagsToCheck = input.split(", ");
  const thing = bagsToCheck.filter((bag) => {
    return invalid.has(getColor(bag).color);
  });

  return thing.length === bagsToCheck.length;
};

const separateBags = ({ rest = [], valid, invalid }) => {
  if (rest.length <= 1) return { valid, invalid, rest };

  if (!valid && !invalid) return separateBags(getInitial(rest));

  const x = rest.reduce(
    (acc, val) => {
      const [bagColor, rest] = separateContent(val);

      if (getIsValid(rest, valid)) acc.valid.add(bagColor);
      else if (getIsInvalid(rest, invalid)) acc.invalid.add(bagColor);
      else acc.rest.push(val);

      return acc;
    },
    {
      valid,
      invalid,
      rest: [],
    }
  );

  return separateBags(x);
};

const isAtomic = ({ bag, atoms }) => {
  const filter = bag.reduce((x, el) => {
    const { color, number } = getColor(el);

    if (atoms.has(color)) x.push({ el, number, color });

    return x;
  }, []);

  if (bag.length !== filter.length) return { isAtomic: false };

  const sum = filter.reduce((thing, { number }) => thing + Number(number), 0);

  return { sum };
};

module.exports = { separateBags };
