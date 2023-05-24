function kangaroo(x1: number, v1: number, x2: number, v2: number): string {
  if (x1 < x2 && v1 <= v2) return 'NO'

  if (x1 > x2 && v1 >= v2) return 'NO'

  if ((x1 - x2) % (v2 - v1) === 0) return 'YES'

  return 'NO'
}

console.log(kangaroo(0, 3, 4, 2))
