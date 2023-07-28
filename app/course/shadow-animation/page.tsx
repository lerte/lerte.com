'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Page() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col items-center">
      <input
        type="checkbox"
        className="toggle"
        checked={theme === 'light'}
        onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
      />
    </div>
  )
}
