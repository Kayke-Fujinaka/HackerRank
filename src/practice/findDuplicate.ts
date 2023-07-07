function findDuplicate(arr: number[]) {
  let duplicate

  for (let i = 0; i < arr.length; i++) {
    if (duplicate === arr[i]) {
      return duplicate
    }
    duplicate = arr[i]
  }

  return -1
}

console.log(findDuplicate([1, 2, 3, 5, 6]))
