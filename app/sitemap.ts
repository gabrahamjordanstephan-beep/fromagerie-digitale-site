import type { MetadataRoute } from 'next'

const BASE    = 'https://fromageriedigitale.fr'
const updated = new Date('2025-05-03')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                            lastModified: updated, priority: 1.0, changeFrequency: 'weekly'  },
    { url: `${BASE}/services`,              lastModified: updated, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${BASE}/services/seo-local`,    lastModified: updated, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services/ecommerce`,    lastModified: updated, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services/branding`,     lastModified: updated, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services/social-media`, lastModified: updated, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services/ads`,          lastModified: updated, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/services/formation`,    lastModified: updated, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${BASE}/a-propos`,              lastModified: updated, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${BASE}/contact`,               lastModified: updated, priority: 0.6, changeFrequency: 'yearly'  },
  ]
}
