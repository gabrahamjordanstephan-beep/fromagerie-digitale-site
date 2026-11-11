'use client'

import { useState } from 'react'
import { Plus } from '@/components/ui/icons'

export function Faq({ items, title }: { items: { q: string; a: string }[]; title: string }) {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="bg-white">
      <div className="mx-auto flex max-w-[880px] flex-col gap-8 px-gutter py-section">
        <div className="flex flex-col gap-3">
          <p className="fd-eyebrow text-fd-slate">Questions fréquentes</p>
          <h2 className="fd-h2 fd-reveal text-fd-navy">{title}</h2>
        </div>
        <div className="flex flex-col">
          {items.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="border-b border-fd-line">
                <h3 className="m-0">
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-r-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    className="flex min-h-[64px] w-full items-center justify-between gap-4 border-0 bg-transparent py-4 text-left text-xl font-semibold text-fd-ink"
                  >
                    <span>{f.q}</span>
                    <span
                      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-fd-cream transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                    >
                      <Plus stroke="#314C5C" />
                    </span>
                  </button>
                </h3>
                {/* Réponse toujours présente dans la page (lisible par Google), masquée quand la question est fermée. */}
                <div id={`faq-r-${i}`} role="region" aria-labelledby={`faq-q-${i}`} hidden={!isOpen}>
                  <p className="fd-in m-0 mb-6 max-w-[680px] text-base leading-relaxed text-fd-slate">{f.a}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
