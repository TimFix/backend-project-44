import { startGame, getRandom } from '../index.js';
import getRandom from '../random.js';

const rule = 'Find the greatest common divisor of given numbers.';

const NOD = (num1, num2) => {
  if (num2 > num1) {
    return NOD(num2, num1);
  }
  if (!num2) {
    return num1;
  }
  return NOD(num2, num1 % num2);
};

const rounds = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const expression = `${num1} ${num2}`;
  const rightAnswer = NOD(num1, num2).toString();
  return [expression, rightAnswer];
};

export default () => {
  startGame(rule, rounds);
};
