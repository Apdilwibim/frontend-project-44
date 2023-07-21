#!/usr/bin/env node
import readlineSync from 'readline-sync';

const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const isEven = (a) => {
  let result;
  if (a % 2) {
    result = false;
  } else {
    result = true;
  }
  return result;
};

const name = () => {
  const userName = readlineSync.question('May I have your name? ');
  const wrong = "'yes' is wrong answer ;(. Correct answer was";
  let win = 0;
  console.log(`Hi ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = random(1, 100);
    const answer = readlineSync.question(`Question: ${num}\nYour answer: `);
    if ((answer.toLowerCase() !== 'yes') && (answer.toLowerCase() !== 'no')) {
      console.log("You can use 'yes' or 'no' only");
      return;
    }
    if ((isEven(num) === true) && (answer.toLowerCase() === 'yes')) {
      console.log('Correct!');
      win += 1;
    }
    if ((isEven(num) === false) && (answer.toLowerCase() === 'yes')) {
      console.log(`${wrong} no.\nLet's try again, ${userName}!`);
      break;
    }
    if ((isEven(num) === true) && (answer.toLowerCase() === 'no')) {
      console.log(`${wrong} yes.\nLet's try again, ${userName}!`);
      break;
    }
    if ((isEven(num) === false) && (answer.toLowerCase() === 'no')) {
      console.log('Correct!');
      win += 1;
    }
  }
  if (win === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
name();
