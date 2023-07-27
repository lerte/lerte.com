'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { useId } from 'react'

const ThemeSwitch = () => {
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
    <div className="flex gap-2 cursor-pointer">
      <input
        id={id}
        type="checkbox"
        className="toggle"
        checked={theme === 'light'}
        onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
      />
    </div>
  )
}

export default ThemeSwitch
