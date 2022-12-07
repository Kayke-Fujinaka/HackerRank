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
