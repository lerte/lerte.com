export default function Throttle() {
  const throttle = (fn, wait) => {
    let timer = null
    return function (...args) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, wait)
      }
    }
  }

  const changeColor = (e) => {
    e.target.style.backgroundColor =
      '#' + Math.random().toString(16).slice(2, 8)
  }
  return (
    <div
      className="h-screen bg-slate-900"
      onMouseMove={throttle(changeColor, 500)}
    ></div>
  )
}
