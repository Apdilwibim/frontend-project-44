#!/usr/bin/env node

import {
  random, question, userName, greeting, gcd, switchCompare,
} from '../index.js';

export default () => {
  let win = 0;
  greeting();
  const name = userName();
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const arr = [random(0, 100), random(0, 100)];
    const result = gcd(arr[0], arr[1]);
    const answer = question(`Question: ${arr[0]} ${arr[1]}\nAnswer: `);
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
