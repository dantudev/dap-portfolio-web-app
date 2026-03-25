type Language = 'en' | 'es' // TODO: Change when adding i18n

/**
 * Formats a number of years with a plus sign according to the language.
 * @param years - The number of years to format.
 * @param lang - The language code ('en' for English, 'es' for Spanish).
 * @returns A string representing the formatted years with a plus sign according to the language.
 * @example formatPlusSignByLang(5, 'en') // returns '5+'
 */
export function formatPlusSignByLang(years: number, lang: Language): string {
  return lang === 'es' ? `+${years}` : `${years}+`
}
