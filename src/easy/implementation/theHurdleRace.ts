function hurdleRace(k: number, height: number[]) {
  return height.reduce((acc, cur) => {
    return k < cur ? ++acc : acc
  }, 0)
}

console.log(hurdleRace(3, [1, 6, 3, 5, 2]))
