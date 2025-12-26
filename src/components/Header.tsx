import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link,
} from '@heroui/react'

function Header() {
  return (
    <Navbar
      maxWidth='full'
      className='font-bold'
    >
      <NavbarBrand />
      <NavbarContent
        className='hidden gap-4 sm:flex'
        justify='center'
      >
        <NavbarItem isActive>
          <Link
            href='#'
            className='font-bold'
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color='foreground'
            href='#'
          >
            Stack
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={Link}
            color='primary'
            href='#'
            variant='flat'
            className='font-bold'
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

export default Header
