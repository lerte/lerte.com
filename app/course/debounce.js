export default function Debounce() {
  const debounce = (fn, wait) => {
    let timer = null
    return function (...args) {
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, wait)
    }
  }

  const changeHandle = async (e) => {
    const { value } = e.target
    const response = await fetch(
      `https://www.npmjs.com/search/suggestions?q=${value}`
    )
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="p-2 bg-slate-900 h-screen">
      <input type="text" onChange={debounce(changeHandle, 300)} />
    </div>
  )
}
