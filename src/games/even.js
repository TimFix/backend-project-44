import startGame from '../index.js';
import getRandom from '../random.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const parity = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

const rounds = () => {
  const num1 = getRandom();
  const stNum1 = num1.toString();
  return [stNum1, parity(num1)];
};

export default () => {
  startGame(rule, rounds);
};
