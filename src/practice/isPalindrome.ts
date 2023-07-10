function isPalindrome(str: string): boolean {
  return str.toLowerCase() === str.toLowerCase().split('').reverse().join('')
}

console.log(isPalindrome('Racecar')) // Output: true
