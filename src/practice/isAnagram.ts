const sortStr = (str: string) => str.split('').sort().join('')

function isAnagram(str1: string, str2: string) {
  return str1.length === str2.length && sortStr(str1) === sortStr(str2)
}

console.log(isAnagram('aab', 'baa')) // Output: true
