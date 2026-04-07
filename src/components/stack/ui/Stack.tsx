import { stackData } from '../data/stack.consts'
import { StackBentoGrid } from './components/StackBentoGrid'

function Stack() {
  return (
    <article
      className='flex min-h-dvh w-full flex-col gap-6 px-6 py-6 md:px-12'
    >
      <div className='flex w-full flex-col items-start justify-center gap-6'>
        <h1 className='text-[clamp(1.75rem,3vw,2.5rem)] font-bold'>Stack</h1>
        <StackBentoGrid sections={stackData} />
      </div>
    </article>
  )
}

export default Stack
