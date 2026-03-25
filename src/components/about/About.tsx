import { ABOUT_CONTENT } from './data/about.consts'

export function About() {
  return (
    <section
      id='about'
      className='flex min-h-dvh w-full flex-col items-start justify-center gap-6 px-6 py-16 lg:px-12'
    >
      <h1 className='text-[clamp(1.75rem,3vw,2.5rem)] font-bold'>About me</h1>
      <div className='flex w-full flex-col gap-12 lg:flex-row lg:gap-16'>
        <div className='w-full lg:w-5/12'>
          <div className='lg:sticky lg:top-24'>
            <div className='sm:aspect-3/4 relative w-full overflow-hidden rounded-[2.5rem]'>
              <img
                src='/svg/programming-about-me.svg'
                alt='About me'
                className='h-fit w-full sm:h-full'
              />
            </div>
          </div>
        </div>

        <article className='flex w-full flex-col justify-center gap-6 lg:w-7/12'>
          {ABOUT_CONTENT.map((content, index) => (
            <p
              key={index}
              className='text-base leading-relaxed sm:text-lg lg:text-xl'
            >
              {content}
            </p>
          ))}
        </article>
      </div>
    </section>
  )
}
