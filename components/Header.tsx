'use client'
import Spacer from './Spacer'
import Link from 'next/link'
import NavLink from './NavLink'
import ThemeSwitch from './ThemeSwitch'

const links = [
  {
    name: 'Home',
    href: '/'
  },
  {
    name: 'Post',
    href: '/post'
  },
  {
    name: 'Course',
    href: '/course'
  },
  {
    name: 'Interview',
    href: '/interview'
  },
  {
    name: 'Links',
    href: '/links'
  }
]

export default function Header() {
  return (
    <header className="px-4 h-16 shadow-md backdrop-blur sticky top-0 z-10 dark:bg-white/10">
      <nav className="h-full mx-auto container flex justify-between items-center">
        <Link href="/">
          <span className="text-4xl">👨‍💻</span>
        </Link>
        <ul className="flex gap-2">
          {links.map(({ name, href }) => (
            <li
              key={name}
              className="[&:has(.isActive)]:bg-slate-900/10 dark:[&:has(.isActive)]:bg-slate-100/10 cursor-pointer hover:bg-black/10 hover:dark:bg-white/10 p-2 rounded-lg"
            >
              <NavLink
                href={href}
                className={({ isActive }) => (isActive ? 'isActive' : '')}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Spacer />
        <ThemeSwitch />
      </nav>
    </header>
  )
}
