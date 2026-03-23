import { Avatar } from '@heroui/avatar'
import BottomHomeButtons from './BottomHomeButtons'
import LargeChipDivided from './LargeChipDivided'
import MainTitles from './MainTitles'
import ScrollDownIndicator from './scroll-down-indicator/ScrollDownIndicator'

function Home() {
  return (
    <div
      id='home'
      className='flex h-full w-full flex-col items-center'
    >
      <div className='flex flex-1 flex-col items-center justify-center gap-4 px-4'>
        <Avatar
          alt='David Antúnez Pérez'
          className='h-[clamp(10rem,25vh,15rem)] w-[clamp(10rem,25vh,15rem)]'
          isBordered
          src='/images/david_avatar.webp'
        />
        <MainTitles />
        <LargeChipDivided />
        <BottomHomeButtons />
      </div>
      <div className='relative h-24 w-full shrink-0'>
        <ScrollDownIndicator />
      </div>
    </div>
  )
}

export default Home
