import { Button } from '@heroui/react'
import Header from '../components/Header'

function App() {
  return (
    <>
      <Header />
      <main className='flex h-screen w-full flex-col items-center gap-6'>
        <section className='flex flex-col items-center gap-6'>
          <h1 className='font-black'>Hello, world</h1>
          <Button color='primary'>Button</Button>
        </section>
      </main>
    </>
  )
}

export default App
