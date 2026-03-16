// TODO: Remove bg colors and handle them via tailwind
export const MENU_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  {
    id: 'experience',
    label: 'Experience',
    href: '#experience',
  },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'stack', label: 'Stack', href: '#stack', bg: 'bg-yellow-100' },
  {
    id: 'contact',
    label: 'Contact',
    href: '#contact',
    bg: 'bg-pink-100',
    showInHeader: false,
  },
]
