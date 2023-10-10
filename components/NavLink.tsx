'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

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

const NavLink = () => {
  const pathname = usePathname()
  return (
    <ul className="flex gap-2">
      {links.map((link) => (
        <li
          key={link.name}
          className={`cursor-pointer hover:bg-black/10 hover:dark:bg-white/10 p-2 rounded-lg ${
            pathname == link.href ? 'bg-slate-900/10 dark:bg-slate-100/10' : ''
          }`}
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default NavLink
