// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Input: 1, 2, 3, 4, 5
// Output: 10, 14

const arrayOfNumbers = [1, 2, 3, 4, 5];

const miniMaxSum = (arr: number[]) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const sumTotal = arr.reduce((acc, cur) => (acc += cur));

  return { minValue: sumTotal - maxValue, maxValue: sumTotal - minValue };
};

console.log(miniMaxSum(arrayOfNumbers));
