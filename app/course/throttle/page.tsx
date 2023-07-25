export default function Throttle() {
  const throttle = (fn: () => void, wait: number) => {
    let timer: NodeJS.Timeout | null = null
    return function (...args: unknown[]) {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null
          fn.apply(this, args)
        }, wait)
      }
    }
  }

  const changeColor = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
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
