export default function ({ children }) {
  return (
    <label
      htmlFor="checkbox"
      className="relative cursor-pointer text-indigo-600"
    >
      <input id="checkbox" type="checkbox" hidden className="peer" />
      <span className="block h-8 w-16 rounded-full bg-gray-400 shadow-inner peer-checked:bg-current">
        {children}
      </span>
      <i className="absolute left-0 top-0 h-8 w-8 scale-90 rounded-full bg-slate-50 shadow-inner transition-all peer-checked:left-8"></i>
    </label>
  )
}
