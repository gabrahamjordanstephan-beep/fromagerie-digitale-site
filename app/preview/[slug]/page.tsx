import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import fs from 'node:fs/promises'
import path from 'node:path'
import './preview.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-inter',
})

type PreviewProduct = {
  num: string
  category: string
  name: string
  nameItalic: string
  badge: string
  description: string
  image: string
  imageAlt: string
  meta: { k: string; v: string }[]
  price: string
  unit: string
  reverse?: boolean
}

type PreviewData = {
  slug: string
  name: string
  tagline: string
  metaTitle: string
  metaDescription: string
  hero: {
    eyebrow: string
    titleLines: string[]
    titleItalic: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
  }
  marquee: string[]
  products: PreviewProduct[]
  about: {
    eyebrow: string
    title: string
    titleItalic: string
    paragraphs: string[]
    signature: string
    signatureRole: string
    backgroundImage: string
  }
  values: {
    eyebrow: string
    title: string
    titleItalic: string
    items: { icon: string; title: string; description: string }[]
  }
  coming: {
    marquee: string
    eyebrow: string
    title: string
    titleItalic: string
    description: string
    cta: string
    photos: { image: string; alt: string; label: string }[]
  }
  gifts: {
    eyebrow: string
    title: string
    titleItalic: string
    items: { num: string; title: string; titleItalic: string; description: string; link: string }[]
  }
  fd: {
    tag: string
    titlePrefix: string
    titleItalic: string
    description: string
    cta: string
    ctaUrl: string
    ctaMeta: string
  }
  footer: {
    brand: string
    intro: string
    address: string[]
    columns: { title: string; links: string[] }[]
    contact: { email: string; phone: string; hours: string }
  }
}

const PREVIEWS_DIR = path.join(process.cwd(), 'data', 'previews')

