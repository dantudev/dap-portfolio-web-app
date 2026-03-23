import { MENU_ITEMS } from '@app/consts/navigation.consts'
import { About } from './about/About'
import { Experience } from './experience/ui/Experience'
import Home from './home/Home'
import Projects from './projects/ui/Projects'
import Stack from './stack/ui/Stack'

function Content() {
  return (
    <main className='flex w-full flex-1 flex-col'>
      {MENU_ITEMS.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.bg ?? ''} flex min-h-dvh w-full items-center justify-center px-4 md:px-[5%] lg:px-[8%] xl:px-36`}
        >
          {section.id === 'home' ? (
            <Home />
          ) : section.id === 'about' ? (
            <About />
          ) : section.id === 'experience' ? (
            <Experience />
          ) : section.id === 'projects' ? (
            <Projects />
          ) : section.id === 'stack' ? (
            <Stack />
          ) : (
            <h1 className='text-5xl font-bold'>{section.label}</h1>
          )}
        </section>
      ))}
    </main>
  )
}

export default Content
