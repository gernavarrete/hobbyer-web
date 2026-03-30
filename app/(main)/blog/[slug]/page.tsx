import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getAllPosts, getPostBySlug } from '@/app/lib/blog'
import BlogWaitlistCta from '@/components/BlogWaitlistCta'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { meta } = getPostBySlug(params.slug)
    return {
      title: `${meta.title} | Hobbyer`,
      description: meta.description,
      openGraph: {
        title: meta.title,
        description: meta.description,
        url: `https://hobbyer.club/blog/${meta.slug}`,
        siteName: 'Hobbyer',
        locale: 'es_AR',
        type: 'article',
        publishedTime: meta.date,
      },
      twitter: {
        card: 'summary_large_image',
        title: meta.title,
        description: meta.description,
      },
    }
  } catch {
    return {}
  }
}

export default function BlogPostPage({ params }: Props) {
  let post
  try {
    post = getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: 'https://hobbyer.club' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://hobbyer.club/blog' },
      { '@type': 'ListItem', position: 3, name: post.meta.title, item: `https://hobbyer.club/blog/${post.meta.slug}` },
    ],
  }

  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            {post.meta.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            {post.meta.title}
          </h1>
          <div className="flex items-center gap-4 text-on-secondary/60 text-sm">
            <span>
              {new Date(post.meta.date).toLocaleDateString('es-AR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>·</span>
            <span>{post.meta.readingTime}</span>
          </div>
          <div className="border-b border-white/10 mt-8" />
        </div>

        <div className="prose prose-invert max-w-none
          prose-headings:text-white prose-headings:font-bold
          prose-p:text-[#94a3b8] prose-p:leading-relaxed prose-p:opacity-80
          prose-a:text-primary prose-a:no-underline hover:prose-a:text-[#4c84ff]
          prose-strong:text-white
          prose-code:bg-[#1b212d] prose-code:text-primary prose-code:rounded prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:rounded-r-2xl prose-blockquote:not-italic prose-blockquote:text-on-secondary/80
          prose-ul:text-[#94a3b8] prose-ol:text-[#94a3b8]
          prose-hr:border-white/10
        ">
          <MDXRemote source={post.content} />
        </div>

        <BlogWaitlistCta />
      </div>
    </main>
  )
}
