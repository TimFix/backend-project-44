#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playerName } from '../src/cli.js';
import { gameOver, getRandom, parity } from '../src/index.js';

const name = playerName(); 
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i=0 ; i < 3 ; i++) {
    const number = getRandom();
    console.log("Question:",number);
    const answer = readlineSync.question("Your answer: ");
    const rightAnswer = parity(number);
    if (answer === rightAnswer) console.log('Correct!');
    else {
        gameOver(name, answer, rightAnswer);
        break;
    }
    if ( i===2 ) console.log("Congratulations,", name);
}