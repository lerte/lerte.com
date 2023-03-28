import Layout from '@/components/Layout'
import clientPromise from '@/lib/mongodb'

export default function Home({ isConnected }) {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a>
      </h1>

      {isConnected ? (
        <h2 className="subtitle">You are connected to MongoDB</h2>
      ) : (
        <h2 className="subtitle">
          You are NOT connected to MongoDB. Check the <code>README.md</code> for
          instructions.
        </h2>
      )}
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    await clientPromise
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    return {
      props: { isConnected: true }
    }
  } catch (e) {
    console.error(e)
    return {
      props: { isConnected: false }
    }
  }
}
