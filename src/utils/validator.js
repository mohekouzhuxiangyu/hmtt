export const phoneValidator = (value, rule) => {
  console.log(value)
  return /^\d{6}$/.test(value)
}
