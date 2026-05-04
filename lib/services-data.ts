export type ServiceBenefit = { title: string; desc: string }

export type Service = {
  slug:        string
  num:         string
  name:        string
  tagline:     string
  description: string
  image:       string
  benefits:    ServiceBenefit[]
  includes:    string[]
  meta: { title: string; description: string }
}

export const services: Service[] = [
  {
    slug:    'seo-local',
    num:     '01',
    name:    'SEO Local',
    tagline: 'Soyez trouvé quand vos clients cherchent leur fromager',
    description:
      'Quand un amateur de fromage tape "fromagerie près de chez moi" sur Google, votre boutique doit apparaître en premier. Notre service de SEO local est calibré pour les artisans fromagers : on optimise votre présence sur Google Maps, on travaille vos mots-clés de terroir, et on construit une réputation en ligne qui attire une clientèle de proximité qualifiée, prête à acheter.',
    image: '/images/strip-boutique.jpeg',
    benefits: [
      {
        title: 'Pack Local Google',
        desc:  'Apparaissez dans les 3 premières positions Google Maps. Là où 80 % des clics se font.',
      },
      {
        title: 'Clientèle sans publicité',
        desc:  'Augmentez votre fréquentation grâce au référencement naturel, sans dépenser en annonces.',
      },
      {
        title: 'Réputation maîtrisée',
        desc:  'Pilotez vos avis Google : réponses, collecte, gestion des avis négatifs.',
      },
      {
        title: 'Domination locale',
        desc:  'Soyez le premier résultat sur "fromage [votre ville]", "fromagerie artisanale [région]".',
      },
      {
        title: 'Touristes & visiteurs',
        desc:  'Attirez des clients de passage qui cherchent une expérience gastronomique locale authentique.',
      },
    ],
    includes: [
      'Audit complet de votre présence digitale locale',
      'Optimisation de votre fiche Google Business Profile',
      'Création et mise en cohérence des citations locales (50+ annuaires)',
      'Stratégie de contenu local (pages de quartier, actualités saisonnières)',
      'Formation à la gestion et collecte des avis Google',
      'Intégration des données structurées (Schema.org LocalBusiness)',
      'Rapport mensuel de positionnement et trafic',
      'Accompagnement sur 6 mois minimum',
    ],
    meta: {
      title:       'SEO Local pour Fromageries Artisanales | Fromagerie Digitale',
      description: 'Dominez les recherches Google locales et attirez plus de clients dans votre fromagerie. Service SEO spécialisé artisans fromagers.',
    },
  },
  {
    slug:    'ecommerce',
    num:     '02',
    name:    'E-commerce',
    tagline: 'Vendez vos fromages partout en France, 24h/24',
    description:
      'Votre boutique physique ferme à 19h. Votre boutique en ligne, jamais. Nous créons des sites e-commerce taillés pour les fromagers artisanaux : pensés pour la saisonnalité des fromages, la conservation pendant le transport, et l\'expérience d\'achat premium que vos clients attendent. Du coffret cadeau de Noël à l\'abonnement mensuel, on conçoit une boutique à votre image.',
    image: '/images/strip-ecommerce.jpeg',
    benefits: [
      {
        title: 'Ventes sans frontières',
        desc:  'Touchez des clients dans toute la France, passionnés de fromage artisanal.',
      },
      {
        title: 'Revenus 24h/24',
        desc:  'Générez des commandes même quand votre boutique est fermée, les weekends, les nuits.',
      },
      {
        title: 'Coffrets & abonnements',
        desc:  'Proposez des formules cadeaux et paniers récurrents pour fidéliser votre clientèle.',
      },
      {
        title: 'Gestion simplifiée',
        desc:  'Un tableau de bord clair pour gérer commandes, stocks et livraisons sans formation technique.',
      },
      {
        title: 'Expédition maîtrisée',
        desc:  'Intégration Colissimo et Chronofresh pour livrer vos fromages frais dans les meilleures conditions.',
      },
    ],
    includes: [
      'Design sur mesure de votre boutique en ligne',
      'Configuration du paiement sécurisé (Stripe, PayPal)',
      'Intégration des solutions de livraison (Colissimo, Chronofresh)',
      'Rédaction et optimisation SEO de vos fiches produits',
      'Module coffrets cadeaux et abonnements fromagers',
      'Passerelle de gestion des stocks',
      'Formation complète à la gestion quotidienne',
      'Maintenance et support technique 3 mois inclus',
    ],
    meta: {
      title:       'Boutique E-commerce pour Fromageries | Fromagerie Digitale',
      description: 'Vendez vos fromages artisanaux en ligne dans toute la France. Boutique e-commerce clé en main pour fromageries et affineurs.',
    },
  },
  {
    slug:    'branding',
    num:     '03',
    name:    'Branding',
    tagline: 'Une identité qui raconte votre terroir et votre savoir-faire',
    description:
      'Votre fromage a une histoire, un territoire, un geste unique. Votre identité visuelle doit le refléter et vous distinguer clairement des marques industrielles. Nous créons des identités de marque pour les fromagers artisanaux qui veulent affirmer leur singularité, justifier leur prix et construire une clientèle fidèle qui achète non seulement un fromage, mais une histoire.',
    image: '/images/cta-bg.jpeg',
    benefits: [
      {
        title: 'Distinction immédiate',
        desc:  'Démarquez-vous visuellement des marques industrielles dès le premier coup d\'œil.',
      },
      {
        title: 'Valeur perçue augmentée',
        desc:  'Renforcez la perception de qualité premium et justifiez vos prix artisanaux.',
      },
      {
        title: 'Cohérence totale',
        desc:  'Boutique, emballages, réseaux sociaux, site web : une seule identité reconnaissable.',
      },
      {
        title: 'Mémorabilité',
        desc:  'Créez un univers de marque que vos clients reconnaissent et recommandent.',
      },
      {
        title: 'Ancrage territorial',
        desc:  'Racontez votre terroir, votre région, votre histoire à travers votre identité visuelle.',
      },
    ],
    includes: [
      'Stratégie de marque et positionnement concurrentiel',
      'Création du logo et de ses déclinaisons',
      'Palette de couleurs et typographie de marque',
      'Charte graphique complète (guide d\'utilisation)',
      'Design des emballages et étiquettes produits',
      'Templates réseaux sociaux (stories, posts, bannières)',
      'Papeterie professionnelle (cartes de visite, sacs, tampons)',
      'Livraison de tous les fichiers sources',
    ],
    meta: {
      title:       'Branding pour Fromageries Artisanales | Fromagerie Digitale',
      description: 'Identité visuelle unique pour votre fromagerie : logo, charte graphique, packaging. Démarquez-vous des marques industrielles.',
    },
  },
  {
    slug:    'social-media',
    num:     '04',
    name:    'Social Media',
    tagline: 'Des contenus qui font saliver et créent une communauté',
    description:
      'Les amateurs de fromage adorent en parler, en photographier, en partager. Votre fromagerie mérite une présence sociale qui reflète votre passion et votre expertise. Nous créons et gérons des contenus authentiques : photos appétissantes, vidéos coulisses, stories du quotidien. Ils transforment vos abonnés en clients réguliers et vos clients en ambassadeurs.',
    image: '/images/strip-social.jpeg',
    benefits: [
      {
        title: 'Communauté engagée',
        desc:  'Construisez une base de fans fidèles autour de votre fromage et de votre personnalité.',
      },
      {
        title: 'Trafic en boutique',
        desc:  'Des posts bien conçus génèrent des visites concrètes et des ventes immédiates.',
      },
      {
        title: 'Éducation client',
        desc:  'Expliquez vos fromages, votre affinage, votre territoire. Créez des experts amateurs.',
      },
      {
        title: 'Nouvelle clientèle',
        desc:  'Attirez des jeunes consommateurs sensibles à l\'artisanat et au "local".',
      },
      {
        title: 'Référence locale',
        desc:  'Devenez LE fromager incontournable de votre région sur Instagram et Facebook.',
      },
    ],
    includes: [
      'Stratégie éditoriale sur mesure (Instagram, Facebook, TikTok)',
      'Création de contenu mensuelle : photos, vidéos, reels, stories',
      'Rédaction des légendes et hashtags optimisés',
      'Planification et publication via outil pro',
      'Community management : réponses aux commentaires et messages',
      'Calendrier éditorial avec temps forts fromagiers (foires, fêtes, saisons)',
      'Rapport mensuel d\'engagement et de croissance',
    ],
    meta: {
      title:       'Social Media pour Fromageries Artisanales | Fromagerie Digitale',
      description: 'Gestion de vos réseaux sociaux par des spécialistes fromageries. Instagram, Facebook, TikTok : contenus authentiques et engageants.',
    },
  },
  {
    slug:    'ads',
    num:     '05',
    name:    'Ads Meta & Google',
    tagline: 'Attirez exactement les clients que vous voulez, quand vous le voulez',
    description:
      'La publicité digitale bien faite n\'est pas une dépense. C\'est un investissement mesurable. Nous gérons des campagnes sur Meta (Instagram, Facebook) et Google Ads, ciblées au millimètre pour toucher les amateurs de fromage artisanal dans votre zone, ou dans toute la France si vous vendez en ligne. Chaque euro dépensé est tracké, optimisé, et rentabilisé.',
    image: '/images/strip-ads.jpeg',
    benefits: [
      {
        title: 'Ciblage chirurgical',
        desc:  'Touchez exactement vos clients idéaux : zone géographique, âge, centres d\'intérêt gastronomiques.',
      },
      {
        title: 'Saisonnalité maîtrisée',
        desc:  'Boostez vos ventes aux périodes clés : Noël, Pâques, foires fromagers, fêtes locales.',
      },
      {
        title: 'ROI transparent',
        desc:  'Suivez précisément ce que chaque euro investi vous rapporte en clients et en chiffre d\'affaires.',
      },
      {
        title: 'Flexibilité totale',
        desc:  'Ajustez votre budget à la hausse ou à la baisse selon vos besoins et vos résultats.',
      },
      {
        title: 'Notoriété accélérée',
        desc:  'Faites connaître votre fromagerie rapidement dans votre région ou au-delà.',
      },
    ],
    includes: [
      'Audit de votre situation et définition des objectifs de campagne',
      'Création et configuration des comptes publicitaires Meta et Google',
      'Création des visuels et textes publicitaires (A/B testing)',
      'Paramétrage du ciblage d\'audience et des zones géographiques',
      'Installation du pixel Meta et des conversions Google',
      'Optimisation hebdomadaire des campagnes en cours',
      'Rapport mensuel détaillé : dépenses, résultats, ROI',
    ],
    meta: {
      title:       'Publicité Meta & Google pour Fromageries | Fromagerie Digitale',
      description: 'Campagnes publicitaires Meta et Google spécialisées fromageries artisanales. Ciblage précis, ROI mesuré, budget maîtrisé.',
    },
  },
  {
    slug:    'formation',
    num:     '06',
    name:    'Formation Digitale',
    tagline: 'Devenez autonome dans votre communication digitale',
    description:
      'Vous maîtrisez votre métier de fromager à la perfection. Notre mission est de vous donner les clés pour maîtriser votre communication digitale avec la même aisance. Des formations pratiques, conçues pour les artisans fromagers, sans jargon technique, directement applicables le lendemain de la session. Parce que votre voix est la plus authentique pour parler de vos fromages.',
    image: '/images/strip-plateau.jpeg',
    benefits: [
      {
        title: 'Authenticité préservée',
        desc:  'Communiquer vous-même, avec votre propre voix. C\'est ce qui résonne le plus auprès de votre clientèle.',
      },
      {
        title: 'Autonomie complète',
        desc:  'Ne dépendez plus d\'un prestataire pour poster une story ou répondre à un commentaire.',
      },
      {
        title: 'Économies réelles',
        desc:  'Maîtriser vos outils digitaux réduit significativement vos coûts d\'agence sur le long terme.',
      },
      {
        title: 'Réactivité maximale',
        desc:  'Profitez d\'une opportunité, d\'un événement, d\'une actualité sans attendre un prestataire.',
      },
      {
        title: 'Formation sur mesure',
        desc:  'Chaque programme est adapté à votre niveau, vos outils et vos objectifs spécifiques.',
      },
    ],
    includes: [
      'Bilan de votre présence digitale actuelle et définition des priorités',
      'Programme de formation personnalisé (niveau débutant à avancé)',
      'Sessions individuelles en visioconférence (ou présentiel en Île-de-France)',
      'Supports de formation illustrés et fiches pratiques',
      'Exercices appliqués directement à votre fromagerie',
      'Suivi post-formation sur 1 mois (questions, vérifications)',
      'Accès à la communauté privée des fromagers formés',
    ],
    meta: {
      title:       'Formation Digitale pour Fromagers | Fromagerie Digitale',
      description: 'Formation digitale sur mesure pour fromagers artisanaux. Réseaux sociaux, Google, e-commerce : devenez autonome sans jargon technique.',
    },
  },
]

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getOtherServices(slug: string): Service[] {
  return services.filter(s => s.slug !== slug)
}
