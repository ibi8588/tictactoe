const countInRow = (symbol, row) => row.filter(el => el === symbol).length;
const hasWonInRow = (symbol, row) => countInRow(symbol, row) === 3;
export const hasThreatInRow = (symbol, row) => countInRow(symbol, row) === 2;

const countInColumn = (symbol, colNumber, ...rows) => rows.map(row => row[colNumber]).filter(el => el === symbol).length;
const hasWonInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 3;
export const hasThreatInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 2;

const countInLeftSlant = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[0], row1[1], row2[2]].filter(el => el === symbol).length;
};
const hasWonInLeftSlant = (symbol, ...rows) => countInLeftSlant(symbol, ...rows) === 3;
export const hasThreatInLeftSlant = (symbol, ...rows) => countInLeftSlant(symbol, ...rows) === 2;

const countInRightSlant = (symbol, ...rows) => {
  const [row0, row1, row2] = rows;
  return [row0[2], row1[1], row2[0]].filter(el => el === symbol).length;
};
const hasWonInRightSlant = (symbol, ...rows) => countInRightSlant(symbol, ...rows) === 3;
export const hasThreatInRightSlant = (symbol, ...rows) => countInRightSlant(symbol, ...rows) === 2;
