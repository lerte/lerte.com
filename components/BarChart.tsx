'use client'
import { motion } from 'framer-motion'
import { generateYAxis } from '@/app/lib/utils'

type Revenue = {
  month: string
  revenue: number
}

const chartHeight = 350

export default function BarChart({ data }: { data: Revenue[] }) {
  const { yAxisLabels, topLabel } = generateYAxis(data)

  return (
    <div className="rounded-xl bg-inverse-surface/5 p-4 w-full">
      <div className="sm:grid-cols-[repeat(13,minmax(0,1fr))] mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-surface p-4 md:gap-4">
        <div className="h-[350px] mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex">
          {yAxisLabels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>
        {data.map(({ month, revenue }, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <motion.div
              animate={{ height: `${(chartHeight / topLabel) * revenue}px` }}
              transition={{
                duration: 800,
                stiffness: 50,
                type: 'spring',
                delay: 0.1 * index
              }}
              className="w-full rounded-md bg-primary"
            />
            <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
              {month}
            </p>
          </div>
        ))}
      </div>
      <div className="flex items-center pb-2 pt-6">
        <svg
          fill="none"
          aria-hidden="true"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
          />
        </svg>
        <h3 className="ml-2 text-sm text-gray-500 ">Last 12 months</h3>
      </div>
    </div>
  )
}
