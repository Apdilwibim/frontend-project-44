import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let temp1 = number1;
  let temp2 = number2;
  let result = 0;
  while (temp1 !== temp2) {
    if (temp1 > temp2) {
      temp1 -= temp2;
    } else {
      temp2 -= temp1;
    }
  }
  result = temp1;
  return result;
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
