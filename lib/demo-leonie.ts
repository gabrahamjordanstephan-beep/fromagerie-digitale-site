/** Données de la boutique démo fictive « La Cave de Léonie ». */

export type Milk = 'V' | 'C' | 'B'

export type Cheese = {
  id: string
  photo: string
  name: string
  milk: Milk
  raw: string
  aop: boolean
  region: string
  pate: string
  note: string
  affinage: string
  accord: string
  season: boolean
  kgPrice?: number
  piece?: number
  pieceLabel?: string
}

const img = (id: string) => `/images/demo/${id}.webp`

export const CHEESES: Cheese[] = [
  { id: 'comte', photo: img('comte'), name: 'Comté 24 mois', milk: 'V', raw: 'Lait cru', aop: true, region: 'Jura', pate: 'Pâte pressée cuite', note: 'Noisette grillée, bouillon, et ces petits cristaux qui croquent : ce sont des acides aminés, signe d’un long affinage.', affinage: '24 mois, dont 6 chez nous', accord: 'Vin jaune, Savagnin', kgPrice: 46, season: false },
  { id: 'beaufort', photo: img('beaufort'), name: "Beaufort d'été", milk: 'V', raw: 'Lait cru', aop: true, region: 'Savoie', pate: 'Pâte pressée cuite', note: 'Fabriqué de juin à octobre, avec le lait des vaches montées en alpage. Plus fruité, plus floral que le Beaufort d’hiver.', affinage: '12 mois', accord: 'Chignin-Bergeron', kgPrice: 42, season: false },
  { id: 'salers', photo: img('salers'), name: 'Salers', milk: 'V', raw: 'Lait cru · Fermier', aop: true, region: 'Cantal', pate: 'Pâte pressée non cuite', note: 'Fabriqué seulement pendant l’estive, à la ferme, dans la gerle en bois. Les meules de l’été arrivent à point.', affinage: '10 mois', accord: 'Saint-Pourçain rouge', kgPrice: 32, season: true },
  { id: 'nectaire', photo: img('nectaire'), name: 'Saint-Nectaire fermier', milk: 'V', raw: 'Lait cru · Fermier', aop: true, region: 'Auvergne', pate: 'Pâte pressée non cuite', note: 'Repérez la plaque ovale verte sur la croûte : elle garantit une fabrication à la ferme, au lait de la traite.', affinage: '8 semaines sur paille de seigle', accord: 'Côtes d’Auvergne', kgPrice: 29, season: false },
  { id: 'montdor', photo: img('montdor'), name: "Mont d'Or", milk: 'V', raw: 'Lait cru', aop: true, region: 'Haut-Doubs', pate: 'Pâte molle, croûte lavée', note: 'Cerclé d’épicéa, vendu seulement du 10 septembre au 10 mai. À la cuillère, ou au four avec un trait de vin blanc.', affinage: '3 semaines sur planche d’épicéa', accord: 'Chardonnay du Jura', piece: 17.5, pieceLabel: 'La boîte · 500 g environ', season: true },
  { id: 'epoisses', photo: img('epoisses'), name: 'Époisses', milk: 'V', raw: 'Lait cru', aop: true, region: 'Bourgogne', pate: 'Pâte molle, croûte lavée', note: 'Croûte lavée au marc de Bourgogne pendant l’affinage. Puissant au nez, étonnamment doux en bouche.', affinage: '6 semaines', accord: 'Marc de Bourgogne, ou un blanc sec', piece: 10.5, pieceLabel: 'La pièce · 250 g', season: false },
  { id: 'maure', photo: img('maure'), name: 'Sainte-Maure de Touraine', milk: 'C', raw: 'Lait cru', aop: true, region: 'Touraine', pate: 'Pâte molle, croûte cendrée', note: 'Traversé d’une paille de seigle gravée au nom de l’appellation : elle tient la bûche, et prouve son origine.', affinage: '4 semaines', accord: 'Vouvray sec', piece: 9.2, pieceLabel: 'La bûche · 250 g', season: false },
  { id: 'crottin', photo: img('crottin'), name: 'Crottin de Chavignol', milk: 'C', raw: 'Lait cru', aop: true, region: 'Berry', pate: 'Pâte molle, croûte naturelle', note: 'Les derniers avant la pause de l’hiver. Demandez-le frais, demi-sec, ou repassé si vous aimez le corsé.', affinage: '2 à 6 semaines, au choix', accord: 'Sancerre blanc', piece: 3.4, pieceLabel: 'La pièce · 60 g', season: true },
  { id: 'ossau', photo: img('ossau'), name: 'Ossau-Iraty', milk: 'B', raw: 'Lait cru · Fermier', aop: true, region: 'Pays basque', pate: 'Pâte pressée non cuite', note: 'Le brebis des Pyrénées, souple et noisette. Avec une cuillère de confiture de cerises noires, c’est la tradition.', affinage: '6 mois', accord: 'Irouléguy, cerises noires', kgPrice: 34, season: false },
  { id: 'roquefort', photo: img('roquefort'), name: 'Roquefort', milk: 'B', raw: 'Lait cru', aop: true, region: 'Aveyron', pate: 'Pâte persillée', note: 'Affiné dans les caves naturelles du Combalou, où les failles de la roche ventilent les meules.', affinage: '4 mois en cave', accord: 'Sauternes', kgPrice: 38, season: false },
]

