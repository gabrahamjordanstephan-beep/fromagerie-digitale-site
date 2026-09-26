import type { Metadata } from 'next'
import { HeroSection }      from '@/components/sections/HeroSection'
import { StatementSection } from '@/components/sections/StatementSection'
import { ServicesPreview }  from '@/components/sections/ServicesPreview'
import { ValuesSection }    from '@/components/sections/ValuesSection'
import { PhotoFeature }     from '@/components/sections/PhotoFeature'
import { CtaBanner }        from '@/components/sections/CtaBanner'

export const metadata: Metadata = {
  title:       "Fromagerie Digitale — Agence digitale pour fromagers",
  description:
    "Agence digitale spécialisée pour les fromageries artisanales. Sites web, SEO local, e-commerce, branding. Votre histoire, en ligne.",
  alternates:  { canonical: 'https://fromageriedigitale.com' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatementSection />
      <ServicesPreview />
      <ValuesSection />
      <PhotoFeature />
      <CtaBanner />
    </>
  )
}
