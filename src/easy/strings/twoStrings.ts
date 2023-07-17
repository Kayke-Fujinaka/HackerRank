function twoStrings(s1: string, s2: string) {
  const s1Set = new Set(s1)
  const hasShareSubstring = Array.from(s2).some((x) => s1Set.has(x))

  return hasShareSubstring ? 'YES' : 'NO'
}

console.log(twoStrings('and', 'art'))
