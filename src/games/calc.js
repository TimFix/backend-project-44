import readlineSync from 'readline-sync';
import { playerName } from '../cli.js';
import { gameOver, getRandom, randomOperation } from '../index.js';

export const gameCalc = () => {
    const name = playerName(); 
    console.log('What is the result of the expression?');
    for (let i=0 ; i < 3 ; i++) {
        let a = getRandom();
        let b = getRandom();
        const oneration = randomOperation();
        let rightAnswer = 0;
        if (oneration === '+') {
            console.log("Question:",a,'+',b);
            rightAnswer = a + b;
        }
        else if (oneration === '-') {
            if (a > b) {
                rightAnswer = a - b;
                console.log("Question:",a,'-',b);}
            else {
                rightAnswer = b - a;
                console.log("Question:",b,'-',a);}
            }
        else {
            console.log("Question:",a,'*',b);
            rightAnswer = a * b;
        }
        const answer = readlineSync.question("Your answer: ");
        let answerNumber = Number(answer);
        if (answerNumber === rightAnswer) console.log('Correct!');
        else {
            gameOver(name, answer, rightAnswer);
            break;
        }
        if ( i===2 ) console.log("Congratulations,", name + "!");
    }
}