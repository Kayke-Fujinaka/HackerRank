function countFrequencies(numbers: number[]): Record<number, number> {
  return numbers.reduce((frequencies: Record<number, number>, num) => {
    frequencies[num] = (frequencies[num] || 0) + 1
    return frequencies
  }, {})
}

function getNumberWithMaxFrequency(
  frequencies: Record<number, number>,
): number {
  const entries = Object.entries(frequencies)
  const maxFrequencyEntry = entries.reduce(
    (maxEntry, currentEntry) =>
      frequencies[Number(currentEntry[0])] > frequencies[Number(maxEntry[0])]
        ? currentEntry
        : maxEntry,
    ['0', -Infinity],
  )

  return Number(maxFrequencyEntry[0])
}

function mostFrequentNumber(numbers: number[]) {
  const frequencies = countFrequencies(numbers)
  return getNumberWithMaxFrequency(frequencies)
}

console.log(mostFrequentNumber([1, 2, 3, 4, 1, 2, 1, 7, 9, 1]))
