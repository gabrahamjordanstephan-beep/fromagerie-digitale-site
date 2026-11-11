'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Check, Clock, PathIcon } from '@/components/ui/icons'
import { LEVERS, SERVICES, leverOf, type LeverId } from '@/lib/services'

const UNSURE = 'M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17.5v.01M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z'
const CLOCK = 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2'

const PRIORITIES: { label: string; sub: string; icon: string; lever: LeverId | null }[] = [
  { label: 'Être trouvé', sub: 'Sur Google, Maps et les IA', icon: LEVERS[0].icon, lever: 'trouve' },
  { label: 'Être reconnu', sub: 'Une image à la hauteur de vos fromages', icon: LEVERS[1].icon, lever: 'reconnu' },
  { label: 'Vendre plus', sub: 'En vidéo et en ligne', icon: LEVERS[2].icon, lever: 'vendre' },
  { label: 'Je ne sais pas encore', sub: 'On regarde ensemble', icon: UNSURE, lever: null },
]

const TIMES = [
  { label: "Moins d'une heure", sub: 'Vous préférez déléguer' },
  { label: 'Une à trois heures', sub: 'Vous aimez être impliqué' },
  { label: 'Plus de trois heures', sub: 'Vous voulez apprendre à faire' },
]

const MODES = [
  { n: 'Clé en main', t: 'Nous produisons et publions, vous validez en un message.' },
  { n: 'Accompagné', t: 'Nous produisons, vous participez aux tournages et aux choix.' },
  { n: 'Autonomie', t: "L'atelier IA, puis un suivi léger pour publier vous aussi." },
]

export function Guide() {
  const [q, setQ] = useState<0 | 1 | 2>(0)
  const [prio, setPrio] = useState(-1)
  const [time, setTime] = useState(-1)
  const [swap, setSwap] = useState(0)

  const go = (next: 0 | 1 | 2) => {
    setQ(next)
    setSwap((s) => s + 1)
  }

  let reco: { title: string; text: string; slugs: string[] } | null = null
  if (q === 2 && prio >= 0 && time >= 0) {
    const lev = PRIORITIES[prio].lever
    const slugs = lev ? SERVICES.filter((s) => s.lever === lev).map((s) => s.slug) : ['visibilite-geo-ia', 'site-premium']
    if (time === 2 && !slugs.includes('atelier-ia-fromager')) slugs.push('atelier-ia-fromager')
    reco = lev
      ? { title: `Commencez par : ${leverOf(lev).label}.`, text: "Ce sont les services qui auront le plus d'effet sur votre priorité. Cliquez pour voir le détail.", slugs }
      : { title: 'Commencez par le diagnostic offert.', text: 'Trente minutes pour faire le point sur votre visibilité. Les deux services les plus souvent utiles pour démarrer :', slugs }
  }

  const options = q === 0 ? PRIORITIES : TIMES.map((t) => ({ ...t, icon: CLOCK }))

  return (
    <section className="bg-fd-dark text-white">
      <div className="mx-auto flex max-w-[960px] flex-col gap-10 px-gutter py-section">
        <div className="fd-reveal flex flex-col items-center gap-3 text-center">
          <p className="m-0 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-mist">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-gold" />
            Par où commencer
          </p>
          <h2 className="fd-h2">Deux questions. Une recommandation.</h2>
          <p className="m-0 max-w-[560px] text-base leading-relaxed text-fd-mist">
            Trente secondes pour savoir quel levier activer en premier, et comment travailler ensemble.
          </p>
        </div>

        <div key={swap} aria-live="polite" className="fd-swap-a rounded-3xl border border-white/10 bg-white/5 p-[clamp(24px,4vw,48px)]">
          {q < 2 || !reco ? (
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[13px] font-semibold text-fd-gold">Question {q + 1} sur 2</span>
                  {q === 1 && (
                    <button type="button" onClick={() => go(0)} className="inline-flex min-h-[36px] items-center gap-1.5 border-0 bg-transparent text-sm text-fd-mist hover:text-white">
                      <ArrowLeft size={14} />
                      Retour
                    </button>
                  )}
                </div>
                <div aria-hidden="true" className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="fd-fill h-full bg-fd-gold" style={{ width: q === 0 ? '50%' : '100%' }} />
                </div>
              </div>
              <h3 className="m-0 text-[clamp(24px,3vw,32px)] font-bold leading-tight">
                {q === 0 ? "Quelle est votre priorité aujourd'hui ?" : 'Combien de temps pouvez-vous y consacrer chaque semaine ?'}
              </h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {options.map((o, i) => (
                  <button
                    key={o.label}
                    type="button"
                    onClick={() => {
                      if (q === 0) {
                        setPrio(i)
                        go(1)
                      } else {
                        setTime(i)
                        go(2)
                      }
                    }}
                    className="flex min-h-[76px] items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-4 text-left text-white transition hover:-translate-y-[3px] hover:border-fd-gold"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fd-navy">
                      <PathIcon d={o.icon} size={20} stroke="#F4BD45" />
                    </span>
                    <span className="flex flex-col gap-0.5">
                      <span className="text-[17px] font-semibold">{o.label}</span>
                      <span className="text-sm text-fd-mist">{o.sub}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex min-h-[32px] items-center gap-2 rounded-full bg-fd-gold px-3 text-[13px] font-semibold text-fd-dark">
                  <Check size={16} strokeWidth={2.4} />
                  Notre recommandation
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setPrio(-1)
                    setTime(-1)
                    go(0)
                  }}
                  className="min-h-[36px] border-0 bg-transparent text-sm text-fd-mist underline underline-offset-4 hover:text-white"
                >
                  Recommencer
                </button>
              </div>
              <h3 className="m-0 text-[clamp(26px,3.4vw,36px)] font-bold leading-tight">{reco.title}</h3>
              <p className="m-0 text-base leading-relaxed text-fd-fog">{reco.text}</p>
              <div className="flex flex-wrap gap-2.5">
                {reco.slugs.map((slug) => {
                  const svc = SERVICES.find((s) => s.slug === slug)
                  return svc ? (
                    <a
                      key={slug}
                      href={`#service-${slug}`}
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-white/25 px-4 text-sm font-semibold text-white no-underline hover:border-fd-gold"
                    >
                      {svc.name}
                      <ArrowRight size={14} stroke="#F4BD45" strokeWidth={2.4} />
                    </a>
                  ) : null
                })}
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-white/[0.06] p-4">
                <Clock size={22} stroke="#F4BD45" className="shrink-0" />
                <span className="text-[15px] leading-relaxed">
                  <strong className="font-semibold">{MODES[time].n}.</strong> {MODES[time].t}
                </span>
              </div>
              <Link
                href="/contact"
                className="fd-btn inline-flex min-h-[52px] items-center gap-2.5 self-start rounded-full bg-fd-gold px-6 text-[15px] font-semibold text-fd-dark no-underline"
              >
                En parler lors du diagnostic offert <ArrowRight />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
