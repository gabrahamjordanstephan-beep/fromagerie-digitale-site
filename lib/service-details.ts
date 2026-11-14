/**
 * Contenu détaillé des pages services : introduction, situations, détail de la prestation,
 * exemple concret et questions fréquentes (balisées en FAQPage).
 * Règles éditoriales : pas de tiret dans les textes, tout est sur devis, aucun chiffre inventé.
 */

export type ServiceDetail = {
  intro: string[]
  signs: string[]
  steps: { title: string; text: string }[]
  example: { title: string; text: string }
  faq: { q: string; a: string }[]
}

const fr = (t: string) => t.replace(/ ([:;?!])/g, ' $1')

const RAW: Record<string, ServiceDetail> = {
  'site-premium': {
    intro: [
      "Avant de pousser la porte d'une fromagerie, la plupart des clients passent par leur téléphone. Ils vérifient vos horaires, regardent vos photos, cherchent si vous proposez des plateaux ou du retrait en boutique. Si votre site est lent, daté ou introuvable, ils vont chez le voisin.",
      "Nous créons un site sur mesure, pensé d'abord pour le mobile, qui montre ce qui fait la différence chez vous : vos affineurs, vos producteurs, vos saisons. Il est livré en deux semaines, et vous pouvez ensuite modifier vous même vos horaires, vos produits et vos actualités.",
    ],
    signs: [
      "Votre site a plus de cinq ans, ou vous n'avez qu'une page Facebook.",
      'Vos clients vous appellent pour connaître vos horaires ou savoir si un fromage est disponible.',
      'Vous voulez proposer des plateaux, des coffrets ou du retrait en boutique sans dépendre du téléphone.',
    ],
    steps: [
      { title: 'Cadrage', text: "Un échange pour comprendre votre boutique, vos clients et ce que le site doit accomplir : informer, faire venir, ou vendre. On liste ensemble les pages et les fonctions utiles, rien de plus." },
      { title: 'Design et textes', text: "Une maquette à vos couleurs et des textes écrits dans le langage de votre métier, pensés pour Google et pour les moteurs IA. Vous validez avant que l'on développe." },
      { title: 'Développement', text: 'Un site rapide, accessible et sécurisé, avec les balises de référencement, la fiche de votre boutique pour Google et des pages faciles à mettre à jour.' },
      { title: 'Mise en ligne et prise en main', text: "On met le site en ligne, on le déclare à Google, et on vous montre comment changer un horaire ou ajouter un produit en quelques minutes." },
    ],
    example: {
      title: 'À quoi ça ressemble',
      text: "Pour vous en faire une idée, nous avons imaginé La Cave de Léonie, une fromagerie fictive avec sélection du moment, accords et commande de plateaux en retrait. Vous pouvez la parcourir depuis la page d'accueil, rubrique projet démo.",
    },
    faq: [
      { q: 'Combien de temps prend la création du site ?', a: "Deux semaines entre la validation du devis et la mise en ligne, à condition d'avoir vos photos et vos informations au démarrage. Si vous n'avez pas de photos, on vous aide à les organiser." },
      { q: 'Je pourrai modifier le site moi même ?', a: "Oui. Horaires, produits, actualités et fermetures exceptionnelles se modifient sans compétence technique. Pour les changements plus importants, on reste disponibles." },
      { q: 'Vendre en ligne, c’est obligatoire ?', a: "Non. Beaucoup de fromageries veulent seulement une belle vitrine qui fait venir en boutique. La vente en ligne ou le retrait en boutique sont des options que l'on chiffre à part." },
      { q: 'Le site sera bien référencé sur Google ?', a: "Il est construit pour : pages rapides, textes structurés, balises et données pour Google. Le référencement local se joue aussi sur votre fiche Google et vos avis, ce que couvre notre offre Référencement local et IA." },
    ],
  },

  'visibilite-geo-ia': {
    intro: [
      "Quand quelqu'un tape « fromagerie près de chez moi » ou demande à ChatGPT où acheter un bon comté dans votre ville, la réponse se joue sur quelques éléments : votre fiche Google, vos avis, la cohérence de vos informations sur le web et la clarté de votre site.",
      "Nous prenons en charge ces éléments chaque mois. Votre fiche Google est complète et vivante, vos avis augmentent et reçoivent une réponse, et vos contenus sont écrits pour que les moteurs IA comprennent ce que vous vendez et pour qui.",
    ],
    signs: [
      "Quand vous cherchez « fromagerie » dans votre ville, des concurrents apparaissent avant vous.",
      'Votre fiche Google a peu de photos, peu d’avis ou des horaires qui ne sont pas à jour.',
      "Vous ne savez pas ce que ChatGPT ou Google répondent quand on leur parle de votre quartier.",
    ],
    steps: [
      { title: 'Audit de départ', text: "On regarde où vous apparaissez aujourd'hui sur Google, Maps et les moteurs IA, ce que disent vos avis et ce qui manque à votre fiche." },
      { title: 'Fiche Google complète', text: 'Catégories, description, produits, photos, horaires spéciaux et publications régulières : la fiche devient votre meilleure vitrine.' },
      { title: 'Avis clients', text: "Une méthode simple pour en demander en boutique, et des réponses rédigées à chaque avis, y compris les moins bons." },
      { title: 'Contenus pour les IA', text: "Des pages et des articles qui répondent aux vraies questions de vos clients, avec des informations claires et cohérentes partout sur le web." },
    ],
    example: {
      title: 'Un mois type',
      text: "Des publications sur votre fiche Google pour les arrivages et les fêtes, des réponses à tous les nouveaux avis, une vérification de vos informations sur les annuaires, et un court bilan : recherches, appels, demandes d'itinéraire.",
    },
    faq: [
      { q: 'Le référencement IA, c’est quoi ?', a: "C'est le fait d'être cité quand quelqu'un pose une question à ChatGPT, Gemini ou à l'aperçu IA de Google. Ces outils s'appuient sur des informations claires et cohérentes : votre site, votre fiche Google, vos avis et ce que les autres disent de vous." },
      { q: 'Les résultats arrivent en combien de temps ?', a: "La fiche Google réagit souvent en quelques semaines. Les avis et les contenus produisent leurs effets sur plusieurs mois. On vous montre l'évolution chaque mois, sans vous promettre une position précise." },
      { q: 'Un site est nécessaire pour en profiter ?', a: "Ce n'est pas obligatoire pour la fiche Google et les avis, mais un site clair aide beaucoup les moteurs IA à comprendre votre offre." },
      { q: 'Vous pouvez supprimer un avis négatif ?', a: "Non, et personne ne peut le promettre honnêtement. On peut signaler un avis qui ne respecte pas les règles de Google, et surtout y répondre de façon professionnelle, ce qui rassure les futurs clients." },
    ],
  },

  'performance-ads': {
    intro: [
      "La publicité en ligne permet de toucher les habitants de votre quartier au bon moment : avant les fêtes, pour une nouveauté, ou à l'ouverture d'une deuxième boutique. Mal réglée, elle coûte cher et ne rapporte rien.",
      "Nous construisons des campagnes Meta (Facebook, Instagram) et Google ciblées autour de votre boutique, avec des visuels et des textes faits pour vous. Chaque mois, vous savez ce que vous avez dépensé et ce que ça a produit : appels, itinéraires, visites du site, commandes.",
    ],
    signs: [
      'Vous lancez des coffrets, des plateaux de fêtes ou une nouvelle gamme.',
      'Vous ouvrez une boutique ou changez d’adresse et voulez vous faire connaître vite.',
      "Vous avez déjà essayé de « booster » des publications sans savoir ce que ça a rapporté.",
    ],
    steps: [
      { title: 'Objectif et budget', text: "On fixe un objectif mesurable et un budget publicitaire que vous maîtrisez. Le budget publicitaire est payé directement aux plateformes, séparément de notre accompagnement." },
      { title: 'Création des annonces', text: 'Visuels, vidéos courtes et textes adaptés à chaque plateforme, avec plusieurs versions à tester.' },
      { title: 'Ciblage local', text: 'Un rayon autour de votre boutique, les bons moments de la semaine et les bonnes périodes de l’année.' },
      { title: 'Suivi et bilan', text: 'On ajuste les campagnes en cours de route et vous recevez un bilan mensuel clair, sans jargon.' },
    ],
    example: {
      title: 'Exemple de campagne',
      text: "Trois semaines avant Noël : une annonce Instagram qui présente vos plateaux, une campagne Google sur les recherches de plateaux de fromages dans votre ville, et un suivi des commandes et des appels reçus.",
    },
    faq: [
      { q: 'Quel budget publicitaire prévoir ?', a: "Il dépend de votre objectif et de votre zone. On vous propose un budget de départ raisonnable lors du devis, puis on l'ajuste selon les résultats. Vous restez maître de la dépense." },
      { q: 'Meta ou Google, que choisir ?', a: "Google touche les personnes qui cherchent déjà une fromagerie ou un plateau. Meta fait découvrir votre boutique à des gens qui ne la cherchaient pas. Les deux se complètent souvent." },
      { q: 'Je garde la main sur mes comptes publicitaires ?', a: "Oui. Les comptes publicitaires sont à votre nom, et vous y avez accès à tout moment." },
      { q: 'Une campagne ponctuelle, c’est possible ?', a: "Oui, par exemple pour les fêtes ou une ouverture. Le suivi mensuel est utile si vous voulez une présence régulière." },
    ],
  },

  'identite-fromagere': {
    intro: [
      "Votre enseigne, vos étiquettes, vos réseaux et votre site devraient raconter la même histoire. Quand chaque support a son propre style, les clients ont du mal à reconnaître votre fromagerie et à mesurer la qualité de ce que vous vendez.",
      "Nous créons une identité visuelle complète : logo, couleurs, typographies, et une version animée du logo pour vos vidéos. Le tout est réuni dans une charte simple que vous, votre imprimeur ou votre enseigniste pourrez appliquer sans hésiter.",
    ],
    signs: [
      'Vous ouvrez ou reprenez une fromagerie.',
      'Votre logo a été fait rapidement et ne reflète plus votre niveau d’exigence.',
      'Vos étiquettes, votre site et vos réseaux ne se ressemblent pas.',
    ],
    steps: [
      { title: 'Immersion', text: "On vient comprendre votre histoire, votre région, vos producteurs et l'ambiance de votre boutique." },
      { title: 'Pistes créatives', text: 'Plusieurs directions présentées sur des supports réels : enseigne, étiquette, sac, publication.' },
      { title: 'Finalisation', text: 'La piste retenue est affinée : logo, déclinaisons, couleurs, typographies et version animée.' },
      { title: 'Charte et fichiers', text: "Vous recevez une charte claire et tous les fichiers prêts pour l'impression et le web." },
    ],
    example: {
      title: 'Ce que vous recevez concrètement',
      text: "Un logo et ses variantes, une palette de couleurs, deux familles de caractères, un logo animé de quelques secondes pour vos vidéos, des modèles pour vos réseaux, et une charte d'une dizaine de pages.",
    },
    faq: [
      { q: 'Combien de temps dure la création ?', a: "Le délai dépend du nombre d'allers retours et des supports à décliner. Il est fixé dans le devis, avant de commencer." },
      { q: 'Vous pouvez moderniser mon logo sans tout changer ?', a: "Oui. Si votre logo est connu de vos clients, on peut le faire évoluer pour garder ce qui le rend reconnaissable." },
      { q: 'Je deviens propriétaire du logo ?', a: "Oui, les droits d'utilisation vous sont cédés à la livraison, et vous recevez tous les fichiers sources." },
      { q: 'Vous vous occupez aussi des emballages ?', a: "Oui, avec notre offre Packaging premium, qui applique votre identité aux étiquettes, boîtes et papiers de coupe." },
    ],
  },

  'packaging-premium': {
    intro: [
      "Le fromage voyage : dans un sac, sur une table de fête, dans un coffret offert. Chaque emballage est une occasion de rappeler d'où il vient. Un papier de coupe ou une étiquette soignés font reconnaître votre fromagerie bien après le passage en caisse.",
      "Nous concevons vos étiquettes, boîtes, coffrets et papiers de coupe à partir de votre identité, en tenant compte des contraintes du frais. Nous suivons ensuite l'impression avec votre fournisseur ou avec un imprimeur que nous vous recommandons.",
    ],
    signs: [
      'Vous vendez des coffrets, des plateaux ou des cadeaux d’entreprise.',
      'Vous expédiez des fromages ou vendez en ligne.',
      'Votre papier de coupe est générique et ne porte pas votre nom.',
    ],
    steps: [
      { title: 'Inventaire', text: "On liste vos emballages actuels, vos volumes et vos contraintes : conservation, mentions obligatoires, budget." },
      { title: 'Création', text: "Maquettes d'étiquettes, de boîtes et de papiers de coupe, présentées en situation." },
      { title: 'Fichiers techniques', text: "Des fichiers prêts pour l'impression, avec les bons formats, les fonds perdus et les couleurs." },
      { title: 'Suivi de fabrication', text: "On échange avec l'imprimeur, on vérifie les épreuves et on vous accompagne jusqu'à la livraison." },
    ],
    example: {
      title: 'Exemple de gamme',
      text: "Un papier de coupe à votre nom, une étiquette pour vos fromages affinés maison, une boîte cadeau pour trois fromages et une carte qui présente les producteurs.",
    },
    faq: [
      { q: 'Il faut déjà avoir une identité visuelle ?', a: "C'est préférable. Si vous n'en avez pas, on peut commencer par notre offre Identité visuelle et logo animé, puis décliner le packaging." },
      { q: 'Vous vous occupez de l’impression ?', a: "Nous préparons les fichiers et suivons la fabrication. L'impression est facturée par l'imprimeur, que vous choisissez ou que nous vous recommandons." },
      { q: 'Et les mentions obligatoires ?', a: "On prévoit la place pour les mentions demandées par la réglementation. Leur contenu exact reste à valider par vous, selon vos produits." },
      { q: 'On peut commencer petit ?', a: "Oui. Un papier de coupe et une étiquette suffisent souvent pour commencer, et la gamme s'étoffe ensuite." },
    ],
  },

  'content-video-first': {
    intro: [
      "Le retournement des meules, le croûtage d'un vieux comté, la coupe d'un brie de Meaux : votre métier est fait pour la vidéo. Sur Instagram et TikTok, ces gestes attirent des clients qui ne connaissaient pas votre boutique.",
      "Nous venons tourner chez vous, en cave ou en boutique, puis nous montons des vidéos courtes, sous titrées, prêtes à publier. Un calendrier vous dit quoi publier et quand, pour garder un rythme sans y passer vos soirées.",
    ],
    signs: [
      "Vous avez de belles choses à montrer mais pas le temps de filmer ni de monter.",
      'Vos réseaux sont irréguliers, ou se limitent à des photos de vitrine.',
      'Vous voulez toucher une clientèle plus jeune ou de passage.',
    ],
    steps: [
      { title: 'Idées et scénarios', text: "On prépare les sujets avec vous : arrivages, producteurs, conseils de dégustation, coulisses de la cave." },
      { title: 'Tournage sur place', text: "Une demi journée chez vous pour filmer plusieurs vidéos d'un coup, sans gêner le service." },
      { title: 'Montage', text: 'Des formats courts, verticaux et sous titrés, avec votre logo et votre ton.' },
      { title: 'Publication', text: 'Un calendrier mensuel, des légendes rédigées et, si vous le souhaitez, la publication faite par nos soins.' },
    ],
    example: {
      title: 'Idées de vidéos',
      text: "Trois fromages pour un plateau de fête, la visite de la cave d'affinage, le portrait d'un producteur, la bonne façon de couper un fromage, ce qui arrive cette semaine en boutique.",
    },
    faq: [
      { q: 'Je dois apparaître à l’écran ?', a: "Non. Beaucoup de vidéos montrent seulement les mains, les fromages et la cave. Si vous aimez parler face caméra, on vous aide à le faire naturellement." },
      { q: 'Combien de vidéos par mois ?', a: "Le nombre est fixé dans le devis selon vos objectifs. Un rythme régulier compte plus qu'un grand volume." },
      { q: 'Vous publiez à ma place ?', a: "Oui si vous le souhaitez, ou bien on vous livre les vidéos et les légendes prêtes à poster." },
      { q: 'Les vidéos m’appartiennent ?', a: "Oui, vous pouvez les réutiliser sur votre site, votre fiche Google ou en boutique." },
    ],
  },

  'tiktok-shop': {
    intro: [
      "TikTok Shop permet d'acheter un produit sans quitter la vidéo qui l'a fait découvrir. Pour une fromagerie qui expédie déjà, ou qui vend des produits qui voyagent bien, c'est un nouveau canal de vente auprès d'un public qui ne passe pas forcément en boutique.",
      "Le fromage reste un produit frais, avec des règles de vente et de transport propres à chaque plateforme. On commence donc par vérifier ce que vous pouvez vendre et comment l'expédier, avant d'ouvrir et de paramétrer la boutique.",
    ],
    signs: [
      'Vous expédiez déjà des colis ou vendez sur votre site.',
      'Vous proposez des produits qui voyagent bien : fromages affinés à pâte dure, épicerie, coffrets.',
      'Vos vidéos marchent bien et vos abonnés demandent où acheter.',
    ],
    steps: [
      { title: 'Vérification', text: "On vérifie avec vous les conditions de la plateforme pour vos produits et les solutions d'expédition adaptées au frais." },
      { title: 'Ouverture de la boutique', text: 'Création et paramétrage du compte vendeur, des modes de livraison et des retours.' },
      { title: 'Fiches produits', text: 'Photos, descriptions et prix présentés clairement, avec vos conseils de conservation.' },
      { title: 'Premières ventes', text: 'Des vidéos qui mettent les produits en avant, et un point sur les premières commandes.' },
    ],
    example: {
      title: 'Par où commencer',
      text: "Souvent par une petite sélection : deux ou trois fromages affinés qui supportent bien le transport et un coffret découverte, avant d'élargir la gamme si les ventes suivent.",
    },
    faq: [
      { q: 'On peut vendre du fromage sur TikTok Shop ?', a: "Cela dépend des règles en vigueur sur la plateforme pour les produits alimentaires et frais, qui évoluent. On le vérifie au cas par cas avant de lancer quoi que ce soit." },
      { q: 'Comment expédier du fromage frais ?', a: "Avec des emballages isothermes et un transport rapide adaptés au produit. On vous aide à choisir une solution compatible avec vos volumes." },
      { q: 'Il faut déjà avoir des abonnés ?', a: "Ce n'est pas indispensable, mais une audience aide beaucoup. Notre offre Contenu vidéo Reels et TikTok peut préparer le terrain." },
      { q: 'Qui gère les commandes ?', a: "Vous préparez et expédiez les commandes. On vous montre comment les suivre simplement dans l'interface." },
    ],
  },

  'atelier-ia-fromager': {
    intro: [
      "Rédiger une publication, décrire un nouveau fromage, répondre à un avis délicat, retoucher une photo de vitrine : l'IA peut vous faire gagner du temps sur toutes ces tâches, à condition de savoir lui parler.",
      "En une journée, nous travaillons sur vos propres contenus. Vous repartez avec des méthodes simples et des modèles prêts à réutiliser, adaptés au vocabulaire de la fromagerie.",
    ],
    signs: [
      'Vous passez du temps le soir sur vos publications et vos réponses aux avis.',
      "Vous avez essayé ChatGPT mais les textes ne vous ressemblent pas.",
      'Vous voulez former votre équipe pour qu’elle soit autonome.',
    ],
    steps: [
      { title: 'Préparation', text: "On récupère quelques exemples de vos textes, photos et avis pour que l'atelier parte de votre réalité." },
      { title: 'Rédaction', text: 'Publications, descriptions de fromages et textes de site, avec votre ton et sans tournures artificielles.' },
      { title: 'Photo', text: "Prendre de meilleures photos au téléphone, puis les améliorer simplement avec des outils d'IA." },
      { title: 'Avis clients', text: 'Répondre vite et bien, y compris aux avis négatifs, avec des modèles que vous adaptez.' },
    ],
    example: {
      title: 'Ce que vous emportez',
      text: "Une bibliothèque de consignes prêtes à copier, des exemples réalisés pendant l'atelier sur vos produits, et une liste d'outils gratuits ou peu coûteux pour continuer seul.",
    },
    faq: [
      { q: 'Il faut être à l’aise avec l’informatique ?', a: "Non. Si vous savez utiliser un téléphone et une messagerie, vous pouvez suivre l'atelier." },
      { q: 'L’atelier peut se faire chez moi ?', a: "Il peut se faire dans votre boutique, à Paris ou à distance. On en parle lors du devis." },
      { q: 'Mon équipe peut participer ?', a: "Oui, l'atelier peut accueillir plusieurs personnes de la même fromagerie." },
      { q: 'Quels outils sont utilisés ?', a: "Des outils grand public comme ChatGPT ou Gemini, et des applications photo simples. On privilégie ceux qui sont gratuits ou peu coûteux." },
    ],
  },
}

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  const d = RAW[slug]
  if (!d) return undefined
  return {
    intro: d.intro.map(fr),
    signs: d.signs.map(fr),
    steps: d.steps.map((s) => ({ title: fr(s.title), text: fr(s.text) })),
    example: { title: fr(d.example.title), text: fr(d.example.text) },
    faq: d.faq.map((f) => ({ q: fr(f.q), a: fr(f.a) })),
  }
}
