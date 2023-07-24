#!/usr/bin/env node

import {
  random, question, userName, greeting, gcd,
} from '../index.js';

export default () => {
  let win = 0;
  greeting();
  const name = userName();
  console.log(`Hi ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const arr = [random(0, 100), random(0, 100)];
    const result = gcd(arr[0], arr[1]);
    const answer = question(`Question: ${arr[0]} ${arr[1]}\nAnswer: `);
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
