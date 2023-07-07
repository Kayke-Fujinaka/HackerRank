// Given an array of integers, find the sum of its elements.
// Input: 1, 2, 3
// Output: 6

const numbers = [1, 2, 3]

const arraySum = (arr: number[]): number =>
  arr.reduce((acc, cur) => acc + cur, 0)

console.log(arraySum(numbers))
