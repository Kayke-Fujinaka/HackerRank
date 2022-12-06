const numbers = [1, 2, 3];

const arraySum = (arr: number[]) => arr.reduce((acc, cur) => acc + cur, 0);

console.log(arraySum(numbers));
