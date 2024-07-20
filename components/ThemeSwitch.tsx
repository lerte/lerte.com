'use client'

import { CSSProperties, ChangeEvent, useEffect, useState } from 'react'

import { useTheme } from 'next-themes'

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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const _theme = event.target.checked ? 'light' : 'dark'
    setTheme(_theme)
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
        className="toggle"
        checked={theme === 'light'}
        onChange={handleChange}
      />
    </div>
  )
}

export default ThemeSwitch
