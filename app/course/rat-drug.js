import { Milk, RatIcon } from 'lucide-react'
const MAX_BOTTLES = 30

export default function RatDrug() {
  const { length } = MAX_BOTTLES.toString(2)
  const bottles = [...new Array(MAX_BOTTLES).keys()].map((item) =>
    (item + 1).toString(2).padStart(length, '0')
  )

  const Rat = ({ number }) => {
    // number是瓶子2进制编码的字符串 '11110'
    const arrs = number.split('')
    const rats = [] // 用来标记老鼠
    for (let i = 0; i < arrs.length; i++) {
      if (arrs[i] === '1') {
        rats.push(i + 1)
      }
    }
    return (
      <div className="bg-red-600 p-1 rounded-md flex">
        <RatIcon size={48} />
        <span>{rats.join(',')}</span>
      </div>
    )
  }

  return (
    <div className="bg-slate-900 min-h-screen text-4xl text-white grid place-content-center">
      <div className="grid grid-cols-8 gap-6">
        {bottles.map((bottle) => (
          <div
            key={bottle}
            className="flex flex-col items-center justify-center p-1"
          >
            <div className="flex bg-green-500 p-1 rounded-md">
              <Milk size={48} />
              <span>{parseInt(bottle, 2)}</span>
            </div>
            <span>{bottle}</span>
            <Rat number={bottle} />
          </div>
        ))}
      </div>
    </div>
  )
}
