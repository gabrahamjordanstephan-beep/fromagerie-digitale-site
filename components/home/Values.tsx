'use client'

import { useState } from 'react'
import { Check, Cross, PathIcon } from '@/components/ui/icons'
import { VALUES } from '@/lib/home-data'

export function Values() {
  const [refuse, setRefuse] = useState(false)

  const seg = (on: boolean) =>
    `fd-seg inline-flex min-h-[44px] items-center gap-2 rounded-full border-0 px-[18px] text-sm font-semibold ${
      on ? 'bg-fd-navy text-white' : 'bg-transparent text-fd-navy'
    }`

  return (
    <section id="valeurs" className="bg-fd-cream">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter py-section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex min-w-0 flex-[1_1_480px] flex-col gap-3">
            <p className="fd-eyebrow text-fd-slate">Nos valeurs</p>
            <h2 className="fd-h2 fd-reveal text-fd-navy">Ce en quoi nous croyons.</h2>
            <p className="m-0 max-w-[520px] text-base leading-relaxed text-fd-slate">
              Des valeurs, tout le monde en affiche. Alors voici ce qu&apos;elles changent concrètement, et ce qu&apos;elles nous interdisent.
            </p>
          </div>
          <div role="group" aria-label="Afficher nos engagements" className="inline-flex rounded-full border border-fd-line bg-white p-1">
            <button type="button" aria-pressed={!refuse} onClick={() => setRefuse(false)} className={seg(!refuse)}>
              <Check size={16} strokeWidth={2.5} />
              Ce qu&apos;on fait
            </button>
            <button type="button" aria-pressed={refuse} onClick={() => setRefuse(true)} className={seg(refuse)}>
              <Cross size={16} strokeWidth={2.5} />
              Ce qu&apos;on refuse
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5">
          {VALUES.map((v) => {
            const d = v.dark
            return (
              <article
                key={v.num}
                className={`fd-card fd-reveal relative col-span-12 flex flex-col gap-4 overflow-hidden rounded-2xl border p-[clamp(28px,3.5vw,40px)] md:min-h-[300px] ${
                  v.span === 7 ? 'md:col-span-7' : 'md:col-span-5'
                } ${d ? 'border-fd-navy bg-fd-navy text-white' : 'border-fd-line bg-white text-fd-ink'}`}
              >
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -top-3 right-5 text-[120px] font-bold leading-none ${d ? 'text-white/[0.07]' : 'text-fd-navy/[0.07]'}`}
                >
                  {v.num}
                </span>
                <span className={`relative inline-flex h-[52px] w-[52px] items-center justify-center rounded-[14px] ${d ? 'bg-fd-dark' : 'bg-fd-navy'}`}>
                  <PathIcon d={v.icon} size={24} stroke="#F4BD45" />
                </span>
                <h3 className="relative m-0 text-[clamp(28px,3vw,36px)] font-bold leading-[1.1]">{v.title}</h3>
                <p className={`relative m-0 max-w-[460px] text-base leading-relaxed ${d ? 'text-fd-fog' : 'text-fd-slate'}`}>{v.desc}</p>
                <div
                  key={refuse ? 'non' : 'oui'}
                  className={`fd-swap-a relative mt-auto flex items-start gap-3 rounded-xl px-[18px] py-4 ${d ? 'bg-white/[0.08]' : 'bg-fd-cream'}`}
                >
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                      refuse ? (d ? 'bg-white' : 'bg-fd-ink') : 'bg-fd-gold'
                    }`}
                  >
                    {refuse ? (
                      <Cross size={16} strokeWidth={2.6} stroke={d ? '#314C5C' : '#FFFFFF'} />
                    ) : (
                      <Check size={16} strokeWidth={2.6} stroke="#1C2C37" />
                    )}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className={`text-xs font-semibold uppercase tracking-[0.15em] ${d ? 'text-fd-fog' : 'text-fd-slate'}`}>
                      {refuse ? 'Ce qu’on refuse' : 'Ce qu’on fait'}
                    </span>
                    <span className="text-[15px] font-medium leading-[1.55]">{refuse ? v.noLine : v.doLine}</span>
                  </span>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
