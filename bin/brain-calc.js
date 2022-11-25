#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playerName } from '../src/cli.js';
import { gameOver, getRandom, randomOperation } from '../src/index.js';

const name = playerName(); 
console.log('What is the result of the expression?');
for (let i=0 ; i < 3 ; i++) {
    let a = getRandom();
    let b = getRandom();
    const oneration = randomOperation();
    if (oneration === '+') {
        console.log("Question:",a,'+',b);
        const answer = readlineSync.question("Your answer: ");
        const rightAnswer = a + b;
        let answerNumber = Number(answer);
        if (answerNumber === rightAnswer) console.log('Correct!');
        else {
            gameOver(name, answer, rightAnswer);
        break;
        }
    }
    else if (oneration === '-') {
        console.log("Question:",a,'-',b);
        const answer = readlineSync.question("Your answer: ");
        const rightAnswer = a - b;
        let answerNumber = Number(answer);
        if (answerNumber === rightAnswer) console.log('Correct!');
        else {
            gameOver(name, answer, rightAnswer);
        break;
        }
    }
    else {
        console.log("Question:",a,'*',b);
        const answer = readlineSync.question("Your answer: ");
        const rightAnswer = a * b;
        let answerNumber = Number(answer);
        if (answerNumber === rightAnswer) console.log('Correct!');
        else {
            gameOver(name, answer, rightAnswer);
        break;
        }
    }
    if ( i===2 ) console.log("Congratulations,", name);
}