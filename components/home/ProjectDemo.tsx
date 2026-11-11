'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Star } from '@/components/ui/icons'
import { DEMO_CHOICES } from '@/lib/home-data'

function BeforeMockup() {
  return (
    <div className="flex h-full flex-col items-center gap-[4%] bg-[#EDEDED] px-[6%] py-[5%] text-center font-serif text-[#333]">
      <span className="text-[clamp(14px,2.2vw,26px)] italic text-[#7A4B2A]">La Cave de Léonie</span>
      <span className="text-[clamp(9px,1vw,12px)] text-[#0000EE] underline">Accueil | Nos produits | Qui sommes nous | Contact | Liens</span>
      <span className="flex w-[70%] flex-1 items-center justify-center bg-[#CFCFCF] font-sans text-[clamp(9px,1vw,12px)] text-[#777]">Photo floue de la vitrine</span>
      <span className="text-[clamp(11px,1.4vw,16px)] font-bold">Bienvenue sur notre site internet !</span>
      <span className="max-w-[80%] text-[clamp(8px,0.95vw,11px)] leading-normal text-[#555]">
        Notre fromagerie vous propose un large choix de fromages de qualité. N&apos;hésitez pas à venir nous rendre visite. Horaires : voir la page Contact.
      </span>
      <span className="font-sans text-[clamp(7px,0.8vw,10px)] text-[#999]">Dernière mise à jour : 2017</span>
    </div>
  )
}

