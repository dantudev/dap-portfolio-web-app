import type { ComponentType, SVGProps } from 'react'

export interface StackItemType {
  title: string
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  color?: string
}

export interface StackSectionType {
  id: string
  title: string
  className?: string
  items: StackItemType[]
}
