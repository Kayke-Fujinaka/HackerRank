function getTotalX(a: number[], b: number[]): number {
  function calculateGCD(x: number, y: number): number {
    while (true) {
      if (y === 0) return x
      const temp = x
      x = y
      y = temp % y
    }
  }

  function calculateLCM(x: number, y: number): number {
    return (x * y) / calculateGCD(x, y)
  }

  const lcmOfFirstList = a.reduce((lcm, number) => calculateLCM(lcm, number), 1)
  const gcdOfSecondList = b.reduce((gcd, number) => calculateGCD(gcd, number))

  let counter = 0
  for (
    let i = lcmOfFirstList, j = 2;
    i <= gcdOfSecondList;
    i = lcmOfFirstList * j, j++
  ) {
    if (gcdOfSecondList % i === 0) counter++
  }
  return counter
}

console.log(getTotalX([2, 4], [16, 32, 96]))
