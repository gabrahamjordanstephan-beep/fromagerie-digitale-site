export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readingTime: number
  author: {
    name: string
    role: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'pourquoi-votre-fromagerie-a-besoin-dun-site-web',
    title: 'Pourquoi votre fromagerie a besoin d\'un site web en 2025',
    excerpt:
      'Vos clients cherchent vos horaires sur Google avant de se déplacer. Sans site web, vous êtes invisible, même si votre fromage est exceptionnel.',
    category: 'Stratégie digitale',
    date: '2025-05-10',
    readingTime: 5,
    author: { name: 'Alice Gautro', role: 'Co-fondatrice' },
    content: `
<p>Imaginez un client qui vient de découvrir votre fromagerie en passant devant votre vitrine un samedi matin. Il est intrigué, mais il n'a pas le temps de s'arrêter. Le soir, chez lui, il vous cherche sur Google. Il veut vos horaires, votre adresse exacte, vos spécialités. Et il ne trouve rien.</p>

<p>Ce client-là, vous venez de le perdre. Pas à cause de votre fromage, mais parce que vous n'existiez pas en ligne.</p>

<h2>La réalité du comportement client en 2025</h2>

<p>Selon les données de Google, <strong>97 % des consommateurs</strong> utilisent internet pour trouver des commerces locaux. Ce chiffre ne concerne pas que les grandes enseignes : il s'applique aussi à votre fromagerie de quartier, à votre épicerie fine, à votre cave à fromages.</p>

<p>Vos clients potentiels tapent des requêtes comme :</p>
<ul>
  <li>« fromagerie Paris 17 »</li>
  <li>« meilleur comté Paris »</li>
  <li>« fromagerie artisanale livraison »</li>
  <li>« où acheter du fromage fermier près de chez moi »</li>
</ul>

<p>Si vous n'avez pas de site web, vous n'apparaissez pas. Vos concurrents, eux, sont là.</p>

<h2>Un site web, ce n'est pas juste une vitrine</h2>

<p>Un bon site web pour une fromagerie, c'est bien plus qu'une carte de visite en ligne. C'est un outil qui travaille pour vous 24h/24 :</p>

<ul>
  <li><strong>Il répond aux questions de base</strong> : horaires, adresse, numéro de téléphone, sans que vous ayez à décrocher votre téléphone.</li>
  <li><strong>Il raconte votre histoire</strong> : vos fournisseurs, vos affinages, votre passion. Ce qui vous rend unique.</li>
  <li><strong>Il attire de nouveaux clients</strong> via le référencement local (SEO) sur Google.</li>
  <li><strong>Il génère des ventes</strong> si vous proposez une boutique en ligne ou des commandes click-and-collect.</li>
</ul>

<h2>Le risque de ne rien faire</h2>

<p>Chaque mois sans site web, c'est des clients perdus au profit d'une fromagerie concurrente mieux référencée. Le marché du fromage artisanal est en pleine croissance en France, mais les artisans qui ne sont pas visibles en ligne passent à côté de cette croissance.</p>

<p>La bonne nouvelle : il n'est pas trop tard. Et se lancer sur internet ne demande pas d'être un expert du numérique. C'est exactement pour ça que nous avons créé Fromagerie Digitale.</p>

<h2>Par où commencer ?</h2>

<p>Avant tout, posez-vous ces trois questions :</p>
<ol>
  <li>Est-ce que quelqu'un qui cherche une fromagerie dans votre ville peut vous trouver sur Google ?</li>
  <li>Est-ce que vos horaires et vos coordonnées sont accessibles en ligne, à jour ?</li>
  <li>Est-ce que votre site (si vous en avez un) est lisible sur mobile ?</li>
</ol>

<p>Si vous avez répondu non à l'une de ces questions, c'est le moment d'agir. <strong>Un premier échange avec notre équipe est gratuit et sans engagement.</strong></p>
    `,
  },
  {
    slug: 'seo-local-fromagerie-attirer-clients-quartier',
    title: 'SEO local pour fromagerie : comment attirer des clients dans votre quartier',
    excerpt:
      'Apparaître en tête de Google Maps quand un client cherche "fromagerie" près de chez lui : c\'est possible, même sans budget publicitaire.',
    category: 'SEO',
    date: '2025-05-03',
    readingTime: 7,
    author: { name: 'Grenguende Abraham', role: 'Co-fondateur' },
    content: `
<p>Le SEO local, c'est la discipline qui vous permet d'apparaître sur Google quand quelqu'un dans votre quartier cherche un produit ou un service que vous proposez. Pour une fromagerie, c'est l'un des leviers les plus puissants, et les plus sous-exploités.</p>

<h2>Qu'est-ce que le SEO local, concrètement ?</h2>

<p>Quand un habitant de votre arrondissement tape « fromagerie » sur Google, il voit apparaître un encadré avec une carte et trois résultats : c'est le <strong>Local Pack</strong>. Apparaître dans ces trois résultats, c'est l'objectif du SEO local.</p>

<p>Les facteurs qui influencent ce classement sont :</p>
<ul>
  <li>La <strong>proximité géographique</strong> entre votre boutique et l'utilisateur</li>
  <li>La <strong>pertinence</strong> de votre fiche (catégories, description, horaires)</li>
  <li>La <strong>notoriété</strong> de votre établissement (avis, mentions, backlinks)</li>
</ul>

<h2>Google Business Profile : votre arme numéro 1</h2>

<p>Si vous ne devez faire qu'une seule chose aujourd'hui, c'est créer et optimiser votre fiche <strong>Google Business Profile</strong> (ex Google My Business). C'est gratuit, et c'est ce qui apparaît dans Google Maps et dans le Local Pack.</p>

<p>Pour l'optimiser :</p>
<ol>
  <li>Renseignez la catégorie principale <em>« Fromagerie »</em> et ajoutez des catégories secondaires pertinentes</li>
  <li>Ajoutez des photos de qualité de votre boutique et de vos produits. Les fiches avec photos reçoivent <strong>35 % de clics en plus</strong></li>
  <li>Maintenez vos horaires à jour, notamment pendant les fêtes</li>
  <li>Répondez à tous les avis, positifs comme négatifs</li>
  <li>Publiez régulièrement des posts (promotions, nouveaux arrivages, événements)</li>
</ol>

<h2>Les mots-clés que vos clients tapent vraiment</h2>

<p>Pour votre site web, ciblez des mots-clés locaux précis. Plutôt que « fromage » (trop générique), visez :</p>
<ul>
  <li>« fromagerie [nom de votre ville ou quartier] »</li>
  <li>« achat fromage fermier [département] »</li>
  <li>« plateau de fromages à Paris » (ou votre ville)</li>
  <li>« fromage affiné [spécialité régionale] »</li>
</ul>

<p>Ces expressions longues (on parle de <em>longue traîne</em>) ont moins de volume de recherche, mais les personnes qui les tapent sont prêtes à acheter.</p>

<h2>Les avis clients : un signal fort pour Google</h2>

<p>Le nombre et la qualité de vos avis Google influencent directement votre positionnement. Encouragez vos clients satisfaits à laisser un avis, envoyez-leur un lien direct par message ou en caisse. Une fromagerie avec 50 avis à 4,8 étoiles battra presque toujours une concurrente qui n'en a que 5.</p>

<h2>Le contenu de blog : votre différence à long terme</h2>

<p>Publier régulièrement des articles sur votre blog (comme celui-ci !) est l'une des meilleures façons d'attirer du trafic organique. Des sujets comme :</p>
<ul>
  <li>« Comment conserver son fromage à la maison »</li>
  <li>« Quel fromage pour un apéritif de 10 personnes ? »</li>
  <li>« Les fromages de saison au printemps »</li>
</ul>

<p>Ces articles répondent aux questions que vos clients posent sur Google. En y répondant mieux que vos concurrents, vous gagnez en visibilité, et en crédibilité.</p>

<p>Le SEO local demande du temps, mais les résultats sont durables. Si vous souhaitez être accompagné dans cette démarche, notre équipe est là pour ça.</p>
    `,
  },
  {
    slug: 'instagram-fromagerie-5-idees-contenus',
    title: 'Instagram pour fromageries : 5 idées de contenus qui engagent vraiment',
    excerpt:
      'Pas besoin d\'être photographe professionnel. Voici 5 types de posts qui fonctionnent pour les fromageries artisanales, testés et approuvés.',
    category: 'Réseaux sociaux',
    date: '2025-04-25',
    readingTime: 6,
    author: { name: 'Alice Gautro', role: 'Co-fondatrice' },
    content: `
<p>Instagram est l'un des réseaux les plus visuels qui soit, et le fromage, c'est beau. Une meule bien affinée, un plateau généreux, un fromage en coupe qui révèle sa pâte... tout ça, ça se photographie parfaitement.</p>

<p>Pourtant, de nombreux fromagers hésitent : « Je ne suis pas photographe », « Je n'ai pas le temps », « Je ne sais pas quoi publier ». Voici 5 idées simples et efficaces pour votre compte Instagram.</p>

<h2>1. Les coulisses de votre métier</h2>

<p>Vos clients adorent voir ce qui se passe derrière le comptoir. Une photo de vous en train de couper une meule, un reblochon qui sort de sa cave, la livraison d'un producteur local... Ces contenus sont authentiques et génèrent beaucoup d'engagement.</p>

<p><strong>Exemple de légende :</strong> « Arrivage du jour : une tomme de Savoie de chez nos amis de [producteur]. Affinée 4 mois, croûte naturelle, pâte souple. Elle sera sur le comptoir dès demain matin. »</p>

<h2>2. Le focus produit du moment</h2>

<p>Une fois par semaine, mettez en avant un fromage de votre sélection. Photo soignée (bonne lumière naturelle, fond neutre), description gustative, conseil d'accord mets-vins. Ce type de post positionne votre expertise et donne envie de venir acheter.</p>

<p><strong>Astuce :</strong> photographiez vos fromages près d'une fenêtre avec la lumière naturelle. Pas besoin d'équipement professionnel.</p>

<h2>3. Les accords fromage & vin (ou fromage & bière)</h2>

<p>« Avec quel vin servir ce munster ? » est l'une des questions les plus posées par vos clients. Répondez-y en story ou en post. Ce contenu informatif est très partagé, et il attire de nouveaux abonnés intéressés par la gastronomie.</p>

<p>Vous pouvez même collaborer avec une cave à vins locale pour du contenu croisé : vous gagnez en visibilité auprès de leur audience.</p>

<h2>4. Les avis de vos clients</h2>

<p>Quand un client laisse un beau commentaire ou vous envoie une photo de son plateau maison, demandez-lui la permission de le partager. Ces témoignages authentiques rassurent les nouveaux clients et créent un sentiment de communauté autour de votre boutique.</p>

<p><strong>Format idéal :</strong> une citation du client sur fond coloré, ou la photo de son plateau avec sa légende.</p>

<h2>5. Les stories interactives</h2>

<p>Les stories disparaissent en 24h, ce qui les rend moins « engageantes » pour votre feed, mais elles sont parfaites pour créer un lien quotidien avec vos abonnés. Quelques idées :</p>
<ul>
  <li>Sondage : « Plutôt comté ou beaufort pour votre raclette ? »</li>
  <li>Question : « Quel fromage souhaiteriez-vous qu'on référence ? »</li>
  <li>Compte à rebours avant une arrivée spéciale</li>
  <li>Aperçu du plateau du jour</li>
</ul>

<h2>La régularité avant tout</h2>

<p>Publier 3 fois par semaine régulièrement vaut mieux que publier 10 fois en rafale puis disparaître un mois. L'algorithme Instagram récompense la régularité. Si vous manquez de temps, une heure par semaine suffît pour préparer et programmer 3 posts.</p>

<p>Et si vous souhaitez qu'on gère votre présence sur les réseaux à votre place, c'est l'un de nos services phares. <strong>Discutons-en.</strong></p>
    `,
  },
  {
    slug: 'fiche-google-my-business-fromagerie-erreurs',
    title: '5 erreurs sur votre fiche Google qui font fuir vos clients',
    excerpt:
      'Une fiche Google incomplète ou mal tenue, c\'est des clients perdus chaque jour. Voici les 5 erreurs les plus courantes, et comment les corriger en moins d\'une heure.',
    category: 'Stratégie digitale',
    date: '2025-04-10',
    readingTime: 4,
    author: { name: 'Grenguende Abraham', role: 'Co-fondateur' },
    content: `
<p>Google Business Profile (ex Google My Business) est souvent la première chose que vos clients voient de vous. Avant votre site, avant Instagram : c'est la fiche Google. Et pourtant, la plupart des fromagers la laissent incomplète ou mal tenue. Voici les 5 erreurs qui vous coûtent des clients.</p>

<h2>1. Des horaires incorrects ou non mis à jour</h2>

<p>C'est l'erreur numéro un. Un client arrive devant votre boutique un dimanche matin parce que Google affichait "ouvert", et il trouve porte close. Il ne reviendra probablement jamais. Pire, il laissera peut-être un avis négatif.</p>

<p>Mettez vos horaires à jour dès aujourd'hui, et pensez à activer les <strong>horaires spéciaux</strong> pour les jours fériés, Noël, et les fermetures estivales.</p>

<h2>2. Aucune photo, ou des photos de mauvaise qualité</h2>

<p>Les fiches Google avec des photos reçoivent <strong>35 % de clics en plus</strong> que celles sans. Et pourtant, beaucoup de fromagers n'ont pas une seule photo sur leur fiche, ou seulement des photos floues prises à la va-vite.</p>

<p>Ajoutez au minimum : une photo de l'extérieur de votre boutique, une photo du comptoir, et quelques photos de vos produits. La lumière naturelle suffit, pas besoin d'un photographe professionnel.</p>

<h2>3. Aucune réponse aux avis clients</h2>

<p>Qu'un avis soit positif ou négatif, ne pas y répondre envoie un signal négatif aux futurs clients. Pour un avis positif, un simple "Merci, à bientôt !" suffit. Pour un avis négatif, répondez avec calme et proposez de régler le problème directement.</p>

<p>Google valorise aussi les fiches actives dans son algorithme : répondre aux avis améliore votre visibilité.</p>

<h2>4. Une description vide ou générique</h2>

<p>La description de votre fiche (jusqu'à 750 caractères) est une opportunité en or pour parler de ce qui vous rend unique : votre sélection d'affineurs, vos fromages de saison, votre ancienneté, votre spécialité régionale. Beaucoup la laissent vide ou y copient-collent quelque chose de générique.</p>

<p>Prenez 15 minutes pour écrire une description sincère et spécifique. C'est ce qui fait la différence entre "une fromagerie" et "votre fromagerie".</p>

<h2>5. Ne pas publier de posts</h2>

<p>Google Business Profile permet de publier des actualités directement sur votre fiche : arrivages, promotions, événements. Ces posts apparaissent dans les résultats Google et dans Maps. Très peu de fromagers utilisent cette fonctionnalité, ce qui vous donne un avantage immédiat si vous commencez.</p>

<p>Un post par semaine suffit. En 5 minutes, vous êtes visible là où vos concurrents ne sont pas.</p>

<h2>Par où commencer ?</h2>

<p>Si vous n'avez pas encore revendiqué votre fiche Google, c'est la première étape. Ensuite, corrigez ces 5 erreurs une par une. Si vous souhaitez qu'on s'en occupe pour vous, c'est l'un de nos services, et les résultats sont souvent visibles dès la première semaine.</p>
    `,
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(p => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
