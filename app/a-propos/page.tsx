import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Check } from '@/components/ui/icons'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { GoldCta } from '@/components/ui/GoldCta'
import { FOUNDERS_DATA, STORY, STRENGTHS, type Founder } from '@/lib/about'

export const metadata: Metadata = {
  title: 'À propos : deux associés, un seul métier',
  description:
    'Fromagerie Digitale, ce sont deux associés au service des fromageries artisanales : Sandra Munon et Abraham Jordan. Rencontrez les fondateurs.',
  alternates: { canonical: '/a-propos' },
}

const underline = 'underline decoration-fd-gold decoration-[0.14em] underline-offset-[0.14em] [text-decoration-skip-ink:none]'

function Arch({ f, tall, delay }: { f: Founder; tall: boolean; delay?: boolean }) {
  return (
    <div className={`fd-rise relative ${delay ? 'fd-rise-2' : ''}`}>
      <div className={`relative overflow-hidden rounded-t-full ${tall ? 'aspect-[5/9.5]' : 'aspect-[5/8]'} ${f.photo ? 'bg-fd-navy' : 'border border-b-0 border-dashed border-fd-gold/45 bg-[#26404E]'}`}>
        {f.photo ? (
          <Image src={f.photo} alt={f.photoAlt ?? f.name} fill priority sizes="(max-width: 768px) 45vw, 240px" className="object-cover object-top" />
        ) : (
          <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center text-[clamp(40px,6vw,64px)] font-bold text-fd-gold/80">
            {f.initials}
          </span>
        )}
      </div>
      <span className="fd-chip absolute inset-x-2.5 bottom-5 mx-auto flex w-fit max-w-[calc(100%-20px)] flex-col items-center whitespace-nowrap rounded-[14px] bg-white px-4 py-2.5 text-fd-dark shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
        <span className="text-sm font-bold">{f.name}</span>
        <span className="text-xs text-fd-slate">{f.role}</span>
      </span>
    </div>
  )
}

