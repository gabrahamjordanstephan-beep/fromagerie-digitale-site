'use client'
import { useState } from 'react'
import { Send, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

// Inline SVGs to avoid lucide-react v0.400 ESM barrel issue
function IconCheck({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

function IconAlert({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  )
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [error,  setError]  = useState('')
  const [form,   setForm]   = useState({ name: '', email: '', phone: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setError('Merci de remplir tous les champs obligatoires.')
      return
    }
    if (form.message.length < 20) {
      setError('Votre message doit faire au moins 20 caractères.')
      return
    }
    setError('')
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch {
      setStatus('error')
      setError('Une erreur est survenue. Veuillez réessayer ou nous écrire directement.')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <IconCheck size={32} className="text-green-600" />
        </div>
        <h3 className="font-bold text-fd-navy text-xl mb-2">Message envoyé !</h3>
        <p className="text-fd-navy/60 text-sm">Nous vous répondons dans les 24h.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-fd-blue text-sm hover:text-fd-gold transition-colors">
          Envoyer un autre message
        </button>
      </div>
    )
  }

  const inputClass = "w-full border border-gray-200 rounded-fd px-4 py-3 text-fd-navy text-sm placeholder:text-gray-300 focus:outline-none focus:border-fd-blue focus:ring-2 focus:ring-fd-blue/10 transition-all duration-200"

  return (
    <div className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-fd-navy font-medium text-sm mb-1.5">
          Nom complet <span className="text-fd-gold">*</span>
        </label>
        <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
          placeholder="Jean Dupont" className={inputClass} />
      </div>

      <div>
        <label htmlFor="email" className="block text-fd-navy font-medium text-sm mb-1.5">
          Email <span className="text-fd-gold">*</span>
        </label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="jean@mafromagerie.fr" className={inputClass} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-fd-navy font-medium text-sm mb-1.5">
          Téléphone <span className="text-fd-navy/30 font-normal">(optionnel)</span>
        </label>
        <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
          placeholder="06 12 34 56 78" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="block text-fd-navy font-medium text-sm mb-1.5">
          Votre message <span className="text-fd-gold">*</span>
        </label>
        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
          placeholder="Parlez-nous de votre fromagerie et de vos objectifs digitaux..."
          className={`${inputClass} resize-none`} />
        <p className="text-gray-400 text-xs mt-1">{form.message.length}/2000</p>
      </div>

      {(error || status === 'error') && (
        <div className="flex items-start gap-2 text-red-600 bg-red-50 border border-red-100 rounded-fd px-4 py-3">
          <IconAlert size={16} className="flex-shrink-0 mt-0.5" />
          <p className="text-sm">{error || 'Une erreur est survenue.'}</p>
        </div>
      )}

      <button
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="group w-full flex items-center justify-center gap-2 bg-fd-gold text-fd-navy font-bold py-4 rounded-fd hover:shadow-fd-gold hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading'
          ? <><Loader2 size={18} className="animate-spin" /> Envoi en cours...</>
          : <>Envoyer le message <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
        }
      </button>

      <p className="text-center text-gray-400 text-xs">
        En soumettant ce formulaire, vous acceptez d&apos;être contacté par Fromagerie Digitale.
      </p>
    </div>
  )
}
