import { LINKEDIN_URL, GITHUB_URL, CV_URL } from '@/app/consts/global.consts'
import { LinkedinIcon, GithubIcon, DownloadIcon } from '@/assets/icons'
import { openInNewTab } from '@/utils'
import { Button } from '@heroui/react'

function ContactButtons() {
  return (
    <div className='flex md:flex-col flex-wrap items-center justify-center gap-2 md:gap-4'>
      <div className='flex flex-wrap justify-center gap-2 md:gap-4'>
        <Button
          aria-label='LinkedIn'
          variant='flat'
          className='font-bold'
          onPress={() => openInNewTab(LINKEDIN_URL)}
        >
          <LinkedinIcon
            height={24}
            width={24}
            strokeWidth={1}
          />
          LinkedIn
        </Button>
        <Button
          aria-label='GitHub'
          variant='flat'
          className='font-bold'
          onPress={() => openInNewTab(GITHUB_URL)}
        >
          <GithubIcon
            height={24}
            width={24}
            strokeWidth={1}
          />
          GitHub
        </Button>
      </div>
      <Button
        variant='flat'
        aria-label='Download my CV'
        className='w-fit font-bold'
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
    </div>
  )
}

export default ContactButtons
