import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from '@/components/ui/icons'
import { PILLARS } from '@/lib/home-data'

export function Hero() {
  return (
    <section id="top" className="bg-fd-cream text-fd-dark">
      <div className="mx-auto flex max-w-wide flex-col gap-[clamp(36px,5vw,64px)] px-gutter pt-[clamp(48px,7vw,96px)]">
        <p className="fd-fade m-0 flex flex-wrap items-center justify-between gap-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-fd-slate">
          <span>Agence digitale des fromageries artisanales</span>
          <span className="font-medium normal-case tracking-normal">Basés à Paris</span>
        </p>

        <h1 className="m-0 text-[clamp(46px,8.6vw,132px)] font-bold leading-[0.98] tracking-[-0.045em]">
          <span className="fd-line">L&apos;agence qui parle</span>
          <span className="fd-line">
            <span className="fd-pill bg-fd-navy">
              <Image
                src="/images/home/mains-fromager.webp"
                alt="Mains d'un fromager posées sur une meule en cave d'affinage"
                fill
                priority
                sizes="(max-width: 768px) 110px, 300px"
                className="object-cover object-[55%_50%]"
              />
            </span>
            <span className="fd-mark">le langage</span> des
          </span>
          <span className="fd-line">
            fromagers
            <span className="fd-pill fd-pill-wide bg-[#D9CDB6]">
              <Image
                src="/images/home/meules-cave.webp"
                alt="Rangée de meules de fromage sur une planche en cave"
                fill
                priority
                sizes="(max-width: 768px) 140px, 380px"
                className="object-cover"
              />
            </span>
            .
          </span>
        </h1>

        <div className="fd-fade flex flex-wrap items-end justify-between gap-7 pb-[clamp(36px,5vw,56px)] [animation-delay:700ms]">
          <p className="m-0 max-w-[460px] flex-[1_1_380px] text-[19px] leading-relaxed text-fd-body">
            Plus de clients en boutique, plus de commandes. Une présence en ligne qui vous ressemble, sans trahir le terroir.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="fd-btn inline-flex min-h-[60px] items-center gap-3 rounded-full bg-fd-dark py-0 pl-7 pr-2.5 text-base font-semibold text-white no-underline"
            >
              Réserver mon diagnostic offert
              <span className="inline-flex h-[42px] w-[42px] items-center justify-center rounded-full bg-fd-gold">
                <ArrowUpRight stroke="#1C2C37" strokeWidth={2.2} />
              </span>
            </Link>
            <span className="text-sm text-fd-slate">Offert · Sans engagement</span>
          </div>
        </div>
      </div>

      <nav aria-label="Nos leviers" className="fd-fade border-y border-fd-sand [animation-delay:850ms]">
        <div className="mx-auto grid max-w-wide grid-cols-[repeat(auto-fit,minmax(220px,1fr))] px-gutter">
          {PILLARS.map((l) => (
            <Link
              key={l.id}
              href={`/services#${l.id}`}
              className="fd-lever flex items-start justify-between gap-3 border-r border-fd-sand px-6 py-7 text-fd-dark no-underline"
            >
              <span className="flex flex-col gap-1.5">
                <span className="text-[13px] font-semibold text-fd-slate">{l.num}</span>
                <span className="text-[22px] font-bold tracking-[-0.01em]">{l.label}</span>
                <span className="text-sm leading-normal text-fd-slate">{l.line}</span>
              </span>
              <ArrowUpRight size={20} stroke="#314C5C" className="mt-1 shrink-0" />
            </Link>
          ))}
        </div>
      </nav>
    </section>
  )
}
