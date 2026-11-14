'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Check, ChevronDown, PathIcon } from '@/components/ui/icons'

const PLANS = [
  { name: 'Essentiel', pitch: 'Un levier, un objectif clair, trois mois pour le prouver.', unit: 'suivi mensuel', features: ['Un service au choix', 'Diagnostic et plan de départ', 'Bilan mensuel', 'Sans engagement au delà de trois mois'], featured: false },
  { name: 'Croissance', pitch: 'Deux ou trois leviers combinés, pour avancer sur plusieurs fronts à la fois.', unit: 'suivi mensuel', features: ['Jusqu’à trois services', 'Tournage vidéo inclus', 'Point mensuel en visio', 'Ajustements selon les résultats'], featured: true },
  { name: 'Sur mesure', pitch: 'Lancement de marque, refonte complète ou ouverture de boutique.', unit: 'projet ponctuel', features: ['Projet défini ensemble', 'Budget et planning fixés à l’avance', 'Interlocuteur unique', 'Transmission complète en fin de projet'], featured: false },
]

const Y = 'Oui'
const N = 'Non'
const ROWS = [
  { label: 'Services inclus', a: '1', b: "Jusqu'à 3", c: 'Selon le projet' },
  { label: 'Diagnostic et plan de départ', a: Y, b: Y, c: Y },
  { label: 'Bilan mensuel chiffré', a: Y, b: Y, c: Y },
  { label: 'Tournage vidéo', a: 'En option', b: 'Inclus', c: 'Selon le projet' },
  { label: 'Point mensuel en visio', a: N, b: Y, c: Y },
  { label: 'Devis détaillé avant de signer', a: Y, b: Y, c: Y },
  { label: 'Engagement', a: '3 mois', b: 'Défini au devis', c: 'Durée du projet' },
]

const PROMISES = [
  { icon: 'M20 6L9 17l-5-5', title: 'Diagnostic offert', desc: 'Premier échange gratuit, sans engagement.' },
  { icon: 'M4 5h16v14H4zM8 9h8M8 13h5', title: 'Devis avant tout', desc: 'Prix et planning connus avant de signer.' },
  { icon: 'M3 17l6-6 4 4 8-8M15 7h6v6', title: 'Bilan lisible', desc: 'Des chiffres simples, chaque mois.' },
  { icon: 'M7 11V7a5 5 0 0 1 10 0v4M5 11h14v10H5z', title: 'Vos comptes à vous', desc: 'Site, réseaux et contenus vous appartiennent.' },
]

export function Plans() {
  const [compare, setCompare] = useState(false)

  return (
    <section id="formules" className="bg-white">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter py-section">
        <div className="fd-reveal flex flex-wrap items-end justify-between gap-4">
          <div className="flex max-w-[640px] flex-col gap-3">
            <p className="m-0 inline-flex items-center gap-2.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-slate">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-navy" />
              Formules
            </p>
            <h2 className="m-0 text-[clamp(32px,4.6vw,56px)] font-bold leading-[1.05] tracking-[-0.02em] text-fd-dark">Trois façons de travailler ensemble.</h2>
            <p className="m-0 text-[17px] leading-relaxed text-fd-body">
              Chaque fromagerie est différente, alors chaque accompagnement est chiffré sur devis. Après un premier échange offert, vous recevez le prix et le planning avant de vous engager.
            </p>
          </div>
          <button
            type="button"
            aria-expanded={compare}
            aria-controls="comparaison"
            onClick={() => setCompare((c) => !c)}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-fd-navy bg-transparent px-[18px] text-sm font-semibold text-fd-navy"
          >
            {compare ? 'Masquer la comparaison' : 'Comparer en détail'}
            <ChevronDown size={16} strokeWidth={2.2} className={`transition-transform duration-200 ${compare ? 'rotate-180' : ''}`} />
          </button>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-stretch gap-5">
          {PLANS.map((p) => {
            const on = p.featured
            return (
              <div
                key={p.name}
                className={`fd-card relative flex flex-col gap-5 rounded-3xl border p-8 ${
                  on ? 'border-fd-dark bg-fd-dark text-white' : 'border-[#E4DCCD] bg-white text-fd-dark'
                }`}
              >
                {on && (
                  <span className="absolute right-6 top-6 inline-flex min-h-[28px] items-center rounded-full bg-fd-gold px-3 text-xs font-semibold text-fd-dark">
                    Recommandé
                  </span>
                )}
                <h3 className="m-0 text-[22px] font-bold">{p.name}</h3>
                <p className={`m-0 min-h-[48px] text-[15px] leading-[1.55] ${on ? 'text-fd-mist' : 'text-fd-slate'}`}>{p.pitch}</p>
                <div className={`flex items-baseline gap-1.5 border-b pb-5 ${on ? 'border-white/15' : 'border-[#E4DCCD]'}`}>
                  <span className="text-[40px] font-bold tracking-[-0.02em]">Sur devis</span>
                  <span className={`text-sm ${on ? 'text-fd-mist' : 'text-fd-slate'}`}>{p.unit}</span>
                </div>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-[15px] leading-normal">
                      <Check stroke={on ? '#F4BD45' : '#314C5C'} strokeWidth={2.4} className="mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`fd-btn mt-auto inline-flex min-h-[48px] items-center justify-center rounded-full text-[15px] font-semibold text-fd-dark no-underline ${
                    on ? 'bg-fd-gold' : 'bg-fd-cream'
                  }`}
                >
                  Demander mon devis
                </Link>
              </div>
            )
          })}
        </div>

        {compare && (
          <div id="comparaison" className="fd-in overflow-x-auto rounded-[20px] border border-[#E4DCCD]">
            <table className="w-full min-w-[640px] border-collapse text-[15px]">
              <caption className="sr-only">Comparaison détaillée des formules</caption>
              <thead>
                <tr className="bg-fd-cream">
                  <th scope="col" className="px-6 py-[18px] text-left text-[13px] font-semibold text-fd-slate">Inclus</th>
                  <th scope="col" className="px-6 py-[18px] text-center font-bold text-fd-dark">Essentiel</th>
                  <th scope="col" className="bg-[#EDE5D6] px-6 py-[18px] text-center font-bold text-fd-dark">Croissance</th>
                  <th scope="col" className="px-6 py-[18px] text-center font-bold text-fd-dark">Sur mesure</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.label} className="border-t border-[#E4DCCD]">
                    <th scope="row" className="px-6 py-4 text-left font-medium text-fd-ink">{r.label}</th>
                    <td className="px-6 py-4 text-center text-fd-body">{r.a}</td>
                    <td className="bg-fd-paper px-6 py-4 text-center text-fd-body">{r.b}</td>
                    <td className="px-6 py-4 text-center text-fd-body">{r.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <ul className="fd-reveal m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5 border-t border-[#E4DCCD] p-0 pt-8">
          {PROMISES.map((p) => (
            <li key={p.title} className="flex items-start gap-3.5">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-fd-cream">
                <PathIcon d={p.icon} size={20} stroke="#314C5C" />
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="text-base font-semibold text-fd-dark">{p.title}</span>
                <span className="text-sm leading-normal text-fd-slate">{p.desc}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
