import { ABOUT_CONTENT } from './data/about.consts'

export function About() {
  // TODO: Add picture
  return (
    <div
      id='about'
      className='flex flex-col xl:flex-row h-full w-full items-center justify-center gap-14 p-8'
    >
      <figure
        className='h-90 w-90 lg:h-150 lg:w-150 rounded-[2.5rem] bg-[#D9D9D9]'
        aria-hidden='true'
      />

      <article className='flex h-full w-full px-4 lg:w-1/2 flex-col justify-center gap-4'>
        <h1 className='text-[2.5rem] font-bold'>About me</h1>

        {ABOUT_CONTENT.map((content, index) => (
          <p
            key={index}
            className='text-xl leading-relaxed'
          >
            {content}
          </p>
        ))}
      </article>
    </div>
  )
}
