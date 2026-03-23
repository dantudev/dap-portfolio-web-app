import { DefaultIcon } from '@/assets/icons'

interface StackItemProps {
  title: string
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>
  color?: string
}

export function StackItem({ title, icon, color }: StackItemProps) {
  const Icon = icon ?? DefaultIcon

  return (
    <div
      className={`flex aspect-square w-24 flex-col items-center justify-center gap-2 rounded-xl p-4`}
      style={{ backgroundColor: `${color}1A` }}
    >
      <div className='text-4xl'>
        <Icon
          className='h-12 w-12'
          style={{ color }}
        />
      </div>
      <span
        className={`text-sm font-medium`}
        style={{ color }}
      >
        {title}
      </span>
    </div>
  )
}
