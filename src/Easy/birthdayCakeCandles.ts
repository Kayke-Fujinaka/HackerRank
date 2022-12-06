const candles = [1, 3, 3, 3];

function birthdayCakeCandles(candles) {
  const CANDLES_REQUIRED = candles.length <= 0;

  if (CANDLES_REQUIRED) throw new Error("Insert an array with values");

  const maxValue = Math.max(...candles);

  const totalTallestCandles = candles.reduce(
    (acc, cur) => (cur === maxValue ? [...acc, cur] : acc),
    []
  );

  return totalTallestCandles.length;
}

console.log(birthdayCakeCandles(candles));
