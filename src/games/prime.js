#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playerName from '../cli.js';
import { gameOver, getRandom } from '../index.js';

export default () => {
  const primeNumber = (number) => {
    let score = 0;
    for (let i = 0; i <= number; i += 1) {
      if ((number % i) === 0) score += 1;
    }
    if (score === 2) return 'yes';
    return 'no';
  };

  const name = playerName();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const simpleNumber = getRandom();
    console.log(`Question: ${simpleNumber}`);
    const YourAnswer = readlineSync.question('Your answer: ');
    const Answer = primeNumber(simpleNumber);
    if (YourAnswer === Answer) console.log('Correct!');
    else {
      gameOver(name, YourAnswer, Answer);
      break;
    }
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};
