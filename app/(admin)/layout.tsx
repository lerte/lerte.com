import Link from 'next/link'
import Aside from '@/components/Aside'
import { Settings } from 'lucide-react'
import AppDrawer from '@/components/AppDrawer'
import UserPopover from '@/components/UserPopover'
import ThemeSwitch from '@/components/ThemeSwitch'
import { Button, Spacer, IconButton } from 'actify'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid grid-rows-[64px_1fr_56px] grid-cols-[0_1fr] lg:grid-cols-[240px_1fr] transition-all">
      <header className="bg-surface sticky top-0 z-50 shadow backdrop-blur col-start-1 col-end-3 px-4 flex gap-2 items-center justify-between">
        <Link href="/">
          <Button variant="text" className="font-black">
            Lerte
          </Button>
        </Link>
        <AppDrawer />
        <Spacer />
        <UserPopover />
        <IconButton color="primary">
          <Settings />
        </IconButton>
        <ThemeSwitch />
      </header>
      <Aside className="top-16 -translate-x-full lg:translate-x-0 w-[240px]" />
      <main className="p-4 bg-secondary/10 col-start-2 col-end-3">
        {children}
      </main>
      <footer className="col-start-2 col-en-3 bg-surface flex items-center px-4 justify-center lg:justify-between">
        <p>copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}
