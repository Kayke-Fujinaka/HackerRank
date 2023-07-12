function camelcase(s: string) {
  return s.split(/(?=[A-Z])/).length
}

console.log(camelcase('bobbyHadzCom'))
