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
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};

const genOneRound = () => {
  const result = [];
  const num1 = getRandomNubmer(1, 100);
  const num2 = getRandomNubmer(1, 100);
  const operation = operations[getRandomNubmer(0, operations.length)];
  const expression = `${num1} ${operation} ${num2}`;
  const rightAnswer = getResultOfExpression(num1, operation, num2);
  result.push(expression, String(rightAnswer));
  return result;
};

export default () => {
  genMainLogic(description, genOneRound);
};
