import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postDirectory = join(process.cwd(), '_post')

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return { slug: realSlug, meta: data, content }
}

export function getAllPosts() {
  const slugs = fs.readdirSync(postDirectory)
  const posts = slugs.map((slug) => getPostBySlug(slug))

  return posts
}
