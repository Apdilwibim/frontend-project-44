import getRandomNubmer from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';
const operations = ['-', '+', '*'];

const getResultOfExpression = (a, operation, b) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Unknown operation: '${operation}'!`);
  }
};

const genOneRound = () => {
  const number1 = getRandomNubmer(1, 100);
  const number2 = getRandomNubmer(1, 100);
  const operation = operations[getRandomNubmer(0, operations.length - 1)];
  const expression = `${number1} ${operation} ${number2}`;
  const rightAnswer = getResultOfExpression(number1, operation, number2);
  return [expression, String(rightAnswer)];
};

export default () => {
  runGame(description, genOneRound);
};
