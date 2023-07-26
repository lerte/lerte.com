import { getAllPosts, getPostBySlug } from '@/lib/post'
import markdownToHtml from '@/lib/markdown'

export default function Post({ content }) {
  return <>{content}</>
}

export async function getStaticProps({ params }) {
  console.log(params)
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      ...post,
      content
    }
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: 'blocking'
  }
}
