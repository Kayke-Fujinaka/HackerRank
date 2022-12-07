// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with  places after the decimal.
// Input: [-1, -1, 0, 1, 1]
// Output: 0.400000, 0.400000, 0.200000

const arr = [-1, -1, 0, 1, 1];

function plusMinus(arr: number[]) {
  const arrayOfIntegers = arr.reduce(
    (acc, cur) => {
      cur > 0 ? acc[2]++ : cur < 0 ? acc[0]++ : acc[1]++;
      return acc;
    },
    [0, 0, 0]
  );

  const proportionPositives = (arrayOfIntegers[2] / arr.length).toFixed(6);
  const proportionNegatives = (arrayOfIntegers[0] / arr.length).toFixed(6);
  const proportionZeros = (arrayOfIntegers[1] / arr.length).toFixed(6);

  return { proportionNegatives, proportionZeros, proportionPositives };
}

console.log(plusMinus(arr));
