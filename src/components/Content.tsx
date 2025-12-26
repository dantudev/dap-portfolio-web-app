import Home from './home/Home'

function Content() {
  const sections = [
    { id: 'home', label: 'Home', bg: 'bg-white' },
    { id: 'experience', label: 'Experience', bg: 'bg-blue-100' },
    { id: 'projects', label: 'Projects', bg: 'bg-green-100' },
    { id: 'stack', label: 'Stack', bg: 'bg-yellow-100' },
    { id: 'contact', label: 'Contact', bg: 'bg-pink-100' },
  ]

  return (
    <main className='flex w-full flex-1 flex-col'>
      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className={`${section.bg} flex w-full items-center justify-center min-h-dvh`}
        >
          {section.id === 'home' ? (
            <Home />
          ) : (
            <h1 className='text-5xl font-bold'>{section.label}</h1>
          )}
        </section>
      ))}
    </main>
  )
}

export default Content
