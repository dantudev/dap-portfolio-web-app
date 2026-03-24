import type { StackSectionType } from '../../types/stack.types'
import { StackItem } from './StackItem'

type BentoItemProps = {
  section: StackSectionType
}

function BentoItem({ section }: BentoItemProps) {
  return (
    <div className={`rounded-2xl bg-[#F2F4F7] p-5 ${section.className}`}>
      <div className='flex h-full flex-col gap-4'>
        <h2 className='text-lg font-semibold'>{section.title}</h2>

        <div className='flex flex-wrap gap-6'>
          {section.items.map((item) => (
            <StackItem
              key={item.title + item.color}
              title={item.title}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

type StackBentoGridProps = {
  sections: StackSectionType[]
}

export function StackBentoGrid({ sections }: StackBentoGridProps) {
  return (
    <div className='grid w-full auto-rows-auto grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5'>
      {sections.map((section) => (
        <BentoItem
          key={section.id}
          section={section}
        />
      ))}
    </div>
  )
}
