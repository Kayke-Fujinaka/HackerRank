function isPrime(num: number) {
  if (num <= 1) return false
  if (num === 2 || num === 3) return true
  if (num % 2 === 0 || num % 3 === 0) return false

  return [num].some((i) => num % i === 0)
}

console.log(isPrime(11))
