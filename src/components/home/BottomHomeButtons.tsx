import { DownloadIcon } from '@assets/icons/DownloadIcon'
import { EmailIcon, GithubIcon, LinkedinIcon } from '@assets/icons'
import { Button } from '@heroui/button'
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from '@app/consts/global.consts'

function BottomHomeButtons() {
  const handleOpenNewTab = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className='flex w-full justify-center gap-6'>
      <Button
        variant='faded'
        aria-label='Download my CV'
        className='font-bold'
        onPress={() => handleOpenNewTab(CV_URL)}
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
        onPress={() => handleOpenNewTab(LINKEDIN_URL)}
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
        onPress={() => handleOpenNewTab(GITHUB_URL)}
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
