type Language = 'en' | 'es' // TODO: Change when adding i18n

export function formatPlusSignByLang(years: number, lang: Language): string {
  return lang === 'es' ? `+${years}` : `${years}+`
}
