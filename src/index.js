import readlineSync from 'readline-sync';
import playerName from './cli.js';

export const parity = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

const rounds = 3;

export const startGame = (rule, game) => {
  const name = playerName();
  console.log(rule);
  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = game();
    console.log(`Question: ${question}`);
    const answerUs = readlineSync.question('Your answer: ');
    if (!(answerUs === answer)) {
      console.log(`${answerUs} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

export const getRandom = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

export const randomOperation = () => {
  const operation = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operation.length);
  return operation[rand];
};
