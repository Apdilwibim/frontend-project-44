import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const limit = Math.sqrt(Number(num));
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= limit; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const genOneRound = () => {
  const number = String(getRandomNubmer(1, 100));
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

export default () => {
  runGame(description, genOneRound);
};
