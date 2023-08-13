'use client'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Page() {
  return (
    <div className="min-h-screen grid place-content-center">
      <div className="flex flex-col items-center">
        <ThemeSwitch size={240} />
      </div>
    </div>
  )
}
