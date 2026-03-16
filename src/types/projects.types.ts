interface Projects {
  title: string
}

const ProjectsTabEnum = {
  ALL: 'all',
  WEB: 'web',
  MOBILE: 'mobile',
  BACKEND: 'backend',
} as const

type ProjectsTab = (typeof ProjectsTabEnum)[keyof typeof ProjectsTabEnum]

export { ProjectsTabEnum }
export type { Projects, ProjectsTab }
