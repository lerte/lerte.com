'use client'
import { useId } from 'react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Page() {
  const id = useId()
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
        id={id}
        type="checkbox"
        className="toggle"
        checked={theme === 'light'}
        onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
      />
      <label htmlFor={id}>Toggle dark mode</label>
    </div>
  )
}
