# Thomas Hercule

Site portfolio : ingénieur développeur freelance (React, Node.js).

- Domaine : [thomas-hercule.fr](https://thomas-hercule.fr)
- Contact : [contact@thomas-hercule.fr](mailto:contact@thomas-hercule.fr)

## Stack

Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, Lenis.

## Tokens

| Token | Valeur | Usage |
| --- | --- | --- |
| Papier | `#F4F1EA` | Fond |
| Marine | `#0B2548` | Texte, filets, focus |
| Vermillon | `#C1121F` | Boutons, filets hover, erreurs, jamais du body text |

Polices (`next/font`) : **Geist Sans** (UI / body 18–20px) et **Instrument Serif** (display, titres, années).

Geste signature : l’année du projet qui morph au scroll sur la home et `/work`. `prefers-reduced-motion` coupe Lenis, le morph et les reveals.

## Développement

```bash
npm install
npm run dev
```

```bash
npm run build
npm run lint
```

## Ajouter un projet

1. Copier une entrée dans [`content/projects.ts`](content/projects.ts).
2. Remplir `slug`, `client`, `title`, `year`, `role`, `summary`, `problem`, `approach`, `stack`.
3. Si l’année est inconnue, mettre `2999`. `url` et `outcome` peuvent rester `null`.
4. `featured: true` l’affiche en home (3 max conseillés).
5. Images optionnelles : fichier `/public/projects/[slug]-1.jpg`, puis `images: ["/projects/[slug]-1.jpg"]`. Sans image, cartes et case studies utilisent un fond typo + monogramme.

## Calendly

Dans [`content/site.ts`](content/site.ts) :

```ts
export const CALENDLY_URL: string | null = null;
```

Tant que la valeur est `null`, le bloc n’est pas rendu. Colle l’URL d’embed pour l’afficher sur `/contact`.

## Contact

Le formulaire poste sur `POST /api/contact`.

- Sans `RESEND_API_KEY` : le handler renvoie un `mailto:` : le client mail s’ouvre. **Jamais** de message « envoyé » dans ce cas.
- Avec `RESEND_API_KEY` (et optionnellement `CONTACT_TO` / `CONTACT_FROM`) : envoi réel, puis confirmation.

Voir [`.env.example`](.env.example).

## Déploiement

Guide complet : [`docs/superpowers/specs/2026-11-16-go-live-design.md`](docs/superpowers/specs/2026-11-16-go-live-design.md).

1. Repo : https://github.com/Th0masso/portfolio.git (`main`).
2. [Vercel](https://vercel.com) → Import du repo → Next.js, **aucune** variable d’env (mailto).
3. Vercel → Domains : `thomas-hercule.fr` + `www` (redirige vers apex).
4. OVH → Zone DNS : records **A** / **CNAME** indiqués par Vercel (ne pas changer les nameservers ; ne pas toucher aux MX).
5. Vérifier HTTPS, pages, formulaire mailto.

Resend plus tard : `RESEND_API_KEY` (+ `CONTACT_TO` / `CONTACT_FROM`) dans Vercel.

## Contenu

Tout le copy vit dans `/content` : `site.ts`, `projects.ts`.
