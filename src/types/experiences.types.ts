interface Experiences {
  company?: string
  description?: string
  period: string
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
export type { Experiences, ExperienceTab }