function AfterMockup() {
  const tiles = [
    ['Arrivage', 'Comté 24 mois'],
    ['Fermier', 'Saint-Nectaire'],
    ['De saison', "Mont d'Or"],
  ]
  return (
    <div className="flex h-full flex-col bg-[#FBF7F0] text-[#2A2118]">
      <div className="flex items-center justify-between border-b border-[#E8DFD0] px-[5%] py-[2.4%]">
        <span className="text-[clamp(11px,1.5vw,18px)] font-bold tracking-[-0.02em]">La Cave de Léonie</span>
        <span className="flex items-center gap-[clamp(8px,1.6vw,20px)] text-[clamp(8px,0.9vw,11px)] text-[#5B4B3A]">
          Fromages<span>Producteurs</span>
          <span className="rounded-full bg-[#2A2118] px-2.5 py-1 font-semibold text-[#FBF7F0]">Commander</span>
        </span>
      </div>
      <div className="flex flex-1 gap-[4%] px-[5%] pb-[3%] pt-[4%]">
        <div className="flex flex-[1.15] flex-col justify-center gap-[6%]">
          <span className="text-[clamp(8px,0.85vw,11px)] font-semibold uppercase tracking-[0.14em] text-[#9A6B2F]">Fromagerie · Affinage maison</span>
          <span className="text-[clamp(16px,2.9vw,36px)] font-bold leading-[1.02] tracking-[-0.03em]">Affinés dans notre cave, à deux pas du marché.</span>
          <span className="text-[clamp(8px,0.95vw,12px)] leading-normal text-[#5B4B3A]">Commandez avant jeudi, retirez samedi matin.</span>
          <span className="flex flex-wrap gap-1.5">
            <span className="rounded-full bg-[#2A2118] px-3 py-1.5 text-[clamp(8px,0.9vw,11px)] font-semibold text-[#FBF7F0]">Commander pour samedi</span>
            <span className="rounded-full border border-[#CDBFA8] px-3 py-1.5 text-[clamp(8px,0.9vw,11px)] font-semibold">Ouvert · Ferme à 19 h 30</span>
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-[10px] bg-fd-navy">
          <Image src="/images/home/meules-cave.webp" alt="" fill sizes="300px" className="object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[2%] px-[5%] pb-[4%]">
        {tiles.map(([k, v]) => (
          <span key={v} className="flex flex-col gap-1 rounded-lg border border-[#E8DFD0] bg-white px-[8%] py-[6%]">
            <span className="text-[clamp(7px,0.75vw,10px)] font-semibold text-[#9A6B2F]">{k}</span>
            <span className="text-[clamp(8px,1vw,13px)] font-bold">{v}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export function ProjectDemo() {
  const [before, setBefore] = useState(false)

  const seg = (on: boolean) =>
    `fd-seg min-h-[40px] rounded-full border-0 px-[18px] text-sm font-semibold ${on ? 'bg-fd-dark text-white' : 'bg-transparent text-fd-dark'}`

  return (
    <section id="projet-demo" className="bg-white">
      <div className="mx-auto flex max-w-page flex-col gap-10 px-gutter py-section">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="flex min-w-0 flex-[1_1_560px] flex-col gap-3">
            <p className="fd-eyebrow text-fd-slate">Projet concept</p>
            <h2 className="fd-h2 fd-reveal text-fd-navy">Ce que nous ferions pour votre fromagerie.</h2>
          </div>
          <p className="m-0 flex-[0_1_400px] text-base leading-relaxed text-fd-slate">
            Nos clients préfèrent rester discrets. Pour vous montrer notre façon de travailler, nous avons imaginé une fromagerie de quartier et refait son site de A à Z.
          </p>
        </div>

        <article className="fd-reveal flex flex-wrap gap-[clamp(28px,4vw,56px)] rounded-3xl bg-fd-cream p-[clamp(20px,3vw,40px)]">
          <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-4">
            <div role="group" aria-label="Comparer la maquette" className="inline-flex self-start rounded-full border border-fd-line bg-white p-1">
              <button type="button" aria-pressed={before} onClick={() => setBefore(true)} className={seg(before)}>Avant</button>
              <button type="button" aria-pressed={!before} onClick={() => setBefore(false)} className={seg(!before)}>Après</button>
            </div>

            <div className="fd-visit relative">
              <div
                role="img"
                aria-label={
                  before
                    ? 'Maquette du site avant refonte : page grise, texte de bienvenue générique, horaires cachés dans la page Contact'
                    : 'Maquette du site après refonte : titre clair, bouton de commande pour samedi, horaires visibles et arrivages de la semaine'
                }
                className="fd-visit-frame overflow-hidden rounded-[14px] border border-fd-line bg-white shadow-[0_24px_60px_rgba(28,44,55,0.18)]"
              >
                <div className="flex h-9 items-center gap-3 border-b border-fd-sand bg-[#ECE6DB] px-3.5">
                  <span className="inline-flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span key={i} className="h-2.5 w-2.5 rounded-full bg-[#D9CDB6]" />
                    ))}
                  </span>
                  <span className="mx-auto flex h-[22px] max-w-[320px] flex-1 items-center justify-center rounded-full bg-white text-[11px] text-fd-slate">
                    cave-de-leonie.exemple
                  </span>
                </div>
                <div key={before ? 'avant' : 'apres'} className="fd-swap-a relative aspect-[16/10] overflow-hidden">
                  {before ? <BeforeMockup /> : <AfterMockup />}
                </div>
              </div>
              {!before && (
                <Link
                  href="/demo/la-cave-de-leonie"
                  aria-label="Visiter la boutique démo de la Cave de Léonie"
                  className="absolute inset-0 z-[2] flex items-end justify-center rounded-[14px] pb-5 no-underline"
                >
                  <span className="fd-visit-pill inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-fd-dark py-0 pl-5 pr-2 text-[15px] font-semibold text-white shadow-[0_12px_28px_rgba(28,44,55,0.35)]">
                    Visiter la boutique démo
                    <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-full bg-fd-gold">
                      <ArrowUpRight size={16} stroke="#1C2C37" strokeWidth={2.2} />
                    </span>
                  </span>
                </Link>
              )}
            </div>
            <p aria-live="polite" className="m-0 text-sm leading-normal text-fd-slate">
              {before
                ? 'Avant : un site générique, les horaires cachés, aucune raison de commander.'
                : 'Après : on sait en trois secondes où l’on est, si c’est ouvert, et comment commander. Cliquez pour visiter la boutique.'}
            </p>
          </div>

          <div className="flex min-w-0 flex-[1_1_340px] flex-col gap-5">
            <span className="inline-flex min-h-[30px] items-center gap-2 self-start rounded-full bg-fd-dark px-3 text-xs font-semibold text-fd-gold">
              <Star size={14} strokeWidth={2.2} />
              Projet concept · Fromagerie fictive
            </span>
            <div className="flex flex-col gap-1.5">
              <h3 className="m-0 text-[clamp(26px,3vw,34px)] font-bold leading-[1.1] tracking-[-0.02em] text-fd-dark">La Cave de Léonie</h3>
              <p className="m-0 text-sm text-fd-slate">Site vitrine · Retrait en boutique · Fiche Google</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-fd-slate">Le point de départ imaginé</p>
              <p className="m-0 text-[15px] leading-relaxed">
                Une fromagerie de quartier réputée, mais un site daté que personne ne consulte. Les clients appellent pour connaître les horaires, et les commandes du week end se prennent sur un carnet.
              </p>
            </div>
            <div className="flex flex-col gap-2.5">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.16em] text-fd-slate">Nos choix</p>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {DEMO_CHOICES.map((c) => (
                  <li key={c.t} className="flex gap-3 text-[15px] leading-normal">
                    <Check stroke="#314C5C" strokeWidth={2.4} className="mt-[3px] shrink-0" />
                    <span>
                      <strong className="font-semibold">{c.t}</strong> {c.d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="#contact"
              className="fd-btn mt-auto inline-flex min-h-[52px] items-center gap-2.5 self-start rounded-full bg-fd-dark px-6 text-[15px] font-semibold text-white no-underline"
            >
              Le même pour votre fromagerie <ArrowRight stroke="#F4BD45" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
