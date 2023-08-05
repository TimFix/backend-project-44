import startGame from '../index.js';
import getRandom from '../random.js';

const rule = 'What number is missing in the progression?';
const length = getRandom(5, 15);

const startProgres = (start, step, length3) => {
  const progres = [];
  for (let i = start; progres.length < length3; i += step) {
    progres.push(i);
  }
  return progres;
};

const generateRoundData = () => {
  const num = getRandom();
  const lengthStep = getRandom(1, 10);
  const progres = startProgres(num, lengthStep, length);
  const randomNumberProgres = getRandom(0, length - 1);
  const rightAnswer = progres[randomNumberProgres].toString();
  progres[randomNumberProgres] = '..';
  const hideNumber = progres.join(' ');
  return [hideNumber, rightAnswer];
};

export default () => {
  startGame(rule, generateRoundData);
};
