export type Pillar = {
  id: 'trouve' | 'reconnu' | 'vendre' | 'former'
  num: string
  label: string
  line: string
  title: string
  desc: string
  offers: { name: string; desc: string }[]
}

export const PILLARS: Pillar[] = [
  {
    id: 'trouve',
    num: '01',
    label: 'Être trouvé',
    line: 'Google, Maps et moteurs IA',
    title: "Qu'on vous trouve avant le supermarché d'à côté.",
    desc: 'Votre fromagerie visible là où vos clients cherchent : Google, Maps, et désormais ChatGPT et les moteurs IA.',
    offers: [
      { name: 'Site premium fromager', desc: 'Une vitrine rapide qui donne envie de pousser la porte, et qui vend en ligne si vous le souhaitez.' },
      { name: 'Référencement local et IA', desc: 'Fiche Google soignée, avis, et contenus qui font citer votre fromagerie par les assistants IA comme ChatGPT.' },
      { name: 'Publicité Meta et Google', desc: "Des campagnes locales mesurées : vous voyez ce que vous dépensez, et combien d'appels, d'itinéraires et de commandes elles rapportent." },
    ],
  },
  {
    id: 'reconnu',
    num: '02',
    label: 'Être reconnu',
    line: 'Identité, logo et packaging',
    title: 'Une identité qui tient sur une meule comme sur Instagram.',
    desc: "Une marque cohérente, de l'enseigne à l'étiquette, qui raconte votre terroir au premier regard.",
    offers: [
      { name: 'Identité visuelle et logo animé', desc: 'Logo, couleurs, typographies et une version animée pour vos vidéos et réseaux.' },
      { name: 'Packaging premium', desc: 'Étiquettes, boîtes et papiers de coupe qui font reconnaître votre fromagerie jusque sur la table de vos clients.' },
    ],
  },
  {
    id: 'vendre',
    num: '03',
    label: 'Faire vendre',
    line: 'Vidéo, publicité et vente en ligne',
    title: 'Vos affinages, racontés comme des histoires.',
    desc: "Les vidéos courtes sont aujourd'hui l'un des formats les plus regardés sur les réseaux. On tourne chez vous, vous gardez la main sur le message.",
    offers: [
      { name: 'Contenu vidéo Reels et TikTok', desc: 'Tournage en cave ou en boutique, montage court, calendrier de publication.' },
      { name: 'Boutique TikTok Shop', desc: "Mise en place de la boutique et des fiches produits, avec une réflexion sur l'expédition du frais." },
    ],
  },
  {
    id: 'former',
    num: '04',
    label: 'Se former',
    line: "Textes, photos et avis avec l'IA",
    title: 'Écrivez vos posts et répondez aux avis en quelques minutes.',
    desc: 'Pour les fromagers qui veulent gagner en autonomie sans y passer leurs soirées.',
    offers: [
      { name: 'Atelier IA fromager', desc: "Une journée pour apprendre à rédiger, photographier et répondre aux avis avec l'IA." },
    ],
  },
]

export const MANIFESTO =
  "Vos clients ne cherchent pas un fromage. Ils cherchent un fromager. Quelqu'un qui se lève à quatre heures pour le lait cru, qui laisse le temps aux affinages, qui connaît ses producteurs par leur prénom. Notre métier : que ça se voie en ligne, et que ça se transforme en ventes."

export type MethodStep = {
  num: string
  title: string
  when: string
  headline: string
  desc: string
  yourTime: string
  gets: string[]
}

export const METHOD: MethodStep[] = [
  {
    num: '01', title: 'Écouter', when: 'Semaine 1',
    headline: 'On commence par vous écouter.',
    desc: "Une visite en boutique ou un appel vidéo d'une heure. On parle de votre fromagerie, de vos clients, de ce qui marche déjà et de ce qui vous manque. Puis on passe votre présence en ligne au crible.",
    yourTime: 'une heure, chez vous ou en visio',
    gets: ['Un diagnostic de votre visibilité : Google, réseaux, site', 'Une analyse de trois concurrents proches', 'Vos priorités, classées par impact'],
  },
  {
    num: '02', title: 'Façonner', when: 'Semaine 2',
    headline: 'Un plan clair, avant toute dépense.',
    desc: "On transforme le diagnostic en plan d'action concret, avec un budget et un calendrier fixés. Rien ne démarre sans votre accord, et vous savez exactement ce que vous payez.",
    yourTime: 'trente minutes pour valider',
    gets: ["Un plan d'action sur trois mois", 'Un budget et un planning fixés à l’avance', 'Les indicateurs de réussite, choisis ensemble'],
  },
  {
    num: '03', title: 'Affiner', when: 'Mois 1 à 3',
    headline: 'On produit, on publie, on ajuste.',
    desc: "On s'occupe de tout : site, fiche Google, contenus, tournages chez vous si besoin. Chaque mois, on regarde ce qui fonctionne et on ajuste, comme un affinage qu'on retourne et qu'on goûte.",
    yourTime: 'environ une heure par mois',
    gets: ['La production et la publication des contenus', 'Des tournages en boutique ou en cave si besoin', 'Des ajustements chaque mois selon les résultats'],
  },
  {
    num: '04', title: 'Mesurer', when: 'Chaque mois',
    headline: 'Des résultats que vous pouvez lire.',
    desc: 'Un bilan simple, sans jargon : combien de personnes vous ont trouvé, appelé, sont venues ou ont commandé. Et des recommandations claires pour la suite.',
    yourTime: 'trente minutes de point mensuel',
    gets: ['Un tableau de bord lisible : visites, appels, commandes, avis', 'Un point de trente minutes avec nous', 'Les recommandations pour le mois suivant'],
  },
]