export default function AboutPage() {
  const [abraham, sandra] = FOUNDERS_DATA

  return (
    <>
      {/* HERO */}
      <section className="fd-grid-bg overflow-hidden bg-fd-dark text-white">
        <div className="mx-auto flex max-w-[1240px] flex-wrap items-end gap-[clamp(36px,6vw,80px)] px-gutter pt-[clamp(48px,7vw,96px)]">
          <div className="fd-hero flex min-w-0 flex-[1_1_520px] flex-col gap-[26px] pb-[clamp(48px,6vw,88px)]">
            <Breadcrumb items={[{ href: '/', label: 'Accueil' }, { label: 'À propos' }]} dark />
            <h1 className="m-0 text-[clamp(44px,6.8vw,92px)] font-bold leading-[0.98] tracking-[-0.035em]">
              Deux associés.
              <br />
              Un seul métier&nbsp;: <span className="text-fd-gold">les fromagers.</span>
            </h1>
            <p className="m-0 max-w-[520px] text-lg leading-relaxed text-fd-mist">
              Fromagerie Digitale, c&apos;est une conviction partagée : les fromagers font un des plus beaux métiers de France, et ils méritent d&apos;être aussi visibles en ligne que les grandes enseignes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#fondateurs" className="fd-btn inline-flex min-h-[56px] items-center gap-2.5 rounded-full bg-fd-gold px-[26px] text-base font-semibold text-fd-dark no-underline">
                Rencontrer les fondateurs <ArrowRight />
              </Link>
              <Link href="#histoire" className="fd-btn inline-flex min-h-[56px] items-center rounded-full border border-white/25 px-6 text-base font-medium text-white no-underline">
                Notre histoire
              </Link>
            </div>
          </div>

          <div className="relative mx-auto grid min-w-0 max-w-[500px] flex-[1_1_380px] grid-cols-2 items-end gap-4">
            <span
              aria-hidden="true"
              className="fd-badge absolute left-[42%] top-[6%] z-[3] flex h-[84px] w-[84px] flex-col items-center justify-center rounded-full bg-fd-gold text-center text-xs font-bold leading-tight text-fd-dark shadow-[0_10px_30px_rgba(0,0,0,0.3)] sm:h-[104px] sm:w-[104px] sm:text-xs"
            >
              100 %
              <br />
              fromagerie
            </span>
            <Arch f={abraham} tall={false} />
            <Arch f={sandra} tall delay />
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#182631]">
          <dl className="mx-auto m-0 grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(220px,1fr))] px-gutter">
            {[
              ['2', 'associés, vos seuls interlocuteurs'],
              ['1', 'seul secteur : la fromagerie artisanale'],
              ['0', 'intermédiaire entre vous et nous'],
            ].map(([n, t], i) => (
              <div
                key={n}
                className={`flex items-center gap-4 py-[26px] ${i === 0 ? 'pr-5' : 'border-l border-white/10 px-5'}`}
                style={{ animation: `fdA 500ms ${500 + i * 100}ms ease-out backwards` }}
              >
                <dt className="text-[44px] font-bold leading-none text-fd-gold">{n}</dt>
                <dd className="m-0 text-sm leading-snug text-fd-fog">{t}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* HISTOIRE */}
      <section id="histoire" className="bg-fd-cream">
        <div className="mx-auto flex max-w-[1240px] flex-wrap gap-[clamp(32px,5vw,72px)] px-gutter py-[clamp(72px,9vw,120px)]">
          <div className="flex min-w-0 flex-[1.3_1_520px] flex-col gap-[22px]">
            <p className="m-0 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-slate">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-navy" />
              Notre histoire
            </p>
            <h2 className="fd-reveal m-0 text-[clamp(30px,3.8vw,48px)] font-bold leading-[1.15] tracking-[-0.025em] text-fd-dark">
              Un fromager affine pendant des mois. En ligne, on le juge en <span className={underline}>trois secondes</span>. Notre travail : que ces trois secondes rendent justice à ces{' '}
              <span className={underline}>mois de travail</span>.
            </h2>
          </div>
          {STORY.length > 0 && (
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4 pt-11 text-[17px] leading-[1.7] text-fd-body">
              {STORY.map((p) => (
                <p key={p} className="m-0">
                  {p}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* FONDATEURS */}
      <section id="fondateurs" className="bg-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-gutter py-[clamp(72px,9vw,120px)]">
          <div className="flex max-w-[720px] flex-col gap-3">
            <p className="m-0 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-slate">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-navy" />
              Les fondateurs
            </p>
            <h2 className="fd-reveal m-0 text-[clamp(32px,4.6vw,56px)] font-bold leading-[1.05] tracking-[-0.02em] text-fd-dark">Deux profils complémentaires.</h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
            {[abraham, sandra].map((f) => (
              <article key={f.name} className="fd-card fd-reveal flex flex-col gap-[22px] rounded-3xl border border-[#E4DCCD] bg-white p-[clamp(28px,3.5vw,40px)]">
                <div className="flex items-center gap-4">
                  {f.photo ? (
                    <span className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full bg-fd-dark">
                      <Image src={f.photo} alt="" fill sizes="60px" className="object-cover object-top" />
                    </span>
                  ) : (
                    <span aria-hidden="true" className="inline-flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-fd-dark text-lg font-bold text-fd-gold">
                      {f.initials}
                    </span>
                  )}
                  <span className="flex flex-col gap-0.5">
                    <h3 className="m-0 text-2xl font-bold tracking-[-0.01em] text-fd-dark">{f.name}</h3>
                    <span className="text-sm font-semibold text-fd-navy">{f.title}</span>
                  </span>
                </div>
                {f.bio && <p className="m-0 text-base leading-[1.65] text-fd-body">{f.bio}</p>}
                <div className="flex flex-col gap-2.5 rounded-2xl bg-fd-cream p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fd-slate">Ce que je fais pour vous</span>
                  <ul className="m-0 flex list-none flex-col gap-2 p-0">
                    {f.does.map((d) => (
                      <li key={d} className="flex gap-2.5 text-[15px] leading-normal text-fd-ink">
                        <Check stroke="#314C5C" strokeWidth={2.4} className="mt-0.5 shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <ul aria-label="Expertises" className="mt-auto flex list-none flex-wrap gap-1.5 p-0">
                  {f.skills.map((sk) => (
                    <li key={sk} className="inline-flex min-h-[28px] items-center rounded-full border border-fd-line px-3 text-xs font-medium text-fd-ink">
                      {sk}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CE QUE NOUS APPORTONS */}
      <section className="fd-grid-bg bg-fd-dark text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-10 px-gutter py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex max-w-[680px] flex-col gap-3">
              <p className="m-0 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-mist">
                <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-gold" />
                Ce que nous apportons
              </p>
              <h2 className="fd-reveal m-0 text-[clamp(32px,4.6vw,56px)] font-bold leading-[1.05] tracking-[-0.02em]">
                La rigueur du digital, <span className="text-fd-gold">le goût du terroir.</span>
              </h2>
            </div>
            <Link href="/#projet-demo" className="fd-btn inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-white/25 py-0 pl-[22px] pr-2 text-[15px] font-medium text-white no-underline">
              Voir le projet démo
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <ArrowUpRight size={16} stroke="#1C2C37" strokeWidth={2.2} />
              </span>
            </Link>
          </div>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(280px,1fr))] border-t border-white/15 p-0">
            {STRENGTHS.map((s) => (
              <li key={s.n} className="fd-reveal flex flex-col gap-3 pb-2 pr-7 pt-8">
                <span className="text-sm font-semibold text-fd-gold">{s.n}</span>
                <h3 className="m-0 text-2xl font-bold leading-tight tracking-[-0.01em]">{s.title}</h3>
                <p className="m-0 text-base leading-relaxed text-fd-mist">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <GoldCta
        title="On en parle autour d'un café ?"
        text="Trente minutes pour faire connaissance et regarder ensemble votre présence en ligne. Offert, sans engagement."
        label="Réserver un appel"
      />
    </>
  )
}
