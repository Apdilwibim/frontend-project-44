import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

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
  const num = getRandomNubmer(1, 100);
  const expression = String(num);
  const rightAnswer = isPrime(num) ? 'yes' : 'no';
  return [expression, rightAnswer];
};

export default () => {
  runGame(description, genOneRound);
};
