//Format for display
export const formatPhoneNumber = (number) => {
  const str = number.toString()
  if (str.length === 10) {
    return `(${str.slice(0, 3)}) ${str.slice(3, 6)}-${str.slice(6, 10)}`
  } else {
    return 'Invalid Number'
  }
}
