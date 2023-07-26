import Spacer from './Spacer'
import Link from 'next/link'
import ThemeSwitch from './ThemeSwitch'

export default function Header() {
  return (
    <header className="px-4 h-16 shadow-md backdrop-blur sticky top-0 z-10">
      <nav className="h-full mx-auto max-w-7xl flex justify-between items-center">
        <ul className="flex gap-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/post">Post</Link>
          </li>
          <li>
            <Link href="/course">Course</Link>
          </li>
          <li>
            <Link href="/interview">Interview</Link>
          </li>
        </ul>
        <Spacer />
        <ThemeSwitch />
      </nav>
    </header>
  )
}
