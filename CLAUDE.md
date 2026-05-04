# 🧀 CLAUDE.md — Fromagerie Digitale
> Mémoire du projet pour Claude Code. Lire ce fichier en entier avant toute action.

---

## Identité du projet

- **Site :** fromageriedigitale.fr
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
| Email | Resend API (`onboarding@resend.dev` jusqu'à vérification domaine) |
| CMS | Sanity.io v3 (Sprint 2+) |
| Deploy | Vercel — région cdg1 |

> ⚠️ Crisp chatbot supprimé — tous les boutons CTA pointent vers `/contact`

---

## Palette Brand (TOUJOURS respecter)

| Token | HEX | Usage |
|---|---|---|
| `fd-navy` | `#1B2A4A` | Fond principal, headers, textes |
| `fd-gold` | `#C9A84C` | CTA, accents, baseline italic |
| `fd-blue` | `#4A7BA7` | Cercles décoratifs, liens, icônes |
| `fd-cream` | `#F5F0E8` | Fond sections claires |
| `fd-dark` | `#0F1A2E` | Fond très sombre |

**Police :** Poppins — Bold titres, Regular corps, Italic baseline

---

## Variables d'environnement

```bash
RESEND_API_KEY=                           # Resend dashboard
CONTACT_EMAIL_TO=fromageriedigitaleagence@gmail.com  # ⚠️ Changer en prod vers gabrahamjordanstephan@gmail.com après vérification domaine
NEXT_PUBLIC_SITE_URL=https://fromageriedigitale.fr
# Sprint 2+ :
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
```

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
├── contact/page.tsx                  ← Formulaire de contact
├── mentions-legales/page.tsx         ← Mentions légales (LCEN)
├── politique-de-confidentialite/     ← Politique RGPD
│   └── page.tsx
├── sitemap.ts
├── robots.ts
└── api/
    └── contact/route.ts              ← Resend API (vérifie sendError)
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

### 🔜 Sprint 3 — À FAIRE
| US | Titre | Tags |
|---|---|---|
| US-03 | Preuve sociale / témoignages clients | [NEXTJS][TAILWIND] |
| US-08 | Page blog / contenu éditorial | [NEXTJS][SANITY][SEO] |
| US-16 | Google Business Profile | [SEO][OFF-PAGE] |
| US-17 | Vérification domaine Resend + email prod | [RESEND] |

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

## Email — Note importante

En développement : `from: onboarding@resend.dev`, `to: fromageriedigitaleagence@gmail.com`

En production (après vérification domaine fromageriedigitale.fr sur Resend) :
- Changer `from` → `contact@fromageriedigitale.fr`
- Changer `CONTACT_EMAIL_TO` → `gabrahamjordanstephan@gmail.com`

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
  alternates: { canonical: 'https://fromageriedigitale.fr/...' },
}
```

---

*Dernière mise à jour : Sprint 2 livré — mai 2025*
