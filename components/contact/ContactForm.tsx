'use client'

import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { Check, Spinner } from '@/components/ui/icons'
import {
  FORMULES,
  PRIORITES,
  REQUEST_KINDS,
  parseContact,
  validateContact,
  type ContactErrors,
  type RequestKind,
} from '@/lib/contact'
import { CONTACT_EMAIL } from '@/lib/site'

const field =
  'min-h-[48px] w-full rounded-xl border border-[#8A9AA4] bg-white px-3.5 text-base text-fd-ink focus:border-fd-navy focus:ring-fd-gold'
const labelCls = 'flex flex-col gap-1.5 text-sm font-semibold'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function ContactForm({ defaultKind = 'devis' }: { defaultKind?: RequestKind }) {
  const [kind, setKind] = useState<RequestKind>(defaultKind)
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<ContactErrors>({})
  const [message, setMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return
    const form = e.currentTarget
    const raw = Object.fromEntries(new FormData(form).entries()) as Record<string, unknown>
    raw.kind = kind
    const payload = parseContact(raw)
    const found = validateContact(payload)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus()
      return
    }

    setStatus('sending')
    setMessage('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, site_web: raw.site_web ?? '' }),
      })
      const data = (await res.json()) as { ok: boolean; error?: string; errors?: ContactErrors }
      if (data.ok) {
        setStatus('sent')
        form.reset()
        return
      }
      if (data.errors) setErrors(data.errors)
      setMessage(data.error ?? 'Vérifiez les champs signalés.')
      setStatus('error')
    } catch {
      setMessage(`L'envoi a échoué. Réessayez, ou écrivez-nous à ${CONTACT_EMAIL}.`)
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div role="status" className="fd-in flex flex-col items-start gap-4 py-6">
        <span className="fd-pop inline-flex h-14 w-14 items-center justify-center rounded-full bg-fd-dark">
          <span className="fd-draw inline-flex">
            <Check size={28} stroke="#F4BD45" strokeWidth={2.5} />
          </span>
        </span>
        <h2 className="m-0 text-[32px] font-bold text-fd-dark">Merci, c&apos;est reçu.</h2>
        <p className="m-0 text-base leading-relaxed text-fd-slate">
          {kind === 'devis'
            ? 'Nous revenons vers vous rapidement pour préciser votre besoin et vous envoyer votre devis.'
            : 'Nous revenons vers vous rapidement pour fixer le créneau de votre diagnostic.'}
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="min-h-[44px] rounded-full border border-fd-navy bg-transparent px-[18px] text-sm font-semibold text-fd-navy"
        >
          Envoyer une autre demande
        </button>
      </div>
    )
  }

  const err = (name: keyof ContactErrors) =>
    errors[name] ? (
      <span id={`${name}-erreur`} className="text-[13px] font-medium text-[#A3361B]">
        {errors[name]}
      </span>
    ) : null
  const describe = (name: keyof ContactErrors) => (errors[name] ? `${name}-erreur` : undefined)

  return (
    <form onSubmit={onSubmit} noValidate aria-label="Formulaire de contact" className="flex flex-col gap-[18px]">
      <fieldset className="m-0 flex flex-col gap-2 border-0 p-0">
        <legend className="mb-2 p-0 text-sm font-semibold">Votre demande</legend>
        <div className="grid grid-cols-2 gap-1.5 rounded-full border border-fd-line bg-white p-1.5">
          {REQUEST_KINDS.map((k) => {
            const on = k.id === kind
            return (
              <button
                key={k.id}
                type="button"
                aria-pressed={on}
                onClick={() => setKind(k.id)}
                className={`fd-seg min-h-[44px] rounded-full border-0 px-3.5 text-[15px] font-semibold ${
                  on ? 'bg-fd-dark text-white' : 'bg-transparent text-fd-navy'
                }`}
              >
                {k.label}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className={labelCls}>
          Votre nom
          <input name="nom" type="text" autoComplete="name" required aria-invalid={!!errors.nom} aria-describedby={describe('nom')} className={field} />
          {err('nom')}
        </label>
        <label className={labelCls}>
          Votre fromagerie
          <input name="fromagerie" type="text" autoComplete="organization" required aria-invalid={!!errors.fromagerie} aria-describedby={describe('fromagerie')} className={field} />
          {err('fromagerie')}
        </label>
        <label className={labelCls}>
          Email
          <input name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} aria-describedby={describe('email')} className={field} />
          {err('email')}
        </label>
        <label className={labelCls}>
          <span>
            Téléphone <span className="font-normal text-fd-slate">(facultatif)</span>
          </span>
          <input name="telephone" type="tel" autoComplete="tel" aria-invalid={!!errors.telephone} aria-describedby={describe('telephone')} className={field} />
          {err('telephone')}
        </label>
        <label className={labelCls}>
          Ville
          <input name="ville" type="text" autoComplete="address-level2" className={field} />
        </label>
        <label className={labelCls}>
          Formule qui vous intéresse
          <select name="formule" defaultValue={FORMULES[0]} className={field}>
            {FORMULES.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </label>
      </div>

      <label className={labelCls}>
        Votre priorité
        <select name="priorite" defaultValue={PRIORITES[0]} className={field}>
          {PRIORITES.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </label>

      <label className={labelCls}>
        <span>
          Votre projet en quelques mots <span className="font-normal text-fd-slate">(facultatif)</span>
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Par exemple : notre site a dix ans, on aimerait prendre les commandes de fêtes en ligne."
          className={`${field} resize-y py-3 leading-normal`}
        />
      </label>

      {/* Champ piège pour les robots : caché aux humains et aux lecteurs d'écran. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Site web
          <input name="site_web" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {status === 'error' && message && (
        <p role="alert" className="m-0 rounded-xl bg-[#FBE9E4] px-4 py-3 text-sm text-[#7A2914]">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        aria-busy={status === 'sending'}
        className="fd-btn mt-1 inline-flex min-h-[56px] items-center justify-center gap-2.5 rounded-full border-0 bg-fd-dark text-base font-semibold text-white disabled:cursor-wait disabled:opacity-85"
      >
        {status === 'sending' ? (
          <>
            <Spinner strokeWidth={2.5} />
            Envoi en cours
          </>
        ) : kind === 'devis' ? (
          'Recevoir mon devis'
        ) : (
          'Réserver mon diagnostic'
        )}
      </button>
      <p className="m-0 text-[13px] leading-normal text-fd-slate">
        Vos données servent uniquement à vous recontacter.{' '}
        <Link href="/politique-de-confidentialite" className="text-fd-navy underline">
          Politique de confidentialité
        </Link>
      </p>
    </form>
  )
}
