export default () => {
  return (
    <div className="h-screen bg-slate-900 text-6xl text-white">
      <h1 className="text-center py-8">flex gap</h1>
      <div className="flex [&>div]:bg-cyan-500 justify-between flex-wrap [&>div]:basis-[calc(33%-32px)] gap-y-8 gap-x-8">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
      </div>
      <h1 className="text-center py-8">grid gap</h1>
      <div className="grid grid-cols-3 [&>div]:bg-violet-500 gap-x-8 gap-y-8">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
      </div>
    </div>
  )
}
