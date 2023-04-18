import Form from '@/components/Form'
import { Inter } from 'next/font/google'
import Layout from '@/layouts/default'

const inter = Inter({ subsets: ['latin'] })

export default function ChatGPT() {
  return (
    <Layout>
      <section className={inter.className}>
        <Form />
      </section>
    </Layout>
  )
}
