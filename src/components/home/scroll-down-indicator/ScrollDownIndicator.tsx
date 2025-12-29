import { MENU_ITEMS } from '@app/consts/navigation.consts'
import styles from './ScrollDownIndicator.module.css'
import { Tooltip } from '@heroui/tooltip'

function ScrollDownIndicator() {
  const handleClick = () => {
    const target = document.getElementById(MENU_ITEMS[1].id)
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
        className={styles['mouse-icon'] + ' hidden cursor-pointer sm:block'}
        onClick={handleClick}
      >
        <div className={styles['scroll-wheel']} />
      </div>
    </Tooltip>
  )
}
export default ScrollDownIndicator
