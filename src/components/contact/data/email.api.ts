import emailjs from '@emailjs/browser'
import { addToast } from '@heroui/react'

type SendEmailParams = {
  app_name: string
  from_name: string
  from_email: string
  from_subject: string
  from_message: string
}

export const sendContactEmail = async ({
  app_name,
  from_name,
  from_email,
  from_subject,
  from_message,
}: SendEmailParams) => {
  // Automatic Metadata
  const date = new Date().toLocaleString()
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const user_agent = navigator.userAgent
  const platform = navigator.platform
  const language = navigator.language
  const screen_resolution = `${window.screen.width}x${window.screen.height}`
  const referrer = document.referrer
    ? new URL(document.referrer).hostname
    : 'Direct'

  try {
    const response = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
      {
        app_name,
        from_name,
        from_email,
        from_subject,
        from_message,
        date,
        timezone,
        user_agent,
        platform,
        language,
        screen_resolution,
        referrer,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string,
    )

    addToast({
      title: 'Successfully sent email',
      description: 'I will get back to you as soon as possible.',
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
