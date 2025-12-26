import { DownloadIcon } from '@assets/icons/DownloadIcon'
import { EmailIcon, GithubIcon, LinkedinIcon } from '@assets/icons'
import { Button } from '@heroui/button'
import { CV_URL, GITHUB_URL, LINKEDIN_URL } from '@app/consts/global.consts'
import { openInNewTab, goToSection } from '@utils/index'

function BottomHomeButtons() {
  return (
    <div className='flex flex-wrap justify-center gap-2 md:gap-6'>
      <Button
        variant='faded'
        aria-label='Download my CV'
        className='font-bold'
        onPress={() => openInNewTab(CV_URL)}
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
        onPress={() => goToSection('contact')}
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
        onPress={() => openInNewTab(LINKEDIN_URL)}
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
        onPress={() => openInNewTab(GITHUB_URL)}
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
