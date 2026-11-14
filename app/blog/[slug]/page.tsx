import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, Check, PathIcon } from '@/components/ui/icons'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { CopyLink } from '@/components/blog/CopyLink'
import { Checklist } from '@/components/blog/Checklist'
import { JsonLd } from '@/components/seo/JsonLd'
import { blogPosts, formatDate, getBlogPost, type BlogPostWithMeta } from '@/lib/blog-data'
import { getService } from '@/lib/services'
import { FICHE_GOOGLE_CHECKS, FICHE_GOOGLE_INTRO, FICHE_GOOGLE_STEPS } from '@/lib/articles/fiche-google'
import { SITE_URL, seoTitle } from '@/lib/site'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return {
    title: seoTitle(post.metaTitle ?? post.title),
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author.name }],
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [post.author.name],
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  }
}

const initials = (name: string) =>
  name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

function FicheGoogleBody() {
  return (
    <>
      <p className="text-lg">{FICHE_GOOGLE_INTRO}</p>
      <nav aria-label="Sommaire" className="not-prose my-10 rounded-2xl border border-fd-line bg-fd-paper p-6">
        <p className="m-0 mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-fd-slate">Sommaire</p>
        <ol className="m-0 flex list-none flex-col gap-2 p-0">
          {FICHE_GOOGLE_STEPS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`} className="text-[15px] text-fd-navy no-underline hover:underline">
                <span className="mr-2 font-semibold text-fd-slate">{s.num}</span>
                {s.title}
              </a>
            </li>
          ))}
          <li>
            <a href="#checklist" className="text-[15px] font-semibold text-fd-navy no-underline hover:underline">
              Votre checklist
            </a>
          </li>
        </ol>
      </nav>
      {FICHE_GOOGLE_STEPS.map((s) => (
        <div key={s.id}>
          <section id={s.id}>
            <h2>
              <span className="mr-3 text-fd-gold">{s.num}</span>
              {s.title}
            </h2>
            <p>{s.body}</p>
          </section>
          {s.tip && (
            <aside className="not-prose my-8 flex gap-4 rounded-2xl bg-fd-dark p-6 text-white">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <PathIcon d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3z" size={20} stroke="#F4BD45" />
              </span>
              <span className="text-[15px] leading-relaxed">
                <strong className="block text-fd-gold">Le réflexe cinq minutes</strong>
                Chaque lundi, ouvrez votre fiche, ajoutez la photo de la semaine et répondez aux nouveaux avis. C&apos;est tout.
              </span>
            </aside>
          )}
          {s.cta && (
            <aside className="not-prose my-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-fd-gold bg-[#FFF8E6] p-6">
              <span className="flex flex-col gap-1">
                <strong className="text-base text-fd-dark">Pas le temps de tout régler ?</strong>
                <span className="text-[15px] text-fd-body">On audite votre fiche gratuitement lors du diagnostic offert.</span>
              </span>
              <Link href="/contact" className="fd-btn inline-flex min-h-[48px] items-center rounded-full bg-fd-dark px-5 text-[15px] font-semibold text-white no-underline">
                Demander mon audit
              </Link>
            </aside>
          )}
        </div>
      ))}
      <Checklist items={FICHE_GOOGLE_CHECKS} />
    </>
  )
}

export default function ArticlePage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const service = getService(post.service)
  // Articles liés : même offre d'abord, puis même thème, puis les plus récents.
  const score = (p: BlogPostWithMeta) => (p.service === post.service ? 2 : 0) + (p.category === post.category ? 1 : 0)
  const related: BlogPostWithMeta[] = blogPosts
    .filter((p) => p.slug !== post.slug)
    .map((p, i) => ({ p, i }))
    .sort((a, b) => score(b.p) - score(a.p) || a.i - b.i)
    .slice(0, 3)
    .map(({ p }) => p)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.excerpt,
          image: `${SITE_URL}${post.image}`,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          keywords: post.keywords.join(', '),
          articleSection: post.category,
          wordCount: post.readingTime * 200,
          author: { '@type': 'Person', name: post.author.name, url: `${SITE_URL}/a-propos` },
          publisher: { '@id': `${SITE_URL}/#agence` },
          mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
          inLanguage: 'fr-FR',
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: post.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
        }}
      />

      <section className="bg-fd-cream">
        <div className="fd-hero mx-auto flex max-w-[860px] flex-col gap-5 px-gutter pb-10 pt-[clamp(40px,6vw,80px)]">
          <Breadcrumb items={[{ href: '/', label: 'Accueil' }, { href: '/blog', label: 'Blog' }, { label: post.category }]} />
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fd-navy">{post.category}</span>
          <h1 className="m-0 text-[clamp(34px,5vw,58px)] font-bold leading-[1.06] tracking-[-0.025em] text-fd-dark">{post.title}</h1>
          <p className="m-0 text-lg leading-relaxed text-fd-body">{post.excerpt}</p>
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-fd-sand pt-5">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-fd-dark text-sm font-bold text-fd-gold">
                {initials(post.author.name)}
              </span>
              <span className="flex flex-col">
                <Link href="/a-propos" className="text-[15px] font-semibold text-fd-dark no-underline hover:underline">
                  {post.author.name}
                </Link>
                <span className="text-[13px] text-fd-slate">
                  {post.updated ? (
                    <>
                      Mis à jour le <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                    </>
                  ) : (
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  )}{' '}
                  · {post.readingTime} min de lecture
                </span>
              </span>
            </div>
            <CopyLink />
          </div>
        </div>
      </section>

      <div className="bg-fd-cream">
        <div className="mx-auto max-w-[1040px] px-gutter">
          <div className="relative aspect-[21/9] overflow-hidden rounded-3xl bg-fd-navy">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1080px) 100vw, 1040px" className="object-cover" />
          </div>
        </div>
      </div>

      <article className="bg-fd-cream">
        <div className="prose prose-lg prose-fd mx-auto max-w-[720px] px-gutter py-14">
          <aside aria-label="En bref" className="not-prose mb-10 rounded-2xl border border-fd-gold bg-[#FFF8E6] p-6">
            <p className="m-0 mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-fd-navy">En bref</p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {post.summary.map((s) => (
                <li key={s} className="flex gap-2.5 text-[16px] leading-relaxed text-fd-ink">
                  <Check size={18} stroke="#314C5C" strokeWidth={2.4} className="mt-1 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </aside>
          {post.layout === 'fiche-google' ? <FicheGoogleBody /> : <div dangerouslySetInnerHTML={{ __html: post.content }} />}

          <section aria-labelledby="questions" className="not-prose mt-14">
            <h2 id="questions" className="m-0 mb-4 text-[clamp(24px,2.6vw,30px)] font-bold text-fd-dark">Questions fréquentes</h2>
            <div className="flex flex-col divide-y divide-fd-line border-y border-fd-line">
              {post.faq.map((f) => (
                <details key={f.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] font-semibold text-fd-ink">
                    <h3 className="m-0 text-[17px] font-semibold">{f.q}</h3>
                    <span aria-hidden="true" className="text-xl text-fd-navy transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="m-0 mt-3 text-base leading-relaxed text-fd-slate">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {service && (
            <aside className="not-prose mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-fd-dark p-6 text-white">
              <span className="flex min-w-[220px] flex-1 flex-col gap-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fd-gold">Notre offre sur le sujet</span>
                <span className="text-lg font-bold">{service.name}</span>
                <span className="text-sm leading-normal text-fd-fog">{service.promise}</span>
              </span>
              <Link href={`/services/${service.slug}`} className="fd-btn inline-flex min-h-[48px] items-center gap-2 rounded-full bg-fd-gold px-5 text-[15px] font-semibold text-fd-dark no-underline">
                Découvrir l&apos;offre <ArrowRight size={16} />
              </Link>
            </aside>
          )}

          <div className="not-prose mt-14 flex flex-wrap items-center gap-4 rounded-2xl border border-fd-line bg-white p-6">
            <span aria-hidden="true" className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-fd-dark font-bold text-fd-gold">
              {initials(post.author.name)}
            </span>
            <span className="flex min-w-[200px] flex-1 flex-col gap-0.5">
              <span className="text-base font-semibold text-fd-dark">{post.author.name}</span>
              <span className="text-sm leading-normal text-fd-slate">
                {post.author.role} de Fromagerie Digitale. Nous aidons les fromagers à être trouvés, reconnus et choisis.
              </span>
            </span>
            <Link href="/a-propos" className="inline-flex min-h-[44px] items-center rounded-full border border-fd-navy px-4 text-sm font-semibold text-fd-navy no-underline">
              En savoir plus
            </Link>
          </div>
        </div>
      </article>

      <section className="bg-white">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-gutter py-section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-bold text-fd-dark">À lire aussi</h2>
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-fd-navy">
              Tous les articles <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-6">
            {related.map((r) => (
              <article key={r.slug} className="fd-card group relative flex flex-col overflow-hidden rounded-[20px] border border-fd-line bg-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-fd-navy">
                  <Image src={r.image} alt="" fill sizes="(max-width: 700px) 100vw, 380px" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fd-slate">{r.category}</span>
                  <h3 className="m-0 text-lg font-bold leading-snug text-fd-dark">
                    <Link href={`/blog/${r.slug}`} className="text-inherit no-underline after:absolute after:inset-0">
                      {r.title}
                    </Link>
                  </h3>
                  <span className="mt-auto pt-2 text-[13px] text-fd-slate">{r.readingTime} min de lecture</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
