import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Lerte</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="mx-auto max-w-7xl">{children}</main>
      <Footer />
    </>
  )
}
