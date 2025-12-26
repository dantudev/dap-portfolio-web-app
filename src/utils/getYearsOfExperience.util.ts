import { formatExperienceYears } from './formatPlusSignByLang.util'

const START_YEAR: number = 2023

export function getYearsOfExperience(): string {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - START_YEAR

  return formatExperienceYears(yearsOfExperience, 'en') // TODO: Change when adding i18n
}
