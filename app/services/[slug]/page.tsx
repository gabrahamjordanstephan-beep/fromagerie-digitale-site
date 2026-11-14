import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, Check, PathIcon } from '@/components/ui/icons'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { GoldCta } from '@/components/ui/GoldCta'
import { JsonLd } from '@/components/seo/JsonLd'
import { METHOD } from '@/lib/home-data'
import { postsForService } from '@/lib/blog-data'
import { SERVICES, getService, leverOf } from '@/lib/services'
import { getServiceDetail } from '@/lib/service-details'
import { Faq } from '@/components/home/Faq'
import { SITE_URL, seoTitle } from '@/lib/site'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getService(params.slug)
  if (!s) return {}
  return {
    title: seoTitle(s.metaTitle),
    description: s.metaDescription,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.metaTitle} | Fromagerie Digitale`, description: s.metaDescription, url: `/services/${s.slug}`, images: ['/opengraph-image'] },
  }
}

export default function ServicePage({ params }: Props) {
  const s = getService(params.slug)
  if (!s) notFound()
  const lever = leverOf(s.lever)
  const d = getServiceDetail(s.slug)
  const others = SERVICES.filter((x) => x.slug !== s.slug)
  const sameLever = others.filter((x) => x.lever === s.lever)
  const articles = postsForService(s.slug)
  const suggestions = [...sameLever, ...others.filter((x) => x.lever !== s.lever)].slice(0, 3)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: s.name,
          description: s.metaDescription,
          serviceType: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
          areaServed: { '@type': 'Country', name: 'France' },
          provider: { '@id': `${SITE_URL}/#agence` },
        }}
      />
      {d && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: d.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
          }}
        />
      )}

      <section className="fd-grid-bg bg-fd-dark text-white">
        <div className="fd-hero mx-auto flex max-w-page flex-col gap-6 px-gutter pb-[clamp(56px,7vw,96px)] pt-[clamp(56px,8vw,104px)]">
          <Breadcrumb items={[{ href: '/', label: 'Accueil' }, { href: '/services', label: 'Offres' }, { label: s.name }]} dark />
          <span className="inline-flex min-h-[32px] items-center gap-2 self-start rounded-full bg-white/10 px-3 text-[13px] font-semibold text-fd-gold">
            <PathIcon d={lever.icon} size={16} />
            {lever.label}
          </span>
          <h1 className="m-0 max-w-[900px] text-[clamp(40px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.025em]">{s.name}</h1>
          <p className="m-0 max-w-[620px] text-xl leading-relaxed text-fd-fog">{s.promise}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link href="/contact" className="fd-btn inline-flex min-h-[56px] items-center gap-2.5 rounded-full bg-fd-gold px-6 text-base font-semibold text-fd-dark no-underline">
              Demander un devis <ArrowRight />
            </Link>
            <Link href="/services#services" className="fd-btn inline-flex min-h-[56px] items-center rounded-full border border-white/25 px-6 text-base font-medium text-white no-underline">
              Voir les autres services
            </Link>
          </div>
        </div>
      </section>

      {d && (
        <section className="bg-white">
          <div className="mx-auto grid max-w-page gap-10 px-gutter py-section lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="fd-reveal flex flex-col gap-5">
              <p className="fd-eyebrow m-0 text-fd-slate">Pourquoi c&apos;est important</p>
              {d.intro.map((p) => (
                <p key={p.slice(0, 24)} className="m-0 text-lg leading-relaxed text-fd-body">{p}</p>
              ))}
            </div>
            <div className="fd-reveal flex flex-col gap-4 self-start rounded-3xl bg-fd-cream p-8">
              <h2 className="m-0 text-xl font-bold text-fd-dark">Vous vous reconnaissez ?</h2>
              <ul className="m-0 flex list-none flex-col gap-3 p-0">
                {d.signs.map((x) => (
                  <li key={x} className="flex gap-3 text-base leading-normal">
                    <Check size={18} stroke="#314C5C" strokeWidth={2.4} className="mt-1 shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="bg-fd-cream">
        <div className="mx-auto grid max-w-page gap-6 px-gutter py-section lg:grid-cols-[1.4fr_1fr]">
          <div className="fd-reveal flex flex-col gap-5 rounded-3xl border border-[#E4DCCD] bg-white p-[clamp(28px,4vw,48px)]">
            <h2 className="m-0 text-[clamp(26px,3vw,34px)] font-bold text-fd-dark">Ce que vous recevez</h2>
            <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
              {s.items.map((it) => (
                <li key={it} className="flex gap-3 text-lg leading-normal">
                  <Check size={20} stroke="#314C5C" strokeWidth={2.4} className="mt-1 shrink-0" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <div className="fd-reveal flex flex-col gap-2 rounded-3xl bg-fd-navy p-8 text-white">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fd-gold">Idéal si</span>
              <p className="m-0 text-lg leading-relaxed">{s.ideal}</p>
            </div>
            <dl className="fd-reveal m-0 grid grid-cols-2 gap-4 rounded-3xl border border-[#E4DCCD] bg-white p-8">
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-fd-slate">Tarif</dt>
                <dd className="m-0 text-xl font-bold text-fd-dark">Sur devis</dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-xs text-fd-slate">Rythme</dt>
                <dd className="m-0 text-xl font-bold text-fd-dark">{s.rythme}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {d && (
        <section className="bg-white">
          <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter py-section">
            <div className="flex max-w-[720px] flex-col gap-3">
              <p className="fd-eyebrow text-fd-slate">Le détail</p>
              <h2 className="fd-h2 fd-reveal text-fd-navy">Ce que nous faisons, étape par étape.</h2>
            </div>
            <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5 p-0">
              {d.steps.map((st, i) => (
                <li key={st.title} className="fd-reveal flex flex-col gap-3 rounded-2xl border border-[#E4DCCD] bg-fd-paper p-6">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-fd-dark text-sm font-bold text-fd-gold">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="m-0 text-xl font-bold text-fd-dark">{st.title}</h3>
                  <p className="m-0 text-[15px] leading-relaxed text-fd-slate">{st.text}</p>
                </li>
              ))}
            </ol>
            <div className="fd-reveal flex flex-col gap-2 rounded-3xl bg-fd-navy p-8 text-white md:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fd-gold">{d.example.title}</span>
              <p className="m-0 max-w-[820px] text-lg leading-relaxed">{d.example.text}</p>
            </div>
          </div>
        </section>
      )}

      {!d && (
      <section className="bg-fd-cream">
        <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter py-section">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="fd-eyebrow text-fd-slate">Comment ça se passe</p>
            <h2 className="fd-h2 fd-reveal text-fd-navy">Quatre étapes, et vous gardez la main.</h2>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-5 p-0">
            {METHOD.map((m) => (
              <li key={m.num} className="fd-reveal flex flex-col gap-3 rounded-2xl bg-white p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-fd-dark text-sm font-bold text-fd-gold">{m.num}</span>
                <h3 className="m-0 text-xl font-bold text-fd-dark">{m.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-fd-slate">{m.headline}</p>
                <span className="mt-auto text-[13px] font-medium text-fd-navy">{m.when}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
      )}

      {d && <Faq items={d.faq} title="Vos questions, nos réponses." />}

      {articles.length > 0 && (
        <section className="bg-white">
          <div className="mx-auto flex max-w-page flex-col gap-6 px-gutter pb-section">
            <h2 className="m-0 text-[clamp(26px,3vw,34px)] font-bold text-fd-dark">Nos conseils sur le sujet</h2>
            <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 p-0">
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/blog/${a.slug}`}
                    className="fd-card flex h-full flex-col gap-2 rounded-2xl border border-[#E4DCCD] bg-fd-paper p-5 text-fd-dark no-underline"
                  >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fd-slate">{a.category}</span>
                    <span className="text-lg font-bold leading-snug">{a.title}</span>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-1 text-sm font-semibold text-fd-navy">
                      Lire l&apos;article <ArrowUpRight size={16} />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-fd-cream">
        <div className="mx-auto flex max-w-page flex-col gap-8 px-gutter py-section">
          <h2 className="fd-h2 fd-reveal text-fd-navy">À combiner avec</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
            {suggestions.map((x) => (
              <Link
                key={x.slug}
                href={`/services/${x.slug}`}
                className="fd-card fd-reveal flex flex-col gap-3 rounded-2xl border border-[#E4DCCD] bg-white p-6 text-fd-dark no-underline"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fd-slate">{leverOf(x.lever).label}</span>
                <span className="text-xl font-bold">{x.name}</span>
                <span className="text-[15px] leading-relaxed text-fd-slate">{x.promise}</span>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-semibold text-fd-navy">
                  Voir le service <ArrowUpRight size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GoldCta title="Parlons de votre projet." text="Premier échange offert. Vous recevez le prix et le planning avant de vous engager." label="Demander mon devis" />
    </>
  )
}
