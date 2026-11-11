import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/icons'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { GoldCta } from '@/components/ui/GoldCta'
import { BlogList, type PostCard } from '@/components/blog/BlogList'
import { blogPosts, formatDate } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog : conseils digitaux pour fromagers',
  description:
    'Fiche Google, site, Instagram, avis clients : des conseils concrets, écrits pour des fromagers qui ont peu de temps.',
  alternates: { canonical: '/blog' },
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))
  const [featured, ...rest] = sorted
  const cards: PostCard[] = rest.map((p) => ({
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    dateLabel: formatDate(p.date),
    readingTime: p.readingTime,
    image: p.image,
    imageAlt: p.imageAlt,
  }))

  return (
    <>
      <section className="bg-fd-cream">
        <div className="fd-hero mx-auto flex max-w-page flex-col gap-6 px-gutter pb-12 pt-[clamp(48px,7vw,96px)]">
          <Breadcrumb items={[{ href: '/', label: 'Accueil' }, { label: 'Blog' }]} />
          <h1 className="m-0 max-w-[900px] text-[clamp(40px,6vw,76px)] font-bold leading-[1.02] tracking-[-0.03em] text-fd-dark">
            Des idées concrètes pour <span className="fd-mark">remplir votre boutique</span>.
          </h1>
          <p className="m-0 max-w-[620px] text-lg leading-relaxed text-fd-body">
            Visibilité locale, réseaux sociaux, site web. Des conseils concrets, écrits pour des fromagers qui ont peu de temps.
          </p>
        </div>
      </section>

      {featured && (
        <section className="bg-fd-cream">
          <div className="mx-auto max-w-page px-gutter">
            <article className="fd-card group relative grid overflow-hidden rounded-3xl bg-fd-dark text-white md:grid-cols-[1.2fr_1fr]">
              <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[420px]">
                <Image src={featured.image} alt={featured.imageAlt} fill priority sizes="(max-width: 768px) 100vw, 640px" className="object-cover" />
              </div>
              <div className="flex flex-col gap-4 p-[clamp(28px,4vw,48px)]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex min-h-[28px] items-center rounded-full bg-fd-gold px-3 text-xs font-semibold text-fd-dark">À la une</span>
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fd-mist">{featured.category}</span>
                </div>
                <h2 className="m-0 text-[clamp(26px,3vw,38px)] font-bold leading-tight">
                  <Link href={`/blog/${featured.slug}`} className="text-inherit no-underline after:absolute after:inset-0">
                    {featured.title}
                  </Link>
                </h2>
                <p className="m-0 text-base leading-relaxed text-fd-fog">{featured.excerpt}</p>
                <p className="m-0 text-sm text-fd-mist">
                  {formatDate(featured.date)} · {featured.readingTime} min de lecture
                </p>
                <span className="mt-auto inline-flex min-h-[48px] items-center gap-2 self-start rounded-full bg-white px-5 text-sm font-semibold text-fd-dark">
                  Lire l&apos;article <ArrowRight size={16} />
                </span>
              </div>
            </article>
          </div>
        </section>
      )}

      <BlogList posts={cards} />
      <GoldCta title="Une question sur votre fromagerie ?" text="Posez-la lors du diagnostic offert : trente minutes, sans engagement." />
    </>
  )
}
