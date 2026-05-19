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
    slug:    'ecommerce',
    num:     '01',
    name:    'Développement Web',
    tagline: 'Un site à votre image, conçu pour convertir vos visiteurs en clients',
    description:
      'Votre site web est votre vitrine ouverte 24h/24, 7j/7. Pour un artisan fromager, il doit raconter votre histoire, valoriser vos produits et convaincre le visiteur de franchir la porte — ou de passer commande en ligne. Nous concevons des sites sur mesure pour les fromageries : sites vitrine, boutiques e-commerce, landing pages saisonnières. Rapides, mobiles, optimisés SEO dès la conception.',
    image: '/images/strip-ecommerce.jpeg',
    benefits: [
      {
        title: 'Présence professionnelle immédiate',
        desc:  'Un site qui inspire confiance dès les premières secondes et reflète la qualité de votre fromage artisanal.',
      },
      {
        title: 'Ventes en ligne intégrées',
        desc:  'Vendez vos fromages, coffrets et abonnements dans toute la France, même quand votre boutique est fermée.',
      },
      {
        title: 'SEO technique natif',
        desc:  'Chaque site est construit avec les meilleures pratiques SEO : vitesse, structure, données structurées, mobile-first.',
      },
      {
        title: 'Autonomie totale',
        desc:  'Interface d\'administration simple pour mettre à jour vos produits, actualités et promotions sans toucher au code.',
      },
      {
        title: 'Performance et rapidité',
        desc:  'Sites optimisés Core Web Vitals pour un chargement ultra-rapide, un meilleur référencement et une expérience client soignée.',
      },
    ],
    includes: [
      'Conception UX et design sur mesure aux couleurs de votre fromagerie',
      'Développement site vitrine ou e-commerce (Next.js / WordPress)',
      'Intégration boutique en ligne : paiement sécurisé, gestion stocks, livraison (Colissimo, Chronofresh)',
      'Optimisation SEO technique : vitesse, Core Web Vitals, données structurées',
      'Rédaction et mise en page de vos pages clés (accueil, produits, histoire)',
      'Site 100% responsive : parfait sur mobile, tablette et desktop',
      'Formation à la gestion quotidienne du site',
      'Maintenance et support technique 3 mois inclus',
    ],
    meta: {
      title:       'Développement Web pour Fromageries Artisanales | Fromagerie Digitale',
      description: 'Sites vitrine et e-commerce sur mesure pour fromageries. Rapide, mobile, SEO natif. Vendez vos fromages en ligne et attirez plus de clients.',
    },
  },
  {
    slug:    'branding',
    num:     '02',
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
    slug:    'packaging',
    num:     '03',
    name:    'Design Packaging',
    tagline: 'Vos fromages méritent un emballage qui raconte leur histoire avant le premier goût',
    description:
      'Sur le marché du fromage artisanal, l\'emballage est souvent le premier contact entre votre produit et un client qui ne vous connaît pas encore. Une étiquette bien pensée, un coffret soigné, un papier d\'emballage à votre image : ces détails font la différence entre un fromage qu\'on remarque et un fromage qu\'on achète. Nous créons des packagings pour fromageries qui allient authenticité artisanale, exigences réglementaires et impact visuel en rayon comme en boutique en ligne.',
    image: '/images/strip-boutique.jpeg',
    benefits: [
      {
        title: 'Premier contact décisif',
        desc:  '80% de la décision d\'achat se joue au moment où le client voit votre produit. Un packaging soigné justifie votre prix artisanal avant même la dégustation.',
      },
      {
        title: 'Cohérence rayon et web',
        desc:  'Vos étiquettes sont pensées pour être aussi efficaces en boutique physique que sur vos photos Instagram et vos fiches produits en ligne.',
      },
      {
        title: 'Conformité alimentaire intégrée',
        desc:  'Mentions obligatoires INCO, allergènes, dates de conservation : on intègre toutes les exigences réglementaires sans sacrifier l\'esthétique.',
      },
      {
        title: 'Différenciation face au mass-market',
        desc:  'Votre emballage affirme immédiatement l\'artisanat face aux références industrielles. C\'est votre argument silencieux le plus puissant en rayon.',
      },
      {
        title: 'Gamme cohérente et évolutive',
        desc:  'Un système graphique qui permet de créer de nouvelles étiquettes pour chaque fromage sans repartir de zéro à chaque lancement.',
      },
    ],
    includes: [
      'Audit de vos emballages actuels et étude du positionnement concurrentiel',
      'Création des étiquettes pour vos fromages (portion, meule, demi-meule, format vrac)',
      'Design des coffrets cadeaux et packaging saisonnier (Noël, Pâques, foires)',
      'Papier d\'emballage et sacs boutique à votre image',
      'Intégration des mentions obligatoires réglementaires (INCO, allergènes, traçabilité)',
      'Adaptation pour l\'e-commerce (photogénie, résistance au transport frigorifique)',
      'Livraison des fichiers prêts à l\'impression (PDF HD, Illustrator, formats imprimeur)',
    ],
    meta: {
      title:       'Design Packaging Fromagerie Artisanale | Étiquettes & Emballages | Fromagerie Digitale',
      description: 'Étiquettes fromage, coffrets cadeaux et emballages artisanaux sur mesure. Packaging fromagerie conforme INCO, pensé pour le rayon et l\'e-commerce.',
    },
  },
  {
    slug:    'social-media',
    num:     '04',
    name:    'Marketing des Réseaux Sociaux',
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
    slug:    'content-marketing',
    num:     '06',
    name:    'Content Marketing',
    tagline: 'Racontez votre histoire, attirez des clients qui vous ressemblent',
    description:
      'Un fromager artisanal a une histoire unique à raconter : un terroir, un geste, un savoir-faire transmis. Le content marketing transforme cette histoire en contenu qui attire naturellement vos clients idéaux sur Google, fidélise votre communauté et construit une autorité durable dans l\'univers fromager. Articles de blog, newsletters, fiches de dégustation : chaque mot travaille pour vous, 24h/24.',
    image: '/images/hero-artisan.jpeg',
    benefits: [
      {
        title: 'Trafic organique durable',
        desc:  'Des articles optimisés SEO sur vos fromages, votre terroir et vos recettes attirent des visiteurs qualifiés chaque mois, sans publicité.',
      },
      {
        title: 'Autorité dans l\'univers fromager',
        desc:  'Devenez la référence en ligne pour les amateurs de fromage artisanal dans votre région et au-delà.',
      },
      {
        title: 'Fidélisation par l\'email',
        desc:  'Une newsletter régulière transforme vos clients occasionnels en acheteurs fidèles et ambassadeurs de votre fromagerie.',
      },
      {
        title: 'Mots-clés longue traîne',
        desc:  '"Accord mets-fromages Noël", "meilleur comté artisanal Jura" — captez les recherches précises de clients prêts à acheter.',
      },
      {
        title: 'Contenu réutilisable',
        desc:  'Chaque article alimente vos réseaux sociaux, votre newsletter et améliore votre référencement. Un investissement, de multiples canaux.',
      },
      {
        title: 'Données structurées produits & recettes',
        desc:  'Intégration Schema.org Product et Recipe : vos fromages et accords mets-fromages apparaissent dans les Rich Snippets Google, attirant plus de clics.',
      },
      {
        title: 'Autorité E-E-A-T pour l\'artisan',
        desc:  'Vos articles valorisent votre terroir et savoir-faire, renforçant la confiance de Google et de vos visiteurs. Un signal de qualité que les grandes marques ne peuvent pas imiter.',
      },
    ],
    includes: [
      'Stratégie éditoriale SEO : mots-clés fromagers, calendrier saisonnier',
      'Audit et stratégie de mots-clés longue traîne fromagerie (ex: "comté artisanal Jura", "fromage bleu affinage cave")',
      'Rédaction mensuelle d\'articles de blog optimisés (terroir, recettes, affinages)',
      'Fiches de dégustation et guides d\'accord mets-fromages',
      'Implémentation des données structurées Schema.org (Product, Recipe, LocalBusiness)',
      'Maillage interne intelligent entre articles, fiches produits et pages services',
      'Création et envoi de la newsletter mensuelle',
      'Rapport mensuel : positions Google, trafic organique, clics Rich Snippets',
    ],
    meta: {
      title:       'Content Marketing SEO pour Fromageries Artisanales | Fromagerie Digitale',
      description: 'Blog SEO, newsletter et Schema.org pour fromagers : dominez les recherches longue traîne, attirez des clients qualifiés et construisez votre autorité en ligne.',
    },
  },
  {
    slug:    'formation',
    num:     '07',
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
