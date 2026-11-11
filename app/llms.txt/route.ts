import { blogPosts } from '@/lib/blog-data'
import { SERVICES } from '@/lib/services'
import { ADDRESS, CONTACT_EMAIL, SITE_URL } from '@/lib/site'

/**
 * llms.txt : résumé lisible du site à destination des assistants IA (ChatGPT, Perplexity, Claude…).
 * Format proposé sur https://llmstxt.org
 */
export const dynamic = 'force-static'

export function GET() {
  const lines = [
    '# Fromagerie Digitale',
    '',
    `> Agence digitale dédiée aux fromageries artisanales, basée à ${ADDRESS.city}. Site internet, fiche Google, référencement local et IA, publicité, identité visuelle, packaging, vidéo et formation à l'IA pour les fromagers, partout en France. Tarifs sur devis, diagnostic offert.`,
    '',
    `Contact : ${CONTACT_EMAIL} · ${SITE_URL}/contact`,
    '',
    '## Offres',
    ...SERVICES.map((s) => `- [${s.name}](${SITE_URL}/services/${s.slug}) : ${s.promise}`),
    '',
    '## Guides pour les fromagers',
    ...blogPosts.map((p) => `- [${p.title}](${SITE_URL}/blog/${p.slug}) : ${p.excerpt}`),
    '',
    '## Agence',
    `- [À propos](${SITE_URL}/a-propos) : deux associés, Sandra Munon et Abraham Jordan, au service des fromageries artisanales.`,
    `- [Offres et formules](${SITE_URL}/services)`,
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
