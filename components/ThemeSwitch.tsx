'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Sun, Moon, Laptop } from 'lucide-react'

const ThemeSwitch = () => {
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
      {theme === 'system' && <Laptop onClick={() => setTheme('system')} />}
      {theme === 'dark' && <Sun onClick={() => setTheme('light')} />}
      {theme === 'light' && <Moon onClick={() => setTheme('dark')} />}
    </div>
  )
}

export default ThemeSwitch
