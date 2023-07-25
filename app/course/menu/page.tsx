import { ChevronDown } from 'lucide-react'

export default function Menu() {
  return (
    <div className="bg-slate-900 min-h-screen text-4xl text-white grid place-content-center">
      <div className="group relative cursor-pointer">
        <div className="flex items-center gap-2 [&_svg]:group-hover:rotate-90 [&_svg]:transition-transform">
          Menu
          <ChevronDown />
        </div>
        <ul className="absolute hidden group-hover:block">
          <li className="hover:bg-white/20">Home</li>
          <li className="hover:bg-white/20">About</li>
          <li className="hover:bg-white/20">Contact</li>
        </ul>
      </div>
    </div>
  )
}
