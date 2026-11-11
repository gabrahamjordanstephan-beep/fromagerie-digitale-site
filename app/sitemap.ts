import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data'
import { SERVICES } from '@/lib/services'
import { SITE_URL } from '@/lib/site'

const REFONTE = new Date('2026-11-11')

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly'; updated: Date }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly', updated: REFONTE },
    { path: '/services', priority: 0.9, changeFrequency: 'monthly', updated: REFONTE },
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8, changeFrequency: 'monthly' as const, updated: REFONTE })),
    { path: '/a-propos', priority: 0.7, changeFrequency: 'monthly', updated: REFONTE },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly', updated: REFONTE },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly', updated: REFONTE },
    ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, priority: 0.7, changeFrequency: 'monthly' as const, updated: new Date(p.date) })),
  ]

  return pages.map(({ path, priority, changeFrequency, updated }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: updated,
    priority,
    changeFrequency,
  }))
}
