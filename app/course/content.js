export default () => {
  return (
    <div className="h-screen grid place-content-center bg-slate-900">
      <div
        data-abc="今天星期五"
        className="text-8xl text-white after:content-[attr(data-abc)]"
      >
        😄
      </div>
    </div>
  )
}
