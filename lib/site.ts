export const SITE_URL = 'https://fromageriedigitale.com'
export const SITE_NAME = 'Fromagerie Digitale'
export const CONTACT_EMAIL = 'contact@fromageriedigitale.com'
export const TAGLINE = "L'agence qui parle le langage des fromagers"
export const BASELINE = 'Votre histoire, en ligne.'

export const ADDRESS = {
  street: '9 rue Waldeck Rousseau',
  postalCode: '75017',
  city: 'Paris',
}

export const FOUNDERS = {
  sandra: { name: 'Sandra Munon', role: 'Cofondatrice' },
  abraham: { name: 'Abraham Jordan', role: 'Cofondateur' },
} as const

export const NAV_LINKS = [
  { href: '/services', label: 'Offre' },
  { href: '/#projet-demo', label: 'Projet démo' },
  { href: '/blog', label: 'Blog' },
  { href: '/a-propos', label: 'À propos' },
] as const

/** URL absolue d'une page, pour les balises canoniques et le partage. */
export function absoluteUrl(path = ''): string {
  return `${SITE_URL}${path}`
}
