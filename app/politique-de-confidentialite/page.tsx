import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title:      'Politique de confidentialité',
  description: 'Politique de confidentialité et protection des données personnelles de Fromagerie Digitale, conformément au RGPD.',
  alternates: { canonical: 'https://fromageriedigitale.fr/politique-de-confidentialite' },
  robots:     { index: false, follow: false },
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="py-10 border-b border-fd-navy/10 last:border-0">
    <h2 className="font-bold text-fd-navy text-xl mb-4">{title}</h2>
    <div className="text-fd-navy/65 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
)

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="pt-20 min-h-screen bg-fd-cream">

      {/* Header */}
      <section className="bg-fd-navy py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-fd-gold font-medium text-xs uppercase tracking-widest mb-4">
            Protection des données
          </p>
          <h1 className="font-bold text-white" style={{ fontSize: 'clamp(28px, 5vw, 56px)' }}>
            Politique de confidentialité
          </h1>
          <p className="text-white/40 text-sm mt-4">Dernière mise à jour : mai 2025 — Conforme au RGPD (UE) 2016/679</p>
        </div>
      </section>

      {/* Contenu */}
      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto">

          <Section title="1. Responsable du traitement">
            <p>Le responsable du traitement des données personnelles collectées sur ce site est :</p>
            <ul className="space-y-1 mt-2">
              <li><strong className="text-fd-navy">Raison sociale :</strong> Fromagerie Digitale</li>
              <li><strong className="text-fd-navy">SIREN :</strong> 908 178 866 R.C.S. Paris</li>
              <li><strong className="text-fd-navy">Adresse :</strong> 9 rue Waldeck Rousseau, 75017 Paris, France</li>
              <li><strong className="text-fd-navy">Contact :</strong>{' '}
                <Link href="/contact" className="text-fd-blue hover:underline">
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </Section>

          <Section title="2. Données collectées">
            <p>Dans le cadre de l&apos;utilisation du site fromageriedigitale.fr, nous collectons les données suivantes :</p>

            <div className="mt-3 space-y-4">
              <div>
                <p className="font-semibold text-fd-navy mb-1">Via le formulaire de contact :</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone (optionnel)</li>
                  <li>Contenu de votre message</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-fd-navy mb-1">Données de navigation (collecte automatique) :</p>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Adresse IP (anonymisée)</li>
                  <li>Type et version du navigateur</li>
                  <li>Pages visitées et durée de consultation</li>
                  <li>Provenance (page référente)</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="3. Finalités du traitement">
            <p>Vos données personnelles sont utilisées uniquement pour les finalités suivantes :</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Assurer le suivi de la relation commerciale</li>
              <li>Améliorer les performances et l&apos;expérience du site</li>
              <li>Respecter nos obligations légales et réglementaires</li>
            </ul>
            <p className="mt-3">
              Aucune donnée collectée n&apos;est vendue, louée ou cédée à des tiers à des fins commerciales.
            </p>
          </Section>

          <Section title="4. Base légale du traitement">
            <p>Les traitements sont fondés sur les bases légales suivantes :</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li><strong className="text-fd-navy">Consentement</strong> (art. 6.1.a RGPD) : pour l&apos;envoi de communications commerciales</li>
              <li><strong className="text-fd-navy">Intérêt légitime</strong> (art. 6.1.f RGPD) : pour la gestion des demandes entrantes et la sécurité du site</li>
              <li><strong className="text-fd-navy">Obligation légale</strong> (art. 6.1.c RGPD) : pour le respect des dispositions comptables et fiscales</li>
            </ul>
          </Section>

          <Section title="5. Durée de conservation">
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li><strong className="text-fd-navy">Données de contact :</strong> 3 ans à compter du dernier contact</li>
              <li><strong className="text-fd-navy">Données de navigation :</strong> 13 mois maximum (conformément aux recommandations CNIL)</li>
              <li><strong className="text-fd-navy">Données de facturation :</strong> 10 ans (obligation légale comptable)</li>
            </ul>
          </Section>

          <Section title="6. Vos droits">
            <p>
              Conformément au RGPD et à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée,
              vous disposez des droits suivants sur vos données personnelles :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li><strong className="text-fd-navy">Droit d&apos;accès</strong> : obtenir une copie de vos données</li>
              <li><strong className="text-fd-navy">Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong className="text-fd-navy">Droit à l&apos;effacement</strong> : demander la suppression de vos données</li>
              <li><strong className="text-fd-navy">Droit à la limitation</strong> : restreindre certains traitements</li>
              <li><strong className="text-fd-navy">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong className="text-fd-navy">Droit d&apos;opposition</strong> : vous opposer à certains traitements</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{' '}
              <Link href="/contact" className="text-fd-blue hover:underline">
                notre formulaire de contact
              </Link>
              . Nous vous répondrons dans un délai maximum de <strong className="text-fd-navy">30 jours</strong>.
            </p>
            <p>
              Vous avez également le droit d&apos;introduire une réclamation auprès de la{' '}
              <strong className="text-fd-navy">CNIL</strong> (Commission Nationale de l&apos;Informatique et des Libertés) :
              cnil.fr — 3 Place de Fontenoy, 75007 Paris.
            </p>
          </Section>

          <Section title="7. Cookies">
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d&apos;un site.
              Fromagerie Digitale utilise uniquement des cookies strictement nécessaires au bon
              fonctionnement du site (pas de cookies publicitaires ou de tracking tiers).
            </p>
            <p>
              Vous pouvez à tout moment configurer votre navigateur pour refuser les cookies. Cela peut
              cependant affecter certaines fonctionnalités du site.
            </p>
          </Section>

          <Section title="8. Sous-traitants et transferts">
            <p>
              Certaines données peuvent être transmises à nos sous-traitants techniques dans le strict
              respect du RGPD :
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li><strong className="text-fd-navy">Vercel Inc.</strong> — Hébergement du site (USA — clauses contractuelles types UE)</li>
              <li><strong className="text-fd-navy">Resend</strong> — Envoi des emails de contact (USA — clauses contractuelles types UE)</li>
            </ul>
            <p className="mt-3">
              Aucun transfert de données n&apos;est effectué en dehors de ces sous-traitants identifiés.
            </p>
          </Section>

          <Section title="9. Sécurité">
            <p>
              Fromagerie Digitale met en œuvre les mesures techniques et organisationnelles appropriées
              pour protéger vos données contre tout accès non autorisé, perte, destruction ou divulgation :
              connexion HTTPS, accès restreints, mots de passe sécurisés.
            </p>
          </Section>

          <Section title="10. Modification de la politique">
            <p>
              Nous nous réservons le droit de modifier cette politique à tout moment, notamment pour nous
              conformer à toute évolution réglementaire. La date de dernière mise à jour figure en haut
              de cette page. Nous vous encourageons à la consulter régulièrement.
            </p>
            <p>
              Pour toute question :{' '}
              <Link href="/contact" className="text-fd-blue hover:underline">
                notre formulaire de contact
              </Link>{' '}
              — ou consultez nos{' '}
              <Link href="/mentions-legales" className="text-fd-blue hover:underline">
                Mentions légales
              </Link>.
            </p>
          </Section>

        </div>
      </section>

    </div>
  )
}
