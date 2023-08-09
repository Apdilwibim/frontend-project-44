import readlineSync from 'readline-sync';

const iterationsCount = 3;

export default (description, genOneRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < iterationsCount; i += 1) {
    const [expression, rightAnswer] = genOneRound();
    const userAnswer = readlineSync.question(`Question: ${expression}\nAnswer: `);
    if (rightAnswer !== userAnswer.toLowerCase()) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}.'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
