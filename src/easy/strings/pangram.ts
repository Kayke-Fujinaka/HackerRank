const ALPHABET = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

function pangrams(s: string) {
  const formatString = s.split(' ').join('').toUpperCase()

  const isPangram = ALPHABET.every((letter) => formatString.includes(letter))

  console.log(isPangram)

  return isPangram ? 'pangram' : 'not pangram'
}

console.log(pangrams('We promptly judged antique ivory buckles for the prize'))