export const MILK_NAME: Record<Milk, string> = { V: 'Lait de vache', C: 'Lait de chèvre', B: 'Lait de brebis' }

export const ARRIVALS = [
  { name: "Mont d'Or", why: 'Arrivé avec l’automne, jusqu’au 10 mai.' },
  { name: 'Salers de l’estive', why: 'Les meules fabriquées cet été sont à point.' },
  { name: 'Crottin de Chavignol', why: 'Les derniers avant la pause d’hiver des chèvres.' },
]

export const TIPS = [
  { n: '01', title: 'Sortez-le une heure avant.', text: 'Froid, un fromage n’exprime rien. Une heure à température ambiante, sous une cloche, et les arômes reviennent.' },
  { n: '02', title: 'Gardez son papier.', text: 'Le papier de fromager laisse respirer la croûte. Au réfrigérateur, dans le bac à légumes, jamais sous film plastique.' },
  { n: '03', title: 'Ne coupez pas le nez.', text: 'Sur une part de brie ou de tomme, la pointe est le meilleur morceau. On coupe dans la longueur, pour que chacun ait du cœur et de la croûte.' },
  { n: '04', title: 'Du plus doux au plus fort.', text: 'Commencez par le chèvre frais, finissez par le persillé. Dans l’autre sens, on ne sent plus rien après le Roquefort.' },
]

export const HOURS = [
  { d: 'Mardi au jeudi', h: '9 h 30 à 13 h · 15 h 30 à 19 h 30' },
  { d: 'Vendredi', h: '9 h à 19 h 30' },
  { d: 'Samedi', h: '8 h 30 à 19 h' },
  { d: 'Dimanche', h: '9 h à 13 h' },
  { d: 'Lundi', h: 'Fermé' },
]

export const SLOTS = [
  { label: 'Samedi, 8 h 30 à 11 h', short: 'samedi matin', note: 'Le plus calme' },
  { label: 'Samedi, 11 h à 13 h', short: 'samedi midi', note: '' },
  { label: 'Vendredi, 16 h à 19 h 30', short: 'vendredi soir', note: '' },
]

export const MOMENTS = [
  { label: 'Fin de repas', rule: '80 g par personne', g: 80 },
  { label: 'Apéritif', rule: '50 g par personne', g: 50 },
  { label: 'Plateau en plat principal', rule: '200 g par personne', g: 200 },
]

/** Ordre de dégustation, du plus doux au plus corsé. */
export const TASTING = [
  { id: 'maure', family: 'Chèvre' },
  { id: 'nectaire', family: 'Pâte pressée non cuite' },
  { id: 'ossau', family: 'Brebis' },
  { id: 'comte', family: 'Pâte pressée cuite' },
  { id: 'beaufort', family: 'Pâte pressée cuite' },
  { id: 'epoisses', family: 'Croûte lavée' },
  { id: 'roquefort', family: 'Persillé' },
]
export const PLATEAU_PRIORITY = ['comte', 'maure', 'roquefort', 'nectaire', 'epoisses', 'ossau', 'beaufort']
export const PLATEAU_KG_PRICE = 38

export const eur = (n: number) => `${n.toFixed(2).replace('.', ',')} €`
export const kg = (g: number) =>
  g >= 1000 ? `${(g / 1000).toFixed(g % 1000 === 0 ? 0 : 1).replace('.', ',')} kg` : `${g} g`
const cl = (v: number) => (v >= 100 ? `${(v / 100).toFixed(v % 100 === 0 ? 0 : 1).replace('.', ',')} L` : `${v} cl`)
const r10 = (v: number) => Math.max(50, Math.round(v / 10) * 10)

export type RecipeBuild = {
  yield: string
  cheeses: { id: string; g?: number; pieces?: number }[]
  ingredients: string[]
  steps: string[]
  tip: string
  accord: string
}

export type Recipe = { name: string; time: string; level: string; build: (people: number) => RecipeBuild }

