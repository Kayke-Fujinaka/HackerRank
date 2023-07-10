function countOccurrences(list: number[]) {
  return list.reduce((count: any, currentValue) => {
    return (
      count[currentValue] ? ++count[currentValue] : (count[currentValue] = 1),
      count
    )
  }, {})
}

console.log(countOccurrences([1, 2, 3, 1, 2, 1, 3, 4])) // Output: { 1: 3, 2: 2, 3: 2, 4: 1 }
