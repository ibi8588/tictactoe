const countInRow = (symbol, row) => row.filter(el => el === symbol).length;
const hasWonInRow = (symbol, row) => countInRow(symbol, row) === 3;
export const hasThreatInRow = (symbol, row) => countInRow(symbol, row) === 2;

const countInColumn = (symbol, colNumber, ...rows) => rows.map(row => row[colNumber]).filter(el => el === symbol).length;
const hasWonInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 3;
export const hasThreatInColumn = (symbol, colNumber, ...rows) => countInColumn(symbol, colNumber, ...rows) === 2;
