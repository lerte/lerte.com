'use client'

import { useTheme } from 'next-themes'
import { CSSProperties, useEffect, useState } from 'react'

const ThemeSwitch = ({ size }: { size?: number }) => {
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
        type="checkbox"
        style={
          {
            '--size': size ? size + 'px' : '24px'
          } as CSSProperties
        }
        checked={theme === 'light'}
        className="toggle"
        onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
      />
    </div>
  )
}

export default ThemeSwitch
