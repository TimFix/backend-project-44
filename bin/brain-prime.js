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
    const simpleNumber = getRandom();
    console.log("Question:",simpleNumber);
    const YourAnswer = readlineSync.question("Your answer: ");
    const Answer = primeNumber(simpleNumber);
    if (YourAnswer === Answer) console.log('Correct!');
    else {
        gameOver(name, YourAnswer, Answer);
        break;
    }
    if ( i===2 ) console.log("Congratulations,", name);
}