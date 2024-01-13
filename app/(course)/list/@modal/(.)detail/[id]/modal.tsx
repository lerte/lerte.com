'use client'

import { X } from 'lucide-react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { type ElementRef, useEffect, useRef } from 'react'

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ElementRef<'dialog'>>(null)

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()
    }
  }, [])

  function onDismiss() {
    router.back()
  }

  return createPortal(
    <div className="modal-backdrop">
      <dialog ref={dialogRef} className="relative" onClose={onDismiss}>
        <button
          onClick={onDismiss}
          className="absolute right-4 top-4 bg-black rounded-full p-2"
        >
          <X color="white" />
        </button>
        {children}
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  )
}
