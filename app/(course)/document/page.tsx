'use client'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export default function Page() {
  const [container, setContainer] = useState<HTMLElement>()
  useEffect(() => {
    setContainer(document.body)
  }, [])

  if (!container) {
    return null
  }

  return createPortal(<div>hello</div>, container)
}
