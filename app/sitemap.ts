import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'

const BASE = 'https://fromageriedigitale.com'

const pages = [
  { path: '',                   priority: 1.0, changeFrequency: 'weekly'  as const, updated: new Date('2025-05-03') },
  { path: '/services',          priority: 0.9, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/ecommerce',    priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/branding',     priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/packaging',    priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2026-05-20') },
  { path: '/services/social-media', priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/ads',            priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/services/content-marketing', priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2026-05-19') },
  { path: '/services/formation',    priority: 0.8, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/a-propos',          priority: 0.7, changeFrequency: 'monthly' as const, updated: new Date('2025-05-03') },
  { path: '/contact',           priority: 0.6, changeFrequency: 'yearly'  as const, updated: new Date('2025-05-03') },
]

const blogEntries = blogPosts.map(post => ({
  path:            `/blog/${post.slug}`,
  priority:        0.7 as const,
  changeFrequency: 'monthly' as const,
  updated:         new Date(post.date),
}))

export default function sitemap(): MetadataRoute.Sitemap {
  const allPages = [
    ...pages,
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
