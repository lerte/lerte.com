export default function FlowingBorder({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto w-fit p-4 rounded-3xl relative overflow-hidden before:rounded-3xl before:absolute before:inset-1 before:bg-slate-900 before:z-10 after:absolute after:w-[300%] after:h-[700%] after:bg-[conic-gradient(teal,purple,orange)] after:top-[-300%] after:-left-full after:animate-spin">
      <p className="leading-tight relative z-20 text-center text-6xl animate-[textclip_4s_linear_infinite] bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-[200%_auto] bg-clip-text font-black text-transparent">
        {children}
      </p>
    </div>
  )
}
