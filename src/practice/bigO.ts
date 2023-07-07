// Constante
const getFirstElement = (arr: number[]) => arr[0]

console.log('Constante:', getFirstElement([1, 3, 5, 7, 11]))

// Linear
const sumNumbers = (arr: number[]): number =>
  arr.reduce((acc, cur) => acc + cur, 0)

console.log('Linear:', sumNumbers([1, 3, 5, 7, 11]))

// Exponencial

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
