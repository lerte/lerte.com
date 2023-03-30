'use client'
import 'xterm/css/xterm.css'
import { useEffect } from 'react'
import runWebContainer from '@/lib/webcontainer.js'

export default function Editor() {
  useEffect(() => {
    const initTerminal = async () => {
      const { Terminal } = await import('xterm')
      const terminal = new Terminal({
        convertEol: true
      })
      const terminalEl = document.querySelector('.terminal')
      terminal.open(terminalEl)
      runWebContainer(terminal)
    }
    initTerminal()
  }, [])

  return (
    <>
      <div className="container mx-auto grid h-[50vh] grid-cols-[1fr,1fr] gap-4 py-4">
        <textarea className="h-full w-full resize-none rounded-lg bg-black px-4 py-2 text-white"></textarea>
        <iframe className="h-full w-full rounded-lg" src="loading.html" />
      </div>
      <div className="terminal container mx-auto"></div>
    </>
  )
}
