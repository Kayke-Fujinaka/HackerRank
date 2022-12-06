const matriz = [
  [1, 2, 10],
  [4, 5, 6],
  [10, 8, 9],
];

function diagonalDifference(arr: number[][]): number {
  const primaryDiagonal = arr.reduce(
    (acc, value, idx) => (acc += value[idx]),
    0
  );

  const secondaryDiagonal = arr.reduce(
    (acc, value, idx) => (acc += value.reverse()[idx]),
    0
  );

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

console.log(diagonalDifference(matriz));
