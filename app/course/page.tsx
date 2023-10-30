import Link from 'next/link'
import FlowingBorder from '@/components/FlowingBorder'

export default function Page() {
  return (
    <article className="grid bg-slate-900 min-h-screen place-content-center">
      <Link href="/course/grid" className="grid gap-4">
        <div className="mx-auto">
          <img
            alt="tailwindcss"
            className="object-fit w-full mx-auto"
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg"
          />
        </div>
        <FlowingBorder>Tailwind CSS Grid网格布局</FlowingBorder>
      </Link>
    </article>
  )
}
