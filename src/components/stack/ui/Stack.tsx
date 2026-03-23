import { stackData } from '../data/stack.consts'
import { StackBentoGrid } from './components/StackBentoGrid'

function Stack() {
  return (
    <article
      id='stack'
      className='flex min-h-dvh w-full flex-col gap-6 px-12 py-6'
    >
      <div className='flex w-full flex-col items-start justify-center gap-6'>
        <h1 className='text-[2.5rem] font-bold'>Stack</h1>
        <StackBentoGrid sections={stackData} />
      </div>
    </article>
  )
}

export default Stack
