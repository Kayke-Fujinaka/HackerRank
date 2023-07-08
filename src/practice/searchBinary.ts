const searchBinary = (array: number[], key: number): number => {
  let startValue = 0
  let endValue = array.length - 1

  while (startValue <= endValue) {
    const midValue = Math.floor((startValue + endValue) / 2)

    if (key === array[midValue]) return midValue
    else if (key > array[midValue]) startValue = midValue + 1
    else endValue = midValue - 1
  }

  return -1
}

console.log(searchBinary([1, 2, 3, 4, 5], 1))
