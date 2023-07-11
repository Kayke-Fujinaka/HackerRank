function breakingRecords(scores: number[]) {
  let minScore = scores[0]
  let maxScore = scores[0]
  const gamesAfterFirst = scores.slice(1)

  const records = gamesAfterFirst.reduce(
    (score, game) => {
      if (game > maxScore) {
        score[0]++
        maxScore = game
      }

      if (game < minScore) {
        score[1]++
        minScore = game
      }
      return score
    },
    [0, 0],
  )

  return records
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1]

console.log(breakingRecords(scores))
