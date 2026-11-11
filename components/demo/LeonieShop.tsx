'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useMemo, useRef, useState } from 'react'
import { ArrowRight, Cross } from '@/components/ui/icons'
import {
  ARRIVALS,
  CHEESES,
  HOURS,
  MILK_NAME,
  MOMENTS,
  PLATEAU_KG_PRICE,
  PLATEAU_PRIORITY,
  RECIPES,
  SLOTS,
  TASTING,
  TIPS,
  eur,
  kg,
  type Cheese,
  type Milk,
} from '@/lib/demo-leonie'

type Cart = Record<string, number>

const byId: Record<string, Cheese> = Object.fromEntries(CHEESES.map((c) => [c.id, c]))
const PORTIONS = [150, 250, 500]
const pad = (n: number) => String(n).padStart(2, '0')

const darkBtn = 'lv-btn lv-dark border-0 bg-[#2A2118] text-[#F7F1E6] font-semibold'

/** Description lisible d'une ligne du panier (clé « id|grammes », « id » ou « plateau|g|n »). */
function describe(key: string) {
  const [a, b, c] = key.split('|')
  if (a === 'plateau') {
    const g = Number(b)
    return { name: 'Plateau composé par Léonie', detail: `${c} fromages · ${kg(g)}`, unit: Math.round((g / 1000) * PLATEAU_KG_PRICE) }
  }
  const p = byId[a]
  if (b && p.kgPrice) {
    const w = Number(b)
    return { name: p.name, detail: `${w} g · ${eur(p.kgPrice)} le kg`, unit: (p.kgPrice * w) / 1000 }
  }
  return { name: p.name, detail: p.pieceLabel ?? '', unit: p.piece ?? 0 }
}

function Stepper({
  value,
  onLess,
  onMore,
  labelledBy,
  dark = false,
}: {
  value: number
  onLess: () => void
  onMore: () => void
  labelledBy: string
  dark?: boolean
}) {
  const btn = `lv-btn h-[52px] w-[52px] border-0 bg-transparent text-[22px] ${dark ? 'text-[#F7F1E6]' : 'text-[#2A2118]'}`
  return (
    <div
      role="group"
      aria-labelledby={labelledBy}
      className={`inline-flex items-center self-start rounded border ${dark ? 'border-[#6B5A48]' : 'border-[#2A2118] bg-[#F7F1E6]'}`}
    >
      <button type="button" onClick={onLess} aria-label="Un convive de moins" className={btn}>
        −
      </button>
      <span aria-live="polite" className="lv-serif min-w-[64px] text-center text-[28px] font-semibold">
        {value}
      </span>
      <button type="button" onClick={onMore} aria-label="Un convive de plus" className={btn}>
        +
      </button>
    </div>
  )
}

