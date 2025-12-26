import { Divider } from '@heroui/react'
import { MapPinIcon } from '@assets/icons/MapPinIcon'
import { getYearsOfExperience } from '@utils/getYearsOfExperience.util'

function LargeChipDivided() {
  return (
    <div className='grid grid-cols-[1fr_auto_1fr] items-center rounded-full border-2 border-[#d4d4d8] px-6 py-2 text-2xl md:px-10 md:py-4'>
      <div className='flex justify-end pr-3 md:pr-6'>
        <span className='text-[15px] md:text-2xl'>
          <strong>{getYearsOfExperience()}</strong> years of experience
        </span>
      </div>
      <Divider
        orientation='vertical'
        className='h-6 w-0.5 bg-[#d4d4d8]'
      />
      <div className='flex items-center justify-start gap-2 pl-3 md:gap-4 md:pl-6'>
        <MapPinIcon
          className='h-5.5 w-5.5 md:h-7 md:w-7'
          strokeWidth={2}
        />
        <span className='text-[15px] md:text-2xl'>Málaga, Spain</span>
      </div>
    </div>
  )
}

export default LargeChipDivided
