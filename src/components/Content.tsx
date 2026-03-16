import { MENU_ITEMS } from '@app/consts/navigation.consts'
import Home from './home/Home'
import { About } from './about/About'
import { Experience } from './experience/Experience'
import Projects from './projects/Projects'

function Content() {
  return (
    <main className='flex w-full flex-1 flex-col'>
      {MENU_ITEMS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.bg ?? ''} flex min-h-dvh w-full items-center justify-center md:px-36`}
        >
          {section.id === 'home' ? (
            <Home />
          ) : section.id === 'about' ? (
            <About />
          ) : section.id === 'experience' ? (
            <Experience />
          ) : section.id === 'projects' ? (
            <Projects />
          ) : (
            <h1 className='text-5xl font-bold'>{section.label}</h1>
          )}
        </section>
      ))}
    </main>
  )
}

export default Content
