import type { MetadataRoute } from 'next'

const BASE = 'https://fromageriedigitale.com'
const now  = new Date()

const pages = [
  { path: '',                   priority: 1.0, changeFrequency: 'weekly'  as const, updated: new Date('2025-05-03') },
  { path: '/services',          priority: 0.9, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/seo-local',    priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/ecommerce',    priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/branding',     priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/social-media', priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/ads',          priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/formation',    priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/a-propos',          priority: 0.7, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/contact',           priority: 0.6, changeFrequency: 'yearly'  as const, updated: new Date('2025-05-03') },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, changeFrequency, updated }) => ({
    url:             `${BASE}${path}`,
    lastModified:    updated,
    priority,
    changeFrequency,
  }))
}
