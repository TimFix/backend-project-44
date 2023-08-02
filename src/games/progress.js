#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { playerName } from '../cli.js';
import { gameOver, getRandom } from '../index.js';

export const gameProress = () => {
    const name = playerName(); 
    console.log('What number is missing in the progression?');
    for (let i=0 ; i < 3 ; i++) {
        const array = [0];
        array[0]= getRandom();
        let step = getRandom(1,10);
        let lengthArray = getRandom(5,20);
        let unknownNumber = getRandom(1,lengthArray - 1);
        for (let i = 1; i < lengthArray; i++){
            array.push(array[i-1] + step);
        }
        let rightAnswer = array[unknownNumber];
        array[unknownNumber] = '..';
        let str = array.join(', ');
        console.log("Question:", str);
        const answer = readlineSync.question("Your answer: ");
        let answerNumber = Number(answer);
        if (answerNumber === rightAnswer) console.log('Correct!');
        else {
            gameOver(name, answer, rightAnswer);
            break;
        }
        if (i === 2) console.log("Congratulations,", name + "!");
    }
}