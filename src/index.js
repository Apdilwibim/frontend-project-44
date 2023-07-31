import readlineSync from 'readline-sync';

const iterationsCount = 3;

export default (description, genOneRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < iterationsCount; i += 1) {
    const [expression, rightAnswer] = genOneRound();
    const answerOfUser = readlineSync.question(`Question: ${expression}\nAnswer: `);
    if (rightAnswer === answerOfUser.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${answerOfUser}' is wrong answer ;(. Correct answer was '${rightAnswer}.'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
