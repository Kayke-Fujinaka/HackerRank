function calculateAverage(numbers: number[]): number {
  return numbers.reduce((acc, cur) => (acc += cur), 0) / 2
}

console.log(calculateAverage([1, 2, 3, 4, 5]))
