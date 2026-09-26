import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { services } from '@/lib/services-data'

const BASE = 'https://fromageriedigitale.com'

const servicesUpdated = new Date('2026-09-26')

const staticPages = [
  { path: '',          priority: 1.0, changeFrequency: 'weekly'  as const, updated: new Date('2026-09-26') },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' as const, updated: servicesUpdated },
  { path: '/a-propos', priority: 0.7, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/contact',  priority: 0.6, changeFrequency: 'yearly'  as const, updated: new Date('2025-05-03') },
]

const serviceEntries = services.map(s => ({
  path:            `/services/${s.slug}`,
  priority:        0.8 as const,
  changeFrequency: 'monthly' as const,
  updated:         servicesUpdated,
}))

const blogEntries = blogPosts.map(post => ({
  path:            `/blog/${post.slug}`,
  priority:        0.7 as const,
  changeFrequency: 'monthly' as const,
  updated:         new Date(post.date),
}))

export default function sitemap(): MetadataRoute.Sitemap {
  const allPages = [
    ...staticPages,
    ...serviceEntries,
    { path: '/blog', priority: 0.8 as const, changeFrequency: 'weekly' as const, updated: new Date('2025-05-10') },
    ...blogEntries,
  ]

  return allPages.map(({ path, priority, changeFrequency, updated }) => ({
    url:             `${BASE}${path}`,
    lastModified:    updated,
    priority,
    changeFrequency,
  }))
}
