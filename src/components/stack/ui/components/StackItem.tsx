import { DefaultIcon } from '@/assets/icons'
import type { StackItemType } from '../../types/stack.types'

export function StackItem({ title, icon, color }: StackItemType) {
  const Icon = icon ?? DefaultIcon

  return (
    <div
      className={`h-26 flex aspect-square w-24 flex-col items-center justify-center gap-2 rounded-xl p-4`}
      style={{ backgroundColor: `${color}1A` }}
    >
      <div className='text-4xl'>
        <Icon
          className='h-12 w-12'
          style={{ color }}
        />
      </div>
      <span
        className={`text-center text-sm font-medium leading-4`}
        style={{ color }}
      >
        {title}
      </span>
    </div>
  )
}
