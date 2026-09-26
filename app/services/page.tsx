import type { Metadata }          from 'next'
import { ServicesPageContent }    from '@/components/sections/ServicesPageContent'

export const metadata: Metadata = {
  title:       'Nos Offres | Fromagerie Digitale',
  description: 'Neuf offres · un métier. Sites, identité, vidéo, GEO, ads, packaging, formation IA, TikTok Shop, visibilité IA — 100 % dédié aux artisans fromagers.',
  alternates:  { canonical: 'https://fromageriedigitale.com/services' },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
