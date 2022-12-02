const P1 = {
  A: "ROCK",
  B: "PAPER",
  C: "SCISSORS",
};

const P2 = {
  X: "ROCK",
  Y: "PAPER",
  Z: "SCISSORS",
};

const TARGET_RESULT = {
  X: "LOSS",
  Y: "DRAW",
  Z: "WIN",
};

const GAME_SCORES = {
  WIN: 6,
  DRAW: 3,
  LOSS: 0,
};

const SHAPE_SCORES = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

const WINNING_CHOICE = {
  ROCK: "PAPER",
  PAPER: "SCISSORS",
  SCISSORS: "ROCK",
};
const LOOSING_CHOICE = {
  ROCK: "SCISSORS",
  PAPER: "ROCK",
  SCISSORS: "PAPER",
};

const gameOutcome = (p1, p2) => {
  if (P1[p1] === "ROCK" && P2[p2] === "PAPER") return "WIN";
  if (P1[p1] === "PAPER" && P2[p2] === "SCISSORS") return "WIN";
  if (P1[p1] === "SCISSORS" && P2[p2] === "ROCK") return "WIN";
  if (P1[p1] === P2[p2]) return "DRAW";
  return "LOSS";
};

const getTargetChoice = (p1, p2) => {
  if (TARGET_RESULT[p2] === "LOSS") {
    return LOOSING_CHOICE[P1[p1]];
  } else if (TARGET_RESULT[p2] === "DRAW") {
    return P1[p1];
  }
  return WINNING_CHOICE[P1[p1]];
};

const calculateScore = (input, isPart1 = true) => {
  return input.reduce((acc, game) => {
    const [p1, p2] = game.split(" ");
    let shapeScore;
    let gameScore;

    if (isPart1) {
      const outcome = gameOutcome(p1, p2);
      gameScore = GAME_SCORES[outcome];
      shapeScore = SHAPE_SCORES[P2[p2]];
    } else {
      const target = TARGET_RESULT[p2];
      const shape = getTargetChoice(p1, p2);
      gameScore = GAME_SCORES[target];
      shapeScore = SHAPE_SCORES[shape];
    }

    return acc + gameScore + shapeScore;
  }, 0);
};

module.exports = {
  calculateScore,
};
