import readlineSync from 'readline-sync';

export const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const randomOperation = () => {
  const arr = ['-', '+', '*'];
  return arr[random(0, 2)];
};

export const isEven = (a) => {
  let result;
  if (a % 2) {
    result = false;
  } else {
    result = true;
  }
  return result;
};

export const resultOfExpression = (a, operation, b) => {
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

export const greeting = () => console.log('Welcome to the Brain Games!');
export const lowerAnswer = (string) => string.toLowerCase();
export const userName = () => readlineSync.question('May I have your name? ');
export const question = (string) => readlineSync.question(string);
