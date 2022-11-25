#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playerName } from '../src/cli.js';
import { gameOver, getRandom} from '../src/index.js';

const primeNumber = (number) => {
    let score = 0;
    for (let i = 0; i <= number; i++){
        if ((number % i) === 0) score++
    }
    if (score === 2) return "yes";
    else return "no";
}

const name = playerName(); 
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
for (let i=0 ; i < 3 ; i++) {
    const number = getRandom();
    console.log("Question:",number);
    const answer = readlineSync.question("Your answer: ");
    const rightAnswer = primeNumber(number);
    if (answer === rightAnswer) console.log('Correct!');
    else {
        gameOver(name, answer, rightAnswer);
        break;
    }
    if ( i===2 ) console.log("Congratulations,", name);
}