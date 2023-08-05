import startGame from '../index.js';
import getRandom from '../random.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const generateRoundData = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const expression = `${num1} ${num2}`;
  const rightAnswer = gcd(num1, num2).toString();
  return [expression, rightAnswer];
};

export default () => {
  startGame(rule, generateRoundData);
};
