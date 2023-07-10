function removeDuplicates<T>(list: T[]) {
  return [...new Set(list)]
}

console.log(removeDuplicates([1, 2, 2, 3, 3, 4, 5, 5]))
