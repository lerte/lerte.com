import Date from '@/components/Date'
import { getPostData } from '@/lib/posts'
import Markdown from '@/components/Markdown'

type Params = {
  slug: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  content: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.slug)

  return {
    title: postData.title + ' - ' + '程序员Lerte'
  }
}

export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.slug)

  return (
    <article className="prose mx-auto max-w-7xl dark:prose-invert">
      <h1>{postData.title}</h1>
      <div className="text-gray-500 font-medium mb-5">
        <Date dateString={postData.date} />
      </div>
      <Markdown markdown={postData.content} />
    </article>
  )
}
