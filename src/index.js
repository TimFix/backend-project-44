export const getRandom = (min = 1,max = 100) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
};
  
export const parity = (number) => {
    if (number % 2 === 0) return "yes";
    return "no";
};
 
export const gameOver = (name, answer, rightAnswer) => {
    console.log(answer,"is wrong answer ;(. Correct answer was " + rightAnswer + '.');
    console.log("Let's try again " + name + '!');
}

export const randomOperation = () => {
    const operation = ['+','-','*'];
    const rand = Math.floor(Math.random() * operation.length);
    return operation[rand];
}