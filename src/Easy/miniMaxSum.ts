const arrayOfNumbers = [1, 2, 3, 4, 5];

const miniMaxSum = (arr: number[]) => {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);

  const sumTotal = arr.reduce((acc, cur) => (acc += cur));

  return { minValue: sumTotal - maxValue, maxValue: sumTotal - minValue };
};

console.log(miniMaxSum(arrayOfNumbers));
