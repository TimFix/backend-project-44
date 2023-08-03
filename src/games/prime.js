#!/usr/bin/env node
import { startGame, getRandom } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const twoPoint = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const rounds = () => {
  const num1 = getRandom();
  const rightAnswer = twoPoint(num1) ? 'yes' : 'no';
  return [num1, rightAnswer];
};

export default () => {
  startGame(rule, rounds);
};
