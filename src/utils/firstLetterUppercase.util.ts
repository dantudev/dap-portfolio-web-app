/**
 * Converts the first letter of a string to uppercase and the rest to lowercase.
 * @param str - The input string to be transformed.
 * @returns The transformed string with the first letter in uppercase and the rest in lowercase.
 * @example firstLetterUppercase('hello world') // returns 'Hello world'
 */
export function firstLetterUppercase(str: string) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}