export type Value = {
  num: string
  title: string
  span: 5 | 7
  dark: boolean
  icon: string
  desc: string
  doLine: string
  noLine: string
}

export const VALUES: Value[] = [
  {
    num: '01', title: 'Authenticité', span: 7, dark: true,
    icon: 'M5 7h5v5H7c0 2 1 3 3 3v2c-3.5 0-5-2.2-5-5.5zM14 7h5v5h-3c0 2 1 3 3 3v2c-3.5 0-5-2.2-5-5.5z',
    desc: 'Rien d’inventé, rien de générique : votre voix, votre histoire, vos fromages.',
    doLine: 'Des photos et des vidéos tournées chez vous, des textes écrits avec vos mots.',
    noLine: 'Les photos de banque d’images et les textes passe partout copiés d’un site à l’autre.',
  },
  {
    num: '02', title: 'Terroir', span: 5, dark: false,
    icon: 'M3 19l6.5-10 4 6 2.5-3.5L21 19z',
    desc: 'Votre région, vos producteurs, vos affinages racontent une histoire unique.',
    doLine: 'Mettre en avant vos producteurs, votre région et vos fromages de saison.',
    noLine: 'Gommer ce qui vous rend unique pour ressembler à une chaîne.',
  },
  {
    num: '03', title: 'Résultats', span: 5, dark: false,
    icon: 'M3 17l6-6 4 4 8-8M15 7h6v6',
    desc: 'Chaque action a un objectif mesurable : plus de clients en boutique, plus de commandes.',
    doLine: 'Un bilan chiffré chaque mois : visites, appels, commandes, avis.',
    noLine: 'Les indicateurs flatteurs qui ne remplissent pas la boutique, comme les likes seuls.',
  },
  {
    num: '04', title: 'Sur mesure', span: 7, dark: true,
    icon: 'M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12',
    desc: 'Chaque fromagerie est différente. Votre stratégie aussi : pensée pour votre clientèle, votre marché et vos ambitions.',
    doLine: 'Une stratégie adaptée à votre clientèle, à votre budget et au temps dont vous disposez.',
    noLine: 'Les formules identiques vendues à tout le monde, sans regarder votre boutique.',
  },
]

export const HOME_FAQ = [
  {
    q: 'Combien coûte un accompagnement ?',
    a: 'Tout est sur devis, parce que chaque fromagerie a ses propres besoins. Le premier échange est offert et sans engagement : ensuite, vous recevez une proposition claire avec le prix et le planning, avant de signer quoi que ce soit.',
  },
  {
    q: "Je n'ai pas le temps de publier. Vous vous en occupez ?",
    a: 'Oui. Nous tournons, montons et publions. Vous validez en un message, depuis votre téléphone.',
  },
  {
    q: 'Je dois vraiment être sur TikTok ?',
    a: 'Pas forcément. On choisit les canaux où se trouvent vos clients. Pour une fromagerie de quartier, Google et Instagram suffisent souvent.',
  },
  {
    q: 'Vous travaillez partout en France ?',
    a: 'Oui, à distance, avec des déplacements pour les tournages.',
  },
]

export const DEMO_CHOICES = [
  { t: 'Les horaires et le retrait en tête.', d: 'Ce que les clients cherchaient au téléphone est visible dès l’arrivée sur le site.' },
  { t: 'Un parcours de commande simple.', d: 'Commander avant jeudi, retirer samedi : le carnet devient un formulaire.' },
  { t: 'Les arrivages mis en avant.', d: 'Une section facile à mettre à jour, reprise sur la fiche Google chaque semaine.' },
]
