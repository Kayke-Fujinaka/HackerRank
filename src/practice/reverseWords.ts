// const reverseWords = (str: string): string => str.split(' ').reverse().join(' ')
const reverseWords = (str: string): string => str.split('').reverse().join('')

console.log(reverseWords('Hello World!'))
