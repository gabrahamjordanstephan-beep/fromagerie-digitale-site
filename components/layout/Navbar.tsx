'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const links = [
  { href: '/services',  label: 'Services' },
  { href: '/a-propos',  label: 'À propos' },
  { href: '/contact',   label: 'Contact' },
]

export function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'border-b border-white/8 bg-fd-navy/90 backdrop-blur-md' : ''
    }`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <img src="/logo.svg" alt="Fromagerie Digitale" className="h-8 w-auto" />
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-white/55 hover:text-white text-sm font-medium transition-colors duration-200 tracking-wide"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="group flex items-center gap-1.5 text-fd-gold text-sm font-semibold border-b border-fd-gold/40 pb-px hover:border-fd-gold transition-colors duration-200"
          >
            Parlons-en
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </nav>

        {/* Mobile */}
        <button className="md:hidden text-white/70 hover:text-white transition-colors" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-fd-navy border-t border-white/8 px-6 py-8 flex flex-col gap-6">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="text-white/70 text-lg font-medium" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="text-fd-gold font-semibold text-lg text-left">
            Parlons-en →
          </Link>
        </div>
      )}
    </header>
  )
}
