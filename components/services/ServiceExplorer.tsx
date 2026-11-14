'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, PathIcon } from '@/components/ui/icons'
import { LEVERS, SERVICES, leverOf, type LeverId } from '@/lib/services'

const pad = (n: number) => String(n).padStart(2, '0')

/**
 * Explorateur des huit services.
 * Il réagit aussi à l'ancre de l'adresse : #trouve (premier service du levier)
 * ou #service-site-premium (un service précis), utilisées par le hero et le guide.
 */
export function ServiceExplorer() {
  const [cur, setCur] = useState(0)
  const [swap, setSwap] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)
  const curRef = useRef(0)

  const pick = useCallback((i: number) => {
    if (i === curRef.current) return
    curRef.current = i
    setCur(i)
    setSwap((s) => s + 1)
  }, [])

  useEffect(() => {
    const fromHash = () => {
      const h = decodeURIComponent(window.location.hash.slice(1))
      if (!h) return
      let i = -1
      if (h.startsWith('service-')) i = SERVICES.findIndex((s) => s.slug === h.slice(8))
      else if (LEVERS.some((l) => l.id === h)) i = SERVICES.findIndex((s) => s.lever === (h as LeverId))
      if (i >= 0) {
        pick(i)
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
    fromHash()
    window.addEventListener('hashchange', fromHash)
    return () => window.removeEventListener('hashchange', fromHash)
  }, [pick])

  const s = SERVICES[cur]
  const lever = leverOf(s.lever)

  return (
    <section id="services" ref={sectionRef} className="bg-fd-cream">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter py-section">
        <div className="fd-reveal flex flex-col gap-3">
          <h2 className="fd-h2 text-fd-navy">Nos services, en détail.</h2>
          <p className="m-0 text-base text-fd-slate">Sélectionnez un service pour voir le détail.</p>
        </div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
          {/* Liste : colonne sur grand écran, ruban défilant sur mobile */}
          <div
            role="tablist"
            aria-label="Services"
            aria-orientation="vertical"
            className="-mx-gutter flex gap-2 overflow-x-auto px-gutter pb-2 [scrollbar-width:none] lg:mx-0 lg:w-[340px] lg:shrink-0 lg:flex-col lg:gap-6 lg:overflow-visible lg:px-0"
          >
            {LEVERS.map((l) => (
              <div key={l.id} className="contents lg:flex lg:flex-col lg:gap-1">
                <span className="hidden px-3 pb-1 text-xs font-semibold uppercase tracking-[0.16em] text-fd-slate lg:block">{l.label}</span>
                {SERVICES.map((x, i) =>
                  x.lever !== l.id ? null : (
                    <button
                      key={x.slug}
                      type="button"
                      role="tab"
                      id={`onglet-${x.slug}`}
                      aria-selected={i === cur}
                      aria-controls="service-panneau"
                      onClick={() => pick(i)}
                      className={`group flex min-h-[44px] shrink-0 items-center gap-3 rounded-full border px-4 text-left text-[15px] font-semibold transition-colors lg:min-h-[56px] lg:w-full lg:rounded-xl lg:border-0 ${
                        i === cur
                          ? 'border-fd-dark bg-fd-dark text-white'
                          : 'border-fd-line bg-transparent text-fd-ink hover:bg-white'
                      }`}
                    >
                      <span className={`text-xs font-semibold ${i === cur ? 'text-fd-gold' : 'text-fd-slate'}`}>{pad(i + 1)}</span>
                      <span className="flex-1 whitespace-nowrap lg:whitespace-normal">{x.name}</span>
                      <ArrowRight
                        stroke={i === cur ? '#F4BD45' : '#B4A994'}
                        className="hidden transition-transform group-hover:translate-x-1 lg:block"
                      />
                    </button>
                  ),
                )}
              </div>
            ))}
          </div>

          <div
            id="service-panneau"
            role="tabpanel"
            aria-labelledby={`onglet-${s.slug}`}
            key={swap}
            className="fd-swap-a min-w-0 flex-1 overflow-hidden rounded-3xl border border-[#E4DCCD] bg-white"
          >
            <div className="flex flex-col gap-6 p-[clamp(28px,4vw,48px)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex min-h-[32px] items-center gap-2 rounded-full bg-fd-cream px-3 text-[13px] font-semibold text-fd-navy">
                  <PathIcon d={lever.icon} size={16} />
                  {lever.label}
                </span>
                <span className="text-[13px] text-fd-slate">
                  Service {pad(cur + 1)} sur {pad(SERVICES.length)}
                </span>
              </div>
              <h3 className="m-0 text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.1] tracking-[-0.02em] text-fd-dark">{s.name}</h3>
              <p className="m-0 text-lg leading-relaxed text-fd-body">{s.promise}</p>
              <div className="grid gap-5 md:grid-cols-[1.3fr_1fr]">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fd-slate">Vous recevez</span>
                  <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-base leading-normal">
                        <Check stroke="#314C5C" strokeWidth={2.4} className="mt-[3px] shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-2 rounded-2xl bg-fd-cream p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-fd-slate">Idéal si</span>
                  <p className="m-0 text-base leading-relaxed">{s.ideal}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-5 border-t border-[#E4DCCD] bg-fd-paper px-[clamp(28px,4vw,48px)] py-5">
              <div className="flex flex-wrap gap-8">
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-fd-slate">Tarif</span>
                  <span className="text-xl font-bold text-fd-dark">Sur devis</span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs text-fd-slate">Rythme</span>
                  <span className="text-xl font-bold text-fd-dark">{s.rythme}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <button
                  type="button"
                  onClick={() => pick((cur + 1) % SERVICES.length)}
                  className="fd-btn inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#C9BFAE] bg-transparent px-[18px] text-[15px] font-semibold text-fd-navy"
                >
                  Service suivant <ArrowRight size={16} />
                </button>
                <Link
                  href={`/services/${s.slug}`}
                  className="fd-btn inline-flex min-h-[48px] items-center gap-2 rounded-full bg-fd-dark px-5 text-[15px] font-semibold text-white no-underline"
                >
                  Voir la page du service <ArrowUpRight size={16} stroke="#F4BD45" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
