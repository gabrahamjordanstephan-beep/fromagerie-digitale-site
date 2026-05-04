import { NextResponse } from 'next/server'
import { z }            from 'zod'

const schema = z.object({
  name:    z.string().min(2).max(100),
  email:   z.string().email(),
  phone:   z.string().optional(),
  message: z.string().min(20).max(2000),
})

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
  }

  try {
    const { Resend } = await import('resend')
    const resend = new Resend(apiKey)

    const body   = await request.json() as unknown
    const parsed = schema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Données invalides', details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const { name, email, phone, message } = parsed.data
    const to = process.env.CONTACT_EMAIL_TO
    if (!to) {
      return NextResponse.json({ error: 'Email service not configured.' }, { status: 503 })
    }

    const { error: sendError } = await resend.emails.send({
      from:     'Fromagerie Digitale <onboarding@resend.dev>',
      to:       [to],
      reply_to: email,
      subject:  `🧀 Nouveau message de ${name} — Fromagerie Digitale`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f5f0e8;border-radius:12px;">
          <div style="background:#314C5C;padding:24px;border-radius:8px;margin-bottom:24px;text-align:center;">
            <h1 style="color:#F4BD45;margin:0;font-size:20px;">Fromagerie Digitale</h1>
            <p style="color:rgba(255,255,255,0.6);margin:4px 0 0;font-size:13px;font-style:italic;">Nouveau message de contact</p>
          </div>
          <div style="background:white;padding:24px;border-radius:8px;border:1px solid #e0d8cc;">
            <p><strong>Nom :</strong> ${name}</p>
            <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
            <hr style="border:none;border-top:1px solid #e0d8cc;margin:16px 0;" />
            <p><strong>Message :</strong></p>
            <p style="white-space:pre-wrap;line-height:1.6;">${message}</p>
          </div>
          <p style="text-align:center;color:#999;font-size:11px;margin-top:16px;">Reçu via fromageriedigitale.fr</p>
        </div>
      `,
    })

    if (sendError) {
      console.error('[contact] Resend error:', sendError)
      return NextResponse.json({ error: 'Échec de l\'envoi.' }, { status: 502 })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 })
  }
}
