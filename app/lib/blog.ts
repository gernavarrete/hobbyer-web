import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  category: string
  readingTime: string
}

const postsDir = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'))
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
      const { data, content } = matter(raw)
      const stats = readingTime(content)
      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        category: data.category as string,
        readingTime: `${Math.ceil(stats.minutes)} min de lectura`,
      }
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'))
  const file = files.find((f) => {
    const raw = fs.readFileSync(path.join(postsDir, f), 'utf-8')
    const { data } = matter(raw)
    return data.slug === slug
  })
  if (!file) throw new Error(`Post not found: ${slug}`)
  const raw = fs.readFileSync(path.join(postsDir, file), 'utf-8')
  const { data, content } = matter(raw)
  const stats = readingTime(content)
  return {
    meta: {
      slug: data.slug as string,
      title: data.title as string,
      description: data.description as string,
      date: data.date as string,
      category: data.category as string,
      readingTime: `${Math.ceil(stats.minutes)} min de lectura`,
    },
    content,
  }
}
