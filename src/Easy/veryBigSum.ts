// In this challenge, you are required to calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
// Input: 1000000001, 1000000002, 1000000003, 1000000004, 1000000005
// Output: 5000000015

const input = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

const aVeryBigSum = (ar: number[]) => ar.reduce((acc, cur) => acc + cur, 0);

console.log(aVeryBigSum(input));
