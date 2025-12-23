import { Avatar } from '@heroui/avatar'

function Home() {
  return (
    <section className='flex w-full flex-1 flex-col items-center justify-center gap-6'>
      <div className='flex flex-col items-center justify-center'>
        <Avatar
          alt='David Antúnez Pérez'
          className='h-60 w-60'
          isBordered
          src='/public/images/david_avatar.webp'
        />
        <h1 className='text-[64px] font-black'>David Antúnez Pérez</h1>
        <h2 className='text-[48px] font-light'>
          Frontend Developer & UX/UI Designer
        </h2>
      </div>
    </section>
  )
}

export default Home
