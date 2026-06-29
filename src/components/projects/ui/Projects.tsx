import {
  ProjectsTabEnum,
  type ProjectsTab,
} from '@/components/projects/types/projects.types'
import { firstLetterUppercase } from '@/utils'
import { Pagination } from '@heroui/pagination'
import { Tab, Tabs } from '@heroui/tabs'
import { useMemo, useState } from 'react'
import PORTFOLIO_PROJECTS_DATA from '../data/projects.consts'
import ProjectCard from './ProjectCard'

const PROJECTS_PER_PAGE = 6

function Projects() {
  const [selectedTab, setSelectedTab] = useState<ProjectsTab>(
    ProjectsTabEnum.ALL,
  )
  const [page, setPage] = useState(1)

  const filteredProjects = useMemo(
    () =>
      PORTFOLIO_PROJECTS_DATA.filter((project) => {
        if (selectedTab === ProjectsTabEnum.ALL) return true
        return project.type === selectedTab
      }),
    [selectedTab],
  )

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const currentPage = Math.min(page, totalPages || 1)
  const visibleProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE,
  )

  const handleTabChange = (key: ProjectsTab) => {
    setSelectedTab(key)
    setPage(1)
  }

  return (
    <article className='flex min-h-dvh w-full flex-col gap-6 px-6 py-6 md:px-12'>
      <div className='flex w-full flex-col items-center justify-between gap-6 md:flex-row'>
        <h2 className='text-[clamp(1.75rem,3vw,2.5rem)] font-bold'>Projects</h2>

        <Tabs
          aria-label='Projects Tabs'
          selectedKey={selectedTab}
          onSelectionChange={(key) => handleTabChange(key as ProjectsTab)}
        >
          <Tab
            key={ProjectsTabEnum.ALL}
            title={firstLetterUppercase(ProjectsTabEnum.ALL)}
          />
          <Tab
            key={ProjectsTabEnum.WEB}
            title={firstLetterUppercase(ProjectsTabEnum.WEB)}
          />
          <Tab
            key={ProjectsTabEnum.MOBILE}
            title={firstLetterUppercase(ProjectsTabEnum.MOBILE)}
          />
          <Tab
            key={ProjectsTabEnum.BACKEND}
            title={firstLetterUppercase(ProjectsTabEnum.BACKEND)}
          />
        </Tabs>
      </div>

      <div className='grid w-full auto-rows-fr grid-cols-1 gap-6 pt-4 md:min-h-300 md:grid-cols-2 lg:grid-cols-3'>
        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={`${index}-${project.title}`}
            project={project}
            altIcon={project.altIcon}
            bgColor={project.bgColor}
          />
        ))}
        {Array.from({ length: PROJECTS_PER_PAGE - visibleProjects.length }).map(
          (_, index) => (
            <div key={`placeholder-${index}`} aria-hidden className='invisible' />
          ),
        )}
      </div>

      <div className='mt-auto flex h-12 w-full items-center justify-center pt-4'>
        {totalPages > 1 && (
          <Pagination
            aria-label='Projects Pagination'
            showControls
            total={totalPages}
            page={currentPage}
            onChange={setPage}
          />
        )}
      </div>
    </article>
  )
}

export default Projects
