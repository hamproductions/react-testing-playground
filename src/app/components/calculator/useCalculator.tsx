import { evaluate } from 'mathjs';
import { useState } from 'react';
import { OPERATORS } from './utils';

export const useCalculator = (options?: { maxLength?: number }) => {
  const { maxLength = 10 } = options ?? {};
  const [equation, setEquation] = useState('0');

  const addToEquation = (n: string) => {
    if (equation.length >= maxLength - 1) return;
    setEquation((e) => `${e}${n}`);
  };
  const onButtonPressed = (button: string) => {
    const isLastCharOperator = OPERATORS.includes(equation.charAt(equation.length - 1));
    switch (button) {
      case 'AC':
        setEquation('0');
        break;
      // case '()':
      // case '%':
      //   setEquation((e) => `${e}`);
      case '÷':
        if (equation === '0' || isLastCharOperator) return;
        addToEquation('/');
        break;
      case '+':
        if (equation === '0' || isLastCharOperator) return;
        addToEquation('+');
        break;
      case '-':
        if (equation === '0' || isLastCharOperator) return;
        addToEquation('-');
        break;
      case '×':
        if (equation === '0' || isLastCharOperator) return;
        addToEquation('*');
        break;
      case '.':
        break;
      case '←':
        if (equation.length === 0) return;
        setEquation((e) => {
          if (equation.length === 1) return '0';
          return e.slice(0, -1);
        });
        break;
      case '=':
        setEquation((e) => (evaluate(e) as number).toString() ?? '');
        break;
      default:
        if (equation.length >= maxLength) return;
        const n = parseInt(button);
        if (isNaN(n)) return;
        setEquation((e) => {
          if (equation === '0') return n.toString();
          return `${e}${n}`;
        });
    }
  };

  return { equation, onButtonPressed };
};
