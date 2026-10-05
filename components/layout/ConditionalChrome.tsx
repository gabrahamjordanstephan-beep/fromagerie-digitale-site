'use client'

import { usePathname } from 'next/navigation'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function ConditionalChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isBare = pathname?.startsWith('/preview')

  if (isBare) {
    return <>{children}</>
  }

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
