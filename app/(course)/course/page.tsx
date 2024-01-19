import Link from 'next/link'
import FlowingBorder from '@/components/FlowingBorder'

type Name = 'vue' | 'nextjs' | 'react' | 'python' | 'tailwindcss'
const Cover = ({ name }: { name: Name }) => {
  if (name == 'vue') {
    return (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01"
        />
        <path
          fill="#35495e"
          d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z"
        />
        <path
          fill="#41b883"
          d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z"
        />
      </svg>
    )
  }
  if (name == 'nextjs') {
    return (
      <svg
        fill="white"
        width="100%"
        height="100%"
        viewBox="0 0 128 128"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M30.2 45.9h24.1v1.9H32.4v14.4H53v1.9H32.4v15.8h22.2v1.9H30.2V45.9zm26.3 0h2.6l11.4 15.8L82 45.9l15.8-20-26 37.5 13.4 18.4h-2.7L70.4 65 58.2 81.8h-2.6l13.5-18.4-12.6-17.5zm29.7 1.9v-1.9h27.5v1.9H101v34h-2.2v-34H86.2zM0 45.9h2.7l38.2 56.8-15.8-20.9L2.3 48.6l-.1 33.2H0zm113.5 33.4c.5 0 .8-.3.8-.8s-.3-.8-.8-.8-.8.3-.8.8.4.8.8.8zm2.2-2.1c0 1.3 1 2.2 2.4 2.2 1.5 0 2.4-.9 2.4-2.5v-5.5h-1.2v5.5c0 .9-.4 1.3-1.2 1.3-.7 0-1.2-.4-1.2-1.1h-1.2zm6.3-.1c.1 1.4 1.2 2.3 3 2.3s3-.9 3-2.4c0-1.2-.7-1.8-2.2-2.2l-.9-.2c-1-.2-1.4-.6-1.4-1.1 0-.7.6-1.2 1.6-1.2.9 0 1.5.4 1.6 1.2h1.2c-.1-1.3-1.2-2.2-2.8-2.2-1.7 0-2.8.9-2.8 2.3 0 1.1.6 1.8 2 2.1l1 .2c1 .2 1.5.6 1.5 1.2 0 .7-.7 1.2-1.7 1.2s-1.8-.5-1.9-1.2H122z" />
      </svg>
    )
  }
  if (name == 'react') {
    return (
      <img
        alt="react"
        className="object-fit w-full mx-auto"
        src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg"
      />
    )
  }
  if (name == 'python') {
    return (
      <img
        alt="python"
        className="object-fit w-full mx-auto"
        src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/python/python-original-wordmark.svg"
      />
    )
  }
  if (name == 'tailwindcss') {
    return (
      <img
        alt="tailwindcss"
        className="object-fit w-full mx-auto"
        src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg"
      />
    )
  }
}

export default function Page({
  searchParams
}: {
  searchParams: { name: Name; title: string }
}) {
  const { name = 'nextjs', title = 'Next.js' } = searchParams
  return (
    <article className="grid place-content-center">
      <Link href="/api" className="grid gap-4">
        <div className="mx-auto h-full p-2">
          <Cover name={name as Name} />
        </div>
        <FlowingBorder>{title}</FlowingBorder>
      </Link>
    </article>
  )
}
