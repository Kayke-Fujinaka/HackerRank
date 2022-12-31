type FindDigitsProps = number;

const findDigits = (integer: FindDigitsProps): number => {
  return integer
    .toString()
    .split("")
    .map((digit) => parseInt(digit))
    .reduce((acc, digit) => {
      if (Number.isInteger(integer / digit)) acc++;
      return acc;
    }, 0);
};

console.log(findDigits(10));
