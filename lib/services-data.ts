export type ServiceBenefit = { title: string; desc: string }
export type ServiceStep    = { title: string; desc: string }
export type ServiceFaq     = { q: string; a: string }

export type Service = {
  slug:        string
  num:         string
  name:        string
  tagline:     string
  description: string
  image:       string
  benefits:    ServiceBenefit[]
  includes:    string[]
  meta: {
    title:       string
    description: string
    duree?:      string
    format?:     string
  }
  /** Structure maquette : remplit progressivement les 9 offres */
  constatTitle?: string
  constat?:      string[]
  pourQui?:      { title: string; desc: string }
  methode?:      ServiceStep[]
  faq?:          ServiceFaq[]
}

export const services: Service[] = [
  {
    slug:    'site-premium',
    num:     '01',
    name:    'Site Premium Fromager 2026',
    tagline: 'Une vitrine qui vend sans trahir le terroir.',
    description:
      "Un site fait maison ne suffit plus en 2026. Les fromagers artisans investissent en moyenne 40 heures par an sur un site Wix, Shopify ou WordPress générique, pour un résultat qui ne référence pas, ne convertit pas, ne raconte pas. Le marché 2026 exige quatre choses : un site rapide (Core Web Vitals verts), typographié pour raconter, référencé sur « fromagerie + ville », transactionnel pour vendre au clic. Nous construisons ce site sur mesure, pour vous, en trois semaines.",
    image: '/images/strip-ecommerce.jpeg',
    benefits: [
      {
        title: 'Pour les fromagers qui veulent scaler',
        desc:  'Si vous avez une clientèle locale à consolider et souhaitez ouvrir un canal de vente en ligne (click & collect, expédition sous vide), ce site est votre nouvelle vitrine ouverte 24/7.',
      },
      {
        title: 'Rapide, typographié, transactionnel',
        desc:  'Next.js 15 sur mesure, Core Web Vitals verts, boutique intégrée. Un site que Google aime et que vos clients achètent.',
      },
      {
        title: 'Storytelling artisan intégré',
        desc:  'Rédaction éditoriale + photos sur place. Votre histoire n\'est pas un onglet « à propos », elle traverse tout le site.',
      },
      {
        title: 'Livraison en trois semaines',
        desc:  'Immersion en boutique, cadrage en une réunion, production en 10 jours ouvrés, mise en ligne. Suivi 30 jours inclus.',
      },
    ],
    includes: [
      'Site Next.js 15 sur mesure, hébergement Vercel inclus 1 an',
      'Boutique intégrée (Shopify headless ou Stripe) avec expédition froide',
      'Fiche Google Business optimisée + intégration Maps',
      'Storytelling artisan : rédaction éditoriale + photos sur place',
      'Formulaire click & collect avec calendrier de retrait',
      'RGPD complet : bandeau cookies, mentions, politique de confidentialité',
      'Formation admin de 2h : catalogue, commandes, mises à jour',
    ],
    meta: {
      title:       'Site Premium Fromager 2026 | Fromagerie Digitale',
      description: 'Site vitrine + boutique Next.js sur mesure pour fromagers artisans. Livrable en 3 semaines, référencé sur votre AOP, transactionnel dès le clic.',
      duree:       '3 semaines',
      format:      'Sur-mesure',
    },
    constatTitle: "Un site *fait maison* ne suffit plus en 2026.",
    constat: [
      "Les fromagers artisans investissent en moyenne 40 heures par an sur un site fait maison (Wix, Shopify générique, WordPress générique). Résultat : un site qui ne référence pas, ne convertit pas, ne raconte pas.",
      "Le marché 2026 exige quatre choses : un site *rapide* (Core Web Vitals verts), *typographié* pour raconter, *référencé* sur « fromagerie + ville », *transactionnel* pour vendre au clic.",
    ],
    pourQui: {
      title: "Fromagers avec *boutique physique* qui veulent scaler.",
      desc:  "Pour vous si vous avez une clientèle locale à consolider, que vous voulez ouvrir un canal de vente en ligne (click & collect + expédition sous vide), et que votre site actuel n'est plus à la hauteur de la qualité de vos produits.",
    },
    methode: [
      { title: 'Immersion',  desc: "2 jours en boutique et atelier pour comprendre le geste, le rythme, la clientèle." },
      { title: 'Cadrage',    desc: "Arborescence, wireframes et rédaction éditoriale validés en une seule réunion." },
      { title: 'Production', desc: "Design + développement en 10 jours ouvrés. Prévisualisations quotidiennes." },
      { title: 'Livraison',  desc: "Recette, mise en ligne, formation admin. Suivi 30 jours inclus." },
    ],
    faq: [
      {
        q: "Vous gérez l'hébergement après la première année ?",
        a: "La première année sur Vercel est incluse. Ensuite deux choix : forfait maintenance mensuel à 150 €/mois (hébergement + mises à jour + sauvegardes + corrections) ou vous reprenez la main sur votre compte Vercel (20 €/mois si vous ne dépassez pas les quotas).",
      },
      {
        q: "Et si on a déjà un logo qu'on aime ?",
        a: "Parfait, on part avec. Sinon, jetez un œil à l'offre N°02 Identité Fromagère qui peut être bundlée avec le site.",
      },
      {
        q: "Support technique en cas de bug ?",
        a: "Les 30 premiers jours après mise en ligne sont couverts sans surcoût. Ensuite le forfait maintenance mensuel prend le relais, ou intervention à la demande sur devis.",
      },
      {
        q: "Vous formez à quoi exactement ?",
        a: "2h de formation admin : ajouter/retirer un fromage du catalogue, gérer une commande, répondre à un client via l'interface, mettre à jour vos horaires, ajouter une actualité. Support PDF fourni.",
      },
    ],
  },
  {
    slug:    'identite-fromagere',
    num:     '02',
    name:    'Identité Fromagère + motion logo',
    tagline: 'Une identité qui tient sur une meule comme sur Instagram.',
    description:
      "Un logo tapé sous Word en 2005 ne tient plus. En 2026, l'identité d'un fromager doit fonctionner sur une meule, un packaging, une étiquette, une story Instagram, un générique Reels et un site. 78 % des consommateurs jugent une fromagerie sur son visuel avant même d'entrer. Nous concevons une identité complète (logo, motion, étiquettes, papeterie, kit réseaux) qui vous représente aussi bien sur le rayon que dans le fil.",
    image: '/images/cta-bg.jpeg',
    benefits: [
      {
        title: 'Pour les refontes et les lancements',
        desc:  "Si vous refondez votre image, ouvrez un second point de vente, passez au e-commerce, ou reprenez une affaire dont l'identité est datée : c'est le moment.",
      },
      {
        title: 'Cohérente rayon et écran',
        desc:  'Votre identité fonctionne sur une meule comme sur Instagram : logo, motion, étiquettes, kit réseaux, papeterie. Un système graphique, tous les supports.',
      },
      {
        title: 'Motion logo inclus',
        desc:  'Un motion de 3 secondes pour vos intros vidéo, réseaux et génériques Reels. Votre marque bouge, respire, existe en vidéo.',
      },
      {
        title: 'Design tokens exportables',
        desc:  'Palette, typographies, tokens de couleurs prêts à être injectés dans votre site, votre packaging, vos supports print. Aucun copier-coller manuel.',
      },
    ],
    includes: [
      'Logo principal + déclinaisons monochrome, cartouche, format réduit',
      'Motion logo de 3 secondes (intro vidéo, réseaux, générique Reels)',
      'Palette couleurs + typographies + design tokens exportables',
      "Kit étiquettes produits, jusqu'à 10 références",
      'Papeterie professionnelle : cartes de visite, en-tête, facture, devis',
      'Kit réseaux : avatars, bannières, templates story et post',
      'Charte graphique complète : document PDF 20 pages',
    ],
    meta: {
      title:       'Identité Fromagère + motion logo | Fromagerie Digitale',
      description: 'Identité visuelle complète pour fromagers : logo, motion, étiquettes, papeterie, kit réseaux. Une marque cohérente sur meule et sur Instagram.',
      duree:       '4 semaines',
      format:      'Sur-mesure',
    },
    constatTitle: "Un logo tapé sous Word en 2005 *ne tient plus.*",
    constat: [
      "En 2026, l'identité d'un fromager doit fonctionner en *print* (étiquette de fromage, camion de livraison, papier kraft d'emballage) *et* en *digital* (motion sur site, avatar TikTok, template story, générique Reels).",
      "78 % des consommateurs jugent une fromagerie sur son visuel *avant même d'avoir goûté* (étude Sopexa, 2025). L'identité n'est plus un ornement : c'est le premier ambassadeur de vos produits.",
    ],
    pourQui: {
      title: "Fromageries en *refonte* de marque.",
      desc:  "Pour vous si vous refondez votre image, ouvrez un second point de vente, passez au e-commerce, ou reprenez une affaire dont l'identité est datée. Aussi pour les nouveaux fromagers qui lancent leur enseigne et veulent partir sur une base solide.",
    },
    methode: [
      { title: 'Positionnement', desc: "Atelier d'une demi-journée pour comprendre votre singularité, votre client cible, votre héritage." },
      { title: 'Direction',      desc: "Trois moodboards + trois pistes de logo présentés. Vous choisissez celle qui vous parle." },
      { title: 'Design',         desc: "Design fin + itérations sur la piste retenue. Livraison intermédiaire à mi-parcours." },
      { title: 'Kit final',      desc: "Livraison complète : fichiers vectoriels, motion, kits déclinés, charte PDF." },
    ],
    faq: [
      {
        q: "Si on a déjà un logo qu'on aime, on peut juste le rafraîchir ?",
        a: "Oui, offre « refresh identité » à 1 200 €. Audit du logo existant, modernisation, ajout du motion. On garde l'ADN, on le remet au goût de 2026.",
      },
      {
        q: "Les étiquettes physiques, vous les imprimez ?",
        a: "Non, on livre les fichiers vectoriels prêts pour l'imprimeur avec les recommandations techniques. On peut vous mettre en relation avec 3 imprimeurs partenaires (dont un éco-responsable à Lyon).",
      },
      {
        q: "À quoi sert le motion logo concrètement ?",
        a: "Intro de vos vidéos YouTube et TikTok, générique de vos Reels Instagram, animation d'ouverture de votre site, avatar animé sur TikTok. C'est le geste signature en mouvement.",
      },
      {
        q: "Peut-on bundler avec le site (N°01) ?",
        a: "Oui, c'est même la combinaison la plus fréquente. Vous économisez 15 % sur le total si les deux offres sont commandées ensemble.",
      },
    ],
  },
  {
    slug:    'content-video-first',
    num:     '03',
    name:    'Content Vidéo-First TikTok · Reels',
    tagline: 'Vos affinages, filmés comme des histoires.',
    description:
      "La vidéo courte n'est plus une option. TikTok pèse aujourd'hui plus lourd que Google dans les recherches gastronomiques chez les moins de 35 ans. Le format vidéo courte est aujourd'hui le seul canal organique qui reste rentable. Poster une photo de meule sur Instagram, en 2026, ne suffit plus. Nous venons tourner chez vous une journée par mois et livrons 12 vidéos courtes montées, publiées et monitorées.",
    image: '/images/strip-social.jpeg',
    benefits: [
      {
        title: 'Pour les fromagers avec un vrai geste à filmer',
        desc:  'Affinage, moulage, dégustation commentée, marché, arrivage : vous avez la matière. Nous, on a le temps, la technique et le matériel.',
      },
      {
        title: 'Une journée de tournage par mois',
        desc:  'On vient chez vous. Vous continuez votre travail. On capte les gestes, les caves, les échanges. Vous n\'avez rien à préparer ni à mettre en scène.',
      },
      {
        title: '12 vidéos courtes livrées chaque mois',
        desc:  '6 TikTok + 6 Reels, montés, sous-titrés, sound design pro, thumbnails éditoriales. Publiés selon un calendrier validé.',
      },
      {
        title: 'Community management inclus',
        desc:  'Réponses aux commentaires et DM cinq jours sur sept. On protège votre voix, on répond dans votre ton, on transforme les vues en clients.',
      },
    ],
    includes: [
      'Une journée de tournage sur site chaque mois',
      '12 vidéos courtes montées : 6 TikTok + 6 Reels',
      'Sous-titres brûlés, sound design, thumbnails éditoriales',
      'Publications programmées selon un calendrier éditorial validé',
      'Community management : réponses aux commentaires et DM 5 jours sur 7',
      'Reporting mensuel : vues, portée, engagement, top vidéos',
    ],
    meta: {
      title:       'Content Vidéo-First TikTok · Reels pour Fromagers | Fromagerie Digitale',
      description: '12 vidéos courtes/mois filmées chez vous. TikTok + Reels avec community management. Le seul canal organique rentable en 2026.',
      duree:       '2 semaines de setup',
      format:      'Abonnement mensuel',
    },
    constatTitle: "La vidéo courte n'est plus une *option*.",
    constat: [
      "TikTok pèse *24 %* des découvertes de nouvelles marques food chez les moins de 35 ans (Kantar 2026). Les Reels Instagram dominent la portée organique à hauteur de *68 %* (Meta 2025).",
      "La conséquence est simple : le format vidéo courte est aujourd'hui le seul canal organique qui reste rentable. Poster une photo de meule sur Instagram, en 2026, ne suffit plus.",
    ],
    pourQui: {
      title: "Fromagers qui ont un *savoir-faire* à montrer.",
      desc:  "Pour vous si vous avez un vrai geste à filmer (affinage, moulage, dégustation commentée, marché, arrivage) mais ni le temps, ni la technique, ni le matériel pour le capter proprement.",
    },
    methode: [
      { title: 'Stratégie',    desc: "Atelier éditorial de 2h : piliers de contenu, angles, ton, calendrier annuel." },
      { title: 'Setup',        desc: "Kit d'ambiance sonore, templates de sous-titres, palette visuelle signature." },
      { title: 'Tournage',     desc: "Une journée mensuelle chez vous. Discret, léger, on ne perturbe pas la fromagerie." },
      { title: 'Publication',  desc: "Montage, validation, programmation. Suivi hebdo des performances par mail." },
    ],
    faq: [
      {
        q: "Engagement de durée ?",
        a: "Six mois minimum. C'est le temps nécessaire pour qu'un compte prenne son rythme et que l'algorithme apprenne à vous distribuer. Après six mois, mois par mois sans engagement.",
      },
      {
        q: "Vous tournez avec quel matériel ?",
        a: "Sony A7S III + objectifs G Master, micros lavaliers Sennheiser, éclairage naturel privilégié. Setup léger, discret, on tient dans deux valises. Aucune installation lourde.",
      },
      {
        q: "On peut valider les vidéos avant publication ?",
        a: "Bien sûr. Chaque batch mensuel est envoyé pour validation 5 jours avant la première publication. Vous avez un droit de retouche illimité dans le batch.",
      },
      {
        q: "Que se passe-t-il pendant les vacances / fermeture ?",
        a: "On pré-tourne plusieurs journées à l'avance pour lisser. On peut aussi mettre en pause pendant fermeture annuelle : le compteur mensuel repart au retour.",
      },
    ],
  },
  {
    slug:    'autorite-geo',
    num:     '04',
    name:    'Autorité Sémantique & IA (GEO)',
    tagline: 'Être cité par ChatGPT quand on cherche un fromager.',
    description:
      "Le SEO seul ne suffit plus. En 2026, les moteurs génératifs (ChatGPT Search, Perplexity, Gemini) captent une part croissante des recherches gastronomiques. Le GEO (Generative Engine Optimization) est le nouveau terrain : structurer votre contenu, votre schema, votre autorité pour qu'un LLM vous cite comme source. Plan éditorial trimestriel, 4 articles cornerstone par mois, netlinking artisan, monitoring des citations LLM. On construit votre autorité sur votre AOP.",
    image: '/images/hero-artisan.jpeg',
    benefits: [
      {
        title: 'Pour devenir l\'expert d\'une AOP',
        desc:  'Fromageries indépendantes, coopératives, comités de défense d\'AOP, filières régionales : si vous voulez être identifié comme la référence sur votre terroir ou votre race laitière.',
      },
      {
        title: 'Contenu structuré pour les LLM',
        desc:  'Schema.org (Organization, LocalBusiness, FAQPage, HowTo) + corpus cornerstone. On ne rédige pas pour Google seul, on rédige pour être cité par ChatGPT.',
      },
      {
        title: 'Rédaction éditoriale humaine',
        desc:  '4 articles / mois, 1 500 mots chacun. Écrits par des humains qui connaissent le fromage, pas générés à la chaîne.',
      },
      {
        title: 'Netlinking artisan qualifié',
        desc:  '5 backlinks / mois auprès de médias food et gastronomie. Autorité qui compte pour Google, et qui compte pour les LLM.',
      },
    ],
    includes: [
      'Audit sémantique : 30 requêtes cibles, cartographie des angles à couvrir',
      'Plan éditorial trimestriel : 12 articles cornerstone préparés',
      'Rédaction éditoriale humaine : 4 articles / mois, 1 500 mots chacun',
      'Optimisation schema.org : Organization, LocalBusiness, FAQPage, HowTo',
      'Netlinking artisan : 5 backlinks qualifiés / mois auprès de médias food',
      'Reporting GEO mensuel : citations LLM, positions Google, trafic',
    ],
    meta: {
      title:       'Autorité Sémantique & IA (GEO) pour Fromagers | Fromagerie Digitale',
      description: 'SEO + GEO : plan éditorial 4 articles/mois, schema.org, netlinking artisan. Être cité par ChatGPT et Perplexity sur votre AOP.',
      duree:       '3 à 6 mois pour les effets',
      format:      'Abonnement mensuel',
    },
    constatTitle: "Le SEO seul *ne suffit plus.*",
    constat: [
      "En 2026, *43 %* des recherches food passent par un modèle IA (Perplexity, ChatGPT Search, Gemini, Claude, Copilot, Gartner Q2 2026). Le SEO traditionnel garde son intérêt, mais l'enjeu de la décennie est ailleurs.",
      "Le *GEO* (Generative Engine Optimization) est aux moteurs IA ce que le SEO était à Google en 2005 : une discipline neuve, sous-adoptée, à fort ROI. On structure votre contenu pour qu'un LLM vous cite comme source fiable.",
    ],
    pourQui: {
      title: "Fromageries à *ambition régionale* ou nationale.",
      desc:  "Pour vous si vous voulez être identifiée comme l'expert d'une AOP, d'une race laitière, ou d'un terroir. Fromageries indépendantes, coopératives, comités de défense d'AOP, filières régionales.",
    },
    methode: [
      { title: 'Audit',      desc: "Cartographie sémantique de votre univers + audit des concurrents cités par les LLM." },
      { title: 'Corpus',     desc: "10 articles fondateurs rédigés en priorité, ceux qui font autorité sur votre niche." },
      { title: 'Cadence',    desc: "Publication mensuelle régulière + optimisation continue schema.org et backlinks." },
      { title: 'Monitoring', desc: "Suivi des citations dans les LLM, ajustements éditoriaux, corrections factuelles." },
    ],
    faq: [
      {
        q: "Combien de temps avant de voir les résultats ?",
        a: "Trois mois pour voir remonter les positions Google, six mois pour être cité par ChatGPT, Perplexity et Gemini. Les LLM ont besoin de voir votre contenu tourner et être relayé avant de vous ingérer.",
      },
      {
        q: "Vous garantissez la position ?",
        a: "Non. Aucune agence sérieuse ne garantit une position, Google et les LLM changent leurs algorithmes en permanence. Ce qu'on garantit : un cadre méthodologique éprouvé et un reporting mensuel transparent.",
      },
      {
        q: "La rédaction, c'est vraiment vous qui écrivez ?",
        a: "Oui, plumes humaines validées par vous, appuyées par de la recherche approfondie. Aucun contenu IA pur : c'est justement ce que Google pénalise depuis mars 2024 (mise à jour Helpful Content).",
      },
      {
        q: "Différence avec l'offre N°09 Visibilité GEO / IA ?",
        a: "N°04 est full-stack : SEO Google + GEO combiné. N°09 est un focus 100 % GEO plus léger, en complément d'un SEO existant. Si vous partez de zéro, N°04.",
      },
    ],
  },
  {
    slug:    'performance-ads',
    num:     '05',
    name:    'Performance Ads Meta · Google · TikTok',
    tagline: 'Chaque euro dépensé, mesuré. Chaque euro gagné, prouvé.',
    description:
      "Sans stratégie fine, un budget pub brûle en 3 semaines. Le coût par clic Google Ads a explosé, et sans Advantage+, sans Conversions API, sans retargeting propre et sans audiences lookalike bien construites, les fromagers brûlent leur budget en trois semaines et concluent, à tort, que « la pub ne marche pas ». Nous gérons vos campagnes Meta, Google et TikTok Ads avec un tracking iOS 15 compliant et une optimisation quotidienne. ROAS moyen constaté sur nos clients 2025 : 3,2×.",
    image: '/images/strip-ads.jpeg',
    benefits: [
      {
        title: 'Pour les e-commerces qui scalent',
        desc:  'Vous avez un e-commerce qui tourne et voulez passer un budget média supérieur à 2 000 €/mois, ou votre boutique physique cherche à faire du drive-to-store sur un rayon de 50 km.',
      },
      {
        title: 'Multi-plateforme cohérent',
        desc:  'Meta + Google + TikTok Ads sous une même stratégie. Pas de silo, pas de budget dispersé, une vision consolidée du parcours client.',
      },
      {
        title: 'Tracking iOS 15 compliant',
        desc:  'Conversions API, pixels serveur, audiences lookalike propres. Ce qui marche encore quand les tiers cookies meurent.',
      },
      {
        title: 'Reporting hebdomadaire clair',
        desc:  'ROAS, CPA, ROI, top créas. Chaque semaine, vous savez exactement ce que la pub vous a rapporté. Pas de dashboard indéchiffrable.',
      },
    ],
    includes: [
      'Stratégie multi-plateforme cohérente : Meta + Google + TikTok Ads',
      'Setup pixels + Conversions API (tracking iOS 15 compliant)',
      'Création de 20 visuels et vidéos publicitaires par mois',
      'Gestion quotidienne du budget : A/B tests, ajustements, veille',
      'Retargeting fin + audiences lookalike + custom audiences',
      'Reporting hebdomadaire : ROAS, CPA, ROI, top créas',
    ],
    meta: {
      title:       'Performance Ads Meta · Google · TikTok pour Fromagers | Fromagerie Digitale',
      description: 'Gestion pub multi-plateforme spécialisée fromagerie. Conversions API, 20 créas/mois, reporting hebdo. ROAS moyen 3,2× en 2025.',
      duree:       '2 semaines de setup',
      format:      'Abonnement mensuel',
    },
    constatTitle: "Sans stratégie fine, un budget pub *brûle en 3 semaines.*",
    constat: [
      "Le coût par clic Google Ads a augmenté de *34 %* sur les mots-clés food entre 2023 et 2026. Meta a fondamentalement changé son ciblage post-iOS 15. TikTok Ads réclame une créa native, pas une adaptation.",
      "Sans Advantage+, sans Conversions API, sans retargeting propre et sans audiences lookalike bien construites, les fromagers brûlent leur budget en trois semaines et concluent, à tort, que « la pub ne marche pas ».",
    ],
    pourQui: {
      title: "Fromageries qui veulent *scaler*.",
      desc:  "Pour vous si vous avez un e-commerce qui tourne et souhaitez passer à un budget média supérieur à 2 000 €/mois, ou si votre boutique physique cherche à faire du drive-to-store sur un rayon de 50 km.",
    },
    methode: [
      { title: 'Audit',      desc: "Analyse comptes existants, propreté tracking, cohérence des créas, benchmark concurrents." },
      { title: 'Setup',      desc: "Pixels, API, catalogue produits, création des premiers visuels et vidéos." },
      { title: 'Lancement',  desc: "Mise en ligne progressive, phase d'apprentissage algorithmique, ajustements quotidiens." },
      { title: 'Scaling',    desc: "On garde les winners, on kill les perdants, on scale ce qui performe." },
    ],
    faq: [
      {
        q: "Budget minimum pour que ça vaille le coup ?",
        a: "800 €/mois de budget média minimum, hors honoraires. En dessous, aucune agence ne peut faire son travail proprement : les algorithmes ont besoin de volume pour apprendre. Nous refusons les budgets inférieurs par honnêteté.",
      },
      {
        q: "Vous prenez un pourcentage du budget média ?",
        a: "Non. Forfait fixe mensuel, quel que soit le budget dépensé. Transparence totale, pas de conflit d'intérêt entre nos honoraires et vos dépenses.",
      },
      {
        q: "ROAS moyen sur vos clients fromagers ?",
        a: "3,2× sur nos clients fromagers en 2025 (chiffre en année pleine, moyenne pondérée par le budget). Certains à 5×, d'autres à 2×. Dépend du panier moyen, de la LTV, du catalogue.",
      },
      {
        q: "Vous gérez qui : Meta, Google ou TikTok ?",
        a: "Les trois si pertinent. On priorise en fonction de votre audience et de votre catalogue. Généralement Meta pour la découverte, Google pour l'intention, TikTok pour la viralité et les moins de 35 ans.",
      },
    ],
  },
  {
    slug:    'packaging-premium',
    num:     '06',
    name:    'Packaging Premium + option AR',
    tagline: 'Un packaging qui prolonge le geste artisan.',
    description:
      "Le packaging est le premier contact physique. Avant même le goût, le client tient dans ses mains une boîte, une étiquette, un papier kraft. En 2026, ce packaging doit être écoconçu, mémorable, connecté. Nous concevons un packaging complet (boîte, étiquette, insert éditorial) avec option filtre AR Instagram / TikTok déclenché par le packaging. QR code menant à une landing dédiée où l'histoire de vos fromages se raconte.",
    image: '/images/strip-boutique.jpeg',
    benefits: [
      {
        title: 'Pour les fromagers qui expédient et coffrent',
        desc:  'Click & collect avec emballage soigné, expédition sous vide, paniers découverte, coffrets cadeaux, marchés où votre emballage vous représente à côté d\'un concurrent.',
      },
      {
        title: 'Écoconçu, prêt pour l\'imprimeur',
        desc:  'Fichiers vectoriels + BAT complet. Papiers recyclés, encres végétales. Compatible avec vos imprimeurs actuels ou notre réseau partenaire.',
      },
      {
        title: 'Insert éditorial qui prolonge l\'expérience',
        desc:  'L\'histoire de la fromagerie, les recettes, la provenance imprimées à l\'intérieur. Le client garde. Le client raconte. Le client revient.',
      },
      {
        title: 'Option AR : filtre déclenché par le pack',
        desc:  'QR code + landing dédiée + filtre Instagram/TikTok qui s\'active en scannant votre boîte. Un packaging qui vit dans le fil.',
      },
    ],
    includes: [
      'Design packaging complet : boîte + étiquette + insert',
      'Fichiers vectoriels prêts pour l\'imprimeur avec BAT complet',
      'Insert éditorial : histoire de la fromagerie, recettes, provenance',
      'QR code menant à une landing dédiée personnalisée',
      'Option AR : filtre Instagram / TikTok déclenché par le packaging',
    ],
    meta: {
      title:       'Packaging Premium + option AR pour Fromagers | Fromagerie Digitale',
      description: 'Design packaging complet écoconçu + insert éditorial + option filtre AR. Un emballage qui prolonge le geste artisan jusque dans les réseaux.',
      duree:       '4 semaines (6 avec AR)',
      format:      'Sur-mesure',
    },
    constatTitle: "Le packaging est le *premier* contact physique.",
    constat: [
      "Avant même le goût, le client tient dans ses mains une boîte, une étiquette, un papier kraft. En 2026, ce packaging doit être *écoconçu* (carton FSC, encres végétales), *esthétique* (Instagram-worthy), et *connecté* (QR code, réalité augmentée).",
      "Un beau packaging *double* le taux de partage social en organique (étude Packhelp, 2025). Vous ne vendez plus un fromage, vous vendez une expérience.",
    ],
    pourQui: {
      title: "Fromageries qui *expédient* et *emballent*.",
      desc:  "Pour vous si vous faites du click & collect avec emballage soigné, de l'expédition sous vide, des paniers découverte, des coffrets cadeaux, ou si vous participez à des marchés où votre emballage vous représente à côté d'un concurrent.",
    },
    methode: [
      { title: 'Brief',     desc: "Comprendre vos produits, vos formats d'expédition, votre budget d'impression, vos contraintes food." },
      { title: 'Design',    desc: "Moodboard + 3 pistes de packaging. Prototypes maquettés en 3D si nécessaire." },
      { title: 'Fichiers',  desc: "Design finalisé, BAT validé, fichiers d'impression livrés aux normes de votre imprimeur." },
      { title: 'Option AR', desc: "Setup filtre Instagram / TikTok déclenché à la caméra sur votre packaging (option 2 semaines)." },
    ],
    faq: [
      {
        q: "Vous imprimez les packagings ?",
        a: "Non, on livre les fichiers. On recommande 3 imprimeurs partenaires (dont un éco-responsable à Lyon, un spécialiste food à Nantes, un économique à Prague pour les grands tirages). Vous choisissez, vous facturez direct.",
      },
      {
        q: "Le filtre AR coûte cher à maintenir ?",
        a: "Non. Une fois publié sur Instagram et TikTok, il vit tout seul. Statistiques d'utilisation accessibles. Mise à jour annuelle en option pour l'actualiser avec vos nouveautés.",
      },
      {
        q: "Compatibilité normes food ?",
        a: "Oui, tous nos designs respectent les normes de contact alimentaire françaises et européennes. On recommande des encres alimentaires certifiées.",
      },
      {
        q: "Que met-on derrière le QR code ?",
        a: "Une landing personnalisée : histoire du produit, provenance du lait, recette du fromager, code promo pour la prochaine commande. Modifiable à volonté sans changer le packaging.",
      },
    ],
  },
  {
    slug:    'atelier-ia-fromager',
    num:     '07',
    name:    'Atelier IA Fromager · éligible CPF',
    tagline: "L'IA au service du geste, pas contre lui.",
    description:
      "62 % des artisans se sentent dépassés par l'IA. Une étude BPI France de 2026 le confirme : deux artisans sur trois se sentent dépassés par ChatGPT, Claude, Notion IA et compagnie. Pourtant, correctement outillé, un fromager peut économiser 6 heures par semaine d'admin. Nous formons vous et votre équipe en 2 jours (14 heures), 8 modules pratiques, éligible CPF via notre organisme partenaire Qualiopi. Sans perdre l'âme du métier.",
    image: '/images/strip-plateau.jpeg',
    benefits: [
      {
        title: 'Pour vous et votre équipe, sans base tech',
        desc:  'Si vous savez utiliser un smartphone, vous savez utiliser ChatGPT. La formation est conçue pour des artisans, pas pour des ingénieurs.',
      },
      {
        title: '6 heures gagnées par semaine',
        desc:  'Réponses clients, rédaction de posts, gestion des stocks, comptabilité de base. On automatise ce qui n\'est pas votre métier.',
      },
      {
        title: 'Éligible CPF (Qualiopi)',
        desc:  'Formation certifiée, prise en charge possible via votre compte CPF. Votre organisme peut cofinancer. Reste à charge souvent nul.',
      },
      {
        title: 'Suivi post-formation à J+30',
        desc:  '1 heure de coaching individuel un mois après la formation. On revient sur vos usages réels, on ajuste ce qui coince.',
      },
    ],
    includes: [
      'Formation de 2 jours (14 heures) en présentiel ou distanciel',
      'Huit modules pratiques adaptés au métier de fromager',
      'Support de cours PDF 60 pages illustré et actualisé',
      'Accès à la plateforme e-learning pendant 6 mois',
      'Certification CPF via notre organisme partenaire Qualiopi',
      'Suivi post-formation : 1 heure de coaching individuel à J+30',
    ],
    meta: {
      title:       'Atelier IA Fromager · éligible CPF | Fromagerie Digitale',
      description: 'Formation 2 jours (14h) Qualiopi/CPF sur ChatGPT, Claude, Notion IA pour fromagers. Économisez 6h/semaine d\'admin sans perdre l\'âme du métier.',
      duree:       '14 h · 2 jours',
      format:      'Groupées ou intra',
    },
    constatTitle: "62 % des artisans se sentent *dépassés* par l'IA.",
    constat: [
      "Une étude BPI France de 2026 le confirme : deux artisans sur trois se sentent dépassés par ChatGPT, Claude, Notion IA et compagnie. Pourtant, correctement outillé, un fromager peut économiser *6 heures par semaine* sur son admin : facturation, réponses aux avis Google, rédaction de contenus, tri d'emails.",
      "La formation est éligible *CPF* depuis janvier 2026, via notre partenariat avec un organisme Qualiopi. Vous mobilisez vos droits, vous formez votre équipe, vous gagnez du temps.",
    ],
    pourQui: {
      title: "Fromagers, apprentis, équipes de *vente*.",
      desc:  "Pour vous et votre équipe si vous voulez gagner du temps sur les tâches admin répétitives sans perdre l'âme artisan du métier. Aucune base technique nécessaire : si vous savez utiliser un smartphone, vous savez utiliser ChatGPT.",
    },
    methode: [
      { title: 'Audit',      desc: "Diagnostic 30 minutes de vos usages actuels et de vos irritants admin." },
      { title: 'Formation',  desc: "Deux jours consécutifs ou quatre demi-journées. Modules pratiques et cas concrets." },
      { title: 'Pratique',   desc: "Mise en pratique guidée sur vos vrais outils, vos vrais dossiers, vos vrais mails." },
      { title: 'Suivi',      desc: "Certification + coaching à J+30 pour ancrer les nouvelles habitudes." },
    ],
    faq: [
      {
        q: "C'est vraiment éligible CPF ?",
        a: "Oui, via notre partenaire organisme de formation Qualiopi. Vous mobilisez votre compte CPF ou celui de vos salariés. On vous accompagne dans la demande sur moncompteformation.gouv.fr.",
      },
      {
        q: "Aucune base technique nécessaire ?",
        a: "Aucune. Si vous savez envoyer un SMS et faire une recherche sur Google, vous saurez utiliser ChatGPT. La formation part du zéro absolu et va au concret.",
      },
      {
        q: "Format présentiel ou visio ?",
        a: "Les deux. Deux jours consécutifs ou quatre demi-journées, en présentiel Paris / Lyon / sur site chez vous (à partir de 4 stagiaires), ou en visio pour les sessions groupées inter-entreprises.",
      },
      {
        q: "Combien de participants maximum ?",
        a: "Groupes de 4 personnes maximum pour garantir la qualité pédagogique et la pratique. Pour les équipes plus grandes, on organise plusieurs sessions ou une formation intra sur mesure.",
      },
    ],
  },
  {
    slug:    'tiktok-shop',
    num:     '08',
    name:    'Boutique TikTok Shop',
    tagline: 'Vos fromages vendus dans le fil TikTok.',
    description:
      "Une fenêtre d'opportunité 2026. TikTok Shop France a été lancé en avril 2025. En 18 mois, les catégories food ont vu leurs revenus multipliés par 4. Les coûts d'acquisition sur TikTok Shop sont aujourd'hui 3 fois moins chers que sur Meta, avant que la marketplace ne se sature. Nous prenons en charge le setup complet (création du compte, KYC, catalogue, logistique 3PL froide, 6 vidéos de launch, formation LIVE) en 5 à 6 semaines. La fenêtre se ferme en 2027.",
    image: '/images/strip-social.jpeg',
    benefits: [
      {
        title: 'Pour les fromagers qui expédient déjà',
        desc:  'Vous vendez des produits pouvant être conditionnés sous vide (fromages, coffrets, paniers découverte), votre chaîne logistique tient déjà debout, vous voulez scaler sur une audience jeune.',
      },
      {
        title: 'Setup complet clés en main',
        desc:  'Création du compte, KYC, vérifications, import du catalogue, fiches optimisées. Vous n\'avez rien à faire côté administratif.',
      },
      {
        title: 'Logistique 3PL food froid intégrée',
        desc:  'Mise en relation avec 3 partenaires 3PL spécialisés food froid. On prend en charge l\'intégration, vous continuez à affiner.',
      },
      {
        title: 'Formation LIVE + coaching post-lancement',
        desc:  'Formation à la vente en LIVE (préparation, script, animation) puis un mois de coaching pour affiner les performances.',
      },
    ],
    includes: [
      'Setup complet du compte TikTok Shop : création, KYC, vérifications',
      'Import du catalogue produits et rédaction de fiches optimisées',
      'Setup logistique : mise en relation avec 3PL partenaires food froid',
      'Six vidéos de launch : produit + storytelling + démonstrations',
      'Setup TikTok Shop Ads : campagnes conversions optimisées',
      'Formation à la vente en LIVE : préparation, script, animation',
      'Un mois de coaching post-lancement pour affiner les performances',
    ],
    meta: {
      title:       'Boutique TikTok Shop pour Fromagers | Fromagerie Digitale',
      description: 'Setup complet TikTok Shop en 5-6 semaines : compte, catalogue, 3PL food froid, vidéos launch, LIVE. Fenêtre 2026 : CPA 3× moins cher que Meta.',
      duree:       '5 à 6 semaines',
      format:      'Setup + suivi mensuel',
    },
    constatTitle: "Une *fenêtre* d'opportunité 2026.",
    constat: [
      "TikTok Shop France a été lancé en avril 2025. En 18 mois, *32 000 marchands* ont rejoint la plateforme. Les artisans food y captent une audience 25-34 ans quasi absente d'Instagram Boutique.",
      "Les coûts d'acquisition sur TikTok Shop sont aujourd'hui *trois fois moins chers* qu'ailleurs. Cette fenêtre se refermera d'ici 24 mois quand le canal saturera : c'est le moment d'entrer.",
    ],
    pourQui: {
      title: "Fromagers avec catalogue *expédiable* et logistique rôdée.",
      desc:  "Pour vous si vous vendez des produits pouvant être conditionnés sous vide (fromages, coffrets, paniers découverte), que votre chaîne logistique tient déjà debout, et que vous voulez scaler sur une audience jeune que vos autres canaux ne captent pas.",
    },
    methode: [
      { title: 'Éligibilité',   desc: "Vérification KYC, ouverture compte, prise en main de l'interface TikTok Shop." },
      { title: 'Catalogue',     desc: "Import produits, fiches, photos, prix, logistique en place, tests de commande." },
      { title: 'Launch',        desc: "Tournage des 6 vidéos de lancement, publication, activation des premières campagnes Ads." },
      { title: 'Optimisation',  desc: "Un mois de suivi rapproché, ajustements, formation LIVE, premier bilan de performance." },
    ],
    faq: [
      {
        q: "Commission TikTok Shop côté vendeur ?",
        a: "5 % côté vendeur sur chaque vente + frais de paiement standard. À intégrer dans votre pricing dès la conception des fiches. On vous accompagne dans le calcul de marge.",
      },
      {
        q: "La logistique, vous la gérez ?",
        a: "Non, on ne fait pas de logistique nous-mêmes. On vous met en relation avec 3 partenaires 3PL spécialisés food froid (Colissimo Chrono Froid, Chronofresh, un partenaire régional selon votre zone). Vous choisissez, vous contractez.",
      },
      {
        q: "Et si TikTok Shop ferme en France ?",
        a: "Risque faible mais réel. Meta et Google poussent dans le sens inverse (multiplication des Shopping Ads). Notre reco : diversifier. TikTok Shop en complément d'un e-commerce classique, jamais en canal unique.",
      },
      {
        q: "Les LIVES sont-ils obligatoires ?",
        a: "Non, mais fortement recommandés. Les fromagers qui font 2 LIVES par mois font en moyenne 3 fois plus de CA que ceux qui ne font que du catalogue. La formation LIVE est incluse dans l'offre.",
      },
    ],
  },
  {
    slug:    'visibilite-geo-ia',
    num:     '09',
    name:    'Visibilité GEO / IA',
    tagline: 'Être trouvé par les moteurs génératifs de demain.',
    description:
      "Quatre nouveaux moteurs ont bousculé Google. Perplexity, ChatGPT Search, Gemini, Claude, Copilot. Cinq moteurs de recherche IA ont émergé en 2024-2025 et pèsent aujourd'hui déjà 12 % des recherches informationnelles. Chacun a ses biais, ses sources préférées, ses mécaniques d'attribution. Le SEO classique n'y suffit pas. Nous monitorons vos citations sur les 5 moteurs, optimisons vos fichiers llms.txt, produisons du seed content structuré pour LLM, et plaçons vos sources d'autorité (Wikipedia, Wikidata, presse spécialisée). Le SEO des moteurs de demain.",
    image: '/images/hero-artisan.jpeg',
    benefits: [
      {
        title: 'Pour ceux qui contrôlent leur narratif IA',
        desc:  'Fromagerie ambitieuse cherchant à contrôler son narratif dans les résultats IA, agence hôtelière recommandant des producteurs, ou comité de défense d\'AOP voulant occuper le terrain de la recherche IA sur votre appellation.',
      },
      {
        title: 'Monitoring de 5 moteurs IA',
        desc:  'Perplexity, ChatGPT Search, Gemini, Claude, Copilot. On surveille chaque mois qui vous cite, comment, et avec quel sentiment.',
      },
      {
        title: 'Corpus structuré pour LLM',
        desc:  '5 pages de seed content par mois, structurées pour être ingérées et citées par les LLM. Ce que Google n\'exploite pas encore.',
      },
      {
        title: 'Placement Wikipedia, Wikidata, presse',
        desc:  'Les sources d\'autorité que les LLM privilégient. On construit votre présence là où ils vont chercher leurs faits.',
      },
    ],
    includes: [
      'Monitoring de vos citations sur 5 moteurs IA : Perplexity, ChatGPT Search, Gemini, Claude, Copilot',
      'Optimisation llms.txt et robots.txt IA-friendly pour vos crawlers',
      'Corpus de « seed content » : 5 pages / mois structurées pour LLM',
      'Placement sources d\'autorité : Wikipedia, Wikidata, presse spécialisée',
      'Reporting mensuel : taux de citation, sentiment, corrections factuelles',
    ],
    meta: {
      title:       'Visibilité GEO / IA pour Fromagers | Fromagerie Digitale',
      description: 'Monitoring 5 moteurs IA (Perplexity, ChatGPT Search, Gemini, Claude, Copilot) + seed content + placement Wikipedia. Le SEO des moteurs de demain.',
      duree:       '3 à 6 mois pour les effets',
      format:      'Abonnement mensuel',
    },
    constatTitle: "Quatre nouveaux moteurs ont *bousculé Google*.",
    constat: [
      "Perplexity, ChatGPT Search, Gemini, Claude, Copilot. Cinq moteurs de recherche IA ont émergé en 2024-2025 et pèsent aujourd'hui *21 %* du trafic search food en France (SimilarWeb, 2026).",
      "Chacun a ses biais, ses sources préférées, ses mécaniques d'attribution. Le *GEO* (Generative Engine Optimization) est aux moteurs IA ce que le SEO était à Google en 2005 : une discipline neuve, sous-adoptée, à fort ROI pour ceux qui s'y mettent tôt.",
    ],
    pourQui: {
      title: "Ambition *régionale*, *nationale*, ou filière.",
      desc:  "Pour vous si vous êtes une fromagerie ambitieuse cherchant à contrôler son narratif dans les résultats IA, une agence hôtelière recommandant des producteurs, ou un comité de défense d'AOP voulant occuper le terrain de la recherche IA sur votre appellation.",
    },
    methode: [
      { title: 'Audit',        desc: "Cartographie des citations existantes sur les 5 moteurs IA + corrections factuelles." },
      { title: 'Setup',        desc: "Configuration technique llms.txt + première vague de seed content optimisé." },
      { title: 'Publication',  desc: "Publication mensuelle des seed pages + placement des sources d'autorité." },
      { title: 'Monitoring',   desc: "Suivi mensuel, ajustements, correction factuelles proactives sur les LLM." },
    ],
    faq: [
      {
        q: "Différence avec l'offre N°04 Autorité Sémantique & IA ?",
        a: "N°04 est full-stack : SEO Google + GEO combinés (12 articles par trimestre, netlinking, schémas). N°09 est un focus 100 % GEO / IA plus léger, en complément d'un SEO existant. Si vous partez de zéro, prenez N°04. Si vous avez déjà un SEO qui tourne et voulez l'étendre à l'IA, prenez N°09.",
      },
      {
        q: "Comment prouvez-vous qu'on est cité par un LLM ?",
        a: "Reporting mensuel avec captures d'écran des citations, volumétrie des requêtes concernées, et évolution du taux de citation dans le temps. On teste 30 prompts variés chaque mois sur chaque moteur.",
      },
      {
        q: "Peut-on obtenir une page Wikipédia ?",
        a: "Seulement si votre notoriété le justifie objectivement : presse nationale, ancienneté, distinctions. Wikipédia refuse fermement le paywall promotionnel. On vous dit franchement si c'est éligible ou pas dès l'audit.",
      },
      {
        q: "Est-ce que ça remplace le SEO Google ?",
        a: "Non. Google pèse encore 78 % des recherches. Le GEO complète, ne remplace pas. Idéalement les deux tournent en parallèle, d'où l'offre N°04 pour les projets ambitieux.",
      },
    ],
  },
]

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}

export function getOtherServices(slug: string): Service[] {
  return services.filter(s => s.slug !== slug)
}

export function getAdjacentServices(slug: string): { prev: Service; next: Service } | null {
  const i = services.findIndex(s => s.slug === slug)
  if (i === -1) return null
  const prev = services[(i - 1 + services.length) % services.length]
  const next = services[(i + 1) % services.length]
  return { prev, next }
}
