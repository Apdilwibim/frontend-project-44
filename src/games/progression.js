import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const genProgression = (startNum, lengthOfProgression, step) => {
  const progression = [];
  for (let i = startNum; progression.length < lengthOfProgression; i += step) {
    progression.push(i);
  }
  return progression;
};

const genOneRound = () => {
  let rightAnswer = 0;
  const startNum = getRandomNubmer(1, 100);
  const step = getRandomNubmer(1, 5);
  const randomPosition = getRandomNubmer(0, 10);
  const progression = genProgression(startNum, 10, step);
  if (randomPosition === 0) {
    rightAnswer = progression[randomPosition + 1] - step;
  } else {
    rightAnswer = progression[randomPosition - 1] + step;
  }
  progression.splice(randomPosition, 1, '..');
  return [progression.join(' '), String(rightAnswer)];
};

export default () => {
  runGame(description, genOneRound);
};
