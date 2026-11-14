import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from '@/components/ui/icons'

export const metadata: Metadata = {
  title: { absolute: 'Page introuvable | Fromagerie Digitale' },
  robots: { index: false, follow: true },
}

const LINKS = [
  { href: '/services', label: 'Nos services' },
  { href: '/blog', label: 'Nos conseils' },
  { href: '/a-propos', label: 'Qui sommes-nous' },
  { href: '/contact', label: 'Demander un devis' },
]

export default function NotFound() {
  return (
    <section className="fd-grid-bg bg-fd-dark text-white">
      <div className="fd-hero mx-auto flex max-w-page flex-col gap-6 px-gutter pb-[clamp(72px,9vw,128px)] pt-[clamp(72px,10vw,140px)]">
        <p className="fd-eyebrow m-0 text-fd-gold">Erreur 404</p>
        <h1 className="m-0 max-w-[820px] text-[clamp(40px,6vw,72px)] font-bold leading-[1.02] tracking-[-0.025em]">
          Cette page s&apos;est affinée un peu trop longtemps.
        </h1>
        <p className="m-0 max-w-[620px] text-xl leading-relaxed text-fd-fog">
          Elle n&apos;existe plus ou a changé d&apos;adresse. Voici de quoi retrouver votre chemin.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link href="/" className="fd-btn inline-flex min-h-[56px] items-center gap-2.5 rounded-full bg-fd-gold px-6 text-base font-semibold text-fd-dark no-underline">
            Retour à l&apos;accueil <ArrowRight />
          </Link>
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="fd-btn inline-flex min-h-[56px] items-center rounded-full border border-white/25 px-6 text-base font-medium text-white no-underline">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
