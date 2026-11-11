import Link from 'next/link'
import { ArrowUpRight } from '@/components/ui/icons'
import { MANIFESTO } from '@/lib/home-data'

const GOLD_WORDS = new Set(['fromager.', 'ventes.'])

/** Les mots s'allument un à un pendant le défilement (CSS, sans JavaScript). */
export function Manifesto() {
  const words = MANIFESTO.split(' ')
  const n = words.length

  return (
    <section className="fd-manif bg-fd-dark text-white">
      <div className="mx-auto flex max-w-[1240px] flex-wrap gap-[clamp(28px,5vw,72px)] px-gutter py-[clamp(80px,12vw,160px)]">
        <div className="flex min-w-0 flex-[0_1_220px] flex-col gap-4 pt-3">
          <p className="m-0 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-mist">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-gold" />
            Notre philosophie
          </p>
          <span aria-hidden="true" className="text-[120px] font-bold leading-[0.7] text-fd-gold">
            “
          </span>
        </div>
        <div className="flex min-w-0 flex-[999_1_640px] flex-col gap-[clamp(40px,5vw,64px)]">
          <h2 className="m-0 text-[clamp(30px,4.3vw,56px)] font-semibold leading-[1.18] tracking-[-0.025em]">
            {words.map((t, i) => {
              const a = Math.round(18 + (i / n) * 34)
              return (
                <span
                  key={`${t}-${i}`}
                  className={`fd-word mr-[0.24em] inline-block ${GOLD_WORDS.has(t) ? 'text-fd-gold' : ''}`}
                  style={{ ['--a' as string]: `${a}%`, ['--b' as string]: `${a + 6}%` } as React.CSSProperties}
                >
                  {t}
                </span>
              )
            })}
          </h2>
          <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/15 pt-7">
            <p className="m-0 text-[clamp(18px,2vw,22px)] font-semibold text-fd-gold">Votre savoir faire mérite d&apos;être vu.</p>
            <Link
              href="/a-propos"
              className="fd-btn inline-flex min-h-[48px] items-center gap-3 rounded-full border border-white/20 py-0 pl-5 pr-1.5 text-[15px] font-medium text-white no-underline"
            >
              Rencontrer les fondateurs
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <ArrowUpRight size={16} stroke="#1C2C37" strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
