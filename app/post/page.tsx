import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'

type PostData = {
  slug: string
  date: string
  title: string
  description: string
}

export async function generateMetadata() {
  return {
    title: 'Post - ' + '程序员Lerte'
  }
}

export default async function Post() {
  const postData: PostData[] = await getSortedPostsData()
  return (
    <div className="mt-4 mx-auto max-w-7xl">
      <ul>
        {postData.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/post/${post.slug}`}
              className="p-2 rounded-md flex justify-between hover:bg-black/10 hover:dark:bg-white/10"
            >
              <span>{post.title}</span>
              <time>{post.date}</time>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
