const candles = [1, 3, 3, 3];

function birthdayCakeCandles(candles) {
  const maxValue = Math.max(...candles);

  const totalCandles = candles.reduce(
    (acc, cur) => (cur === maxValue ? [...acc, cur] : acc),
    []
  );

  return totalCandles.length;
}

console.log(birthdayCakeCandles(candles));
