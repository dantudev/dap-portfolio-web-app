import type { Experience } from '@/types/experience.types'
import { formatPeriod, formatPeriodWithDuration } from '@/utils'
import { CalendarIcon, MapPinIcon } from '@assets/icons'
import { Avatar } from '@heroui/avatar'
import { Chip } from '@heroui/chip'
import { Tooltip } from '@heroui/tooltip'

type TimelineProps = {
  experiences: Experience[]
  maxVisibleChips?: number
  calculateTotalPeriod?: boolean
}

export default function Timeline({
  experiences,
  maxVisibleChips = 5,
  calculateTotalPeriod = true,
}: TimelineProps) {
  return (
    <div className='max-w-(--breakpoint-sm) mx-auto px-6 py-12 md:py-20'>
      <div className='relative ml-3'>
        {/* Timeline line */}
        <div className='absolute bottom-0 left-0 top-4 border-l-2' />

        {experiences.map(
          (
            {
              company,
              description,
              startDate,
              endDate,
              technologies,
              title,
              logo,
              location,
            },
            index,
          ) => {
            const visibleTechs = technologies.slice(0, maxVisibleChips)
            const hiddenTechs = technologies.slice(maxVisibleChips)
            const hasMoreTechs = hiddenTechs.length > 0
            const periodDisplay = calculateTotalPeriod
              ? formatPeriodWithDuration(startDate, endDate)
              : formatPeriod(startDate, endDate)

            return (
              <div
                key={`${index}-${startDate}-${title}`}
                className='relative pb-12 pl-8 last:pb-0'
              >
                {/* Timeline dot */}
                <div className='absolute left-px top-3 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background' />

                {/* Content */}
                <div className='space-y-3'>
                  {company && (
                    <div className='flex items-center gap-2.5'>
                      <div className='bg-accent flex h-12 w-12 shrink-0 items-center justify-center rounded-full'>
                        <Avatar
                          showFallback
                          name={company}
                          src={logo}
                          alt={`${company} logo`}
                          className='text-muted-foreground'
                          radius='md'
                        />
                      </div>
                      <span className='text-base font-medium'>{company}</span>
                    </div>
                  )}
                  <div>
                    <h3 className='text-xl font-semibold tracking-[-0.01em]'>
                      {title}
                    </h3>
                    <div className='mt-2 flex items-center gap-2 text-sm'>
                      <CalendarIcon
                        height={20}
                        width={20}
                      />
                      <span>{periodDisplay}</span>
                    </div>
                    {location && (
                      <div className='mt-2 flex items-center gap-2 text-sm'>
                        <MapPinIcon
                          height={20}
                          width={20}
                          strokeWidth={2}
                        />
                        <span>{location}</span>
                      </div>
                    )}
                  </div>
                  {description && (
                    <p className='text-muted-foreground text-pretty text-sm sm:text-base'>
                      {description}
                    </p>
                  )}
                  <div className='flex flex-wrap items-center gap-2'>
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
                          +{hiddenTechs.length} others...
                        </span>
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            )
          },
        )}
      </div>
    </div>
  )
}
