import ContactButtons from './components/ContactButtons'
import ContactForm from './components/ContactForm'

function Contact() {
  return (
    <article
      className='flex flex-col md:flex-row min-h-dvh justify-center items-center w-full gap-12 px-6 py-6 md:px-12'
    >
      <div className='flex flex-col items-center justify-center gap-4 w-full md:w-2/5'>
        <h1 className='text-[clamp(1.75rem,3vw,2.5rem)] font-bold'>
          Get in touch
        </h1>
        <h3 className='text-[clamp(1rem,3vw,1.3rem)] font-medium'>
          Let’s build impactful digital products together.
        </h3>
        <ContactButtons />
      </div>
      <ContactForm />
    </article>
  )
}

export default Contact
