export type Author = { name: string; role: string }

export const AUTHORS = {
  sandra: { name: 'Sandra Munon', role: 'Cofondatrice' },
  abraham: { name: 'Abraham Jordan', role: 'Cofondateur' },
} satisfies Record<string, Author>

export interface BlogPost {
  slug: string
  /** Titre affiché (H1). */
  title: string
  /** Titre pour Google, 60 caractères environ. Par défaut : title. */
  metaTitle?: string
  /** Chapô et description pour Google, 160 caractères maximum. */
  excerpt: string
  category: string
  /** Date de première publication (AAAA-MM-JJ). */
  date: string
  /** Date de dernière mise à jour (AAAA-MM-JJ). */
  updated?: string
  author: Author
  image: string
  imageAlt: string
  /** Service de l'agence lié à l'article (slug de /services). */
  service: string
  keywords: string[]
  /** « En bref » : la réponse directe, en trois points. Lue en priorité par les moteurs IA. */
  summary: string[]
  /** Corps de l'article en HTML. Vide pour les articles à mise en page dédiée. */
  content: string
  faq: { q: string; a: string }[]
  /** Mise en page dédiée (sommaire, checklist interactive). */
  layout?: 'fiche-google'
}
