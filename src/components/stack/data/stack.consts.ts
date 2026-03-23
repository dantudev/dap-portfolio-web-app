import type { StackSectionType } from '../types/stack.types'

export const stackData: StackSectionType[] = [
  {
    id: 'web',
    title: 'Web',
    className: 'md:col-span-3 md:row-span-2',
    items: [
      { title: 'React', color: '#61DAFB' },
      { title: 'Angular', color: '#DD0031' },
      { title: 'TypeScript', color: '#3178C6' },
    ],
  },
  {
    id: 'ux',
    title: 'UX/UI',
    className: 'md:col-span-2 md:row-span-1',
    items: [
      { title: 'Figma', color: '#F24E1E' },
      { title: 'Sketch', color: '#F7B500' },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    className: 'md:col-span-2 md:row-span-1',
    items: [
      { title: 'React Native', color: '#61DAFB' },
      { title: 'Flutter', color: '#02569B' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    className: 'md:col-span-2 md:row-span-2',
    items: [
      { title: 'Node.js', color: '#339933' },
      { title: 'Express', color: '#000000' },
      { title: 'PostgreSQL', color: '#336791' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    className: 'md:col-span-3 md:row-span-2',
    items: [
      { title: 'Git', color: '#F05032' },
      { title: 'Docker', color: '#2496ED' },
      { title: 'Jest', color: '#C21325' },
    ],
  },
]
