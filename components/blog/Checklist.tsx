'use client'

import { useState } from 'react'
import { Check } from '@/components/ui/icons'

export function Checklist({ items }: { items: string[] }) {
  const [checked, setChecked] = useState<boolean[]>(() => items.map(() => false))
  const total = items.length
  const done = checked.filter(Boolean).length
  const left = total - done

  let title = 'Il y a de la marge.'
  let text = 'Commencez par la catégorie et les horaires : ce sont les réglages qui comptent le plus.'
  if (done === total) {
    title = 'Bravo, votre fiche est complète.'
    text = 'Gardez le réflexe cinq minutes chaque lundi pour la garder vivante.'
  } else if (done >= 4) {
    title = 'Vous êtes sur la bonne voie.'
    text = `Encore ${left} réglage${left > 1 ? 's' : ''} et votre fiche sortira du lot.`
  }

  return (
    <section id="checklist" aria-labelledby="checklist-titre" className="not-prose my-12 flex flex-col gap-5 rounded-3xl bg-fd-cream p-[clamp(24px,4vw,40px)]">
      <div className="flex flex-col gap-1.5">
        <h2 id="checklist-titre" className="m-0 text-[clamp(24px,2.6vw,30px)] font-bold text-fd-dark">Votre fiche est-elle prête ?</h2>
        <p className="m-0 text-base text-fd-slate">Cochez ce que vous avez déjà fait.</p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm font-semibold text-fd-navy">
          <span>Progression</span>
          <span>
            {done} sur {total}
          </span>
        </div>
        <div
          role="progressbar"
          aria-label="Réglages effectués"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done}
          className="h-2 overflow-hidden rounded-full bg-white"
        >
          <div className="fd-fill h-full rounded-full bg-fd-gold" style={{ width: `${Math.round((done / total) * 100)}%` }} />
        </div>
      </div>
      <div className="grid gap-2.5 sm:grid-cols-2">
        {items.map((label, i) => (
          <label
            key={label}
            className={`flex min-h-[52px] cursor-pointer items-center gap-3 rounded-xl border px-4 text-[15px] transition-colors ${
              checked[i] ? 'border-fd-navy bg-[#EEF3F5]' : 'border-fd-line bg-white'
            }`}
          >
            <input
              type="checkbox"
              checked={checked[i]}
              onChange={() => setChecked((c) => c.map((v, j) => (j === i ? !v : v)))}
              className="h-5 w-5 rounded border-fd-slate text-fd-navy focus:ring-fd-gold"
            />
            <span className={checked[i] ? 'font-medium text-fd-dark' : 'text-fd-ink'}>{label}</span>
            {checked[i] && <Check size={16} stroke="#314C5C" strokeWidth={2.6} className="ml-auto" />}
          </label>
        ))}
      </div>
      <p aria-live="polite" className="m-0 text-base leading-relaxed text-fd-ink">
        <strong>{title}</strong> {text}
      </p>
    </section>
  )
}
