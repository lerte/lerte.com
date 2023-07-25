export default () => {
  const rippleEffect = (event, element) => {
    // const element = ref.current
    const circle = document.createElement('span')
    const diameter = Math.max(element.clientWidth, element.clientHeight)
    const radius = diameter / 2
    circle.style.width = circle.style.height = `${diameter}px`
    circle.style.left = `${event.clientX - (element.offsetLeft + radius)}px`
    circle.style.top = `${event.clientY - (element.offsetTop + radius)}px`
    circle.classList.add('ripple')
    const ripple = element.getElementsByClassName('ripple')[0]
    if (ripple) {
      ripple.remove()
    }
    element.appendChild(circle)
    setTimeout(() => {
      circle.remove()
    }, 1000)
  }

  return (
    <div className="h-screen bg-slate-900 text-6xl text-white grid place-content-center">
      <button
        className="bg-green-500 rounded-lg py-2 px-3 relative"
        onClick={(e) => rippleEffect(e, e.currentTarget)}
      >
        Ripple Button
      </button>
    </div>
  )
}
