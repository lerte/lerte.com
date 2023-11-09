'use client'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="grow p-2 bg-slate-900 grid place-content-center">
        {children}
      </main>
      <Footer />
    </div>
  )
}
