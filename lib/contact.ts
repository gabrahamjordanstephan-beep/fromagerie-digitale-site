/** Règles partagées entre le formulaire (navigateur) et la route API (serveur). */

export const REQUEST_KINDS = [
  { id: 'devis', label: 'Un devis' },
  { id: 'diagnostic', label: 'Un diagnostic offert' },
] as const

export const FORMULES = ['Je ne sais pas encore', 'Essentiel', 'Croissance', 'Sur mesure'] as const

export const PRIORITES = [
  'Être trouvé sur Google et les IA',
  'Créer ou refaire mon site',
  'Refaire mon identité ou mon packaging',
  'Vendre plus grâce à la vidéo',
  "Me former à l'IA",
  'Je ne sais pas encore',
] as const

export type RequestKind = (typeof REQUEST_KINDS)[number]['id']

export type ContactPayload = {
  kind: RequestKind
  nom: string
  fromagerie: string
  email: string
  telephone: string
  ville: string
  formule: string
  priorite: string
  message: string
}

export type ContactErrors = Partial<Record<keyof ContactPayload, string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const LIMITS: Record<keyof ContactPayload, number> = {
  kind: 20,
  nom: 120,
  fromagerie: 160,
  email: 200,
  telephone: 30,
  ville: 120,
  formule: 40,
  priorite: 80,
  message: 3000,
}

/** Nettoie une valeur reçue : texte, sans espaces superflus, longueur bornée. */
function clean(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : ''
}

export function parseContact(input: Record<string, unknown>): ContactPayload {
  const kind = input.kind === 'diagnostic' ? 'diagnostic' : 'devis'
  return {
    kind,
    nom: clean(input.nom, LIMITS.nom),
    fromagerie: clean(input.fromagerie, LIMITS.fromagerie),
    email: clean(input.email, LIMITS.email),
    telephone: clean(input.telephone, LIMITS.telephone),
    ville: clean(input.ville, LIMITS.ville),
    formule: (FORMULES as readonly string[]).includes(String(input.formule)) ? String(input.formule) : FORMULES[0],
    priorite: (PRIORITES as readonly string[]).includes(String(input.priorite)) ? String(input.priorite) : PRIORITES[5],
    message: clean(input.message, LIMITS.message),
  }
}

export function validateContact(p: ContactPayload): ContactErrors {
  const errors: ContactErrors = {}
  if (p.nom.length < 2) errors.nom = 'Indiquez votre nom.'
  if (p.fromagerie.length < 2) errors.fromagerie = 'Indiquez le nom de votre fromagerie.'
  if (!EMAIL_RE.test(p.email)) errors.email = 'Cette adresse email ne semble pas valide.'
  if (p.telephone && !/^[+\d\s().]{6,}$/.test(p.telephone)) errors.telephone = 'Ce numéro ne semble pas valide.'
  return errors
}
