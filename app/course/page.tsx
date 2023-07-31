import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  return (
    <article className="grid min-h-screen place-content-center">
      <Link href="/course/chatgpt" className="grid gap-4">
        <div className="mx-auto">
          <Image width={180} height={180} alt="" src="/chatgpt.png" />
        </div>
        <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-7xl font-black text-transparent">
          Chatgpt输入框
        </h1>
      </Link>
    </article>
  )
}
