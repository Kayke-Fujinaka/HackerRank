function findLongestWord(str: string) {
  return str.split(' ').sort((a, b) => b.length - a.length)[0]
}

console.log(findLongestWord('The quick brown fox jumps over the lazy dog')) // Output: "quick"

// return str.split(' ').reduce(
//   (acc, cur) => (cur.length > acc.length ? (acc = cur) : acc),
//   '',
// )
