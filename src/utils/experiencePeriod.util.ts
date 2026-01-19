/**
 * Utility functions for experience period formatting and duration calculation.
 */

type DurationResult = {
  years: number
  months: number
  totalMonths: number
}

/**
 * Parses a date string in YYYY-MM format to a Date object.
 */
function parseYearMonth(dateStr: string): Date {
  const [year, month] = dateStr.split('-').map(Number)
  return new Date(year, month - 1) // month is 0-indexed
}

/**
 * Calculates the duration between two dates.
 * @param startDate - Format: YYYY-MM
 * @param endDate - Format: YYYY-MM or null for current date
 */
function calculateDuration(
  startDate: string,
  endDate: string | null,
): DurationResult {
  const start = parseYearMonth(startDate)
  const end = endDate ? parseYearMonth(endDate) : new Date()

  let totalMonths =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())

  // Add 1 to include both start and end months
  totalMonths += 1

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  return { years, months, totalMonths }
}

/**
 * Month names array.
 * TODO: i18n implementation
 */
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/**
 * Formats a YYYY-MM date string to a readable format.
 * @example '2023-08' -> 'August 2023'
 *
 * TODO: i18n implementation
 */
function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-').map(Number)
  return `${MONTH_NAMES[month - 1]} ${year}`
}

/**
 * Formats the experience period string.
 * @example formatPeriod('2023-08', null) -> 'August 2023 - Present'
 * @example formatPeriod('2023-01', '2023-06') -> 'January 2023 - June 2023'
 *
 * TODO: For i18n, replace 'Present' with translation key
 */
function formatPeriod(
  startDate: string,
  endDate: string | null,
): string {
  const startFormatted = formatDate(startDate)
  const endFormatted = endDate ? formatDate(endDate) : 'Present' // TODO: t('period.present')

  return `${startFormatted} - ${endFormatted}`
}

/**
 * Formats the duration in a human-readable string.
 * @example { years: 2, months: 3 } -> '2 yrs 3 mos'
 *
 * TODO: Adapt to i18n
 */
function formatDuration(duration: DurationResult): string {
  const { years, months } = duration

  if (years === 0 && months === 0) {
    return '< 1 mo' // TODO: t('duration.lessThanMonth')
  }

  const parts: string[] = []

  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`)
  }

  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`)
  }

  return parts.join(' ')
}

/**
 * Gets the full period string with duration.
 * @example 'August 2023 - Present · 2 yrs 5 mos'
 */
function formatPeriodWithDuration(
  startDate: string,
  endDate: string | null,
): string {
  const period = formatPeriod(startDate, endDate)
  const duration = calculateDuration(startDate, endDate)
  const durationStr = formatDuration(duration)

  return `${period} · ${durationStr}`
}

export { formatPeriod, formatPeriodWithDuration, calculateDuration, formatDuration, formatDate }