import readlineSync from 'readline-sync';
import greet from './cli.js';

export default (description, quantityOfIteration, genOneRound) => {
  let countOfWins = 0;
  const userName = greet();
  console.log(description);
  for (let i = 0; i < quantityOfIteration; i += 1) {
    const roundArr = genOneRound();
    const answerOfUser = readlineSync.question(`Question: ${roundArr[0]}\nAnswer: `);
    let compare = 0;
    if (typeof roundArr[1] === 'number') {
      compare = Number(answerOfUser);
    } else {
      compare = answerOfUser.toLowerCase();
    }
    switch (compare) {
      case roundArr[1]:
        console.log('Correct!');
        countOfWins += 1;
        break;
      default:
        console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${roundArr[1]}'.\nLet's try again, ${userName}!`);
        return;
    }
  }
  if (countOfWins === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
