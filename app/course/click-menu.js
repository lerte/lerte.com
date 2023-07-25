import { useId } from 'react'
import { ChevronDown } from 'lucide-react'

export default () => {
  const id = useId()
  const handleClick = (e) => {
    if (e.target !== e.currentTarget) {
      return
    }
    Array.from(document.getElementsByName('menu')).map(
      (item) => (item.checked = false)
    )
  }
  return (
    <div
      onClick={handleClick}
      className="bg-slate-900 min-h-screen text-4xl text-white flex gap-4"
    >
      <div className="relative cursor-pointer">
        <input hidden name="menu" id={id + '1'} type="radio" className="peer" />
        <label
          htmlFor={id + '1'}
          className="flex items-center gap-2 peer-checked:[&_svg]:rotate-90 [&_svg]:transition-transform"
        >
          产品
          <ChevronDown />
        </label>
        <ul className="absolute hidden peer-checked:block">
          <li className="hover:bg-white/20">产品1</li>
          <li className="hover:bg-white/20">产品2</li>
          <li className="hover:bg-white/20">产品3</li>
        </ul>
      </div>
      <div className="relative cursor-pointer">
        <input hidden name="menu" id={id + '2'} type="radio" className="peer" />
        <label
          htmlFor={id + '2'}
          className="flex items-center gap-2 peer-checked:[&_svg]:rotate-90 [&_svg]:transition-transform"
        >
          关于
          <ChevronDown />
        </label>
        <ul className="absolute hidden peer-checked:block">
          <li className="hover:bg-white/20">关于</li>
          <li className="hover:bg-white/20">联系</li>
        </ul>
      </div>
    </div>
  )
}
