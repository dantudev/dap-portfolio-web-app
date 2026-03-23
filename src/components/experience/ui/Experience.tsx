import {
    ExperienceTabEnum,
    type ExperienceTab,
} from '@/components/experience/types/experience.types'
import Timeline from '@/components/experience/ui/Timeline'
import {
    educationExperiences,
    workExperiences,
} from '@app/consts/content/experience.consts'
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
      className='flex min-h-dvh w-full flex-col gap-6 px-6 py-6 md:px-12'
    >
      <div className='flex w-full flex-col items-center justify-between gap-6 md:flex-row'>
        <h1 className='text-[clamp(1.75rem,3vw,2.5rem)] font-bold'>Experience</h1>

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
        <Timeline
          calculateTotalPeriod={selectedTab === ExperienceTabEnum.WORK}
          experiences={experiencesMap[selectedTab]}
        />
      </div>
    </article>
  )
}
