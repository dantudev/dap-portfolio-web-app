import { EmailIcon, SendIcon } from '@/assets/icons'
import { Button, Form, Input, Link, Spinner, Textarea } from '@heroui/react'
import { sendContactEmail } from '../../data/email.api'
import { useState } from 'react'

const inputClassNames = {
  label: 'text-black/70 font-medium',
  input: ['bg-transparent', 'text-black/90', 'placeholder:text-black/40'],
  innerWrapper: 'bg-transparent',
  inputWrapper: [
    'bg-white',
    'shadow-none',
    'hover:bg-white',
    'hover:border-black/10',
    'group-data-[focus=true]:bg-white',
    'group-data-[focus=true]:border-black/10',
  ],
}

function ContactForm() {
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))

    if (data.name && data.email && data.message && data.subject) {
      setIsLoading(true)
      sendContactEmail({
        app_name: __APP_NAME__,
        from_name: String(data.name),
        from_email: String(data.email),
        from_subject: String(data.subject),
        from_message: String(data.message),
      })
        .finally(() => {
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
      e.currentTarget.reset()
    }
  }

  return (
    <div className='h-fit w-full rounded-2xl bg-[#F2F4F7] p-8 md:w-3/5'>
      <Form onSubmit={onSubmit}>
        {isLoading ? (
          <div className='flex h-full min-h-96 w-full items-center justify-center'>
            <Spinner size='lg' />
          </div>
        ) : (
          <div className='flex min-h-96 w-full flex-col gap-4'>
            <div className='flex w-full flex-col gap-4 md:flex-row'>
              <Input
                isRequired
                classNames={inputClassNames}
                label='Full name'
                labelPlacement='outside'
                name='name'
                placeholder='Your name'
                type='text'
              />
              <Input
                isRequired
                classNames={inputClassNames}
                label='Email'
                labelPlacement='outside'
                name='email'
                placeholder='your@email.com'
                type='email'
                endContent={
                  <EmailIcon
                    className='h-4 w-4'
                    strokeWidth={2.2}
                  />
                }
              />
            </div>
            <Input
              classNames={inputClassNames}
              label='Subject'
              isRequired
              labelPlacement='outside'
              name='subject'
              placeholder="What's this about?"
              type='text'
            />
            <Textarea
              isRequired
              classNames={inputClassNames}
              label='Message'
              labelPlacement='outside'
              className='col-span-12 mb-6 md:col-span-6 md:mb-0'
              minRows={8}
              name='message'
              placeholder='Tell me about your project, idea, or just say hi...'
              type='text'
            />
          </div>
        )}
        <div className='flex w-full items-center justify-between'>
          <span className='text-sm font-medium'>
            or just reach out manually to{' '}
            <Link
              className='text-sm font-medium'
              href='mailto:antunezdavid2003@gmail.com'
            >
              antunezdavid2003@gmail.com
            </Link>
          </span>
          <Button
            startContent={<SendIcon className='h-4 w-4 shrink-0' />}
            type='submit'
            aria-label='Submit contact form'
            variant='flat'
            color='primary'
            className='w-fit px-5 font-bold'
            isDisabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default ContactForm
