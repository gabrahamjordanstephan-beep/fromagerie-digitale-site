export type Founder = {
  initials: string
  name: string
  role: string
  title: string
  /** Portrait réel uniquement. Laisser vide tant qu'aucune photo n'est validée. */
  photo?: string
  photoAlt?: string
  bio: string
  does: string[]
  skills: string[]
}

export const FOUNDERS_DATA: Founder[] = [
  {
    initials: 'AJ',
    name: 'Abraham Jordan',
    role: 'Cofondateur',
    title: 'Cofondateur',
    photo: '/images/equipe/abraham-jordan.webp',
    photoAlt: 'Portrait d’Abraham Jordan, cofondateur de Fromagerie Digitale',
    bio: '',
    does: [
      'Cadrer votre projet et fixer les priorités',
      'Concevoir un site simple, accessible et conforme',
      'Suivre les résultats et vous les expliquer clairement',
    ],
    skills: ['Stratégie produit', 'Expérience utilisateur', 'Référencement local et IA', 'Publicité Meta et Google', 'Automatisation IA'],
  },
  {
    initials: 'SM',
    name: 'Sandra Munon',
    role: 'Cofondatrice',
    title: 'Cofondatrice · Stratégie, design et contenu',
    photo: '/images/equipe/sandra-munon.webp',
    photoAlt: 'Portrait de Sandra Munon, cofondatrice de Fromagerie Digitale',
    bio: '',
    does: [
      'Définir avec vous les priorités et le plan d’action de votre boutique',
      'Créer votre identité visuelle, votre site et vos supports',
      'Écrire et mettre en scène vos textes, photos et publications',
    ],
    skills: ['Stratégie', 'Design', 'Contenu'],
  },
]

/** Paragraphes de « Notre histoire ». Vides tant que le texte n'est pas fourni : la section s'adapte. */
export const STORY: string[] = []

export const STRENGTHS = [
  { n: '01', title: 'Une méthode claire', desc: 'On écoute, on priorise, on mesure. Vous savez toujours ce qui est fait, pourquoi, et ce que ça rapporte.' },
  { n: '02', title: 'Le langage de votre métier', desc: "Affinage, AOP, lait cru, saisons : vous n'avez pas à tout nous expliquer. On parle fromage avant de parler digital." },
  { n: '03', title: 'Des sites dans les règles', desc: 'Accessibilité (RGAA) et protection des données (RGPD) intégrées dès le départ. Un site que tout le monde peut utiliser.' },
]