async function loadPreview(slug: string): Promise<PreviewData | null> {
  try {
    const file = path.join(PREVIEWS_DIR, `${slug}.json`)
    const raw = await fs.readFile(file, 'utf8')
    return JSON.parse(raw) as PreviewData
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  try {
    const files = await fs.readdir(PREVIEWS_DIR)
    return files
      .filter(f => f.endsWith('.json'))
      .map(f => ({ slug: f.replace(/\.json$/, '') }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await loadPreview(params.slug)
  if (!data) return { title: 'Aperçu introuvable', robots: { index: false, follow: false } }
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    robots: { index: false, follow: false },
    alternates: { canonical: `https://fromageriedigitale.com/preview/${data.slug}` },
  }
}

function ValueIcon({ name }: { name: string }) {
  switch (name) {
    case 'diamond':
      return (
        <svg className="icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <circle cx="22" cy="22" r="20" stroke="currentColor" strokeWidth="1.2" />
          <path d="M22 8 L28 20 L22 32 L16 20 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
        </svg>
      )
    case 'house':
      return (
        <svg className="icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <path d="M6 22 L22 8 L38 22 L38 36 L6 36 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <line x1="22" y1="8" x2="22" y2="36" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    case 'box':
      return (
        <svg className="icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <rect x="8" y="14" width="28" height="20" rx="1" stroke="currentColor" strokeWidth="1.2" />
          <path d="M8 20 L36 20" stroke="currentColor" strokeWidth="1" />
          <path d="M20 27 L24 27" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
    case 'aop':
      return (
        <svg className="icon" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <path d="M22 6 L38 14 L38 30 L22 38 L6 30 L6 14 Z" stroke="currentColor" strokeWidth="1.2" fill="none" />
          <text x="22" y="26" textAnchor="middle" fill="currentColor" fontSize="9" fontFamily="serif" fontStyle="italic">AOP</text>
        </svg>
      )
    default:
      return null
  }
}

export default async function PreviewPage({ params }: { params: { slug: string } }) {
  const data = await loadPreview(params.slug)
  if (!data) notFound()

  return (
    <div className={`fd-preview-root ${cormorant.variable} ${inter.variable}`}>
      {/* MARQUEE */}
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...data.marquee, ...data.marquee].map((item, i) => (
            <span key={i} style={{ marginRight: 44 }}>
              {item}
              <em style={{ margin: '0 10px' }}>◆</em>
            </span>
          ))}
        </div>
      </div>

      {/* NAV */}
      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-links">
            <a>Fromages</a>
            <a>Coffrets</a>
            <a>Notre histoire</a>
            <a>Journal</a>
          </div>
          <div className="logo-wrap"><div className="logo">{data.name}</div></div>
          <div className="nav-right">
            <div className="lang"><a className="on">FR</a><a>EN</a></div>
            <a>Compte</a>
            <a>Panier · 0</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-eyebrow">— {data.hero.eyebrow} —</div>
          <h1>
            {data.hero.titleLines.map((line, i) => (
              <span key={i} className="lg">{line}</span>
            ))}
            <em>{data.hero.titleItalic}</em>
          </h1>
          <p className="hero-sub">{data.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="btn btn-arrow">{data.hero.ctaPrimary}</a>
            <a className="link">{data.hero.ctaSecondary}</a>
          </div>
        </div>
      </section>

      {/* ORNAMENT */}
      <div className="ornament container">
        <svg className="wheel-icon" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <circle cx="30" cy="30" r="28" stroke="currentColor" strokeWidth="1" />
          <circle cx="30" cy="30" r="20" stroke="currentColor" strokeWidth=".8" strokeDasharray="2 3" />
          <circle cx="30" cy="30" r="3" fill="currentColor" />
          <line x1="30" y1="4" x2="30" y2="12" stroke="currentColor" strokeWidth="1" />
          <line x1="30" y1="48" x2="30" y2="56" stroke="currentColor" strokeWidth="1" />
          <line x1="4" y1="30" x2="12" y2="30" stroke="currentColor" strokeWidth="1" />
          <line x1="48" y1="30" x2="56" y2="30" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* PRODUCTS */}
      {data.products.map((p, i) => (
        <section key={i} className={`prod${p.reverse ? ' reverse' : ''}`}>
          <div className="container prod-inner">
            <div className="prod-visual">
              <span className="prod-badge">{p.badge}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.imageAlt} loading="lazy" />
            </div>
            <div className="prod-text">
              <div className="prod-num">— {p.num} · {p.category}</div>
              <h2 className="prod-title">{p.name} <em>{p.nameItalic}</em></h2>
              <p className="prod-desc">{p.description}</p>
              <div className="prod-meta">
                {p.meta.map((m, j) => (
                  <div key={j}>
                    <span className="k">{m.k}</span>
                    <span className="v">{m.v}</span>
                  </div>
                ))}
              </div>
              <div className="prod-price">
                <span className="p">{p.price}</span>
                <span className="u">{p.unit}</span>
              </div>
              <a className="btn">Ajouter au panier</a>
            </div>
          </div>
        </section>
      ))}

      {/* ABOUT */}
      <section className="about">
        <div className="about-bg">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={data.about.backgroundImage} alt="" loading="lazy" />
        </div>
        <div className="container about-inner">
          <div className="about-eyebrow">— {data.about.eyebrow} —</div>
          <h2>{data.about.title} <em>{data.about.titleItalic}</em></h2>
          {data.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          <div className="about-sig">
            {data.about.signature}
            <small>{data.about.signatureRole}</small>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="values">
        <div className="container">
          <div className="values-head">
            <div className="eyebrow">— {data.values.eyebrow} —</div>
            <h3>{data.values.title} <em>{data.values.titleItalic}</em></h3>
          </div>
          <div className="values-grid">
            {data.values.items.map((v, i) => (
              <div key={i} className="value">
                <ValueIcon name={v.icon} />
                <h4>{v.title}</h4>
                <p>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="coming">
        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>{data.coming.marquee}</span>
            <span>{data.coming.marquee}</span>
          </div>
        </div>
        <div className="coming-body">
          <div className="container">
            <div className="eyebrow">— {data.coming.eyebrow} —</div>
            <h3>{data.coming.title} <em>{data.coming.titleItalic}</em></h3>
            <p>{data.coming.description}</p>
            <a className="btn btn-outline btn-arrow">{data.coming.cta}</a>
            <div className="coming-photos">
              {data.coming.photos.map((ph, i) => (
                <div key={i} className="slot">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={ph.image} alt={ph.alt} loading="lazy" />
                  <span className="lbl">{ph.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GIFTS */}
      <section className="gifts">
        <div className="container">
          <div className="gifts-head">
            <div className="eyebrow">— {data.gifts.eyebrow} —</div>
            <h3>{data.gifts.title} <em>{data.gifts.titleItalic}</em></h3>
          </div>
          <div className="gifts-grid">
            {data.gifts.items.map((g, i) => (
              <div key={i} className="gift">
                <div className="num">— {g.num}</div>
                <h4>{g.title} <em>{g.titleItalic}</em></h4>
                <p>{g.description}</p>
                <a className="link">{g.link}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FD CONVERSION */}
      <section className="fd-cta">
        <div className="container">
          <div className="fd-tag">— {data.fd.tag} —</div>
          <h3>{data.fd.titlePrefix} <em>{data.fd.titleItalic}</em></h3>
          <p className="desc">{data.fd.description}</p>
          <div className="fd-actions">
            <a className="btn btn-arrow" href={data.fd.ctaUrl} target="_blank" rel="noopener noreferrer">{data.fd.cta}</a>
            <span className="meta">{data.fd.ctaMeta}</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pv-footer">
        <div className="container">
          <div className="foot-grid">
            <div className="foot-col">
              <div className="foot-brand">{data.footer.brand}</div>
              <p>{data.footer.intro}</p>
              <p className="foot-address">{data.footer.address.join('\n')}</p>
            </div>
            {data.footer.columns.map((c, i) => (
              <div key={i} className="foot-col">
                <h5>{c.title}</h5>
                {c.links.map((l, j) => <a key={j}>{l}</a>)}
              </div>
            ))}
            <div className="foot-col">
              <h5>Contact</h5>
              <a>{data.footer.contact.email}</a>
              <a>{data.footer.contact.phone}</a>
              <p className="foot-hours">{data.footer.contact.hours}</p>
            </div>
          </div>
          <div className="foot-bottom">
            <div>© 2026 {data.footer.brand} · Tous droits réservés</div>
            <div>Aperçu conçu par Fromagerie Digitale · fromageriedigitale.com</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
