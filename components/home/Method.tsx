'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Clock } from '@/components/ui/icons'
import { METHOD } from '@/lib/home-data'

const RIND = ['#F1E4C3', '#E9D29A', '#DDB866', '#C99A3E']
const TOP = ['#F8EFD8', '#F2E2B6', '#EACD86', '#DDB25A']

export function Method() {
  const [step, setStep] = useState(0)
  const [swap, setSwap] = useState(0)
  const active = METHOD[step]
  const last = METHOD.length - 1

  const go = (i: number) => {
    if (i === step || i < 0 || i > last) return
    setStep(i)
    setSwap((s) => s + 1)
  }

  return (
    <section id="methode" className="bg-fd-dark text-white">
      <div className="mx-auto flex max-w-page flex-col gap-[clamp(40px,5vw,56px)] px-gutter py-section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex min-w-0 max-w-[720px] flex-[1_1_520px] flex-col gap-3">
            <p className="fd-eyebrow text-fd-mist">Notre méthode</p>
            <h2 className="fd-h2 fd-reveal">
              On travaille comme vous affinez : <span className="text-fd-gold">avec méthode, et on goûte à chaque étape</span>.
            </h2>
          </div>
          <p className="m-0 flex-[0_1_340px] text-base leading-relaxed text-fd-mist">
            Quatre étapes, du premier café au premier bilan. Vous gardez la main à chaque moment, et ça vous prend environ une heure par mois.
          </p>
        </div>

        {/* Frise des étapes */}
        <div className="relative">
          <div aria-hidden="true" className="absolute left-[12.5%] right-[12.5%] top-[27px] h-0.5 bg-white/15">
            <div className="fd-fill h-full bg-fd-gold" style={{ width: `${Math.round((step / last) * 100)}%` }} />
          </div>
          <div role="tablist" aria-label="Étapes de la méthode" className="relative grid grid-cols-4 gap-2">
            {METHOD.map((m, i) => {
              const on = i === step
              const done = i < step
              return (
                  <button
                    key={m.num}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls="methode-panneau"
                    onClick={() => go(i)}
                    className="fd-step flex w-full flex-col items-center gap-3 border-0 bg-transparent px-1 pb-2 text-center text-white"
                  >
                    <span
                      className={`fd-node inline-flex h-14 w-14 items-center justify-center rounded-full border-2 text-base font-bold ${
                        on
                          ? 'border-fd-gold bg-fd-gold text-fd-dark shadow-[0_0_0_8px_rgba(244,189,69,0.18)]'
                          : done
                            ? 'border-fd-navy bg-fd-navy text-white'
                            : 'border-white/35 bg-fd-dark text-white'
                      }`}
                    >
                      {done ? <Check size={22} stroke="#F4BD45" strokeWidth={2.5} /> : m.num}
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className={`text-[clamp(14px,1.8vw,20px)] font-bold ${on ? 'text-white' : 'text-fd-mist'}`}>{m.title}</span>
                      <span className="hidden text-[13px] text-fd-mist sm:inline">{m.when}</span>
                    </span>
                  </button>
              )
            })}
          </div>
        </div>

        {/* Détail de l'étape */}
        <div
          id="methode-panneau"
          role="tabpanel"
          key={swap}
          className={`${swap % 2 ? 'fd-swap-a' : 'fd-swap-b'} flex flex-wrap gap-[clamp(28px,4vw,56px)] rounded-2xl border border-white/10 bg-white/5 p-[clamp(24px,4vw,48px)]`}
        >
          <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[18px]">
            <div className="flex items-center gap-4">
              <svg width="64" height="52" viewBox="0 0 64 52" aria-hidden="true" className="shrink-0">
                <path d="M4 18v16c0 7 12.5 12 28 12s28-5 28-12V18" fill={RIND[step]} stroke="#1C2C37" strokeWidth="2" className="transition-[fill] duration-500" />
                <ellipse cx="32" cy="18" rx="28" ry="12" fill={TOP[step]} stroke="#1C2C37" strokeWidth="2" className="transition-[fill] duration-500" />
                <circle cx="22" cy="17" r="2" fill="#1C2C37" opacity="0.25" />
                <circle cx="38" cy="21" r="1.6" fill="#1C2C37" opacity="0.25" />
                <circle cx="44" cy="14" r="1.2" fill="#1C2C37" opacity="0.25" />
              </svg>
              <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="fd-eyebrow text-fd-gold">
                  Étape {active.num} · {active.when}
                </span>
                <span aria-hidden="true" className="h-1.5 overflow-hidden rounded-full bg-white/10">
                  <span className="fd-fill block h-full rounded-full bg-fd-gold" style={{ width: `${(step + 1) * 25}%` }} />
                </span>
              </span>
            </div>
            <h3 className="m-0 text-[clamp(28px,3.4vw,40px)] font-bold leading-[1.15]">{active.headline}</h3>
            <p className="m-0 text-[17px] leading-[1.65] text-fd-fog">{active.desc}</p>
            <span className="inline-flex min-h-[40px] items-center gap-2.5 self-start rounded-xl border border-fd-gold/40 bg-fd-gold/10 px-4 text-sm">
              <Clock stroke="#F4BD45" />
              <span>
                <strong className="font-semibold">Votre temps :</strong> {active.yourTime}
              </span>
            </span>
          </div>

          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-4">
            <p className="fd-eyebrow text-fd-mist">Ce que vous recevez</p>
            <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
              {active.gets.map((g) => (
                <li key={g} className="flex items-start gap-3.5 rounded-xl bg-white/[0.06] px-[18px] py-4">
                  <Check size={20} stroke="#F4BD45" strokeWidth={2.2} className="mt-0.5 shrink-0" />
                  <span className="text-base leading-normal">{g}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => go(step - 1)}
                disabled={step === 0}
                aria-label="Étape précédente"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-transparent text-white disabled:cursor-default disabled:opacity-35"
              >
                <ArrowLeft />
              </button>
              <span className="text-sm text-fd-mist" aria-live="polite">
                {step + 1} sur {METHOD.length}
              </span>
              {step < last ? (
                <button
                  type="button"
                  onClick={() => go(step + 1)}
                  className="fd-btn inline-flex min-h-[48px] items-center gap-2 rounded-full border-0 bg-fd-gold px-5 text-[15px] font-semibold text-fd-dark"
                >
                  Étape suivante <ArrowRight />
                </button>
              ) : (
                <Link
                  href="#contact"
                  className="fd-btn inline-flex min-h-[48px] items-center gap-2 rounded-full bg-fd-gold px-5 text-[15px] font-semibold text-fd-dark no-underline"
                >
                  Commencer par l&apos;étape 1 <ArrowRight />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
