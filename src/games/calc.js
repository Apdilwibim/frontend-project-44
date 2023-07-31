import getRandomNubmer from '../utils.js';
import genMainLogic from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperation = () => {
  const arr = ['-', '+', '*'];
  return arr[getRandomNubmer(0, 2)];
};

const getResultOfExpression = (a, operation, b) => {
  let result = 0;
  switch (operation) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
      console.log('default');
  }
  return result;
};

const genOneRound = () => {
  const result = [];
  const num1 = getRandomNubmer(1, 100);
  const num2 = getRandomNubmer(1, 100);
  const operation = getRandomOperation();
  const expression = `${num1} ${operation} ${num2}`;
  const rightAnswer = String(getResultOfExpression(num1, operation, num2));
  result.push(expression, rightAnswer);
  return result;
};

export default () => {
  genMainLogic(description, genOneRound);
};
