function hackerrankInString(s: string) {
  const word = 'hackerrank'
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === word[count]) {
      count++
    }
  }

  return count === word.length ? 'YES' : 'NO'
}

console.log(hackerrankInString('hereiamstackerrank'))
console.log(hackerrankInString('hackerworld'))
