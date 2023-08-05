import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let first = num1;
  let second = num2;
  let result = 0;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  result = first;
  return result;
};

const genOneRound = () => {
  const num1 = getRandomNubmer(1, 100);
  const num2 = getRandomNubmer(1, 100);
  const expression = `${num1} ${num2}`;
  const rightAnswer = String(getGcd(num1, num2));
  return [expression, rightAnswer];
};

export default () => {
  runGame(description, genOneRound);
};
