import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default async function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Main() {
  return (
    <main className="flex flex-col max-w-7xl mx-auto px-4">
      <h3 className="text-3xl font-semibold mb-4">
        Open source React Components Library
      </h3>
      <a href="https://actifyjs.com" target="_blank">
        <div className="rounded-lg shadow-md overflow-hidden">
          <img
            alt="actify"
            src="/images/actify.jpg"
            className="brightness-75 hover:brightness-100 transition-all"
          />
        </div>
      </a>
    </main>
  )
}
