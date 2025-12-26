import type { IconProps } from './types'

export const DownloadIcon = (props: IconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      height={props.height}
      className={props.className}
      onClick={props.onClick}
      width={props.width}
      strokeWidth={props.strokeWidth}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3'
      />
    </svg>
  )
}
