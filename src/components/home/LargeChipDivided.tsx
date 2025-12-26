import { Divider } from '@heroui/react'
import { MapPinIcon } from '@assets/icons/MapPinIcon'
import { getYearsOfExperience } from '@utils/getYearsOfExperience.util'

function LargeChipDivided() {
  return (
    <div className='grid grid-cols-[1fr_auto_1fr] items-center rounded-full border-2 border-[#d4d4d8] px-10 py-4 text-2xl'>
      <div className='flex justify-end pr-6'>
        <span>
          <strong>{getYearsOfExperience()}</strong> years of experience
        </span>
      </div>
      <Divider
        orientation='vertical'
        className='h-6 w-0.5 bg-[#d4d4d8]'
      />
      <div className='flex items-center justify-start gap-4 pl-6'>
        <MapPinIcon
          height={28}
          width={28}
          strokeWidth={2}
        />
        <span>Málaga, Spain</span>
      </div>
    </div>
  )
}

export default LargeChipDivided
