import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Manifesto } from '@/components/home/Manifesto'
import { OfferTabs } from '@/components/home/OfferTabs'
import { Method } from '@/components/home/Method'
import { ProjectDemo } from '@/components/home/ProjectDemo'
import { Values } from '@/components/home/Values'
import { Faq } from '@/components/home/Faq'
import { ContactSection } from '@/components/contact/ContactSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { HOME_FAQ } from '@/lib/home-data'

export const metadata: Metadata = {
  title: { absolute: 'Fromagerie Digitale, agence digitale pour fromageries' },
  description:
    'Site, fiche Google, référencement local et IA, identité, vidéo : on aide les fromagers à remplir leur boutique. Diagnostic offert, sans engagement.',
  alternates: { canonical: '/' },
}

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: HOME_FAQ.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }}
      />
      <Hero />
      <Manifesto />
      <OfferTabs />
      <Method />
      <ProjectDemo />
      <Values />
      <Faq items={HOME_FAQ} title="Ce que les fromagers nous demandent." />
      <ContactSection />
    </>
  )
}
