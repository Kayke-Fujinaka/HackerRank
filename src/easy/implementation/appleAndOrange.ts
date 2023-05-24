interface IParams {
  s: number;
  t: number;
  a: number;
  b: number;
  apples: number[];
  oranges: number[];
}

function calculateDistance(fruits: number[], tree: number) {
  return fruits.map((fruit: number) => tree + fruit);
}

function fruitsFellAtHouse(fruitDistances: number[], s: number, t: number) {
  return fruitDistances.reduce((acc, cur, idx) => {
    return cur >= s && cur <= t ? (acc += 1) : acc;
  }, 0);
}

function countApplesAndOranges({ s, t, a, b, apples, oranges }: IParams) {
  const appleDistances = calculateDistance(apples, a);

  const orangeDistances = calculateDistance(oranges, b);

  const applesInHouse = fruitsFellAtHouse(appleDistances, s, t);

  const orangeInHouse = fruitsFellAtHouse(orangeDistances, s, t);

  return { apples: applesInHouse, oranges: orangeInHouse };
}

console.log(
  countApplesAndOranges({
    s: 7,
    t: 10,
    a: 4,
    b: 12,
    apples: [3, -4, 2],
    oranges: [3, -2, -4],
  })
);
