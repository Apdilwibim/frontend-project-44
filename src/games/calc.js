import getRandomNubmer from '../utils.js';
import genMainLogic from '../index.js';

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
  const num1 = getRandomNubmer(1, 100);
  const num2 = getRandomNubmer(1, 100);
  const operation = operations[getRandomNubmer(0, operations.length - 1)];
  const expression = `${num1} ${operation} ${num2}`;
  const rightAnswer = getResultOfExpression(num1, operation, num2);
  return [expression, String(rightAnswer)];
};

export default () => {
  genMainLogic(description, genOneRound);
};
