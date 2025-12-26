import { Avatar } from '@heroui/avatar'
import LargeChipDivided from './LargeChipDivided'
import MainTitles from './MainTitles'
import BottomHomeButtons from './BottomHomeButtons'

function Home() {
  return (
    <section className='flex w-full flex-1 flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center justify-center gap-4'>
        <Avatar
          alt='David Antúnez Pérez'
          className='h-60 w-60'
          isBordered
          src='/public/images/david_avatar.webp'
        />
        <MainTitles />
        <LargeChipDivided />
        <BottomHomeButtons />
      </div>
    </section>
  )
}

export default Home
