'use client'
import { useState, useRef } from 'react'

export default function Chatgpt() {
  const [height, setHeight] = useState(24)
  const ref = useRef<HTMLTextAreaElement>(null)
  const handleChange = () => {
    const { height } = ref.current?.getBoundingClientRect() || {}
    setHeight(height ?? 24)
  }
  return (
    <div className="flex min-h-[calc(100vh-64px)] gap-4 flex-col max-w-xl mx-auto">
      <div className="flex-grow"></div>
      <div className="flex-grow mb-10 flex max-h-48 flex-col py-[10px] md:py-4 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-xl shadow-xs dark:shadow-xs">
        <textarea
          ref={ref}
          rows={1}
          onChange={handleChange}
          placeholder="Send a message"
          style={{
            height: height + 'px'
          }}
          className="outline-0 max-h-48 m-0 w-full resize-none border-0 bg-transparent p-0 pr-10 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pr-12 pl-3 md:pl-0"
        />
        <button className="absolute p-1 rounded-md md:bottom-3 md:p-2 md:right-3 dark:hover:bg-gray-900 dark:disabled:hover:bg-transparent right-2 disabled:text-gray-400 enabled:bg-brand-purple text-white bottom-1.5 transition-colors disabled:opacity-40 bg-[rgb(25,195,125)]">
          <span className="" data-state="closed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 m-1 md:m-0"
              strokeWidth="2"
            >
              <path
                d="M.5 1.163A1 1 0 0 1 1.97.28l12.868 6.837a1 1 0 0 1 0 1.766L1.969 15.72A1 1 0 0 1 .5 14.836V10.33a1 1 0 0 1 .816-.983L8.5 8 1.316 6.653A1 1 0 0 1 .5 5.67V1.163Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  )
}
