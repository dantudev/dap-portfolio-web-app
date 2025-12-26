import Home from './home/Home'

function Content() {
  return (
    <main className='flex w-full flex-1 flex-col items-center justify-center gap-4'>
      <Home />
      <div
        className='pb-200'
      >
        <h1 id='section-2'>Section 2</h1>
      </div>
    </main>
  )
}

export default Content
