# AURALUX — Atelier d'Onglerie de Luxe

Site vitrine **Next.js** pour AURALUX, un atelier d'onglerie haut de gamme.  
Design luxueux, animations soignées, et prise de réservation directe via WhatsApp.

---

## Aperçu

| Section | Description |
|---|---|
| **Héro** | Accroche visuelle avec CTA réservation |
| **Galerie** | Portfolio de créations (butterfly, chrome, floral, bijoux) |
| **Services** | Manucure sur-mesure, Nail art, Semi-permanent |
| **Réservation** | Formulaire → WhatsApp intégré |
| **Contact** | Lien Instagram `@auralux_by_mrn` |

---

## Stack technique

- **Framework** : [Next.js](https://nextjs.org/) 15+ (App Router)
- **UI** : [Tailwind CSS](https://tailwindcss.com/) v4 + [shadcn/ui](https://ui.shadcn.com/)
- **Langage** : TypeScript
- **Analytics** : Vercel Analytics
- **Déploiement** : [Vercel](https://vercel.com/)

---

## Lancer le projet en local

```bash
# Cloner le dépôt
git clone https://github.com/BenSek225/auralux-nail-salon.git
cd auralux-nail-salon

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

---

## Structure des fichiers

```
nail-salon/
├── app/
│   ├── layout.tsx          # Layout racine (fonts, metadata)
│   ├── page.tsx            # Page principale
│   └── globals.css         # Thème & variables CSS
├── components/
│   ├── navbar.tsx
│   ├── hero.tsx
│   ├── gallery.tsx
│   ├── services.tsx
│   ├── booking-form.tsx
│   ├── instagram-section.tsx
│   ├── site-footer.tsx
│   ├── reveal.tsx          # Animation au scroll
│   └── sparkles.tsx        # Effet décoratif
└── public/
    └── images/
        ├── img/            # Assets réels du salon (à intégrer)
        └── *.png           # Photos de galerie actuelles
```

---

## Assets disponibles (`public/images/img/`)

Assets réels fournis par le salon, prêts à intégrer :

| Fichier | Contenu | Usage prévu |
|---|---|---|
| `logo-removebg-preview.png` | Logo AURALUX fond transparent | Hero + Navbar (remplace le logo actuel) |
| `logo.jpeg` | Logo sur fond bordeaux brand | Open Graph / `og:image` |
| `nail.jpeg` | Photo réelle : chrome or + papillon orange + perles | Galerie — vraie création du salon |
| `bg color.jpeg` | Dégradé rose-prune-violet | Background hero ou sections |
| `coupe ongle.jpeg` | Gabarits illustrés des formes d'ongles | Section Services — guide visuel |
| `video nails.mp4` | Vidéo de nail art en cours | Hero background video ou section Reel |

---

## Design

- **Palette** : Prune `#2d0a3e` · Bordeaux `#6b1530` · Or `#c9a84c` · Ivoire `#faf7f2`
- **Typographies** : Playfair Display (titres) + Inter (corps)
- **Effets** : Gradient velours, texte or, sparkles, animations au scroll

---

## Contact

- Instagram : [@auralux_by_mrn](https://instagram.com/auralux_by_mrn)
- Réservations : WhatsApp +33 6 62 16 45 36
