import { DefaultIcon, GithubIcon, URLLinkIcon } from '@/assets/icons'
import { Button, Chip, Image, Tooltip } from '@heroui/react'
import type React from 'react'
import type { Project } from '../types/projects.types'
import { ProjectTypeChip } from './ProjectTypeChip'

interface ProjectCardProps {
  project: Project
  altIcon?: React.ReactNode
  bgColor?: string
  maxVisibleChips?: number
}

function ProjectCard({
  project,
  altIcon,
  bgColor = '#C4C4C4',
  maxVisibleChips = 4,
}: ProjectCardProps) {
  const {
    title,
    description,
    type,
    technologies,
    codeLink,
    webLink,
    imageSrc,
  } = project

  const visibleTechs = technologies.slice(0, maxVisibleChips)
  const hiddenTechs = technologies.slice(maxVisibleChips)
  const hasMoreTechs = hiddenTechs.length > 0

  return (
    <div className='flex h-full w-full flex-col'>
      {/* Main Image */}
      <div className='relative w-full overflow-hidden rounded-[18px]'>
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            className='h-full w-full object-cover'
            removeWrapper
          />
        ) : (
          <div
            className='w-full'
            style={{ paddingTop: '56.25%', backgroundColor: bgColor }}
          >
            <div className='absolute inset-0 flex items-center justify-center'>
              {altIcon ?? <DefaultIcon className='w-22 h-22 text-[#444444]' />}
            </div>
          </div>
        )}

        <ProjectTypeChip
          type={type}
          className='absolute right-3 top-3 z-10'
        />
      </div>

      {/* Card Content */}
      <div className='flex grow flex-col gap-4 pt-4'>
        <div className='flex flex-wrap items-center gap-2 text-sm text-default-700'>
          {visibleTechs.map((tech) => (
            <Chip
              key={tech}
              variant='flat'
              className='rounded-full'
            >
              {tech}
            </Chip>
          ))}
          {hasMoreTechs && (
            <Tooltip
              content={
                <div className='flex max-w-xs flex-wrap gap-1 p-1 py-3'>
                  {hiddenTechs.map((tech) => (
                    <Chip
                      key={tech}
                      variant='flat'
                      size='sm'
                      className='rounded-full'
                    >
                      {tech}
                    </Chip>
                  ))}
                </div>
              }
            >
              <span className='cursor-pointer text-sm text-primary hover:underline'>
                +{hiddenTechs.length} more...
              </span>
            </Tooltip>
          )}
        </div>
        <div className='flex grow flex-col gap-2'>
          <h2 className='text-xl font-bold'>{title}</h2>
          <p className='text-default-700'>{description}</p>
        </div>
      </div>

      {/* Card Actions */}
      <div className='flex items-center justify-center gap-6 pt-4'>
        {codeLink && (
          <Button
            variant='flat'
            color='default'
            className='font-bold'
            onPress={() =>
              window.open(codeLink, '_blank', 'noopener,noreferrer')
            }
          >
            <GithubIcon className='h-5 w-5' />
            Code
          </Button>
        )}
        {webLink && (
          <Button
            variant='flat'
            color='primary'
            className='font-bold'
            onPress={() =>
              window.open(webLink, '_blank', 'noopener,noreferrer')
            }
          >
            <URLLinkIcon className='h-5 w-5' />
            Visit
          </Button>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
