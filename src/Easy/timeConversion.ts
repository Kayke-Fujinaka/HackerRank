// It should return a new string representing the input time in 24 hour format.
// Input: 02:00:00PM
// Output: 14:00:00

const time = "07:00:00AM";

interface Time {
  time: string;
  hours: string;
}

interface Periods {
  [key: string]: (hours: string) => false | string;
}

function hourFormatByPeriod({ time, hours }: Time): string | boolean {
  const dayPeriod = time.slice(-2);

  const periods: Periods = {
    AM: () => (hours = hours.padStart(2, "0")),
    PM: () => (hours = (Number(hours) + 12).toString()),
    isTimeFormat: () => false,
  };

  return (periods[dayPeriod] || periods["isTimeFormat"])(hours);
}

function timeConverter(time: string): string | Error {
  let [hours, minutes, seconds] = time.slice(0, -2).split(":");

  const MIDDAY_OR_MIDNIGHT = hours === "12";

  if (MIDDAY_OR_MIDNIGHT) hours = "0";

  const hourFormatted = hourFormatByPeriod({ time, hours });

  return hourFormatted
    ? `${hourFormatted}:${minutes}:${seconds}`
    : new Error("Insert a time in 12-hour AM/PM format");
}

console.log(timeConverter(time));
