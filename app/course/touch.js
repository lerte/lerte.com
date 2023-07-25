export default function Touch() {
  return (
    <div className="min-h-screen bg-slate-900 grid place-content-center text-lg text-white font-bold">
      <div className="relative rounded-xl overflow-auto p-8">
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-14 font-mono font-bold">
          <div className="flex flex-col items-center">
            <p className="font-medium font-mono text-center mb-3 dark:text-slate-400">
              touch-auto
            </p>
            <div className="grid w-full h-48 overflow-auto touch-auto rounded-lg shadow-lg">
              <img
                className="col-span-1 col-start-1 col-end-1 w-[150%] max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=400&amp;q=80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium font-mono text-center mb-3 dark:text-slate-400">
              touch-none
            </p>
            <div className="w-full h-48 overflow-auto touch-none rounded-lg shadow-lg">
              <img
                className="w-[150%] max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=400&amp;q=80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium font-mono text-center mb-3 dark:text-slate-400">
              touch-pan-x
            </p>
            <div className="w-full h-48 overflow-auto touch-pan-x rounded-lg shadow-lg">
              <img
                className="w-[150%] max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=400&amp;q=80"
              />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium font-mono text-center mb-3 dark:text-slate-400">
              touch-pan-y
            </p>
            <div className="w-full h-48 overflow-auto touch-pan-y rounded-lg shadow-lg">
              <img
                className="w-[150%] max-w-none"
                src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=600&amp;h=400&amp;q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
