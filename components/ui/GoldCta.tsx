import Link from 'next/link'
import { ArrowRight } from './icons'

/** Bandeau doré d'appel à l'action en bas de page. */
export function GoldCta({
  title,
  text,
  href = '/contact',
  label = 'Réserver mon diagnostic',
}: {
  title: string
  text?: string
  href?: string
  label?: string
}) {
  return (
    <section className="bg-fd-gold text-fd-dark">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-7 px-gutter py-[clamp(56px,7vw,96px)]">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-3">
          <h2 className="fd-reveal m-0 text-[clamp(32px,4.6vw,56px)] font-bold leading-[1.05] tracking-[-0.02em]">{title}</h2>
          {text && <p className="m-0 text-lg leading-relaxed text-[#3A3220]">{text}</p>}
        </div>
        <Link
          href={href}
          className="fd-btn inline-flex min-h-[58px] items-center gap-2.5 rounded-full bg-fd-dark px-7 text-base font-semibold text-white no-underline"
        >
          {label} <ArrowRight />
        </Link>
      </div>
    </section>
  )
}
