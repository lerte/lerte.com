import ThemeSwitch from '@/components/ThemeSwitch'

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center relative">
      <ThemeSwitch />
      <div className="mx-auto text-white">
        <img
          alt="devicon"
          src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg"
        />
      </div>
      <h1 className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-6xl font-black text-transparent">
        关注抖音 @lerte
      </h1>
    </main>
  )
}
