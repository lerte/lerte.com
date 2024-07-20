import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
      <h1 className="text-6xl pb-8">Projects</h1>
      <div className="space-y-4 columns-1 md:columns-3 text-white">
        <div className="relative group border rounded-lg shadow-md overflow-hidden">
          <h2 className="p-2 text-lg w-full bg-amber-800 absolute z-10 transition -translate-y-full group-hover:translate-y-0">
            React Material Design Components Library
          </h2>
          <a target="_blank" href="https://actifyjs.com">
            <img
              alt="actify"
              src="/images/actify.png"
              className="brightness-75 hover:brightness-100 transition-all"
            />
          </a>
        </div>
        <div className="relative group border rounded-lg shadow-md overflow-hidden">
          <h2 className="p-2 text-lg w-full bg-[#151429] absolute z-10 transition -translate-y-full group-hover:translate-y-0">
            The best ngrok gui client.
          </h2>
          <a target="_blank" href="https://ngroker.com">
            <img
              alt="ngroker"
              src="/images/ngroker.png"
              className="brightness-75 hover:brightness-100 transition-all"
            />
          </a>
        </div>
        <div className="relative group border rounded-lg shadow-md overflow-hidden">
          <h2 className="p-2 text-lg w-full bg-indigo-800 absolute z-10 transition -translate-y-full group-hover:translate-y-0">
            Excalidraw gui client.
          </h2>
          <img
            alt="actify"
            src="/images/excalidraw.png"
            className="brightness-75 hover:brightness-100 transition-all"
          />
        </div>
      </div>
    </main>
  )
}
