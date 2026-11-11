import { ADDRESS, CONTACT_EMAIL, FOUNDERS, SITE_URL } from '@/lib/site'
import { JsonLd } from './JsonLd'

/** Données structurées de l'agence, présentes sur toutes les pages. */
export function LocalBusinessSchema() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${SITE_URL}/#agence`,
        name: 'Fromagerie Digitale',
        description:
          "Agence digitale dédiée aux fromageries artisanales : site, référencement local et IA, identité visuelle, vidéo et publicité.",
        url: SITE_URL,
        email: CONTACT_EMAIL,
        logo: `${SITE_URL}/icon.svg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: ADDRESS.street,
          addressLocality: ADDRESS.city,
          postalCode: ADDRESS.postalCode,
          addressCountry: 'FR',
        },
        areaServed: { '@type': 'Country', name: 'France' },
        founder: [
          { '@type': 'Person', name: FOUNDERS.sandra.name },
          { '@type': 'Person', name: FOUNDERS.abraham.name },
        ],
        knowsAbout: ['Fromagerie artisanale', 'Référencement local', 'Marketing digital', 'Identité visuelle'],
      }}
    />
  )
}
