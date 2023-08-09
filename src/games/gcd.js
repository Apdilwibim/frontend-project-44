import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const genOneRound = () => {
  const number1 = getRandomNubmer(1, 100);
  const number2 = getRandomNubmer(1, 100);
  const expression = `${number1} ${number2}`;
  const rightAnswer = String(getGcd(number1, number2));
  return [expression, rightAnswer];
};

export default () => {
  runGame(description, genOneRound);
};
