function findCommonElements<T>(list1: T[], list2: T[]): T[] {
  return list1.filter((element) => list2.includes(element))
}

console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]))
