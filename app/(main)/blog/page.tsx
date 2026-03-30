import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/app/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Hobbyer',
  description: 'Artículos sobre hobbies, comunidad y negocios locales en Mendoza.',
  openGraph: {
    title: 'Blog | Hobbyer',
    description: 'Artículos sobre hobbies, comunidad y negocios locales en Mendoza.',
    url: 'https://hobbyer.club/blog',
    siteName: 'Hobbyer',
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Hobbyer',
    description: 'Artículos sobre hobbies, comunidad y negocios locales en Mendoza.',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-mesh pt-32 pb-24 px-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-6">
            Blog
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ideas para tu comunidad
          </h1>
          <p className="text-on-secondary-container/70 text-xl max-w-2xl mx-auto">
            Hobbies, conexiones reales y negocios locales en Mendoza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card p-8 flex flex-col border-white/10 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-on-secondary/70 text-sm leading-relaxed line-clamp-3 flex-grow mb-6">
                {post.description}
              </p>
              <div className="flex items-center justify-between text-xs text-on-secondary/50 font-medium">
                <span>
                  {new Date(post.date).toLocaleDateString('es-AR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <span className="flex items-center gap-1">
                  {post.readingTime}
                  <span className="material-symbols-outlined text-primary w-4 h-4 inline-flex items-center justify-center" style={{ fontSize: '16px' }}>
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
