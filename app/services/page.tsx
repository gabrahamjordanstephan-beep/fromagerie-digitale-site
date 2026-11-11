import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/icons'
import { ServiceExplorer } from '@/components/services/ServiceExplorer'
import { Guide } from '@/components/services/Guide'
import { Plans } from '@/components/services/Plans'
import { GoldCta } from '@/components/ui/GoldCta'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { JsonLd } from '@/components/seo/JsonLd'
import { LEVERS, SERVICES } from '@/lib/services'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Nos offres pour les fromageries',
  description:
    "Site, référencement local et IA, publicité, identité, packaging, vidéo, TikTok Shop et atelier IA : huit services pour remplir votre boutique. Sur devis, diagnostic offert.",
  alternates: { canonical: '/services' },
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: 'Services de Fromagerie Digitale',
          itemListElement: SERVICES.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${SITE_URL}/services/${s.slug}`,
            name: s.name,
          })),
        }}
      />

      <section className="fd-grid-bg bg-fd-dark text-white">
        <div className="mx-auto flex max-w-page flex-wrap items-end gap-[clamp(40px,6vw,80px)] px-gutter pb-[clamp(56px,7vw,96px)] pt-[clamp(64px,9vw,120px)]">
          <div className="fd-hero flex min-w-0 flex-[1_1_460px] flex-col gap-6">
            <Breadcrumb items={[{ href: '/', label: 'Accueil' }, { label: 'Offres' }]} dark />
            <p className="m-0 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-mist">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-gold" />
              Nos offres
            </p>
            <h1 className="m-0 text-[clamp(40px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.025em]">
              Tout pour remplir votre boutique. <span className="text-fd-gold">Le bon levier, au bon moment.</span>
            </h1>
            <p className="m-0 max-w-[500px] text-lg leading-relaxed text-fd-mist">
              Huit services, rangés en quatre leviers. Choisissez celui qui compte pour vous aujourd&apos;hui, on s&apos;occupe du reste.
            </p>
          </div>
          <nav aria-label="Les quatre leviers" className="flex min-w-0 flex-[1_1_420px] flex-col border-t border-white/15">
            {LEVERS.map((l, i) => {
              const n = SERVICES.filter((s) => s.lever === l.id).length
              return (
                <Link
                  key={l.id}
                  href={`#${l.id}`}
                  className="group flex min-h-[84px] items-center gap-5 border-b border-white/15 px-3 text-white no-underline transition-colors hover:bg-white/[0.06]"
                  style={{ animation: `fdUp 520ms ${200 + i * 70}ms cubic-bezier(.2,.7,.2,1) backwards` }}
                >
                  <span className="w-7 text-[13px] font-semibold text-fd-gold">{l.num}</span>
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="text-[clamp(22px,2.6vw,30px)] font-bold tracking-[-0.01em]">{l.label}</span>
                    <span className="text-sm text-fd-mist">{l.question}</span>
                  </span>
                  <span className="whitespace-nowrap text-[13px] text-fd-mist">
                    {n} {n > 1 ? 'services' : 'service'}
                  </span>
                  <ArrowRight size={22} stroke="#F4BD45" className="transition-transform group-hover:translate-x-1.5" />
                </Link>
              )
            })}
          </nav>
        </div>
      </section>

      <ServiceExplorer />
      <Guide />
      <Plans />
      <GoldCta title="Pas sûr du bon levier ? On en parle, c'est offert." />
    </>
  )
}
