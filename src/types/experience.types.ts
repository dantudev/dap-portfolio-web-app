interface Experience {
  company?: string
  description?: string
  /** Format: YYYY-MM (e.g., '2023-08') */
  startDate: string
  /** Format: YYYY-MM or null for 'Present' */
  endDate: string | null
  technologies: string[]
  title: string
  logo?: string
  location?: string
}

const ExperienceTabEnum = {
  WORK: 'work',
  EDUCATION: 'education',
} as const

type ExperienceTab = (typeof ExperienceTabEnum)[keyof typeof ExperienceTabEnum]

export { ExperienceTabEnum }
export type { Experience, ExperienceTab }
