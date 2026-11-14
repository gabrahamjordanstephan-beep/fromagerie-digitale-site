import Link from 'next/link'
import { JsonLd } from '@/components/seo/JsonLd'
import { SITE_URL } from '@/lib/site'

type Crumb = { href?: string; label: string }

/** Fil d'Ariane visible, accompagné de ses données structurées. */
export function Breadcrumb({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.label,
            ...(c.href ? { item: `${SITE_URL}${c.href === '/' ? '' : c.href}` } : {}),
          })),
        }}
      />
      <nav aria-label="Fil d'Ariane" className={`text-[13px] ${dark ? 'text-fd-mist' : 'text-fd-slate'}`}>
        <ol className="m-0 flex list-none flex-wrap items-center gap-x-1.5 p-0">
          {items.map((c, i) => (
            <li key={c.label} className="flex min-h-[32px] items-center gap-1.5">
              {i > 0 && <span aria-hidden="true">/</span>}
              {c.href ? (
                <Link href={c.href} className={`inline-flex min-h-[32px] items-center ${dark ? 'text-fd-mist hover:text-white' : 'text-fd-slate hover:text-fd-dark'}`}>
                  {c.label}
                </Link>
              ) : (
                <span aria-current="page" className={dark ? 'text-white' : 'text-fd-dark'}>
                  {c.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
