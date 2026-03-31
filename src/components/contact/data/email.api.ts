import emailjs from '@emailjs/browser'
import { addToast } from '@heroui/react'

type SendEmailParams = {
  app_name: string
  from_name: string
  from_email: string
  subject?: string
  message: string
}

export const sendContactEmail = async ({
  app_name,
  from_name,
  from_email,
  subject,
  message,
}: SendEmailParams) => {
  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      {
        app_name,
        from_name,
        from_email,
        from_message: subject ? subject + '\n\n' + message : message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
    )

    addToast({
      title: 'Successfully sent email',
      description:
        'Successfully sent contact email. I will get back to you as soon as possible.',
      color: 'success',
    })

    return response
  } catch (error) {
    const description =
      error && typeof error === 'object' && 'text' in error
        ? (error as { text: string }).text
        : error instanceof Error
          ? error.message
          : 'Failed to send email. Please try again later.'

    addToast({
      title: 'Error sending email',
      description:
        description || 'Failed to send email. Please try again later.',
      color: 'danger',
    })

    throw error
  }
}
