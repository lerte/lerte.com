'use client'

import { useState } from 'react'

export default function Accordion({
  title,
  children
}: {
  title: string
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAccordion = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="rounded-[20px] pt-11 px-10 pb-10 shadow-[0px_5px_18px_#511AA433]">
      <div
        onClick={toggleAccordion}
        className="flex justify-between items-center cursor-pointer"
      >
        <h2 className="text-[22px] font-bold text-[--color-primary]">
          {title}
        </h2>
        <svg
          className={`w-6 h-6 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="pt-[15px] text-[22px] text-[#4D4158]">{children}</div>
      )}
    </div>
  )
}
