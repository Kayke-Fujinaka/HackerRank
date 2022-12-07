// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age.
// They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
// Input: 3 2 1 3
// Output: 2

const candles = [1, 3, 3, 3];

function birthdayCakeCandles(candles: number[]): number {
  const CANDLES_REQUIRED = candles.length <= 0;

  if (CANDLES_REQUIRED) throw new Error("Insert an array with values");

  const maxValue = Math.max(...candles);

  // I need use to explicit argument for reduce, ie, i apply <number[]>
  const totalTallestCandles = candles.reduce<number[]>(
    (acc, cur) => (cur === maxValue ? [...acc, cur] : acc),
    []
  );

  return totalTallestCandles.length;
}

console.log(birthdayCakeCandles(candles));
