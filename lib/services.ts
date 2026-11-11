export type LeverId = 'trouve' | 'reconnu' | 'vendre' | 'former'

export type Lever = {
  id: LeverId
  num: string
  label: string
  question: string
  icon: string
}

export const LEVERS: Lever[] = [
  { id: 'trouve', num: '01', label: 'Être trouvé', question: 'Sur Google, Maps et les moteurs IA',
    icon: 'M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12zM12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z' },
  { id: 'reconnu', num: '02', label: 'Être reconnu', question: 'Une image à la hauteur de vos fromages',
    icon: 'M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6l-5.4 2.9 1.2-6-4.5-4.2 6.1-.7z' },
  { id: 'vendre', num: '03', label: 'Faire vendre', question: 'En vidéo, en boutique et en ligne',
    icon: 'M4 6h11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM16 10l5-3v10l-5-3' },
  { id: 'former', num: '04', label: 'Se former', question: "Gagner en autonomie grâce à l'IA",
    icon: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.5h6c0-1.1.4-1.9 1-2.5A6 6 0 0 0 12 3z' },
]

export type Service = {
  slug: string
  lever: LeverId
  name: string
  promise: string
  items: string[]
  ideal: string
  rythme: string
  metaTitle: string
  metaDescription: string
}

export const SERVICES: Service[] = [
  {
    slug: 'site-premium',
    lever: 'trouve',
    name: 'Site premium fromager',
    promise: 'Une vitrine rapide qui donne envie de pousser la porte, et qui vend en ligne si vous le souhaitez.',
    items: ['Site sur mesure, rapide et accessible', 'Horaires et produits faciles à modifier vous même', 'Vente en ligne ou retrait en boutique en option'],
    ideal: "Votre site a plus de cinq ans, ou vous n'en avez pas encore.",
    rythme: '2 semaines',
    metaTitle: 'Création de site pour fromagerie',
    metaDescription: 'Un site sur mesure pour votre fromagerie, rapide et accessible, avec retrait en boutique ou vente en ligne en option. Réalisé en 2 semaines, sur devis.',
  },
  {
    slug: 'visibilite-geo-ia',
    lever: 'trouve',
    name: 'Référencement local et IA',
    promise: 'Donner à Google, Maps et ChatGPT toutes les raisons de recommander votre fromagerie.',
    items: ['Fiche Google optimisée et suivie', 'Une stratégie pour obtenir plus d’avis', 'Des contenus pensés pour les moteurs IA'],
    ideal: 'On a du mal à vous trouver quand on cherche une fromagerie dans votre ville.',
    rythme: 'Suivi mensuel',
    metaTitle: 'Référencement local et IA pour fromagerie',
    metaDescription: 'Fiche Google, avis clients et contenus pensés pour ChatGPT et les moteurs IA : on aide votre fromagerie à être trouvée dans votre ville.',
  },
  {
    slug: 'performance-ads',
    lever: 'trouve',
    name: 'Publicité Meta et Google',
    promise: "Des campagnes locales mesurées : vous voyez ce que vous dépensez, et combien d'appels, d'itinéraires et de commandes elles rapportent.",
    items: ['Un ciblage autour de votre boutique', 'Visuels et textes produits par nos soins', 'Un bilan des résultats chaque mois'],
    ideal: 'Vous lancez une nouveauté, des coffrets de fêtes ou une deuxième boutique.',
    rythme: 'Suivi mensuel',
    metaTitle: 'Publicité Meta et Google pour fromagerie',
    metaDescription: "Des campagnes Meta et Google ciblées autour de votre boutique, avec un bilan chaque mois : dépenses, appels, itinéraires et commandes.",
  },
  {
    slug: 'identite-fromagere',
    lever: 'reconnu',
    name: 'Identité visuelle et logo animé',
    promise: "Une marque cohérente, de l'enseigne à l'étiquette, qui raconte votre terroir au premier regard.",
    items: ['Logo, couleurs et typographies', 'Une version animée pour vos vidéos', 'Une charte simple à appliquer'],
    ideal: 'Vous ouvrez, reprenez une fromagerie, ou votre image ne reflète plus votre qualité.',
    rythme: 'Défini au devis',
    metaTitle: 'Identité visuelle et logo pour fromagerie',
    metaDescription: "Logo, couleurs, typographies et version animée : une identité cohérente de l'enseigne à l'étiquette, pensée pour votre fromagerie.",
  },
  {
    slug: 'packaging-premium',
    lever: 'reconnu',
    name: 'Packaging premium',
    promise: 'Des emballages qui font reconnaître votre fromagerie jusque sur la table de vos clients.',
    items: ['Étiquettes et boîtes', 'Papiers de coupe personnalisés', 'Le suivi avec votre imprimeur'],
    ideal: 'Vous vendez à emporter, en ligne ou en cadeau, et voulez que ça se voie.',
    rythme: 'Défini au devis',
    metaTitle: 'Packaging et papier de coupe pour fromagerie',
    metaDescription: "Étiquettes, boîtes et papiers de coupe personnalisés, avec le suivi de l'impression : un packaging qui fait reconnaître votre fromagerie.",
  },
  {
    slug: 'content-video-first',
    lever: 'vendre',
    name: 'Contenu vidéo Reels et TikTok',
    promise: 'Vos affinages racontés comme des histoires, tournés chez vous.',
    items: ['Tournage en cave ou en boutique', 'Montage court et sous titré', 'Un calendrier de publication'],
    ideal: 'Vous avez de belles choses à montrer, mais pas le temps de filmer.',
    rythme: 'Mensuel',
    metaTitle: 'Vidéos Reels et TikTok pour fromagerie',
    metaDescription: 'Tournage en cave ou en boutique, montage court sous titré et calendrier de publication : vos affinages racontés en vidéo.',
  },
  {
    slug: 'tiktok-shop',
    lever: 'vendre',
    name: 'Boutique TikTok Shop',
    promise: 'Vendez vos fromages directement depuis vos vidéos.',
    items: ['Ouverture et paramétrage de la boutique', 'Fiches produits et visuels', 'Une réflexion sur l’expédition du frais'],
    ideal: "Vous expédiez déjà, ou voulez tester la vente en ligne auprès d'un public plus jeune.",
    rythme: 'Défini au devis',
    metaTitle: 'Ouvrir une boutique TikTok Shop pour sa fromagerie',
    metaDescription: "Ouverture de votre boutique TikTok Shop, fiches produits, visuels et réflexion sur l'expédition du frais : vendez depuis vos vidéos.",
  },
  {
    slug: 'atelier-ia-fromager',
    lever: 'former',
    name: 'Atelier IA fromager',
    promise: "Une journée pour apprendre à rédiger, photographier et répondre aux avis avec l'IA.",
    items: ['Un atelier pratique sur vos propres contenus', 'Des modèles prêts à réutiliser', 'Rédaction, photo et réponses aux avis'],
    ideal: 'Vous voulez gagner en autonomie sur vos textes, vos photos et vos réponses aux avis.',
    rythme: 'Une journée',
    metaTitle: 'Atelier IA pour fromagers',
    metaDescription: "Une journée pratique pour apprendre à rédiger vos posts, photographier vos fromages et répondre aux avis avec l'IA.",
  },
]

export const leverOf = (id: LeverId): Lever => LEVERS.find((l) => l.id === id) ?? LEVERS[0]
export const getService = (slug: string): Service | undefined => SERVICES.find((s) => s.slug === slug)
