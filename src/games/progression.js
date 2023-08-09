import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const lengthProgression = 10;
const description = 'What number is missing in the progression?';

const genProgression = (start, length, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};

const genOneRound = () => {
  const start = getRandomNubmer(1, 100);
  const step = getRandomNubmer(1, 5);
  const progression = genProgression(start, lengthProgression, step);
  const randomPosition = getRandomNubmer(0, progression.length - 1);
  const rightAnswer = String(progression.splice(randomPosition, 1, '..'));
  return [progression.join(' '), rightAnswer];
};

export default () => {
  runGame(description, genOneRound);
};
