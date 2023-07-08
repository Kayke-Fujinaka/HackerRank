function filterOddNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 !== 0)
}

console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]))
