import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <article className="grid min-h-screen place-content-center">
      <Link href="/course/hover-follow" className="grid gap-4">
        <div className="mx-auto text-white">
          <Image
            alt="lerte"
            width={360}
            height={360}
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg"
          />
        </div>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-7xl font-black text-transparent">
          Hover跟随效果
        </h1>
      </Link>
    </article>
  )
}
