#!/usr/bin/env node
import { startGame, getRandom } from '../index.js';

const parity = (number) => {
  if (number % 2 === 0) return 'yes';
  return 'no';
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const rounds = () => {
  const num1 = getRandom();
  const stNum1 = num1.toString();
  return [stNum1, parity(num1)];
};

export default () => {
  startGame(rule, rounds);
};
