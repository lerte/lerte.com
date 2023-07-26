import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-[calc(100vh-64px)] gap-4">
        <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
          <img
            alt="Tailwind CSS"
            className="object-cover w-80"
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/tailwindcss/tailwindcss-plain.svg"
          />
          <img
            alt="Vue"
            className="object-cover w-80"
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vuejs/vuejs-original.svg"
          />
          <img
            alt="Vuetify"
            className="object-cover w-80"
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/vuetify/vuetify-original.svg"
          />
          <img
            alt="Nuxt"
            className="object-cover w-80"
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nuxtjs/nuxtjs-original.svg"
          />
          <img
            alt="React"
            className="object-cover w-80"
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/react/react-original.svg"
          />
          <img
            alt="React"
            className="object-cover w-80"
            src="https://cdn.jsdelivr.net/npm/devicon@2.15.1/icons/nextjs/nextjs-original-wordmark.svg"
          />
        </div>
        <h1 className="mx-auto animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-6xl font-black text-transparent">
          关注抖音 @lerte
        </h1>
      </main>
    </>
  )
}
