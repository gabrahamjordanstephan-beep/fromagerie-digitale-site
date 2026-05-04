export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type':    'ProfessionalService',
    name:       'Fromagerie Digitale',
    description:
      "Agence digitale spécialisée pour les fromageries artisanales. Sites web, SEO local, e-commerce, branding.",
    url:   'https://fromageriedigitale.fr',

    address: {
      '@type':          'PostalAddress',
      streetAddress:    '9 rue Waldeck Rousseau',
      addressLocality:  'Paris',
      postalCode:       '75017',
      addressRegion:    'Île-de-France',
      addressCountry:   'FR',
    },
    areaServed: { '@type': 'Country', name: 'France' },
    serviceType: [
      'SEO local pour fromageries',
      'Création de site web fromagerie',
      'E-commerce fromage artisanal',
      'Branding fromagerie',
      'Gestion réseaux sociaux fromagerie',
      'Publicité Meta et Google pour fromageries',
      'Formation digitale artisans fromagers',
    ],
    knowsAbout: ['Fromagerie artisanale', 'Marketing digital', 'SEO local', 'E-commerce'],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
