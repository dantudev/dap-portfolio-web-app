import { BackendIcon, DefaultIcon, MobileIcon, WebIcon } from '@/assets/icons'
import { type ProjectsTab, ProjectsTabEnum } from '@/components/projects/types/projects.types'
import { firstLetterUppercase } from '@/utils'
import { Chip, Tooltip } from '@heroui/react'
import type { JSX } from 'react'

interface ProjectTypeChipsProps {
  type?: ProjectsTab
  clasName?: string
}

const typeStyles: Record<ProjectsTab, string> = {
  [ProjectsTabEnum.WEB]: 'bg-[#B3D6FF] text-[#006FEE]',
  [ProjectsTabEnum.MOBILE]: 'bg-[#B3FFCC] text-[#00832C]',
  [ProjectsTabEnum.BACKEND]: 'bg-[#FFB3BB] text-[#79000C]',
  [ProjectsTabEnum.ALL]: 'bg-gray-100 text-gray-800',
}

const typeIcons: Record<ProjectsTab, JSX.Element> = {
  [ProjectsTabEnum.WEB]: <WebIcon className='h-6 w-6' />,
  [ProjectsTabEnum.MOBILE]: <MobileIcon className='h-6 w-6' />,
  [ProjectsTabEnum.BACKEND]: <BackendIcon className='h-6 w-6' />,
  [ProjectsTabEnum.ALL]: <DefaultIcon className='h-6 w-6' />,
}

export function ProjectTypeChip({
  type = ProjectsTabEnum.ALL,
  clasName = '',
}: ProjectTypeChipsProps) {
  const chip = (
    <Chip className={`${typeStyles[type]} rounded-[14px] px-1 py-6 ${clasName}`}>
      {typeIcons[type]}
    </Chip>
  )

  return type === ProjectsTabEnum.ALL ? (
    chip
  ) : (
    <Tooltip content={firstLetterUppercase(type)}>{chip}</Tooltip>
  )
}
