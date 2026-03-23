import { StackItem } from "./components/StackItem"

function Stack() {
  return (
    <article
      id='stack'
      className='flex min-h-dvh w-full flex-col gap-6 px-12 py-6'
    >
      <div className='flex w-full flex-col items-center justify-between gap-6 md:flex-row'>
        <h1 className='text-[2.5rem] font-bold'>Stack</h1>

        <StackItem title="React" color="#7D43" />
      </div>
    </article>
  )
}

export default Stack
