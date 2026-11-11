'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu } from '@/components/ui/icons'
import { Logo } from '@/components/ui/Logo'
import { NAV_LINKS } from '@/lib/site'

/** En-tête commun : clair sur l'accueil, bleu nuit sur les autres pages. */
export function Header() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)
  const light = pathname === '/'

  useEffect(() => setOpen(false), [pathname])

  const isCurrent = (href: string) => href !== '/' && !href.includes('#') && pathname.startsWith(href)

  return (
    <header
      className={`fd-header sticky top-0 z-30 border-b ${
        light ? 'border-fd-sand bg-fd-cream text-fd-dark' : 'border-white/10 bg-fd-dark text-white'
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-wide items-center justify-between gap-6 px-gutter">
        <Link href="/" aria-label="Fromagerie Digitale, accueil" className="text-inherit no-underline">
          <Logo onDark={!light} />
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => {
            const current = isCurrent(l.href)
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={current ? 'page' : undefined}
                className={`text-sm no-underline underline-offset-8 hover:underline hover:decoration-fd-gold hover:decoration-2 ${
                  current
                    ? 'font-semibold underline decoration-fd-gold decoration-2'
                    : 'font-medium'
                } ${light ? 'text-fd-dark' : current ? 'text-white' : 'text-fd-fog hover:text-white'}`}
              >
                {l.label}
              </Link>
            )
          })}
          <Link
            href="/contact"
            className={`fd-btn inline-flex min-h-[44px] items-center rounded-full px-5 text-sm font-semibold no-underline ${
              light ? 'bg-fd-dark text-white' : 'bg-fd-gold text-fd-dark'
            }`}
          >
            Réserver un appel
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-transparent md:hidden ${
            light ? 'border-[#C9BFAE] text-fd-dark' : 'border-white/25 text-white'
          }`}
        >
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <nav
          id="menu-mobile"
          aria-label="Navigation mobile"
          className={`fd-in flex flex-col gap-1 px-gutter pb-6 pt-2 md:hidden ${
            light ? 'border-t border-fd-sand bg-fd-cream' : 'bg-fd-dark'
          }`}
        >
          <Link href="/" className="py-3 text-base no-underline text-inherit">Accueil</Link>
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-base no-underline ${isCurrent(l.href) ? 'font-semibold text-fd-gold' : 'text-inherit'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={`mt-2 inline-flex min-h-[48px] items-center justify-center rounded-full text-base font-semibold no-underline ${
              light ? 'bg-fd-dark text-white' : 'bg-fd-gold text-fd-dark'
            }`}
          >
            Réserver un appel
          </Link>
        </nav>
      )}
    </header>
  )
}
