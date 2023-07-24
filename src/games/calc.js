#!/usr/bin/env node

import {
  random, question, userName, greeting, randomOperation, resultOfExpression, switchCompare,
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
    const temp = switchCompare(answer, result, name);
    if (temp === 1) {
      win += 1;
    } else {
      return;
    }
  }
  if (win === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
