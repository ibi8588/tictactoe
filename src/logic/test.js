import { resultForSymbol } from './logic';
import { X, O } from '../symbols/symbols';

it('Should indicate no winning result', () => {
  const board = {
    0: ['', X, ''],
    1: [O, '', O],
    2: [X, '', '']
  };
  const xResult = resultForSymbol(X, board);
  const oResult = resultForSymbol(O, board);
  expect(xResult.won).toBe(false);
  expect(oResult.won).toBe(false);
});

it('Should indicate X as a winner in row0', () => {
  const board = {
    0: [X, X, X],
    1: ['', O, ''],
    2: ['', '', O]
  };
  const xResult = resultForSymbol(X, board);
  const oResult = resultForSymbol(O, board);
  expect(xResult.won).toBe(true);
  expect(xResult.line).toBe('row0');
  expect(oResult.won).toBe(false);
});

it('Should indicate X as a winner in row1', () => {
  const board = {
    0: ['', '', O],
    1: [X, X, X],
    2: ['', '', O]
  };
  const xResult = resultForSymbol(X, board);
  const oResult = resultForSymbol(O, board);
  expect(xResult.won).toBe(true);
  expect(xResult.line).toBe('row1');
  expect(oResult.won).toBe(false);
});

it('Should indicate X as a winner in row2', () => {
  const board = {
    0: ['', O, ''],
    1: ['', O, ''],
    2: [X, X, X]
  };
  const xResult = resultForSymbol(X, board);
  const oResult = resultForSymbol(O, board);
  expect(xResult.won).toBe(true);
  expect(xResult.line).toBe('row2');
  expect(oResult.won).toBe(false);
});
