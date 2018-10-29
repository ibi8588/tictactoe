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
