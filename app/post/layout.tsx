'use client'

import Header from '@/components/Header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
    </>
  )
}
