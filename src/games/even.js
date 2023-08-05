import getRandomNubmer from '../utils.js';
import genMainLogic from '../index.js';

const isEven = (number) => number % 2 === 0;
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const genOneRound = () => {
  const randomNumber = getRandomNubmer(1, 100);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, rightAnswer];
};

export default () => {
  genMainLogic(description, genOneRound);
};
