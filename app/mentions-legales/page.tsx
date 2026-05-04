import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:      'Mentions légales',
  description: 'Mentions légales du site Fromagerie Digitale, agence digitale spécialisée fromageries artisanales.',
  alternates: { canonical: 'https://fromageriedigitale.fr/mentions-legales' },
  robots:     { index: false, follow: false },
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-fd-navy/10 last:border-0">
    <h2 className="font-bold text-fd-navy text-xl mb-4">{title}</h2>
    <div className="text-fd-navy/65 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
)

export default function MentionsLegalesPage() {
  return (
    <div className="pt-20 min-h-screen bg-fd-cream">

      {/* Header */}
      <section className="bg-fd-navy py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-fd-gold font-medium text-xs uppercase tracking-widest mb-4">
            Informations légales
          </p>
          <h1 className="font-bold text-white" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
            Mentions légales
          </h1>
          <p className="text-white/40 text-sm mt-4">Dernière mise à jour : mai 2025</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">

          <Section title="1. Éditeur du site">
            <p>Le présent site <strong className="text-fd-navy">fromageriedigitale.fr</strong> est édité par :</p>
            <ul className="space-y-1 mt-2">
              <li><strong className="text-fd-navy">Raison sociale :</strong> Fromagerie Digitale</li>
              <li><strong className="text-fd-navy">SIREN :</strong> 908 178 866</li>
              <li><strong className="text-fd-navy">Immatriculation :</strong> 908 178 866 R.C.S. Paris</li>
              <li><strong className="text-fd-navy">Siège social :</strong> 9 rue Waldeck Rousseau, 75017 Paris, France</li>
              <li><strong className="text-fd-navy">Contact :</strong>{' '}
                <Link href="/contact" className="text-fd-blue hover:underline">
                  Formulaire de contact
                </Link>
              </li>
              <li><strong className="text-fd-navy">Directrice de la publication :</strong> Alice Gautro</li>
            </ul>
          </Section>

          <Section title="2. Hébergement">
            <p>Le site est hébergé par :</p>
            <ul className="space-y-1 mt-2">
              <li><strong className="text-fd-navy">Société :</strong> Vercel Inc.</li>
              <li><strong className="text-fd-navy">Adresse :</strong> 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis</li>
              <li><strong className="text-fd-navy">Site :</strong> vercel.com</li>
            </ul>
          </Section>

          <Section title="3. Propriété intellectuelle">
            <p>
              L&apos;ensemble des contenus présents sur le site fromageriedigitale.fr (textes, images, graphismes,
              logo, icônes, sons, logiciels) est la propriété exclusive de Fromagerie Digitale, sauf
              mentions contraires.
            </p>
            <p>
              Toute reproduction, distribution, modification, adaptation, retransmission ou publication de
              ces éléments est strictement interdite sans l&apos;accord exprès par écrit de Fromagerie Digitale.
              Toute exploitation non autorisée constitue une contrefaçon sanctionnée par les articles
              L.335-2 et suivants du Code de la Propriété Intellectuelle.
            </p>
          </Section>

          <Section title="4. Responsabilité">
            <p>
              Les informations contenues sur ce site sont données à titre indicatif et sont susceptibles
              d&apos;évoluer. Fromagerie Digitale s&apos;efforce de maintenir ces informations à jour, mais ne peut
              garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations diffusées.
            </p>
            <p>
              Fromagerie Digitale ne saurait être tenue responsable des dommages directs ou indirects
              résultant de l&apos;utilisation de ce site ou de l&apos;impossibilité d&apos;y accéder.
            </p>
          </Section>

          <Section title="5. Liens hypertextes">
            <p>
              Le site peut contenir des liens vers des sites tiers. Fromagerie Digitale n&apos;exerce aucun
              contrôle sur ces sites et ne peut être tenue responsable de leur contenu. La mise en place
              d&apos;un lien vers fromageriedigitale.fr est soumise à l&apos;accord préalable et écrit de l&apos;éditeur.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Le site fromageriedigitale.fr est susceptible d&apos;utiliser des cookies à des fins de mesure
              d&apos;audience et de fonctionnement. Conformément à la loi « Informatique et Libertés » du
              6 janvier 1978 modifiée et au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et
              de suppression des données vous concernant.
            </p>
            <p>
              Consultez notre{' '}
              <Link href="/politique-de-confidentialite" className="text-fd-blue hover:underline">
                Politique de confidentialité
              </Link>{' '}
              pour plus d&apos;informations.
            </p>
          </Section>

          <Section title="7. Droit applicable et juridiction">
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige,
              et après tentative de résolution amiable, les tribunaux français seront seuls compétents.
            </p>
            <p>
              Pour toute question relative à ces mentions légales, vous pouvez nous contacter à :{' '}
              <Link href="/contact" className="text-fd-blue hover:underline">
                notre formulaire de contact
              </Link>
            </p>
          </Section>

        </div>
      </section>

    </div>
  )
}
