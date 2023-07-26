import Spacer from './Spacer'
import Link from 'next/link'
import NavLink from './NavLink'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  return (
    <header className="px-4 h-16 shadow-md backdrop-blur sticky top-0 z-10">
      <nav className="h-full mx-auto container flex justify-between items-center">
        <Link href="/">
          <span className="text-4xl">👨‍💻</span>
        </Link>
        <NavLink />
        <Spacer />
        <ThemeSwitch />
      </nav>
    </header>
  )
}
