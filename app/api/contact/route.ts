import { NextResponse } from 'next/server'
import { parseContact, validateContact, type ContactPayload } from '@/lib/contact'

export const runtime = 'nodejs'

/* Limite simple : 5 envois par adresse IP et par 10 minutes.
   En mémoire, donc par instance serveur : suffisant contre les envois en rafale. */
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, number[]>()

function tooMany(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_PER_WINDOW
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] ?? c)
}

function buildEmail(p: ContactPayload) {
  const label = p.kind === 'devis' ? 'Demande de devis' : 'Demande de diagnostic'
  const rows: [string, string][] = [
    ['Demande', label],
    ['Nom', p.nom],
    ['Fromagerie', p.fromagerie],
    ['Ville', p.ville || 'Non précisée'],
    ['Email', p.email],
    ['Téléphone', p.telephone || 'Non précisé'],
    ['Formule', p.formule],
    ['Priorité', p.priorite],
  ]
  const text = [...rows.map(([k, v]) => `${k} : ${v}`), '', 'Projet :', p.message || 'Non précisé'].join('\n')
  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#1C2C37">${label}</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 16px 6px 0;color:#4E6270">${k}</td><td style="padding:6px 0;color:#1C2C37"><strong>${escapeHtml(v)}</strong></td></tr>`,
        )
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;color:#4E6270;margin-top:20px">Projet :</p>
    <p style="font-family:Arial,sans-serif;font-size:15px;color:#1C2C37;white-space:pre-line">${escapeHtml(p.message || 'Non précisé')}</p>`
  const subject = `${label} · ${p.fromagerie}${p.ville ? ` · ${p.ville}` : ''}`
  return { subject, text, html }
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = (await request.json()) as Record<string, unknown>
  } catch {
    return NextResponse.json({ ok: false, error: 'Requête invalide.' }, { status: 400 })
  }

  // Champ piège : invisible pour les humains, rempli par les robots.
  if (typeof body.site_web === 'string' && body.site_web.length > 0) {
    return NextResponse.json({ ok: true })
  }

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'inconnue'
  if (tooMany(ip)) {
    return NextResponse.json(
      { ok: false, error: 'Trop de demandes envoyées. Réessayez dans quelques minutes.' },
      { status: 429 },
    )
  }

  const payload = parseContact(body)
  const errors = validateContact(payload)
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL
  const from = process.env.CONTACT_FROM_EMAIL
  if (!apiKey || !to || !from) {
    console.error('Formulaire de contact : RESEND_API_KEY, CONTACT_TO_EMAIL ou CONTACT_FROM_EMAIL manquant.')
    return NextResponse.json(
      { ok: false, error: "L'envoi est momentanément indisponible. Écrivez-nous directement par email." },
      { status: 503 },
    )
  }

  const { subject, text, html } = buildEmail(payload)
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], reply_to: payload.email, subject, text, html }),
  })

  if (!res.ok) {
    console.error('Formulaire de contact : échec Resend', res.status, await res.text())
    return NextResponse.json(
      { ok: false, error: "L'envoi a échoué. Réessayez, ou écrivez-nous directement par email." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
