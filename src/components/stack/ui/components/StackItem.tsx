import { DefaultIcon } from '@/assets/icons'

interface StackItemProps {
  title: string
  icon?: React.ReactNode
  color?: string
}

export function StackItem({ title, icon, color }: StackItemProps) {
  return (
    <div className={`flex flex-col items-center gap-2 rounded-lg p-4`}>
      <div className='text-4xl'>
        {icon ? (
          icon
        ) : (
          <DefaultIcon
            className='h-12 w-12'
            style={{ color }}
          />
        )}
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
