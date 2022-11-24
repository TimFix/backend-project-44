export const getRandom = (max = 100) => {
    return Math.floor(Math.random() * max);
};
  
export const parity = (number) => {
    if (number % 2 === 0) return "yes";
    return "no";
};
 
export const gameOver = (name, answer, rightAnswer) => {
    console.log(answer,"is wrong answer ;(. Correct answer was",rightAnswer);
    console.log("Let's try again",name);
}