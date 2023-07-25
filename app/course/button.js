export default function Button() {
  return (
    <div className="h-screen bg-slate-900 grid place-content-center">
      <button className="z-10 relative overflow-hidden rounded-full px-10 w-fit h-14 text-2xl text-white before:absolute before:block before:rounded-full before:top-0 before:right-0 before:h-full before:w-0 before:-z-10 before:bg-green-500 before:transition-all before:duration-500 before:ease-in-out after:border-2 after:absolute after:inset-0 after:rounded-full hover:before:left-0 hover:before:right-auto hover:before:w-full hover:after:opacity-0 hover:after:transition-all hover:after:duration-500 after:-z-10">
        点击
      </button>
    </div>
  )
}
