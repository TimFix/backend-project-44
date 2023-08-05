import { startGame } from '../index.js';
import getRandom from '../random.js';

const rule = 'What is the result of the expression?';

const randomOperation = () => {
  const operation = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * operation.length);
  return operation[rand];
};

const math = (num1, num2, mathOperation) => {
  switch (mathOperation) {
    case '+':
      return num1 + num2;
    case '-':
      if (num1 > num2) return num1 - num2;
      return num2 - num1;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`There is no such operator like '${mathOperation}'!`);
  }
};

const rounds = () => {
  const num1 = getRandom();
  const num2 = getRandom();
  const operation = randomOperation();
  let expression = '';
  if (num1 > num2) expression = `${num1} ${operation} ${num2}`;
  else expression = `${num2} ${operation} ${num1}`;
  const rightAnswer = math(num1, num2, operation).toString();
  return [expression, rightAnswer];
};

export default () => {
  startGame(rule, rounds);
};
