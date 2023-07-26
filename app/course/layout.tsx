'use client'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <ThemeSwitch />
      {children}
    </main>
  )
}
