import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { BASELINE, CONTACT_EMAIL, TAGLINE } from '@/lib/site'

const AGENCE = [
  { href: '/services', label: 'Offre' },
  { href: '/#methode', label: 'Méthode' },
  { href: '/#projet-demo', label: 'Projet démo' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'À propos' },
]

export function Footer() {
  return (
    <footer className="bg-fd-dark text-[#A9B8C1]">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter pb-8 pt-14">
        <div className="flex flex-wrap justify-between gap-8">
          <div className="flex max-w-[360px] flex-[1_1_280px] flex-col gap-3">
            <Logo onDark className="h-10 w-auto" />
            <span className="text-sm leading-relaxed">
              {TAGLINE}. {BASELINE}
            </span>
          </div>
          <nav aria-label="Liens de pied de page" className="flex flex-wrap gap-12">
            <div className="flex flex-col gap-2.5 text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Agence</span>
              {AGENCE.map((l) => (
                <Link key={l.href} href={l.href} className="text-[#A9B8C1] no-underline hover:text-white">
                  {l.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-2.5 text-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Contact</span>
              <Link href="/contact" className="text-[#A9B8C1] no-underline hover:text-white">Nous écrire</Link>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-[#A9B8C1] no-underline hover:text-white">
                {CONTACT_EMAIL}
              </a>
              <span>Paris</span>
            </div>
          </nav>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 pt-6 text-xs">
          <span>© {new Date().getFullYear()} Fromagerie Digitale</span>
          <span className="flex gap-6">
            <Link href="/mentions-legales" className="text-[#A9B8C1] hover:text-white">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-[#A9B8C1] hover:text-white">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
