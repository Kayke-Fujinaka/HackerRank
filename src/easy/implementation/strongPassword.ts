const MIN_LENGTH_REQUIRED = 6

const hasMinLength = (password: string) =>
  password.length >= MIN_LENGTH_REQUIRED

const hasCharacterFrom = (chars: string) => (password: string) =>
  new RegExp(`[${chars}]`).test(password)

const hasDigit = hasCharacterFrom('0123456789')
const hasUppercase = hasCharacterFrom('ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const hasLowercase = hasCharacterFrom('abcdefghijklmnopqrstuvwxyz')
const hasSpecialCharacter = hasCharacterFrom('!@#$%^&*()-+')

function minimumNumber(n: number, password: string) {
  const validators = [
    hasMinLength,
    hasDigit,
    hasUppercase,
    hasLowercase,
    hasSpecialCharacter,
  ]

  const failedValidators = validators.filter(
    (validate) => !validate(password),
  ).length

  return Math.max(6 - n, failedValidators)
}

console.log(minimumNumber(5, '1234a!5'))
