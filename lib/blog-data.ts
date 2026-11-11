import type { BlogPost } from '@/lib/blog-types'
import { avisGoogle, ficheGoogle, geoIA, seoLocal, siteFromagerie } from '@/lib/articles/visibilite'
import { identiteVisuelle, packaging } from '@/lib/articles/marque'
import { publicite, tiktokShop, videosReseaux } from '@/lib/articles/ventes'
import { FICHE_GOOGLE_INTRO, FICHE_GOOGLE_STEPS } from '@/lib/articles/fiche-google'

export type { BlogPost } from '@/lib/blog-types'

const RAW: BlogPost[] = [
  ficheGoogle,
  geoIA,
  avisGoogle,
  siteFromagerie,
  seoLocal,
  publicite,
  videosReseaux,
  tiktokShop,
  identiteVisuelle,
  packaging,
]

/** Texte brut d'un article, pour le temps de lecture. */
function plainText(p: BlogPost): string {
  const body =
    p.layout === 'fiche-google'
      ? [FICHE_GOOGLE_INTRO, ...FICHE_GOOGLE_STEPS.map((s) => `${s.title} ${s.body}`)].join(' ')
      : p.content.replace(/<[^>]+>/g, ' ')
  return [p.summary.join(' '), body, p.faq.map((f) => `${f.q} ${f.a}`).join(' ')].join(' ')
}

export type BlogPostWithMeta = BlogPost & { readingTime: number }

/** Typographie française : espace insécable avant « : ; ? ! », pour éviter qu'ils passent seuls à la ligne. */
const fr = (t: string) => t.replace(/ ([:;?!])/g, '\u00a0$1')

/** Articles du plus récent au plus ancien (date de mise à jour, sinon de publication). */
export const blogPosts: BlogPostWithMeta[] = RAW.map((p) => ({
  ...p,
  title: fr(p.title),
  summary: p.summary.map(fr),
  content: fr(p.content),
  faq: p.faq.map((f) => ({ q: fr(f.q), a: fr(f.a) })),
  readingTime: Math.max(2, Math.round(plainText(p).split(/\s+/).filter(Boolean).length / 200)),
})).sort((a, b) => (b.updated ?? b.date).localeCompare(a.updated ?? a.date) || b.date.localeCompare(a.date))

export function getBlogPost(slug: string): BlogPostWithMeta | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function postsForService(serviceSlug: string): BlogPostWithMeta[] {
  return blogPosts.filter((p) => p.service === serviceSlug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}
