const alicePoints = [1, 2, 3];
const bobPoints = [3, 2, 1];

const compareTriplets = (arr1: number[], arr2: number[]) => {
  return arr1.reduce(
    (acc, cur, idx) => {
      if (cur === arr2[idx]) return acc;
      cur > arr2[idx] ? acc[0]++ : acc[1]++;
      return acc;
    },
    [0, 0]
  );
};

console.log(compareTriplets(alicePoints, bobPoints));
