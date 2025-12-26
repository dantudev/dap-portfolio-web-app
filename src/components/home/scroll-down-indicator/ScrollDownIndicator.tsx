import styles from './ScrollDownIndicator.module.css'
import { Tooltip } from '@heroui/tooltip'

function ScrollDownIndicator() {
  const handleClick = () => {
    const target = document.getElementById('section-2') // TODO: Adjust target ID when section 2 is defined
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Tooltip
      content='Scroll Down'
      showArrow={true}
    >
      <div
        className={styles['mouse-icon'] + ' cursor-pointer'}
        onClick={handleClick}
      >
        <div className={styles['scroll-wheel']} />
      </div>
    </Tooltip>
  )
}
export default ScrollDownIndicator
