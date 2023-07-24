#!/usr/bin/env node

import {
  isEven, random, question, userName, lowerAnswer, greeting,
} from '../index.js';

export default () => {
  greeting();
  const name = userName('May I have your name? ');
  const wrong = ' is wrong answer ;(. Correct answer was';
  let win = 0;
  console.log(`Hi ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = random(1, 100);
    const answer = lowerAnswer(question(`Question: ${num}\nYour answer: `));
    if (answer !== 'yes' && answer !== 'no') {
      console.log("You can use 'yes' or 'no' only");
      return;
    }
    if (answer === 'yes' && isEven(num) === true) {
      console.log('Correct!');
      win += 1;
    }
    if (answer === 'yes' && isEven(num) === false) {
      console.log(`'yes' ${wrong} no.\nLet's try again, ${name}!`);
      return;
    }
    if (answer === 'no' && isEven(num) === true) {
      console.log(`'no' ${wrong} yes.\nLet's try again, ${name}!`);
      return;
    }
    if (answer === 'no' && isEven(num) === false) {
      console.log('Correct!');
      win += 1;
    }
  }
  if (win === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
