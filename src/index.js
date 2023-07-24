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

export const isPrime = (num) => {
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

export const gcd = (a, b) => {
  let first = a;
  let second = b;
  let result = 0;
  while (first !== second) {
    if (first > second) {
      first -= second;
    } else {
      second -= first;
    }
  }
  result = first;
  return result;
};

export const progression = () => {
  const arr = [];
  const result = [];
  let rightAnswer = 0;
  let choosenIndex = 0;
  const firstNumber = random(0, 50);
  const step = random(1, 5);
  for (let i = firstNumber; arr.length < 10; i += step) {
    arr.push(i);
  }
  choosenIndex = random(0, 10);
  if (choosenIndex === 0) {
    rightAnswer = arr[choosenIndex + 1] - step;
  } else {
    rightAnswer = arr[choosenIndex - 1] + step;
  }
  arr.splice(choosenIndex, 1, '..');
  result.push(`${rightAnswer}`);
  result.push(arr);
  return result;
};

export const switchCompare = (answerOfUser, res, name) => {
  switch (Number(answerOfUser)) {
    case res:
      console.log('Correct!');
      return 1;
    default:
      console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${res}.\nLet's try again, ${name}!`);
  }
  return 0;
};

export const greeting = () => console.log('Welcome to the Brain Games!');
export const lowerAnswer = (string) => string.toLowerCase();
export const userName = () => readlineSync.question('May I have your name? ');
export const question = (string) => readlineSync.question(string);
