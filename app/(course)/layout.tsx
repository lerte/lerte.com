export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <main className="grow bg-slate-900 grid place-content-center">
        {children}
      </main>
    </div>
  )
}
