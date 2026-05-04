import type { Metadata }          from 'next'
import { ServicesPageContent }    from '@/components/sections/ServicesPageContent'

export const metadata: Metadata = {
  title:       'Nos Services | Fromagerie Digitale',
  description: 'Six services digitaux conçus pour les fromageries artisanales : SEO local, e-commerce, branding, social media, publicité et formation.',
  alternates:  { canonical: 'https://fromageriedigitale.fr/services' },
}

export default function ServicesPage() {
  return <ServicesPageContent />
}
