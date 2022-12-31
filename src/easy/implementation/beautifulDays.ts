type BeautifulDaysProps = {
  startDay: number;
  endDay: number;
  divisor: number;
};

type ReverseNumberProps = number;

type IsBeautifulDaysProps = {
  integer: number;
  divisor: number;
};

const reverseNumber = (number: ReverseNumberProps) =>
  Number(number.toString().split("").reverse().join(""));

const isBeautifulDay = ({ integer, divisor }: IsBeautifulDaysProps) =>
  Number.isInteger(Math.abs(integer - reverseNumber(integer)) / divisor);

function beautifulDays({ startDay, endDay, divisor }: BeautifulDaysProps) {
  let beautiful = 0;

  for (let integer = startDay; integer <= endDay; integer++) {
    if (isBeautifulDay({ integer, divisor })) beautiful++;
  }

  return beautiful;
}

console.log(beautifulDays({ startDay: 13, endDay: 45, divisor: 3 }));