export function LeonieShop() {
  const [cart, setCart] = useState<Cart>({})
  const [bump, setBump] = useState(0)
  const [open, setOpen] = useState(false)
  const [ordered, setOrdered] = useState(false)
  const [slot, setSlot] = useState(0)

  const [milk, setMilk] = useState<'all' | Milk>('all')
  const [season, setSeason] = useState(false)
  const [portion, setPortion] = useState<Record<string, number>>({})

  const [rec, setRec] = useState(0)
  const [recP, setRecP] = useState(4)
  const [recDone, setRecDone] = useState<Record<string, boolean>>({})

  const [people, setPeople] = useState(6)
  const [moment, setMoment] = useState(0)

  const closeRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLButtonElement>(null)

  const changeCart = (next: Cart) => {
    setCart(next)
    setBump((b) => b + 1)
    setOrdered(false)
  }
  const addKey = (key: string, d: number) => {
    const next = { ...cart }
    const q = (next[key] ?? 0) + d
    if (q <= 0) delete next[key]
    else next[key] = q
    changeCart(next)
  }

  // Tiroir de commande : fermeture au clavier, focus et défilement bloqué.
  useEffect(() => {
    if (!open) return
    const opener = openerRef.current
    closeRef.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
      opener?.focus()
    }
  }, [open])

  const lines = Object.entries(cart).map(([key, q]) => ({ key, q, ...describe(key) }))
  const count = lines.reduce((s, l) => s + l.q, 0)
  const total = lines.reduce((s, l) => s + l.q * l.unit, 0)

  const visible = CHEESES.filter((p) => (milk === 'all' || p.milk === milk) && (!season || p.season))

  // Recette
  const recipe = RECIPES[rec]
  const built = useMemo(() => recipe.build(recP), [recipe, recP])
  const recLines = built.cheeses.map((c) => {
    const p = byId[c.id]
    const price = c.g && p.kgPrice ? (p.kgPrice * c.g) / 1000 : (p.piece ?? 0) * (c.pieces ?? 0)
    return {
      name: p.name,
      qty: c.g ? `${kg(c.g)} coupé pour vous` : `${c.pieces} × ${(p.pieceLabel ?? '').toLowerCase()}`,
      price,
    }
  })
  const recTotal = recLines.reduce((s, l) => s + l.price, 0)
  const recKey = `${rec}|${recP}`

  const addRecipe = () => {
    if (recDone[recKey]) {
      setOpen(true)
      return
    }
    const next = { ...cart }
    built.cheeses.forEach((c) => {
      const key = c.g ? `${c.id}|${c.g}` : c.id
      next[key] = (next[key] ?? 0) + (c.g ? 1 : c.pieces ?? 1)
    })
    setRecDone({ ...recDone, [recKey]: true })
    changeCart(next)
  }

  // Plateau
  const mo = MOMENTS[moment]
  const totalG = people * mo.g
  const n = people <= 4 ? 3 : people <= 8 ? 5 : 7
  const chosen = PLATEAU_PRIORITY.slice(0, n)
  const per = Math.round(totalG / n / 10) * 10
  const plateau = TASTING.filter((t) => chosen.includes(t.id))
  const plateauKey = `plateau|${totalG}|${n}`

  return (
    <div className="lv-root lv-paper relative min-w-0">
      {/* Bandeau démo */}
      <div className="bg-fd-dark text-white">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-[clamp(16px,4vw,40px)] py-2 text-[13px]">
          <span className="inline-flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-fd-gold" />
            Boutique démo fictive, conçue par Fromagerie Digitale. Aucune commande n&apos;est envoyée.
          </span>
          <Link href="/#projet-demo" className="font-semibold !text-fd-gold">
            Retour à Fromagerie Digitale
          </Link>
        </div>
      </div>

      {/* En-tête */}
      <header className="sticky top-0 z-30 border-b border-[#2A2118] bg-[rgba(247,241,230,0.95)] backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-5 px-[clamp(16px,4vw,40px)]">
          <a href="#haut" className="flex items-baseline gap-2.5 no-underline">
            <span className="lv-serif text-2xl font-semibold tracking-[-0.01em]">La Cave de Léonie</span>
            <span className="lv-mono hidden text-[11px] tracking-[0.06em] text-[#6B5A48] sm:inline">Fromagère affineuse</span>
          </a>
          <nav aria-label="Navigation de la boutique" className="hidden items-center gap-[26px] text-[15px] font-medium lg:flex">
            {[
              ['#comptoir', 'Le comptoir'],
              ['#recettes', 'Recettes'],
              ['#plateau', 'Plateaux'],
              ['#conseils', 'Conseils'],
              ['#infos', 'Venir à la cave'],
            ].map(([h, l]) => (
              <a key={h} href={h} className="no-underline hover:underline">
                {l}
              </a>
            ))}
          </nav>
          <button
            ref={openerRef}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`Ouvrir ma commande, ${count} ${count > 1 ? 'articles' : 'article'}`}
            className={`${darkBtn} inline-flex min-h-[44px] items-center gap-2.5 rounded px-4 text-sm`}
          >
            Ma commande
            <span
              key={bump}
              className={`lv-mono inline-flex h-6 min-w-[24px] items-center justify-center rounded-[3px] bg-[#E9C27A] px-1.5 text-[13px] font-semibold text-[#2A2118] ${bump ? 'lv-badge-pop' : ''}`}
            >
              {count}
            </span>
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="haut" className="mx-auto flex max-w-[1280px] flex-wrap gap-[clamp(32px,5vw,72px)] px-[clamp(16px,4vw,40px)] pb-[clamp(40px,5vw,64px)] pt-[clamp(40px,6vw,80px)]">
          <div className="lv-hero flex min-w-0 flex-[1_1_520px] flex-col gap-[22px]">
            <p className="lv-mono m-0 inline-flex items-center gap-2.5 text-[13px] text-[#6B5A48]">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-[#5E8C4A]" />
              Ouvert aujourd&apos;hui jusqu&apos;à 19 h 30
            </p>
            <h1 className="lv-serif m-0 text-[clamp(46px,6.6vw,92px)] font-semibold leading-[0.98] tracking-[-0.03em]">
              Vos fromages, coupés et prêts <em className="font-normal text-[#A6461F]">pour samedi.</em>
            </h1>
            <p className="m-0 max-w-[520px] text-[19px] leading-relaxed text-[#4E4032]">
              Choisissez à la coupe, ou partez d&apos;une recette : on calcule les quantités, on prépare, vous passez au comptoir.
            </p>
            <div className="mt-1.5 flex flex-wrap gap-3">
              <a href="#comptoir" className={`${darkBtn} inline-flex min-h-[54px] items-center gap-2.5 rounded px-6 text-[15px] no-underline !text-[#F7F1E6]`}>
                Commander mes fromages <ArrowRight />
              </a>
              <a href="#recettes" className="lv-btn lv-line inline-flex min-h-[54px] items-center rounded border border-[#B9A88E] px-[22px] text-[15px] font-medium no-underline">
                Cuisiner avec nos fromages
              </a>
            </div>
          </div>

          <figure className="relative m-0 mx-auto box-border min-w-0 max-w-[560px] flex-[1_1_420px] pb-16 pl-[52px] pr-3.5 pt-3.5">
            <span aria-hidden="true" className="lv-outline pointer-events-none absolute bottom-[78px] left-[66px] right-0 top-0 rounded-[999px_999px_6px_6px] border border-[#2A2118]" />
            <div className="lv-arch relative z-[1] aspect-[4/5] overflow-hidden rounded-[999px_999px_6px_6px] bg-fd-navy">
              <Image src="/images/demo/fromager.webp" alt="Mains d'un affineur tenant une meule sur une planche de cave" fill priority sizes="(max-width: 768px) 90vw, 500px" className="object-cover" />
              <span className="lv-mono absolute bottom-3.5 right-3.5 inline-flex items-center gap-2 rounded-[3px] bg-[rgba(247,241,230,0.92)] px-2.5 py-[7px] text-xs">
                <span aria-hidden="true" className="h-[7px] w-[7px] rounded-full bg-[#A6461F]" />
                Cave à 12 °C · 95 % d&apos;humidité
              </span>
            </div>
            <div className="lv-inset absolute bottom-0 left-0 z-[2] aspect-square w-[42%] overflow-hidden rounded-md border-8 border-[#F7F1E6] shadow-[0_18px_40px_rgba(42,33,24,0.2)]">
              <Image src="/images/demo/meules-diag.webp" alt="Rangée de meules sur une planche en bois" fill sizes="220px" className="object-cover" />
            </div>
            <figcaption className="lv-mono absolute bottom-[18px] right-3.5 max-w-[48%] text-right text-xs leading-normal text-[#6B5A48]">
              Retournement des meules,
              <br />
              mardi 7 h
            </figcaption>
          </figure>
        </section>

        {/* Ce mois-ci en cave */}
        <section aria-labelledby="arrivages" className="border-y border-[#2A2118]">
          <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] px-[clamp(16px,4vw,40px)]">
            <h2 id="arrivages" className="lv-mono m-0 flex items-center border-r border-[#D9CCB6] py-[22px] pr-5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#A6461F]">
              Ce mois-ci en cave
            </h2>
            {ARRIVALS.map((a) => (
              <div key={a.name} className="flex flex-col gap-1 border-r border-[#D9CCB6] px-5 py-[22px]">
                <span className="lv-serif text-xl font-semibold">{a.name}</span>
                <span className="text-sm leading-normal text-[#6B5A48]">{a.why}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Le comptoir */}
        <section id="comptoir" className="mx-auto flex max-w-[1280px] scroll-mt-20 flex-col gap-7 px-[clamp(16px,4vw,40px)] py-[clamp(56px,7vw,96px)]">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div className="flex max-w-[640px] flex-col gap-2.5">
              <h2 className="lv-serif m-0 text-[clamp(36px,4.6vw,60px)] font-semibold leading-none tracking-[-0.025em]">Le comptoir</h2>
              <p className="m-0 text-base leading-relaxed text-[#6B5A48]">
                Prix au kilo, coupé à la commande devant vous samedi. Choisissez la portion, on ajuste au gramme près.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div role="group" aria-label="Filtrer par lait" className="inline-flex overflow-hidden rounded border border-[#2A2118]">
                {(
                  [
                    ['all', 'Tous'],
                    ['V', 'Vache'],
                    ['C', 'Chèvre'],
                    ['B', 'Brebis'],
                  ] as const
                ).map(([id, label], i) => {
                  const on = id === milk
                  return (
                    <button
                      key={id}
                      type="button"
                      aria-pressed={on}
                      onClick={() => setMilk(id)}
                      className={`lv-btn min-h-[42px] border-0 px-4 text-sm font-semibold ${i < 3 ? 'border-r border-[#2A2118]' : ''} ${
                        on ? 'bg-[#2A2118] text-[#F7F1E6]' : 'bg-transparent text-[#2A2118]'
                      }`}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
              <button
                type="button"
                aria-pressed={season}
                onClick={() => setSeason((s) => !s)}
                className={`lv-btn lv-line inline-flex min-h-[44px] items-center gap-2 rounded border px-3.5 text-sm font-semibold text-[#2A2118] ${
                  season ? 'border-[#2A2118] bg-[#E9DCC4]' : 'border-[#B9A88E] bg-transparent'
                }`}
              >
                <span aria-hidden="true" className="inline-flex h-4 w-4 items-center justify-center rounded-[3px] border-[1.5px] border-[#2A2118] text-xs leading-none">
                  {season ? '✓' : ''}
                </span>
                De saison uniquement
              </button>
            </div>
          </div>

          <p className="lv-mono m-0 text-[13px] text-[#6B5A48]" aria-live="polite">
            {visible.length} {visible.length > 1 ? 'fromages' : 'fromage'} · V vache · C chèvre · B brebis
          </p>

          <div key={`${milk}-${season}`} className="lv-swap grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-[18px]">
            {visible.map((p) => {
              const byWeight = !!p.kgPrice
              const g = portion[p.id] ?? 250
              const key = byWeight ? `${p.id}|${g}` : p.id
              const inCart = cart[key] ?? 0
              const affShort = `Affinage ${p.affinage.split(',')[0].split(' dont')[0].split(' sur')[0].split(' en')[0]}`
              return (
                <article key={p.id} className="lv-tag flex flex-col rounded border border-[#D9CCB6] bg-[#FFFDF8]">
                  <div className="flex items-center justify-between gap-2 border-b border-dashed border-[#B9A88E] bg-[#E9DCC4] px-4 py-3">
                    <span className="inline-flex items-center gap-2">
                      <span className="lv-mono inline-flex h-[26px] w-[26px] items-center justify-center rounded-full border-[1.5px] border-[#2A2118] text-xs font-semibold" aria-label={MILK_NAME[p.milk]} role="img">
                        {p.milk}
                      </span>
                      <span className="lv-mono text-xs font-medium tracking-[0.04em]">{p.raw}</span>
                    </span>
                    <span className="inline-flex gap-1.5">
                      {p.aop && <span className="lv-mono rounded-[3px] bg-[#2A2118] px-[7px] py-[3px] text-[11px] font-semibold text-[#F7F1E6]">AOP</span>}
                      {p.season && <span className="lv-mono rounded-[3px] bg-[#A6461F] px-[7px] py-[3px] text-[11px] font-semibold text-white">Saison</span>}
                    </span>
                  </div>
                  <div className="px-2.5 pt-2.5">
                    <div className="lv-photo relative aspect-[4/3] overflow-hidden rounded-[3px] bg-[#EFE5D3]">
                      <Image src={p.photo} alt={`${p.name}, ${p.pate.toLowerCase()}`} fill sizes="(max-width: 700px) 100vw, 320px" className="object-cover" />
                      <span className="lv-mono absolute bottom-2 left-2 rounded-sm bg-[rgba(247,241,230,0.92)] px-[7px] py-1 text-[11px]">{affShort}</span>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-2 px-[18px] pb-4 pt-3.5">
                    <span className="lv-mono text-xs text-[#6B5A48]">
                      {p.region} · {p.pate}
                    </span>
                    <h3 className="lv-serif m-0 text-[25px] font-semibold leading-[1.1] tracking-[-0.01em]">{p.name}</h3>
                    <p className="m-0 text-sm leading-[1.55] text-[#4E4032]">{p.note}</p>
                    <dl className="lv-mono m-0 mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
                      <dt className="text-[#6B5A48]">Affinage</dt>
                      <dd className="m-0">{p.affinage}</dd>
                      <dt className="text-[#6B5A48]">Accord</dt>
                      <dd className="m-0">{p.accord}</dd>
                    </dl>
                  </div>
                  <div className="flex flex-col gap-3 border-t border-[#E6DBC8] px-[18px] pb-[18px] pt-3.5">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="lv-mono text-[13px] text-[#6B5A48]">{byWeight ? `${eur(p.kgPrice ?? 0)} le kg` : p.pieceLabel}</span>
                      <span className="lv-serif text-[26px] font-semibold">{byWeight ? eur(((p.kgPrice ?? 0) * g) / 1000) : eur(p.piece ?? 0)}</span>
                    </div>
                    {byWeight && (
                      <div role="group" aria-label={`Portion de ${p.name}`} className="grid grid-cols-3 gap-1.5">
                        {PORTIONS.map((w) => {
                          const on = w === g
                          return (
                            <button
                              key={w}
                              type="button"
                              aria-pressed={on}
                              onClick={() => setPortion({ ...portion, [p.id]: w })}
                              className={`lv-btn lv-mono min-h-[40px] rounded-[3px] border text-[13px] font-medium ${
                                on ? 'border-[#2A2118] bg-[#2A2118] text-[#F7F1E6]' : 'border-[#C9BBA2] bg-transparent text-[#2A2118]'
                              }`}
                            >
                              {w} g
                            </button>
                          )
                        })}
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => addKey(key, 1)}
                      aria-label={`Ajouter ${p.name}${byWeight ? `, ${g} grammes` : ''} à la commande`}
                      className={`${darkBtn} inline-flex min-h-[46px] items-center justify-center gap-2 rounded text-sm`}
                    >
                      {inCart ? `Ajouté · ${inCart} dans la commande` : byWeight ? `Ajouter ${g} g` : 'Ajouter à la commande'}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        {/* Recettes */}
        <section id="recettes" className="mx-auto flex max-w-[1280px] scroll-mt-20 flex-col gap-7 px-[clamp(16px,4vw,40px)] pb-[clamp(56px,7vw,96px)]">
          <div className="flex max-w-[680px] flex-col gap-2.5">
            <p className="lv-mono m-0 text-xs uppercase tracking-[0.08em] text-[#A6461F]">Nouveau · Cuisiner avec la cave</p>
            <h2 className="lv-serif m-0 text-[clamp(36px,4.6vw,60px)] font-semibold leading-none tracking-[-0.025em]">Qu&apos;est-ce qu&apos;on cuisine&nbsp;?</h2>
            <p className="m-0 text-base leading-relaxed text-[#6B5A48]">
              Choisissez une recette et le nombre de convives. On calcule les fromages au gramme près, vous les ajoutez à votre commande en un clic.
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-5">
            <div role="tablist" aria-label="Recettes" aria-orientation="vertical" className="flex min-w-0 flex-[1_1_300px] flex-col border-t border-[#2A2118]">
              {RECIPES.map((r, i) => {
                const on = i === rec
                return (
                  <button
                    key={r.name}
                    type="button"
                    role="tab"
                    id={`recette-${i}`}
                    aria-selected={on}
                    aria-controls="recette-panneau"
                    onClick={() => setRec(i)}
                    className={`lv-btn flex min-h-[76px] items-center gap-3.5 border-0 border-b border-[#D9CCB6] px-3.5 py-3 text-left ${
                      on ? 'bg-[#2A2118] text-[#F7F1E6]' : 'bg-transparent text-[#2A2118]'
                    }`}
                  >
                    <span className="lv-mono w-[22px] text-[13px] opacity-75">{pad(i + 1)}</span>
                    <span className="flex flex-1 flex-col gap-0.5">
                      <span className="lv-serif text-[21px] font-semibold leading-[1.15]">{r.name}</span>
                      <span className="lv-mono text-xs opacity-80">
                        {r.time} · {r.level}
                      </span>
                    </span>
                    <ArrowRight />
                  </button>
                )
              })}
            </div>

            <article
              id="recette-panneau"
              role="tabpanel"
              aria-labelledby={`recette-${rec}`}
              key={rec}
              className="lv-swap min-w-0 flex-[999_1_600px] rounded border border-[#D9CCB6] bg-[#FFFDF8]"
            >
              <div className="flex flex-wrap items-end justify-between gap-[18px] border-b border-dashed border-[#B9A88E] bg-[#E9DCC4] p-[clamp(22px,3vw,32px)]">
                <div className="flex flex-col gap-2">
                  <span className="lv-mono text-xs text-[#6B5A48]">
                    {recipe.time} · {recipe.level} · {built.yield}
                  </span>
                  <h3 className="lv-serif m-0 text-[clamp(30px,3.4vw,42px)] font-semibold leading-[1.05] tracking-[-0.02em]">{recipe.name}</h3>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="lv-mono text-xs text-[#6B5A48]" id="convives-recette">
                    Convives
                  </span>
                  <Stepper value={recP} labelledBy="convives-recette" onLess={() => setRecP((v) => Math.max(1, v - 1))} onMore={() => setRecP((v) => Math.min(24, v + 1))} />
                </div>
              </div>

              <div className="flex flex-wrap gap-[clamp(24px,3vw,40px)] p-[clamp(22px,3vw,32px)]">
                <div className="flex min-w-0 flex-[1_1_280px] flex-col gap-[18px]">
                  <div className="flex flex-col gap-2.5">
                    <p className="lv-mono m-0 text-xs uppercase tracking-[0.06em] text-[#A6461F]">Au comptoir</p>
                    {recLines.map((c) => (
                      <div key={c.name} className="flex items-baseline justify-between gap-3 rounded-[3px] border border-[#D9CCB6] bg-[#F7F1E6] px-3.5 py-3">
                        <span className="flex flex-col">
                          <span className="lv-serif text-[19px] font-semibold">{c.name}</span>
                          <span className="lv-mono text-xs text-[#6B5A48]">{c.qty}</span>
                        </span>
                        <span className="lv-mono text-sm font-semibold">{eur(c.price)}</span>
                      </div>
                    ))}
                    <button type="button" onClick={addRecipe} className={`${darkBtn} flex min-h-[54px] items-center justify-between gap-3 rounded px-[18px] text-[15px]`}>
                      <span>{recDone[recKey] ? 'Ajouté à ma commande' : 'Ajouter les fromages'}</span>
                      <span className="lv-mono text-sm">≈ {eur(recTotal)}</span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="lv-mono m-0 text-xs uppercase tracking-[0.06em] text-[#6B5A48]">Dans votre cuisine</p>
                    <ul className="m-0 flex list-none flex-col p-0">
                      {built.ingredients.map((ing) => (
                        <li key={ing} className="border-b border-[#EDE4D5] py-2 text-[15px] text-[#3E3226]">
                          {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex min-w-0 flex-[1.3_1_320px] flex-col gap-[18px]">
                  <p className="lv-mono m-0 text-xs uppercase tracking-[0.06em] text-[#6B5A48]">La recette</p>
                  <ol className="m-0 flex list-none flex-col gap-3.5 p-0">
                    {built.steps.map((t, i) => (
                      <li key={t} className="flex gap-3.5">
                        <span className="lv-mono inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#2A2118] text-xs font-semibold">{i + 1}</span>
                        <span className="text-[15px] leading-relaxed text-[#3E3226]">{t}</span>
                      </li>
                    ))}
                  </ol>
                  <blockquote className="m-0 mt-1 border-l-[3px] border-[#A6461F] bg-[#F5EEE2] px-5 py-[18px]">
                    <p className="lv-serif m-0 text-lg italic leading-normal">{built.tip}</p>
                    <footer className="lv-mono mt-2.5 text-xs text-[#6B5A48]">Le conseil de Léonie · À boire : {built.accord}</footer>
                  </blockquote>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Plateau */}
        <section id="plateau" className="scroll-mt-[72px] bg-[#2A2118] text-[#F7F1E6]">
          <div className="mx-auto flex max-w-[1280px] flex-wrap gap-[clamp(32px,5vw,72px)] px-[clamp(16px,4vw,40px)] py-[clamp(56px,7vw,96px)]">
            <div className="flex min-w-0 flex-[1_1_380px] flex-col gap-[22px]">
              <h2 className="lv-serif m-0 text-[clamp(36px,4.6vw,60px)] font-semibold leading-none tracking-[-0.025em]">Combien en prendre&nbsp;?</h2>
              <p className="m-0 text-base leading-relaxed text-[#D8CBB6]">
                La question qu&apos;on nous pose tous les samedis. Indiquez le nombre de convives et le moment, Léonie compose le plateau.
              </p>
              <div className="flex flex-col gap-2.5">
                <span className="lv-mono text-xs uppercase tracking-[0.06em] text-[#E9C27A]" id="convives-plateau">
                  Convives
                </span>
                <Stepper dark value={people} labelledBy="convives-plateau" onLess={() => setPeople((v) => Math.max(2, v - 1))} onMore={() => setPeople((v) => Math.min(30, v + 1))} />
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="lv-mono text-xs uppercase tracking-[0.06em] text-[#E9C27A]" id="moment">
                  Le moment
                </span>
                <div role="group" aria-labelledby="moment" className="flex flex-col gap-1.5">
                  {MOMENTS.map((m, i) => {
                    const on = i === moment
                    return (
                      <button
                        key={m.label}
                        type="button"
                        aria-pressed={on}
                        onClick={() => setMoment(i)}
                        className={`lv-btn flex min-h-[52px] items-center justify-between gap-3 rounded border px-4 text-left text-[15px] font-medium ${
                          on ? 'border-[#F7F1E6] bg-[#F7F1E6] text-[#2A2118]' : 'border-[#6B5A48] bg-transparent text-[#F7F1E6]'
                        }`}
                      >
                        {m.label}
                        <span className="lv-mono text-xs opacity-80">{m.rule}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>

            <div key={`${moment}`} aria-live="polite" className="lv-swap flex min-w-0 flex-[1_1_460px] flex-col gap-[18px] rounded bg-[#F7F1E6] p-[clamp(24px,3vw,36px)] text-[#2A2118]">
              <div className="flex flex-wrap gap-7 border-b border-dashed border-[#B9A88E] pb-[18px]">
                {[
                  ['Quantité totale', kg(totalG)],
                  ['Fromages', String(n)],
                  ['Estimation', `≈ ${Math.round((totalG / 1000) * PLATEAU_KG_PRICE)} €`],
                ].map(([k, v]) => (
                  <div key={k} className="flex flex-col">
                    <span className="lv-mono text-xs text-[#6B5A48]">{k}</span>
                    <span className="lv-serif text-[40px] font-semibold leading-[1.1]">{v}</span>
                  </div>
                ))}
              </div>
              <p className="lv-mono m-0 text-xs uppercase tracking-[0.06em] text-[#A6461F]">À déguster dans cet ordre, du plus doux au plus corsé</p>
              <ol className="m-0 flex list-none flex-col p-0">
                {plateau.map((t, i) => (
                  <li key={t.id} className="flex items-baseline gap-3.5 border-b border-[#E6DBC8] py-2.5">
                    <span className="lv-mono w-[22px] text-[13px] text-[#6B5A48]">{pad(i + 1)}</span>
                    <span className="flex flex-1 flex-col">
                      <span className="lv-serif text-[19px] font-semibold">{byId[t.id].name}</span>
                      <span className="text-[13px] text-[#6B5A48]">{t.family}</span>
                    </span>
                    <span className="lv-mono text-[13px]">≈ {per} g</span>
                  </li>
                ))}
              </ol>
              <p className="m-0 text-sm leading-[1.55] text-[#4E4032]">
                Un nombre impair de fromages, une famille de chaque : c&apos;est la règle de la maison. Le pain et les accords, on vous les conseille au comptoir.
              </p>
              <button type="button" onClick={() => !cart[plateauKey] && addKey(plateauKey, 1)} className={`${darkBtn} min-h-[52px] rounded text-[15px]`}>
                {cart[plateauKey] ? 'Plateau ajouté à la commande' : 'Ajouter ce plateau à ma commande'}
              </button>
            </div>
          </div>
        </section>

        {/* Conseils */}
        <section id="conseils" className="mx-auto flex max-w-[1280px] scroll-mt-20 flex-col gap-8 px-[clamp(16px,4vw,40px)] py-[clamp(56px,7vw,96px)]">
          <h2 className="lv-serif m-0 max-w-[760px] text-[clamp(36px,4.6vw,60px)] font-semibold leading-none tracking-[-0.025em]">
            Ce qu&apos;on vous dirait <em className="font-normal text-[#A6461F]">au comptoir.</em>
          </h2>
          <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(250px,1fr))] border-t border-[#2A2118] p-0">
            {TIPS.map((t) => (
              <li key={t.n} className="flex flex-col gap-2.5 border-b border-[#D9CCB6] py-6 pr-[22px]">
                <span className="lv-mono text-[13px] text-[#A6461F]">{t.n}</span>
                <h3 className="lv-serif m-0 text-[22px] font-semibold leading-tight">{t.title}</h3>
                <p className="m-0 text-[15px] leading-relaxed text-[#4E4032]">{t.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Venir à la cave */}
        <section id="infos" className="scroll-mt-[72px] border-t border-[#2A2118]">
          <div className="mx-auto flex max-w-[1280px] flex-wrap gap-[clamp(28px,4vw,64px)] px-[clamp(16px,4vw,40px)] py-[clamp(48px,6vw,80px)]">
            <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4">
              <h2 className="lv-serif m-0 text-[clamp(32px,3.8vw,48px)] font-semibold leading-none">Venir à la cave</h2>
              <p className="m-0 text-base leading-relaxed text-[#4E4032]">
                12 rue du Marché, à côté des halles.
                <br />
                Les commandes en ligne se retirent au comptoir de droite, sans faire la queue.
              </p>
              <div className="relative mt-1.5">
                <div className="lv-vault relative aspect-video overflow-hidden rounded-[999px_999px_6px_6px] bg-fd-navy">
                  <Image src="/images/home/mains-fromager.webp" alt="Mains posées sur une meule dans la cave voûtée" fill sizes="(max-width: 768px) 90vw, 560px" className="object-cover object-[55%_60%]" />
                </div>
                <span className="lv-mono absolute -bottom-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-[3px] bg-[#2A2118] px-3 py-[7px] text-xs text-[#F7F1E6]">
                  La cave voûtée, sous la boutique
                </span>
              </div>
            </div>
            <table className="lv-mono min-w-0 flex-[1_1_380px] border-collapse text-sm">
              <caption className="pb-3 text-left text-xs font-semibold uppercase tracking-[0.08em] text-[#A6461F]">Horaires de la boutique</caption>
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h.d} className="border-t border-[#D9CCB6]">
                    <th scope="row" className="py-[13px] text-left font-medium">
                      {h.d}
                    </th>
                    <td className="py-[13px] text-right text-[#4E4032]">{h.h}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      <footer className="bg-[#2A2118] text-[#D8CBB6]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-[clamp(16px,4vw,40px)] py-8 text-sm">
          <span className="lv-serif text-[19px] text-[#F7F1E6]">La Cave de Léonie</span>
          <span>
            Boutique fictive · Projet concept de{' '}
            <Link href="/" className="!text-[#E9C27A]">
              Fromagerie Digitale
            </Link>
          </span>
        </div>
      </footer>

      {/* Tiroir de commande */}
      {open && (
        <>
          <div className="lv-scrim fixed inset-0 z-40 bg-[rgba(42,33,24,0.45)]" onClick={() => setOpen(false)} aria-hidden="true" />
          <aside role="dialog" aria-modal="true" aria-label="Ma commande" className="lv-drawer fixed bottom-0 right-0 top-0 z-50 box-border flex w-[min(440px,100%)] flex-col bg-[#F7F1E6] shadow-[-20px_0_50px_rgba(42,33,24,0.2)]">
            <div className="flex items-center justify-between border-b border-[#2A2118] px-6 py-[18px]">
              <h2 className="lv-serif m-0 text-[26px] font-semibold">Ma commande</h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="lv-btn inline-flex h-11 w-11 items-center justify-center rounded border border-[#B9A88E] bg-transparent text-[#2A2118]"
              >
                <Cross strokeWidth={2.2} />
              </button>
            </div>

            {ordered ? (
              <div role="status" className="flex flex-1 flex-col justify-center gap-3.5 px-7 py-8">
                <span className="lv-mono text-[13px] text-[#A6461F]">Ticket n° 0427</span>
                <h3 className="lv-serif m-0 text-[34px] font-semibold leading-[1.05]">C&apos;est noté. On vous la prépare.</h3>
                <p className="m-0 text-base leading-relaxed text-[#4E4032]">
                  À retirer {SLOTS[slot].label.toLowerCase()}, au comptoir de droite. Les poids seront ajustés à la coupe, vous réglez sur place.
                </p>
                <p className="lv-mono m-0 border border-dashed border-[#B9A88E] px-3 py-2.5 text-xs text-[#6B5A48]">Démo : aucune commande n&apos;a été envoyée.</p>
                <button
                  type="button"
                  onClick={() => {
                    setOrdered(false)
                    setOpen(false)
                  }}
                  className={`${darkBtn} mt-1.5 min-h-[48px] self-start rounded px-[22px] text-[15px]`}
                >
                  Retour au comptoir
                </button>
              </div>
            ) : count === 0 ? (
              <div className="flex flex-1 flex-col justify-center gap-3 px-7 py-8">
                <p className="lv-serif m-0 text-[26px] font-semibold">Rien pour l&apos;instant.</p>
                <p className="m-0 text-[15px] leading-relaxed text-[#4E4032]">
                  Pas d&apos;idée ? Le Mont d&apos;Or vient d&apos;arriver, et il ne reste que quelques semaines de crottins.
                </p>
                <a href="#comptoir" onClick={() => setOpen(false)} className={`${darkBtn} inline-flex min-h-[48px] items-center self-start rounded px-[22px] text-[15px] no-underline !text-[#F7F1E6]`}>
                  Voir le comptoir
                </a>
              </div>
            ) : (
              <>
                <div className="flex flex-1 flex-col overflow-y-auto px-6 py-1">
                  {lines.map((l) => (
                    <div key={l.key} className="flex items-center gap-3 border-b border-dashed border-[#C9BBA2] py-4">
                      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <span className="lv-serif text-lg font-semibold">{l.name}</span>
                        <span className="lv-mono text-xs text-[#6B5A48]">{l.detail}</span>
                      </span>
                      <span className="inline-flex items-center rounded-[3px] border border-[#B9A88E]">
                        <button type="button" onClick={() => addKey(l.key, -1)} aria-label={`Un de moins : ${l.name}`} className="lv-btn h-8 w-8 border-0 bg-transparent text-base">
                          −
                        </button>
                        <span className="lv-mono min-w-[22px] text-center text-[13px] font-semibold">{l.q}</span>
                        <button type="button" onClick={() => addKey(l.key, 1)} aria-label={`Un de plus : ${l.name}`} className="lv-btn h-8 w-8 border-0 bg-transparent text-base">
                          +
                        </button>
                      </span>
                      <span className="lv-mono min-w-[70px] text-right text-sm font-semibold">{eur(l.q * l.unit)}</span>
                    </div>
                  ))}
                  <fieldset className="m-0 mb-2 mt-5 flex flex-col gap-1.5 border-0 p-0">
                    <legend className="lv-mono mb-2.5 text-xs font-semibold uppercase tracking-[0.06em] text-[#A6461F]">Retrait au comptoir</legend>
                    {SLOTS.map((s, i) => {
                      const on = i === slot
                      return (
                        <button
                          key={s.label}
                          type="button"
                          aria-pressed={on}
                          onClick={() => setSlot(i)}
                          className={`lv-btn flex min-h-[48px] items-center justify-between rounded-[3px] border px-3.5 text-left text-[15px] font-medium ${
                            on ? 'border-[#2A2118] bg-[#E9DCC4]' : 'border-[#C9BBA2] bg-transparent'
                          }`}
                        >
                          {s.label}
                          <span className="lv-mono text-xs text-[#6B5A48]">{s.note}</span>
                        </button>
                      )
                    })}
                  </fieldset>
                </div>
                <div className="flex flex-col gap-3 border-t border-[#2A2118] px-6 pb-6 pt-[18px]">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-[#4E4032]">Total estimé, ajusté à la coupe</span>
                    <span className="lv-serif text-[30px] font-semibold">≈ {eur(total)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setOrdered(true)
                      setCart({})
                      setRecDone({})
                    }}
                    className={`${darkBtn} min-h-[54px] rounded text-base`}
                  >
                    Réserver pour {SLOTS[slot].short}
                  </button>
                  <span className="lv-mono text-xs text-[#6B5A48]">Paiement au retrait. Rien n&apos;est débité en ligne.</span>
                </div>
              </>
            )}
          </aside>
        </>
      )}
    </div>
  )
}
