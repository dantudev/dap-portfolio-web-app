interface Project {
  title: string
  description: string
  type: ProjectsTab
  technologies: string[]
  codeLink?: string
  webLink?: string
  imageSrc?: string
}

const ProjectsTabEnum = {
  ALL: 'all',
  WEB: 'web',
  MOBILE: 'mobile',
  BACKEND: 'backend',
} as const

type ProjectsTab = (typeof ProjectsTabEnum)[keyof typeof ProjectsTabEnum]

export { ProjectsTabEnum }
export type { Project, ProjectsTab }
