#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playerName from '../cli.js';
import { gameOver, getRandom } from '../index.js';

export default () => {
  const name = playerName();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const a = getRandom();
    const b = getRandom();
    let rightAnswer = 0;
    let lowNumber = 0;
    if (a > b) lowNumber = b;
    else lowNumber = a;
    for (let j = lowNumber; j > 0; j -= 1) {
      if (((a % j) === 0) && ((b % j) === 0)) {
        rightAnswer = j;
        break;
      }
    }
    console.log(`Question:, ${a} ${b}`);
    const answer = readlineSync.question('Your answer: ');
    const answerNumber = Number(answer);
    if (answerNumber === rightAnswer) console.log('Correct!');
    else {
      gameOver(name, answer, rightAnswer);
      break;
    }
    if (i === 2) console.log(`Congratulations, ${name} !`);
  }
};
