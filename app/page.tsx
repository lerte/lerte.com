import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

function Main() {
  return <main className="grow p-2 grid place-content-center"></main>
}
