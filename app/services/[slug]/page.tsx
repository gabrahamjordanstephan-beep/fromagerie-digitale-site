import type { Metadata } from 'next'
import { notFound }       from 'next/navigation'
import { services, getService, getAdjacentServices } from '@/lib/services-data'
import { ServicePageContent } from '@/components/sections/ServicePageContent'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService(params.slug)
  if (!service) return {}
  return {
    title:       service.meta.title,
    description: service.meta.description,
    alternates:  { canonical: `https://fromageriedigitale.com/services/${service.slug}` },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getService(params.slug)
  if (!service) notFound()

  const adjacent = getAdjacentServices(params.slug)

  return <ServicePageContent service={service} adjacent={adjacent} />
}
