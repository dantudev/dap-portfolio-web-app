import { MapPinIcon } from '@assets/icons/MapPinIcon'
import { Divider } from '@heroui/react'
import { getYearsOfExperience } from '@utils/getYearsOfExperience.util'

function LargeChipDivided() {
  return (
    <div className='grid grid-cols-[1fr_auto_1fr] items-center rounded-full border-2 border-[#d4d4d8] px-[clamp(1.5rem,2vw,2.5rem)] py-[clamp(0.5rem,0.8vw,1rem)]'>
      <div className='flex justify-end pr-[clamp(0.75rem,1vw,1.5rem)]'>
        <span className='text-[clamp(0.875rem,1.3vw,1.5rem)]'>
          <strong>{getYearsOfExperience()}</strong> years of experience
        </span>
      </div>
      <Divider
        orientation='vertical'
        className='h-6 w-0.5 bg-[#d4d4d8]'
      />
      <div className='flex items-center justify-start gap-[clamp(0.5rem,0.8vw,1rem)] pl-[clamp(0.75rem,1vw,1.5rem)]'>
        <MapPinIcon
          className='h-[clamp(1.25rem,1.5vw,1.75rem)] w-[clamp(1.25rem,1.5vw,1.75rem)]'
          strokeWidth={2}
        />
        <span className='text-[clamp(0.875rem,1.3vw,1.5rem)]'>Málaga, Spain</span>
      </div>
    </div>
  )
}

export default LargeChipDivided
