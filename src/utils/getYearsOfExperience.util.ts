import { START_YEAR } from '@app/consts/global.consts'
import { formatPlusSignByLang } from './formatPlusSignByLang.util'

/**
 * Calculates the years of experience based on the current year and a predefined start year.
 * @returns A string representing the years of experience, formatted with a plus sign according to the language.
 * @example If the current year is 2024 and the START_YEAR is 2018, it returns '6+' for English.
 */
export function getYearsOfExperience(): string {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - START_YEAR

  return formatPlusSignByLang(yearsOfExperience, 'en') // TODO: Change when adding i18n
}
