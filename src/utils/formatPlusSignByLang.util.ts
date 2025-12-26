type Language = 'en' | 'es' // TODO: Change when adding i18n

export function formatExperienceYears(years: number, lang: Language): string {
  return lang === 'es' ? `+${years}` : `${years}+`
}
