import Link from 'next/link'
import { Linkedin } from 'lucide-react'
import { services as servicesData } from '@/lib/services-data'

const services = servicesData.map(s => ({
  label: s.name,
  href:  `/services/${s.slug}`,
}))

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-fd-dark text-white px-6 lg:px-16 pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto">

        {/* Top — logo + nav */}
        <div className="border-t border-white/8 pt-14 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12">

          {/* Brand */}
          <div className="max-w-xs">
            <img src="/logo.svg" alt="Fromagerie Digitale" className="h-10 w-auto mb-4" />
            <p className="text-white/35 text-sm leading-relaxed mt-2">
              L&apos;agence qui parle le langage des fromagers. On accompagne les artisans dans leur développement digital.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-white/25 text-[11px] tracking-[0.28em] uppercase mb-6">Services</p>
            <ul className="space-y-3">
              {services.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-white/50 hover:text-white text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agence */}
          <div>
            <p className="text-white/25 text-[11px] tracking-[0.28em] uppercase mb-6">Agence</p>
            <div className="space-y-3">
              <Link href="/a-propos" className="block text-white/50 hover:text-white text-sm transition-colors duration-200">
                À propos
              </Link>
              <Link href="/blog" className="block text-white/50 hover:text-white text-sm transition-colors duration-200">
                Blog
              </Link>
              <Link href="/contact" className="block text-white/50 hover:text-fd-gold text-sm transition-colors duration-200">
                Formulaire de contact
              </Link>
              <a href="mailto:contact@fromageriedigitale.com" className="block text-white/50 hover:text-fd-gold text-sm transition-colors duration-200">
                contact@fromageriedigitale.com
              </a>
              <a
                href="https://www.linkedin.com/company/fromageriedigitale/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#0A66C2] text-sm transition-colors duration-200"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <p className="text-white/30 text-sm">Paris, Île-de-France</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">© {year} Fromagerie Digitale</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-white/20 hover:text-white/50 text-xs transition-colors">Mentions légales</Link>
            <Link href="/politique-de-confidentialite" className="text-white/20 hover:text-white/50 text-xs transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
