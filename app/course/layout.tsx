'use client'

import Header from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="grid min-h-screen place-content-center gap-4">
        {children}
      </main>
    </>
  )
}
