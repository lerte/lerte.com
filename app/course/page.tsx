import Link from 'next/link'
import FlowingBorder from '@/components/FlowingBorder'

export default function Page() {
  return (
    <article className="grid bg-slate-900 min-h-screen place-content-center">
      <Link href="/post/Next.js-14" className="grid gap-4">
        <div className="mx-auto">
          <img
            alt="tailwindcss"
            className="object-fit w-2/3 mx-auto"
            src="/next14.png"
          />
        </div>
        <FlowingBorder>Next.js 14</FlowingBorder>
      </Link>
    </article>
  )
}
