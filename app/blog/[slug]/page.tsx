import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar } from 'lucide-react'
import { blogPosts, getBlogPost, formatDate } from '@/lib/blog-data'
import { CtaBanner } from '@/components/sections/CtaBanner'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://fromageriedigitale.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://fromageriedigitale.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author.name],
    },
  }
}

const categoryColors: Record<string, string> = {
  'Stratégie digitale': 'bg-fd-blue/20 text-fd-blue',
  'SEO':                'bg-fd-gold/20 text-fd-gold',
  'Réseaux sociaux':    'bg-white/15 text-white/80',
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const currentIndex = blogPosts.findIndex(p => p.slug === post.slug)
  const next = blogPosts[currentIndex + 1] ?? blogPosts[0]

  return (
    <>
      {/* ── Header article ── */}
      <section className="bg-fd-navy pt-36 pb-20 px-6 lg:px-16">
        <div className="max-w-[800px] mx-auto">

          {/* Retour */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={14} />
            Tous les articles
          </Link>

          {/* Catégorie */}
          <span className={`inline-block text-xs font-semibold px-3 py-1.5 rounded-full mb-6 ${categoryColors[post.category] ?? 'bg-white/10 text-white/60'}`}>
            {post.category}
          </span>

          {/* Titre */}
          <h1
            className="font-bold text-white leading-tight mb-8"
            style={{ fontSize: 'clamp(28px, 4.5vw, 56px)' }}
          >
            {post.title}
          </h1>

          {/* Méta */}
          <div className="flex flex-wrap items-center gap-6 text-white/40 text-sm border-t border-white/8 pt-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-fd-gold/20 flex items-center justify-center text-fd-gold text-xs font-bold">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <p className="text-white/80 text-sm font-medium">{post.author.name}</p>
                <p className="text-white/35 text-xs">{post.author.role}</p>
              </div>
            </div>
            <span className="flex items-center gap-1.5">
              <Calendar size={13} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} />
              {post.readingTime} min de lecture
            </span>
          </div>
        </div>
      </section>

      {/* ── Corps de l'article ── */}
      <section className="bg-white px-6 lg:px-16 py-20">
        <div className="max-w-[800px] mx-auto">
          <div
            className="prose prose-lg prose-fd max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* ── Article suivant ── */}
      <section className="bg-fd-cream px-6 lg:px-16 py-16">
        <div className="max-w-[800px] mx-auto">
          <div className="border-t border-fd-navy/12 pt-12">
            <p className="text-fd-navy/30 text-[11px] tracking-[0.28em] uppercase mb-6">
              Article suivant
            </p>
            <Link href={`/blog/${next.slug}`} className="group flex items-start justify-between gap-8">
              <div>
                <span className="text-xs font-medium text-fd-blue mb-2 block">{next.category}</span>
                <h3 className="font-bold text-fd-navy text-xl leading-snug group-hover:text-fd-blue transition-colors duration-200">
                  {next.title}
                </h3>
              </div>
              <ArrowLeft
                size={20}
                className="rotate-180 text-fd-navy/30 group-hover:text-fd-blue group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-1"
              />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
