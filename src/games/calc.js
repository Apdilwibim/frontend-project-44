#!/usr/bin/env node

import {
  random, question, userName, greeting, randomOperation, resultOfExpression,
} from '../index.js';

export default () => {
  let win = 0;
  greeting();
  const name = userName();
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const arr = [random(0, 100), randomOperation(), random(0, 100)];
    const expression = `${arr[0]} ${arr[1]} ${arr[2]}`;
    const result = resultOfExpression(...arr);
    const answer = question(`Question: ${expression}\nAnswer: `);
    switch (Number(answer)) {
      case result:
        console.log('Correct!');
        win += 1;
        break;
      default:
        console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}`);
        return;
    }
  }
  if (win === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
