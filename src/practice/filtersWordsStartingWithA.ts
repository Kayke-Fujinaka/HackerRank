function filterWordsStartingWithA(words: string[]): string[] {
  return words.filter((word) => word.startsWith('A'))
}

console.log(filterWordsStartingWithA(['Apple', 'Banana', 'Avocado', 'Orange'])) // Output: should be a new list containing only the words starting with 'A'
