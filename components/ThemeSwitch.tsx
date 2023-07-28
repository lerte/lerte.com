'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

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
      <input
        type="checkbox"
        checked={theme === 'light'}
        onChange={(e) => setTheme(e.target.checked ? 'light' : 'dark')}
        className="appearance-none cursor-pointer w-6 h-6 rounded-full text-[#e6e6ff] shadow-[inset_8px_-6px_0] transition-shadow duration-500 checked:text-[#ffaa00] checked:scale-75 checked:shadow-[inset_0_0_0_24px,-15.6px_0_0_-9.6px,15.6px_0_0_-9.6px,0_-15.6px_0_-9.6px,0_15.6px_0_-9.6px,-10.8px_-10.8px_0_-9.6px,10.8px_10.8px_0_-9.6px,-10.8px_10.8px_0_-9.6px,10.8px_-10.8px_0_-9.6px]"
      />
    </div>
  )
}

export default ThemeSwitch
