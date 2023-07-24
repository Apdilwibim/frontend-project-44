#!/usr/bin/env node

import {
  random, question, userName, greeting, isPrime, lowerAnswer,
} from '../index.js';

export default () => {
  greeting();
  const name = userName('May I have your name? ');
  const wrong = ' is wrong answer ;(. Correct answer was';
  let win = 0;
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = random(1, 100);
    const answer = lowerAnswer(question(`Question: ${num}\nYour answer: `));
    if (answer !== 'yes' && answer !== 'no') {
      console.log("You can use 'yes' or 'no' only");
      return;
    }
    if ((isPrime(num) === true) && (lowerAnswer(answer) === 'yes')) {
      console.log('Correct!');
      win += 1;
    }
    if ((isPrime(num) === false) && (lowerAnswer(answer) === 'yes')) {
      console.log(`'yes'${wrong} no.\nLet's try again, ${name}!`);
      return;
    }
    if ((isPrime(num) === false) && (lowerAnswer(answer) === 'no')) {
      console.log('Correct!');
      win += 1;
    }
    if ((isPrime(num) === true) && (lowerAnswer(answer) === 'no')) {
      console.log(`'no'${wrong} yes.\nLet's try again, ${name}!`);
      return;
    }
  }
  if (win === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
