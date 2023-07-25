import { useId } from 'react'

export default () => {
  const id = useId()

  return (
    <div className="bg-slate-900 h-screen grid place-content-center">
      <div className="text-white flex gap-4 items-center text-6xl">
        <label htmlFor={id + 'username'}>用户名</label>
        <input id={id + 'username'} className="h-20 text-black" />

        <input id={id + 'checkbox'} className="h-20 w-20" type="checkbox" />
        <label htmlFor={id + 'checkbox'}>复选框</label>
      </div>
    </div>
  )
}
