function factorialFunction(n: number): number {
  return n > 1 ? n * factorialFunction(n - 1) : 1
}

console.log(factorialFunction(200))
