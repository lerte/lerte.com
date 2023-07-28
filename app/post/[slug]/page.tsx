import Date from '@/components/Date'

import { getPostData } from '@/lib/posts'

type Params = {
  slug: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
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
      <h1 className="font-extrabold text-3xl mb-1">{postData.title}</h1>
      <div className="text-gray-500 font-medium mb-5">
        <Date dateString={postData.date} />
      </div>
      <div
        className="text-gray-600"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  )
}
