#!/usr/bin/env node

import {
  question, userName, greeting, progression,
} from '../index.js';

export default () => {
  let win = 0;
  greeting();
  const name = userName();
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const temp = progression();
    const rightAnswer = temp[0];
    const answer = question(`Question: ${temp[1].join(' ')}\nAnswer: `);
    switch (Number(rightAnswer)) {
      case Number(answer):
        console.log('Correct!');
        win += 1;
        break;
      default:
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
        return;
    }
  }
  if (win === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
