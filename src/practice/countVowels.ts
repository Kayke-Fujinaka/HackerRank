function countVowels(str: string) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return str
    .split('')
    .reduce((acc, cur) => (vowels.includes(cur) ? (acc += 1) : acc), 0)
}

console.log(countVowels('Hello'))
