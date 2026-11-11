import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { Check } from '@/components/ui/icons'
import { ContactForm } from '@/components/contact/ContactForm'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact : devis ou diagnostic offert',
  description:
    'Demandez un devis ou un diagnostic offert pour votre fromagerie. Prix et planning connus avant de signer, premier échange sans engagement.',
  alternates: { canonical: '/contact' },
}

const POINTS = [
  'Un devis détaillé, prix et planning, avant de signer',
  'Premier échange offert et sans engagement',
  'Vous parlez directement aux deux associés',
]

export default function ContactPage() {
  return (
    <section className="fd-grid-bg bg-fd-dark text-white">
      <div className="mx-auto flex max-w-page flex-wrap items-start gap-[clamp(40px,6vw,80px)] px-gutter pb-[clamp(72px,9vw,112px)] pt-[clamp(48px,7vw,96px)]">
        <div className="fd-hero flex min-w-0 flex-[1_1_380px] flex-col gap-[22px]">
          <Breadcrumb items={[{ href: '/', label: 'Accueil' }, { label: 'Contact' }]} dark />
          <h1 className="m-0 text-[clamp(40px,5.6vw,72px)] font-bold leading-[1.02] tracking-[-0.03em]">
            Parlons de <span className="text-fd-gold">votre fromagerie.</span>
          </h1>
          <p className="m-0 max-w-[460px] text-lg leading-relaxed text-fd-fog">
            Un devis, un diagnostic offert ou une simple question : dites nous où vous en êtes, on vous répond personnellement.
          </p>
          <ul className="m-0 mt-2 flex list-none flex-col gap-3.5 p-0 text-base text-fd-fog">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Check size={20} stroke="#F4BD45" className="shrink-0" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-1 border-t border-white/15 pt-[22px]">
            <span className="text-[13px] text-fd-mist">Vous préférez écrire directement ?</span>
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-[17px] font-semibold text-white">
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <div className="min-w-0 flex-[1.2_1_460px] rounded-[20px] bg-fd-cream p-[clamp(24px,4vw,40px)] text-fd-ink shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
