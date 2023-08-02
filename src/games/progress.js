#!/usr/bin/env node
import readlineSync from 'readline-sync';
import playerName from '../cli.js';
import { gameOver, getRandom } from '../index.js';

export default () => {
  const name = playerName();
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const array = [0];
    array[0] = getRandom();
    const step = getRandom(1, 10);
    const lengthArray = getRandom(5, 20);
    const unknownNumber = getRandom(1, lengthArray - 1);
    for (let j = 1; j < lengthArray; j += 1) {
      array.push(array[j - 1] + step);
    }
    const rightAnswer = array[unknownNumber];
    array[unknownNumber] = '..';
    const str = array.join(' ');
    console.log(`Question: ${str}`);
    const answer = readlineSync.question('Your answer: ');
    const answerNumber = Number(answer);
    if (answerNumber === rightAnswer) console.log('Correct!');
    else {
      gameOver(name, answer, rightAnswer);
      break;
    }
    if (i === 2) console.log(`Congratulations, ${name}!`);
  }
};
