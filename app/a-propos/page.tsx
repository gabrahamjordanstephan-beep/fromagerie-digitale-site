import type { Metadata } from 'next'
import {
  AProposHero,
  AProposHistoire,
  AProposFounders,
  AProposValeurs,
  AProposCta,
} from './sections'

export const metadata: Metadata = {
  title:       'À propos — Agence digitale spécialisée fromageries artisanales | Fromagerie Digitale',
  description: 'Découvrez Fromagerie Digitale, l\'agence digitale 100 % spécialisée pour les artisans fromagers. Alice Gautro et Abraham Grenguende vous accompagnent depuis Paris dans tout votre développement digital.',
  alternates:  { canonical: 'https://fromageriedigitale.fr/a-propos' },
}

export default function AProposPage() {
  return (
    <main>
      <AProposHero />
      <AProposHistoire />
      <AProposFounders />
      <AProposValeurs />
      <AProposCta />
    </main>
  )
}
