export const getRandom = (min = 1, max = 100) => {
  const min1 = Math.ceil(min);
  const max1 = Math.floor(max);
  return Math.floor(Math.random() * (max1 - min1 + 1)) + min1;
};

export const parity = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

export const gameOver = (name, answer, rightAnswer) => {
  console.log(`${answer} is wrong answer ;(. Correct answer was ${rightAnswer}.`);
  console.log(`Let's try again, ${name}!`);
};

export const randomOperation = () => {
  const operation = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operation.length);
  return operation[rand];
};
