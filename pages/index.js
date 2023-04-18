import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import Layout from '@/layouts/default'
import styles from '@/styles/Home.module.css'
import { getSession, useSession, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Home Page</title>
      </Head>

      {session ? User({ session, handleSignOut }) : Guest()}
    </div>
  )
}

// Guest
function Guest() {
  return (
    <main className="container mx-auto py-20 text-center">
      <h3 className="text-4xl font-bold">Guest Homepage</h3>

      <div className="flex justify-center">
        <Link
          href={'/login'}
          className="mt-5 rounded-sm bg-indigo-500 px-10 py-1 text-gray-50"
        >
          Sign In
        </Link>
      </div>
    </main>
  )
}

// Authorize User
function User({ session, handleSignOut }) {
  return (
    <main className="container mx-auto py-20 text-center">
      <h3 className="text-4xl font-bold">Authorize User Homepage</h3>

      <div className="details">
        <h5>{session.user.name}</h5>
        <h5>{session.user.email}</h5>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleSignOut}
          className="mt-5 rounded-sm bg-indigo-500 bg-gray-50 px-10 py-1"
        >
          Sign Out
        </button>
      </div>

      <div className="flex justify-center">
        <Link
          href={'/profile'}
          className="mt-5 rounded-sm bg-indigo-500 px-10 py-1 text-gray-50"
        >
          Profile Page
        </Link>
      </div>
    </main>
  )
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}
