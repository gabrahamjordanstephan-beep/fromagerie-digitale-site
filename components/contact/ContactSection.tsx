import { Check } from '@/components/ui/icons'
import { ContactForm } from './ContactForm'

const POINTS = [
  'Un état des lieux de votre visibilité',
  'Trois actions prioritaires, même si vous ne travaillez pas avec nous',
  "Une proposition claire, chiffrée à l'avance",
]

/** Section contact de l'accueil. */
export function ContactSection() {
  return (
    <section id="contact" className="bg-fd-navy text-white">
      <div className="mx-auto flex max-w-page flex-wrap items-start gap-[clamp(40px,6vw,80px)] px-gutter py-section">
        <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-5">
          <p className="fd-eyebrow text-fd-mist">Diagnostic offert</p>
          <h2 className="fd-h2">
            Parlons de <span className="text-fd-gold">votre fromagerie</span>.
          </h2>
          <p className="m-0 text-lg leading-relaxed text-fd-fog">
            Trente minutes pour comprendre où vous en êtes et ce qui ferait vraiment la différence. Premier échange offert, sans engagement.
          </p>
          <ul className="m-0 mt-2 flex list-none flex-col gap-3 p-0 text-base text-fd-fog">
            {POINTS.map((p) => (
              <li key={p} className="flex items-center gap-3">
                <Check size={20} stroke="#F4BD45" className="shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="min-w-0 flex-[1_1_440px] rounded-2xl bg-fd-cream p-[clamp(24px,4vw,40px)] text-fd-ink">
          <ContactForm defaultKind="diagnostic" />
        </div>
      </div>
    </section>
  )
}
