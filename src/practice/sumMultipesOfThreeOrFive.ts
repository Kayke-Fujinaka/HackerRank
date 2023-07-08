function sumMultiplesOfThreeOrFive(numbers: number[]) {
  return numbers
    .filter((number) => number % 3 === 0 || number % 5 === 0)
    .reduce((acc, cur) => (acc += cur), 0)
}

console.log(sumMultiplesOfThreeOrFive([1, 2, 3, 4, 5]))
