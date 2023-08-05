import readlineSync from 'readline-sync';
import playerName from './cli.js';

const rounds = 3;

export default (rule, game) => {
  const name = playerName();
  console.log(rule);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const answerUs = readlineSync.question('Your answer: ');
    if (!(answerUs === answer)) {
      console.log(`${answerUs} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
