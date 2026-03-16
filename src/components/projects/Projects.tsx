import { ProjectsTabEnum, type ProjectsTab } from '@/types/projects.types'
import { Tab, Tabs } from '@heroui/react'
import { useState } from 'react'
import { firstLetterUppercase } from '@/utils/firstLetterUpercase'

function Projects() {
  const [selectedTab, setSelectedTab] = useState<ProjectsTab>(
    ProjectsTabEnum.ALL,
  )

  return (
    <article
      id='experience'
      className='flex min-h-dvh w-full flex-col gap-6 px-12 py-6'
    >
      <div className='flex w-full flex-col items-center justify-between gap-6 md:flex-row'>
        <h1 className='text-[2.5rem] font-bold'>Projects</h1>

        <Tabs
          aria-label='Experience Tabs'
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

      <div className='w-full'>
      </div>
    </article>
  )
}

export default Projects