export const RECIPES: Recipe[] = [
  {
    name: "Mont d'Or chaud au four", time: '35 min', level: 'Très facile',
    build: (p) => {
      const b = Math.max(1, Math.ceil(p / 2.5))
      return {
        yield: `${b} ${b > 1 ? 'boîtes' : 'boîte'}`,
        cheeses: [{ id: 'montdor', pieces: b }],
        ingredients: [`${cl(b * 10)} de vin blanc du Jura`, `${b} ${b > 1 ? 'gousses' : 'gousse'} d’ail`, `${p * 250} g de pommes de terre à chair ferme`, 'Charcuterie du Jura, si vous aimez'],
        steps: ['Préchauffez le four à 200 °C.', 'Enveloppez le fond et les côtés de la boîte dans du papier aluminium : le bois ne doit pas brûler.', 'Entaillez la croûte en croix, glissez l’ail émincé et versez le vin blanc dans les fentes.', 'Enfournez 25 à 30 minutes, jusqu’à ce que le cœur soit coulant.', 'Servez à la cuillère sur les pommes de terre cuites à la vapeur.'],
        tip: 'Laissez le cercle d’épicéa autour du fromage : c’est lui qui donne ce goût boisé.',
        accord: 'Savagnin ou Chardonnay du Jura',
      }
    },
  },
  {
    name: 'Fondue Beaufort et Comté', time: '25 min', level: 'Facile',
    build: (p) => {
      const g = r10(p * 100)
      return {
        yield: `${kg(g * 2)} de fromage`,
        cheeses: [{ id: 'beaufort', g }, { id: 'comte', g }],
        ingredients: [`${cl(p * 12)} de vin blanc sec de Savoie`, '1 gousse d’ail', `${Math.max(1, Math.ceil(p / 4))} c. à café de fécule`, `${p} cl de kirsch (facultatif)`, `${p * 150} g de pain de campagne de la veille`],
        steps: ['Râpez ou coupez les fromages en fines lamelles.', 'Frottez le caquelon avec l’ail, versez le vin et chauffez sans faire bouillir.', 'Ajoutez le fromage par poignées en remuant en forme de huit, à feu doux.', 'Délayez la fécule dans le kirsch, ou un peu de vin, et incorporez pour lier.', 'Servez sur le réchaud, avec le pain coupé en cubes.'],
        tip: 'Le duo Beaufort et Comté donne une fondue fruitée, qui file sans être grasse. Ne la laissez jamais bouillir.',
        accord: 'Apremont ou Roussette de Savoie',
      }
    },
  },
  {
    name: 'Salade de chèvre chaud', time: '15 min', level: 'Très facile',
    build: (p) => ({
      yield: `${p} ${p > 1 ? 'assiettes' : 'assiette'}`,
      cheeses: [{ id: 'crottin', pieces: p }],
      ingredients: [`${p * 2} tranches de pain de campagne`, `${p * 50} g de jeunes pousses`, 'Miel de fleurs', 'Une poignée de cerneaux de noix', 'Huile de noix et vinaigre de cidre'],
      steps: ['Préchauffez le four en position gril.', 'Coupez chaque crottin en deux dans l’épaisseur, posez chaque moitié sur une tranche de pain.', 'Un filet de miel, quelques noix concassées, puis 5 minutes sous le gril.', 'Servez aussitôt sur la salade assaisonnée à l’huile de noix.'],
      tip: 'Prenez-le demi-sec : assez ferme pour tenir au four, assez jeune pour fondre.',
      accord: 'Sancerre blanc',
    }),
  },
  {
    name: 'Tarte poire et Roquefort', time: '50 min', level: 'Facile',
    build: (p) => {
      const t = Math.ceil(p / 6)
      return {
        yield: `${t} ${t > 1 ? 'tartes' : 'tarte'} de 6 parts`,
        cheeses: [{ id: 'roquefort', g: 150 * t }],
        ingredients: [`${t} ${t > 1 ? 'pâtes brisées' : 'pâte brisée'}`, `${3 * t} poires bien mûres`, `${3 * t} œufs`, `${20 * t} cl de crème fraîche`, `${40 * t} g de cerneaux de noix`],
        steps: ['Préchauffez le four à 180 °C et étalez la pâte dans le moule.', 'Disposez les poires en lamelles, puis le Roquefort émietté et les noix.', 'Battez les œufs avec la crème, poivrez sans saler : le Roquefort suffit.', 'Versez sur la tarte et enfournez 35 minutes, jusqu’à ce qu’elle soit dorée.'],
        tip: 'Le sucré de la poire apaise la puissance du bleu. Servez tiède, avec une salade de mâche.',
        accord: 'Sauternes ou Jurançon moelleux',
      }
    },
  },
  {
    name: 'Gougères au Comté', time: '45 min', level: 'Moyen',
    build: (p) => {
      const b = Math.ceil(p / 6)
      return {
        yield: `${30 * b} gougères environ`,
        cheeses: [{ id: 'comte', g: 125 * b }],
        ingredients: [`${25 * b} cl d’eau`, `${100 * b} g de beurre`, `${150 * b} g de farine`, `${4 * b} œufs`, 'Sel et une pincée de muscade'],
        steps: ['Portez l’eau, le beurre et le sel à ébullition, versez la farine d’un coup et remuez jusqu’à ce que la pâte se détache.', `Hors du feu, ajoutez les œufs un à un, puis ${100 * b} g de Comté râpé et la muscade.`, 'Formez de petites boules sur une plaque, parsemez du reste de Comté.', 'Enfournez 20 à 25 minutes à 190 °C, sans ouvrir la porte.'],
        tip: 'Un Comté de 24 mois donne des gougères bien plus parfumées qu’un jeune : c’est là que l’affinage se goûte.',
        accord: 'Crémant du Jura',
      }
    },
  },
]
