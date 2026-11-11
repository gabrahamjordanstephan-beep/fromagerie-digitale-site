'use client'

import { usePathname } from 'next/navigation'
import { Header } from './Header'
import { Footer } from './Footer'

/** Les pages de prospection et la boutique démo ont leur propre habillage. */
export function ConditionalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isBare = pathname?.startsWith('/preview') || pathname?.startsWith('/demo')

  if (isBare) return <>{children}</>

  return (
    <>
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fd-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-fd-dark"
      >
        Aller au contenu
      </a>
      <Header />
      <main id="contenu">{children}</main>
      <Footer />
    </>
  )
}
