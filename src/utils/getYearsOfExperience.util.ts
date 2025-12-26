import { START_YEAR } from '@app/consts/global.consts'
import { formatExperienceYears } from './formatPlusSignByLang.util'

export function getYearsOfExperience(): string {
  const currentYear = new Date().getFullYear()
  const yearsOfExperience = currentYear - START_YEAR

  return formatExperienceYears(yearsOfExperience, 'en') // TODO: Change when adding i18n
}
