import { DownloadIcon } from '@assets/icons/DownloadIcon'
import { EmailIcon, GithubIcon, LinkedinIcon } from '@assets/icons'
import { Button } from '@heroui/button'

function BottomHomeButtons() {
  return (
    <div className='flex w-full justify-center gap-6'>
      <Button
        variant='faded'
        aria-label='Download my CV'
        className='font-bold'
        startContent={
          <DownloadIcon
            height={18}
            width={18}
            strokeWidth={2}
          />
        }
      >
        Download my CV
      </Button>
      <Button
        variant='faded'
        aria-label='Contact'
        className='font-bold'
        startContent={
          <EmailIcon
            height={18}
            width={18}
            strokeWidth={2}
          />
        }
      >
        Contact
      </Button>
      <Button
        isIconOnly
        aria-label='Linkedin'
        variant='faded'
      >
        <LinkedinIcon
          height={24}
          width={24}
          strokeWidth={1}
        />
      </Button>
      <Button
        isIconOnly
        aria-label='Github'
        variant='faded'
      >
        <GithubIcon
          height={24}
          width={24}
          strokeWidth={1}
        />
      </Button>
    </div>
  )
}

export default BottomHomeButtons
