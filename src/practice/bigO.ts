// Constante
const getFirstElement = (arr: number[]) => arr[0]

console.log('Constante:', getFirstElement([1, 3, 5, 7, 11]))

// Linear
const sumNumbers = (arr: number[]): number =>
  arr.reduce((acc, cur) => acc + cur, 0)

console.log('Linear:', sumNumbers([1, 3, 5, 7, 11]))

// Exponencial
// Escreva uma função que calcule todas as possíveis combinações de um conjunto de caracteres.
function generateCombinations(str: string): string[] {
  if (str.length === 1) {
    return [str]
  } else {
    const result = []
    for (let i = 0; i < str.length; i++) {
      const firstChar = str[i]
      const otherChars = str.substring(0, i) + str.substring(i + 1)
      const otherCharsCombinations = generateCombinations(otherChars)

      for (let j = 0; j < otherCharsCombinations.length; j++) {
        result.push(firstChar + otherCharsCombinations[j])
      }
    }
    return result
  }
}

console.log(generateCombinations('abc'))

// Logarítmico
function binarySearch(arr: number[], key: number) {
  let lowestIndex = 0
  let highestIndex = arr.length - 1
  let middleIndex
  let element

  while (lowestIndex <= highestIndex) {
    middleIndex = Math.floor((lowestIndex + highestIndex) / 2)

    element = arr[middleIndex]

    if (element < key) lowestIndex = middleIndex + 1
    else if (element > key) highestIndex = middleIndex - 1
    else return middleIndex
  }

  return -1
}

console.log('Logarítmico:', binarySearch([1, 2, 3, 4, 5], 5))
