'use client'
import Link from 'next/link'
// import {useRouter} from 'next/navigation'
import { usePathname } from 'next/navigation'

const NavLink = ({
  children,
  href,
  className,
  ...rest
}: {
  href: string
  children: React.ReactNode
  className?: string | ((props: { isActive: boolean }) => string | undefined)
}) => {
  const pathname = usePathname()
  const isActive = href == pathname
  return (
    <Link
      {...rest}
      href={href}
      className={
        typeof className == 'function' ? className({ isActive }) : className
      }
    >
      {children}
    </Link>
  )
}

export default function Page() {
  const pathname = usePathname()
  return (
    <div className="flex gap-4 text-6xl">
      <Link
        href="/course/navigation/home"
        className={`${
          pathname == '/course/navigation/home' ? 'text-red-500' : ''
        }`}
      >
        home
      </Link>
      <NavLink
        href="/course/navigation/about"
        className={({ isActive }) => (isActive ? 'text-green-500' : '')}
      >
        about
      </NavLink>
    </div>
  )
}
