import { Avatar } from '@heroui/avatar'
import LargeChipDivided from './LargeChipDivided'
import MainTitles from './MainTitles'
import BottomHomeButtons from './BottomHomeButtons'
import ScrollDownIndicator from './scroll-down-indicator/ScrollDownIndicator'

function Home() {
  return (
    <section
      id='home'
      className='flex w-full flex-1 flex-col items-center justify-center gap-6'
    >
      <div className='mt-26 flex min-h-[92dvh] flex-col items-center justify-start gap-4'>
        <Avatar
          alt='David Antúnez Pérez'
          className='h-60 w-60'
          isBordered
          src='/images/david_avatar.webp'
        />
        <MainTitles />
        <LargeChipDivided />
        <BottomHomeButtons />
      </div>
      <ScrollDownIndicator />
    </section>
  )
}

export default Home
