import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;

const genOneRound = () => {
  const number = String(getRandomNubmer(1, 100));
  const rightAnswer = isEven(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

export default () => {
  runGame(description, genOneRound);
};
