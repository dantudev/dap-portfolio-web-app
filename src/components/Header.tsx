import { MENU_ITEMS } from '@app/consts/navigation.consts'
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@heroui/react'
import { useEffect, useRef, useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>(
    window.location.hash || '#home',
  )

  const observer = useRef<IntersectionObserver | null>(null)
  const ignoreObserver = useRef(false)

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    const el = document.querySelector<HTMLElement>(href)
    if (!el) return

    ignoreObserver.current = true

    const navbarHeight =
      document.querySelector('nav')?.getBoundingClientRect().height || 0
    const elTop = el.getBoundingClientRect().top + window.scrollY
    const targetTop = elTop - navbarHeight

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    })

    setActiveSection(href)

    setTimeout(() => {
      ignoreObserver.current = false
    }, 600)

    history.pushState(null, '', href)
  }

  useEffect(() => {
    const sections = MENU_ITEMS.map((item) =>
      document.querySelector<HTMLElement>(item.href),
    ).filter(Boolean) as HTMLElement[]

    if (!sections.length) return

    observer.current = new IntersectionObserver(
      (entries) => {
        if (ignoreObserver.current) return

        let sectionInView = false
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
            sectionInView = true
          }
        })
        if (!sectionInView) {
          setActiveSection('')
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.5 },
    )

    sections.forEach((section) => observer.current?.observe(section))

    return () => observer.current?.disconnect()
  }, [])

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash
      requestAnimationFrame(() => handleNavClick(hash))
    }
  }, [])

  return (
    <Navbar
      maxWidth='full'
      className='font-bold'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='cursor-pointer sm:hidden'
        />
        <NavbarBrand />
      </NavbarContent>

      <NavbarContent
        className='hidden gap-4 sm:flex'
        justify='center'
      >
        {MENU_ITEMS.map((item) => (
          <NavbarItem
            key={item.href}
            isActive={activeSection === item.href}
          >
            <Link
              color={activeSection === item.href ? 'primary' : 'foreground'}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            variant='flat'
            color='primary'
            className='font-bold'
            onPress={() => handleNavClick('#contact')}
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {MENU_ITEMS.map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              className='w-full font-bold'
              href={item.href}
              size='lg'
              color={activeSection === item.href ? 'primary' : 'foreground'}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(item.href)
              }}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export default Header
