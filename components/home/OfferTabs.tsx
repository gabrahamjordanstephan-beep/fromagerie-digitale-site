'use client'

import Link from 'next/link'
import { useState, type KeyboardEvent } from 'react'
import { Check } from '@/components/ui/icons'
import { PILLARS } from '@/lib/home-data'

export function OfferTabs() {
  const [index, setIndex] = useState(0)
  const [swap, setSwap] = useState(0)
  const active = PILLARS[index]

  const select = (i: number) => {
    if (i === index) return
    setIndex(i)
    setSwap((s) => s + 1)
  }

  // Navigation au clavier entre les onglets (flèches gauche et droite).
  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const next = (index + (e.key === 'ArrowRight' ? 1 : PILLARS.length - 1)) % PILLARS.length
    select(next)
    document.getElementById(`levier-${PILLARS[next].id}`)?.focus()
  }

  return (
    <section id="offre" className="bg-white">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter py-section">
        <div className="flex max-w-[720px] flex-col gap-3">
          <p className="fd-eyebrow text-fd-slate">Notre offre</p>
          <h2 className="fd-h2 fd-reveal text-fd-navy">Quatre leviers. Un seul objectif : remplir votre boutique.</h2>
        </div>

        <div role="tablist" aria-label="Leviers de l'offre" className="flex flex-wrap gap-2">
          {PILLARS.map((p, i) => {
            const on = i === index
            return (
              <button
                key={p.id}
                id={`levier-${p.id}`}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls="offre-panneau"
                tabIndex={on ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={onKey}
                className={`fd-btn inline-flex min-h-[48px] items-center gap-2.5 rounded-full border border-fd-navy px-[22px] text-base font-semibold ${
                  on ? 'bg-fd-navy text-white' : 'bg-transparent text-fd-navy'
                }`}
              >
                <span className="text-xs font-semibold opacity-80">{p.num}</span>
                {p.label}
              </button>
            )
          })}
        </div>

        <div
          id="offre-panneau"
          role="tabpanel"
          aria-labelledby={`levier-${active.id}`}
          key={swap}
          className="fd-swap-a flex flex-wrap gap-[clamp(32px,5vw,64px)] rounded-2xl bg-fd-navy p-[clamp(28px,4vw,48px)] text-white"
        >
          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4">
            <p className="fd-eyebrow text-fd-gold">{active.label}</p>
            <h3 className="m-0 text-[32px] font-bold leading-tight">{active.title}</h3>
            <p className="m-0 text-base leading-relaxed text-fd-fog">{active.desc}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="#contact" className="fd-btn inline-flex min-h-[48px] items-center rounded-full bg-fd-gold px-[22px] text-sm font-semibold text-fd-dark no-underline">
                En parler ensemble
              </Link>
              <Link href="/services" className="fd-btn inline-flex min-h-[48px] items-center rounded-full border border-white/40 px-[22px] text-sm font-semibold text-white no-underline">
                Voir le détail des offres
              </Link>
            </div>
          </div>
          <ul className="m-0 flex min-w-0 flex-[1_1_420px] list-none flex-col gap-3 p-0">
            {active.offers.map((o) => (
              <li key={o.name} className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-fd-dark">
                  <Check size={20} stroke="#F4BD45" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-xl font-semibold">{o.name}</span>
                  <span className="text-sm leading-relaxed text-fd-fog">{o.desc}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
