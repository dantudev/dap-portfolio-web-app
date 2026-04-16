import { Analytics } from '@vercel/analytics/react'
import Content from '../components/Content'
import Header from '../components/Header'

function App() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <Content />
      <Analytics />
    </div>
  )
}

export default App
