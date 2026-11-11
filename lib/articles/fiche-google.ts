export const FICHE_GOOGLE_INTRO =
  'Quand un client cherche « fromagerie » sur son téléphone, il ne visite pas votre site. Il regarde la carte, compare trois fiches, et choisit en quelques secondes. Bonne nouvelle : la fiche Google est gratuite, et ces sept réglages se font en une matinée.'

export type FicheStep = { id: string; num: string; title: string; body: string; tip?: boolean; cta?: boolean }

export const FICHE_GOOGLE_STEPS: FicheStep[] = [
  { id: 'categorie', num: '01', title: 'Choisir la bonne catégorie principale', body: "Sélectionnez « Fromagerie » comme catégorie principale. Ajoutez ensuite des catégories secondaires seulement si elles sont vraies : crémerie, épicerie fine, traiteur. C'est le réglage qui pèse le plus quand un client cherche une fromagerie près de chez lui." },
  { id: 'horaires', num: '02', title: 'Des horaires toujours justes', body: 'Mettez à jour les horaires exceptionnels avant chaque jour férié, chaque fermeture et chaque marché. Un client qui trouve porte close ne revient pas, et il laisse parfois un avis.' },
  { id: 'photos', num: '03', title: 'Des photos réelles, souvent', body: 'Vitrine, comptoir, cave, plateaux, et vous au travail. Ajoutez quelques photos chaque mois : une fiche vivante inspire confiance, une fiche figée depuis trois ans fait douter.', tip: true },
  { id: 'description', num: '04', title: 'Une description qui parle comme vous', body: "Vous avez jusqu'à 750 caractères. Citez votre ville et votre quartier, vos spécialités, vos producteurs et votre façon d'affiner. Écrivez comme vous parlez à vos clients au comptoir." },
  { id: 'produits', num: '05', title: 'Vos produits en vitrine', body: "La section Produits permet de présenter vos plateaux, vos fromages de saison ou vos coffrets cadeaux, avec photo et prix indicatif. C'est une vitrine que beaucoup de fromageries laissent vide.", cta: true },
  { id: 'avis', num: '06', title: 'Demander les avis, et y répondre', body: 'Demandez un avis au comptoir aux clients fidèles, avec un QR code près de la caisse. Puis répondez à chaque avis, positif ou négatif, en quelques mots personnels. Les futurs clients lisent aussi vos réponses.' },
  { id: 'actualites', num: '07', title: 'Publier des actualités régulières', body: 'Arrivage, fromage du mois, dégustation, fermeture estivale : une courte actualité par semaine ou par quinzaine suffit. Elle montre que la boutique est vivante et donne une raison de passer.' },
]

export const FICHE_GOOGLE_CHECKS = [
  'Catégorie principale « Fromagerie »',
  'Horaires exceptionnels à jour',
  'Photos ajoutées ce mois ci',
  'Description avec ville et spécialités',
  'Section Produits remplie',
  'Réponse à tous les avis récents',
  'Une actualité publiée ce mois ci',
]
