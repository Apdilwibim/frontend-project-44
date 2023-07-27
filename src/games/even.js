import getRandomNubmer from '../utils.js';
import genMainLogic from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genOneRound = () => {
  const result = [];
  const randomNumber = getRandomNubmer(1, 100);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  result.push(randomNumber, rightAnswer);
  return result;
};

export default () => {
  const result = genMainLogic(description, 3, genOneRound);
  return result;
};
