// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
/* Input: 
  |  11  2  4  |
  |   4  5  6  |
  |  10  8 -12 |
*/
// Output: 15

const matriz = [
  [1, 2, 10],
  [4, 5, 6],
  [10, 8, 9],
]

function diagonalDifference(arr: number[][]): number {
  const primaryDiagonal = arr.reduce(
    (acc, value, idx) => (acc += value[idx]),
    0,
  )

  const secondaryDiagonal = arr.reduce(
    (acc, value, idx) => (acc += value.reverse()[idx]),
    0,
  )

  return Math.abs(primaryDiagonal - secondaryDiagonal)
}

console.log(diagonalDifference(matriz))
