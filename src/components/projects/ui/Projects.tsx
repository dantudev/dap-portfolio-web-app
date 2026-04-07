import {
  ProjectsTabEnum,
  type ProjectsTab,
} from '@/components/projects/types/projects.types'
import { firstLetterUppercase } from '@/utils'
import { Tab, Tabs } from '@heroui/tabs'
import { useState } from 'react'
import PORTFOLIO_PROJECTS_DATA from '../data/project.consts'
import ProjectCard from './ProjectCard'

function Projects() {
  const [selectedTab, setSelectedTab] = useState<ProjectsTab>(
    ProjectsTabEnum.ALL,
  )

  return (
    <article className='flex min-h-dvh w-full flex-col gap-6 px-6 py-6 md:px-12'>
      <div className='flex w-full flex-col items-center justify-between gap-6 md:flex-row'>
        <h2 className='text-[clamp(1.75rem,3vw,2.5rem)] font-bold'>Projects</h2>

        <Tabs
          aria-label='Projects Tabs'
          selectedKey={selectedTab}
          onSelectionChange={(key) => setSelectedTab(key as ProjectsTab)}
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

      <div className='grid w-full grid-cols-1 gap-6 pt-4 md:grid-cols-2 lg:grid-cols-3'>
        {PORTFOLIO_PROJECTS_DATA.filter((project) => {
          if (selectedTab === ProjectsTabEnum.ALL) return true
          return project.type === selectedTab
        }).map((project, index) => (
          <ProjectCard
            key={`${index}-${project.title}`}
            project={project}
            altIcon={project.altIcon}
            bgColor={project.bgColor}
          />
        ))}
      </div>
    </article>
  )
}

export default Projects
