import startGame from '../index.js';
import getRandom from '../random.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const parity = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

const generateRoundData = () => {
  const num = getRandom();
  const stNum = num.toString();
  return [stNum, parity(num)];
};

export default () => {
  startGame(rule, generateRoundData);
};
