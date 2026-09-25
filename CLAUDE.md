# 🧀 CLAUDE.md — Fromagerie Digitale
> Mémoire du projet pour Claude Code. Lire ce fichier en entier avant toute action.

---

## Identité du projet

- **Site :** fromageriedigitale.com
- **Tagline :** "L'agence qui parle le langage des fromagers"
- **Baseline :** "Votre histoire, en ligne."
- **Fondatrice :** Alice Gautro
- **Co-fondateur :** Grenguende Abraham — gabrahamjordanstephan@gmail.com
- **Objectif :** Convertir des artisans fromagers en clients de l'agence
- **Adresse :** 9 rue Waldeck Rousseau, 75017 Paris
- **SIREN :** 908 178 866 R.C.S. Paris

---

## Stack technique

| Couche | Techno |
|---|---|
| Framework | Next.js 14+ App Router |
| Langage | TypeScript strict (zéro `any`) |
| Styling | Tailwind CSS avec palette FD |
| Police | Poppins (Google Fonts) |
| Booking | Cal.com embed (`@calcom/embed-react`) — appel découverte 30 min |
| CMS | Sanity.io v3 (Sprint 4+) |
| Deploy | Vercel — région cdg1 |

> ⚠️ Crisp chatbot supprimé — tous les CTA pointent vers `/contact`
> ⚠️ Formulaire de contact + API Resend supprimés (Sprint 3.5) — remplacés par Cal.com

---

## Palette Brand (TOUJOURS respecter)

| Token | HEX | Usage |
|---|---|---|
| `fd-navy` | `#314C5C` | Fond principal, headers, textes |
| `fd-gold` | `#F4BD45` | CTA, accents, baseline italic |
| `fd-blue` | `#4A7BA7` | Cercles décoratifs, liens, icônes |
| `fd-cream` | `#F5F0E8` | Fond sections claires |
| `fd-dark` | `#1C2C37` | Fond très sombre |

**Police :** Poppins — Bold titres, Regular corps, Italic baseline

---

## Variables d'environnement

```bash
# Cal.com — compte agence
NEXT_PUBLIC_CAL_USERNAME=                 # ex: fromagerie-digitale
NEXT_PUBLIC_CAL_EVENT_SLUG=decouverte-30min

NEXT_PUBLIC_SITE_URL=https://fromageriedigitale.com

# Sprint 4+ (migration blog vers Sanity) :
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
```

> ⚠️ Sans `NEXT_PUBLIC_CAL_USERNAME`, la page /contact affiche un fallback mailto vers `contact@fromageriedigitale.com`.

---

## Architecture des pages

```
app/
├── layout.tsx                        ← Layout racine + SEO global
├── icon.svg                          ← Favicon (marque dorée FD)
├── opengraph-image.tsx               ← OG image dynamique (1200×630)
├── page.tsx                          ← Homepage
├── a-propos/page.tsx                 ← Histoire + Valeurs + Fondateurs
├── services/
│   ├── page.tsx                      ← Vue d'ensemble 6 services
│   └── [slug]/page.tsx               ← Page dynamique par service
├── contact/page.tsx                  ← Page booking (Cal.com embed)
├── blog/
│   ├── page.tsx                      ← Index blog
│   └── [slug]/page.tsx               ← Article dynamique
├── mentions-legales/page.tsx         ← Mentions légales (LCEN)
├── politique-de-confidentialite/     ← Politique RGPD
│   └── page.tsx
├── sitemap.ts
└── robots.ts
```

---

## Backlog — État des sprints

### ✅ Sprint 1 — LIVRÉ
| US | Titre | Statut |
|---|---|---|
| US-01 | Hero Section | ✅ |
| US-02 | Aperçu services home | ✅ |
| US-04 | CTA bas de page | ✅ |
| US-09 | Formulaire de contact + Resend | ✅ |
| US-10 | Infos de contact directes | ✅ |

### ✅ Sprint 2 — LIVRÉ
| US | Titre | Statut |
|---|---|---|
| US-05 | Pages services détaillées (6 pages) | ✅ |
| US-06 | Navigation entre services | ✅ |
| US-07 | Page À propos (fondateurs, histoire, valeurs) | ✅ |
| US-14 | Mentions légales + Politique de confidentialité | ✅ |
| US-15 | SEO on-page (schema, og-image, favicon, canonicals) | ✅ |

### ✅ Sprint 3 — LIVRÉ (partiel)
| US | Titre | Statut |
|---|---|---|
| US-03 | Preuve sociale / témoignages animés | ✅ |
| US-08 | Page blog + articles éditoriaux | ✅ (données locales `lib/blog-data.ts`, Sanity non branché) |

### ✅ Sprint 3.5 — LIVRÉ
| US | Titre | Statut |
|---|---|---|
| US-19 | Remplacer formulaire contact par Cal.com booking | ✅ |

### 🔜 Sprint 4 — À FAIRE
| US | Titre | Tags |
|---|---|---|
| US-16 | Google Business Profile | [SEO][OFF-PAGE] |
| US-18 | Migrer blog vers Sanity CMS | [SANITY] |
| US-20 | Créer compte Cal.com + config event type | [CAL] |

---

## SEO — État

- ✅ Sitemap, robots.txt, canonicals, title/description par page
- ✅ Schema `ProfessionalService` (adresse Paris 75017)
- ✅ OG image dynamique + favicon SVG
- ✅ Redirect www → non-www
- ⏳ Google Search Console à soumettre après mise en prod
- ⏳ Google Business Profile à créer
- ⏳ Blog à lancer (contenu long-tail)

---

## Booking Cal.com — Note importante

- Créer un compte Cal.com pour l'agence (Alice), lier Google Calendar
- Créer un event type "Appel découverte" — 30 min — slug `decouverte-30min`
- Renseigner `NEXT_PUBLIC_CAL_USERNAME` dans Vercel (Environment Variables)
- Les notifications de réservation partent nativement vers l'email lié au compte Cal.com — aucun backend nécessaire côté site
- Personnalisation visuelle (couleurs FD) faite dans `components/sections/BookingEmbed.tsx` via `cssVarsPerTheme`

---

## Definition of Done

- [ ] TypeScript strict, 0 erreur, 0 `any`
- [ ] `next build` réussi sans warning
- [ ] Palette FD respectée (navy, gold, blue, cream)
- [ ] Responsive : 375px / 768px / 1280px
- [ ] Métadonnées title + description + canonical
- [ ] LCP < 2.5s — images via `next/image`
- [ ] Variables d'env configurées sur Vercel
- [ ] Alice et Abraham ont validé visuellement

---

## Commandes utiles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production (toujours couper le dev avant)
npm run lint         # ESLint
vercel --prod        # Déploiement production
vercel               # Déploiement preview
```

> ⚠️ Ne jamais lancer `npm run build` pendant que `npm run dev` tourne — cache corrompu

---

## Conventions de code

```typescript
// Server Component par défaut
export default async function Page() { ... }

// Client Component : déclarer explicitement
'use client'
export default function InteractiveComponent() { ... }

// Métadonnées sur chaque page
export const metadata: Metadata = {
  title: 'Titre',
  description: 'Max 160 chars',
  alternates: { canonical: 'https://fromageriedigitale.com/...' },
}
```

---

*Dernière mise à jour : Sprint 3 livré (blog + témoignages) — juillet 2025*
