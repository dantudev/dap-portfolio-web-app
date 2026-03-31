import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/inter'
import './styles/index.css'
import App from './app/App.tsx'
import { HeroUIProvider, ToastProvider } from '@heroui/react'

createRoot(document.getElementById('root')!).render(
  <HeroUIProvider>
    <ToastProvider />
    <StrictMode>
      <App />
    </StrictMode>
  </HeroUIProvider>,
)
