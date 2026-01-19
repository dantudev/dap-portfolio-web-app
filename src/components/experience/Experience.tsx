import {
  ExperienceTabEnum,
  type ExperienceTab,
} from '@/types/experiences.types'
import {
  educationExperiences,
  workExperiences,
} from '@app/consts/content/experience.consts'
import Timeline from '@components/ui/Timeline'
import { Tab, Tabs } from '@heroui/tabs'
import { useState } from 'react'

const experiencesMap = {
  [ExperienceTabEnum.WORK]: workExperiences,
  [ExperienceTabEnum.EDUCATION]: educationExperiences,
} as const

export function Experience() {
  const [selectedTab, setSelectedTab] = useState<ExperienceTab>(
    ExperienceTabEnum.WORK,
  )

  return (
    <article
      id='experience'
      className='flex min-h-dvh w-full flex-col gap-6 px-12 py-6'
    >
      <div className='flex w-full flex-col items-center justify-start gap-6 md:flex-row'>
        <h1 className='text-[2.5rem] font-bold'>Experience</h1>

        <Tabs
          aria-label='Experience Tabs'
          selectedKey={selectedTab}
          onSelectionChange={(key) => setSelectedTab(key as ExperienceTab)}
        >
          <Tab
            key={ExperienceTabEnum.WORK}
            title='Work'
          />
          <Tab
            key={ExperienceTabEnum.EDUCATION}
            title='Education'
          />
        </Tabs>
      </div>

      <div className='w-full'>
        <Timeline experiences={experiencesMap[selectedTab]} />
      </div>
    </article>
  )
}
