'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useState } from 'react'
import { Search } from '@/components/ui/icons'

export type PostCard = {
  slug: string
  title: string
  excerpt: string
  category: string
  dateLabel: string
  readingTime: number
  image: string
  imageAlt: string
}

/** Normalise pour une recherche insensible aux accents et à la casse. */
const norm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()

export function BlogList({ posts }: { posts: PostCard[] }) {
  const [query, setQuery] = useState('')
  const [cat, setCat] = useState('Tous')

  const categories = useMemo(() => {
    const counts = new Map<string, number>()
    posts.forEach((p) => counts.set(p.category, (counts.get(p.category) ?? 0) + 1))
    return [['Tous', posts.length] as const, ...Array.from(counts.entries())]
  }, [posts])

  const filtered = posts.filter((p) => {
    if (cat !== 'Tous' && p.category !== cat) return false
    if (!query.trim()) return true
    const q = norm(query.trim())
    return norm(`${p.title} ${p.excerpt} ${p.category}`).includes(q)
  })

  return (
    <section className="bg-fd-cream">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-gutter py-section">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="m-0 text-[clamp(28px,3.4vw,40px)] font-bold text-fd-dark">Tous les articles</h2>
            <p aria-live="polite" className="m-0 text-sm text-fd-slate">
              {filtered.length} article{filtered.length > 1 ? 's' : ''}
            </p>
          </div>
          <label className="flex w-full max-w-[420px] flex-col gap-1.5 text-sm font-semibold text-fd-dark">
            Rechercher un article
            <span className="flex min-h-[52px] items-center gap-2.5 rounded-full border border-fd-line bg-white px-4 focus-within:border-fd-navy">
              <Search size={20} stroke="#314C5C" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Fiche Google, Instagram, avis clients..."
                className="min-h-[48px] w-full border-0 bg-transparent p-0 text-base font-normal text-fd-ink placeholder:text-fd-slate focus:ring-0"
              />
            </span>
          </label>
        </div>

        <div role="group" aria-label="Filtrer par thème" className="flex flex-wrap gap-2">
          {categories.map(([label, count]) => {
            const on = label === cat
            return (
              <button
                key={label}
                type="button"
                aria-pressed={on}
                onClick={() => setCat(label)}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border border-fd-navy px-4 text-sm font-semibold transition-colors ${
                  on ? 'bg-fd-navy text-white' : 'bg-transparent text-fd-navy hover:bg-white'
                }`}
              >
                {label} <span className="text-xs opacity-70">{count}</span>
              </button>
            )
          })}
        </div>

        {filtered.length > 0 ? (
          <div key={`${cat}-${query}`} className="fd-swap-a grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">
            {filtered.map((p) => (
              <article key={p.slug} className="fd-card group relative flex flex-col overflow-hidden rounded-[20px] border border-fd-line bg-white">
                <div className="relative aspect-[16/10] overflow-hidden bg-fd-navy">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 700px) 100vw, 380px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-fd-slate">{p.category}</span>
                  <h3 className="m-0 text-xl font-bold leading-snug text-fd-dark">
                    <Link href={`/blog/${p.slug}`} className="text-inherit no-underline after:absolute after:inset-0 hover:underline">
                      {p.title}
                    </Link>
                  </h3>
                  <p className="m-0 text-[15px] leading-relaxed text-fd-slate">{p.excerpt}</p>
                  <p className="m-0 mt-auto pt-2 text-[13px] text-fd-slate">
                    {p.dateLabel} · {p.readingTime} min de lecture
                  </p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div role="status" className="flex flex-col items-center gap-3 rounded-3xl bg-white px-6 py-14 text-center">
            <Search size={40} stroke="#314C5C" strokeWidth={1.5} />
            <p className="m-0 text-lg font-semibold text-fd-dark">Aucun article ne correspond.</p>
            <p className="m-0 text-[15px] text-fd-slate">Essayez un autre mot, ou posez directement votre question.</p>
            <div className="mt-2 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setQuery('')
                  setCat('Tous')
                }}
                className="min-h-[44px] rounded-full border border-fd-navy bg-transparent px-5 text-sm font-semibold text-fd-navy"
              >
                Voir tous les articles
              </button>
              <Link href="/contact" className="inline-flex min-h-[44px] items-center rounded-full bg-fd-dark px-5 text-sm font-semibold text-white no-underline">
                Poser ma question
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
