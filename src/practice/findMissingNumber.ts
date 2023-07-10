function findMissingNumber(numbers: number[]) {
  numbers.sort((a, b) => b - a)

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] + 1 !== numbers[i]) return numbers[i] + 1
  }

  return null
}

console.log(findMissingNumber([1, 2, 3, 5]))
