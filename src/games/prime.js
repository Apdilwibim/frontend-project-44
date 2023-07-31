import getRandomNubmer from '../utils.js';
import genMainLogic from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genOneRound = () => {
  const result = [];
  const num = getRandomNubmer(1, 100);
  const expression = num;
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  result.push(expression, rightAnswer);
  return result;
};

export default () => {
  genMainLogic(description, genOneRound);
};
