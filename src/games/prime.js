import startGame from '../index.js';
import getRandom from '../random.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const twoPoint = (num) => {
  if (num < 2) return false;
  const prime = Math.sqrt(num);
  for (let i = 2; i <= prime; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRoundData = () => {
  const num = getRandom();
  const rightAnswer = twoPoint(num) ? 'yes' : 'no';
  return [num, rightAnswer];
};

export default () => {
  startGame(rule, generateRoundData);
};
