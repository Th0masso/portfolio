# Go-live portfolio — Vercel + OVH

Date : 2026-11-16  
Domaine : `thomas-hercule.fr`  
Repo : https://github.com/Th0masso/portfolio.git  
Contact : mailto (pas de Resend pour l’instant)

## Objectif

Publier le portfolio Next.js en production sur `https://thomas-hercule.fr` via GitHub → Vercel, DNS restant chez OVH.

## Architecture

```
Repo local → push main → GitHub (Th0masso/portfolio)
                              ↓ deploy auto
                           Vercel (Next.js)
                              ↑
OVH DNS (A + CNAME) ──────────┘
```

- Hébergeur : Vercel (détecte Next.js, `next build`).
- Domaine apex : `thomas-hercule.fr` (canonical).
- `www.thomas-hercule.fr` : redirige vers l’apex.
- Formulaire `/api/contact` : sans `RESEND_API_KEY`, renvoie un `mailto:` (pas de faux « envoyé »).

## Hors scope

- Resend / envoi email réel
- Changement de nameservers OVH
- Calendly
- Refonte contenu / design

---

## 1. Git / GitHub

1. Commit initial du projet (`.env*` ignorés sauf `.env.example`).
2. Remote : `https://github.com/Th0masso/portfolio.git`
3. Push branche `main`.

Si `gh` ou le push échoue (token invalide) :

```bash
gh auth login -h github.com
git push -u origin main
```

---

## 2. Import Vercel (à faire dans le dashboard)

1. Aller sur [vercel.com](https://vercel.com) → Sign up / Log in **avec GitHub** (compte `Th0masso`).
2. **Add New… → Project** → importer `Th0masso/portfolio`.
3. Réglages (laisser les défauts si déjà détectés) :
   - Framework Preset : **Next.js**
   - Build Command : `next build` (défaut)
   - Output : géré par Next (ne pas forcer un dossier `out`)
   - Root Directory : `.` (racine du repo)
4. **Environment Variables** : aucune pour l’instant (mailto).
5. **Deploy**.
6. Ouvrir l’URL `*.vercel.app` et vérifier home, `/work`, `/about`, `/contact`.

Redeploy auto : chaque push sur `main` déclenche un déploiement production.

---

## 3. Domaine OVH → Vercel

### Dans Vercel

1. Projet → **Settings → Domains**.
2. Ajouter `thomas-hercule.fr`.
3. Ajouter `www.thomas-hercule.fr` (rediriger vers `thomas-hercule.fr` si proposé).
4. Copier les records DNS affichés par Vercel (ils font foi).

Valeurs typiques Vercel (à confirmer dans l’UI) :

| Type  | Nom / hôte | Valeur              |
| ----- | ---------- | ------------------- |
| A     | `@`        | `76.76.21.21`       |
| CNAME | `www`      | `cname.vercel-dns.com` |

### Chez OVH

1. [OVH Manager](https://www.ovh.com/manager/) → **Noms de domaine** → `thomas-hercule.fr` → **Zone DNS**.
2. Ne **pas** changer les nameservers (garder DNS OVH).
3. Adapter / créer :
   - Record **A** sur `@` (ou champ vide selon l’UI) → IP Vercel.
   - Record **CNAME** sur `www` → cible Vercel.
4. Supprimer ou désactiver d’anciens A/CNAME qui pointent vers l’hébergement OVH web / parking, pour éviter les conflits.
5. **Ne pas toucher** aux MX si tu as (ou auras) une boîte mail sur ce domaine.

Propagation : souvent quelques minutes, parfois jusqu’à 24–48 h. Vercel émet le certificat HTTPS une fois le DNS validé.

Canonical : `https://thomas-hercule.fr` ; `www` → apex.

---

## 4. Checklist post-go-live

- [ ] `https://thomas-hercule.fr` charge (HTTPS valide)
- [ ] `https://www.thomas-hercule.fr` redirige vers l’apex
- [ ] Home, `/work`, `/about`, `/contact`, une case study `/work/[slug]`
- [ ] Formulaire contact : ouvre le client mail (mailto), pas de message « envoyé »
- [ ] `/robots.txt` et `/sitemap.xml` accessibles
- [ ] Aucune variable Resend configurée (volontaire)

---

## 5. Plus tard (hors ce go-live)

Pour l’envoi réel : compte Resend, vérifier le domaine, ajouter `RESEND_API_KEY` (et optionnellement `CONTACT_TO` / `CONTACT_FROM`) dans Vercel → Redeploy. Voir `.env.example` et le README.
