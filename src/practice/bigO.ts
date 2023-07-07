// Constante

// Linear

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
