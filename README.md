# Le Calao Doré — Restaurant Camerounais

> Site vitrine d'un restaurant traditionnel camerounais à Douala (quartier Akwa).
> Projet réalisé dans le cadre d'**Angular Talent Lab 2026** — Devoir week-end intensif.

Un site moderne, responsive et pensé **mobile-first**, qui met en valeur la cuisine
camerounaise authentique du *Calao Doré* : Ndolé, Eru, Poulet DG, Mbongo Tchobi…

---

## 📸 Captures d'écran

### Desktop
![Aperçu Desktop](./screenshots/desktop.png)

### Mobile
![Aperçu Mobile](./screenshots/mobile.png)

> Menu burger ouvert (mobile) :
>
> ![Menu burger mobile](./screenshots/mobile-menu.png)

---

## 🛠️ Technologies utilisées

- **Angular 22.0.1** — architecture 100 % *Standalone Components*
- **Bootstrap 5.3** — grilles et composants UI
- **Bootstrap Icons** — iconographie (réseaux sociaux, étoiles, contact)
- **TypeScript 5.9+**
- **Google Fonts** — Playfair Display (titres) + Poppins (corps)
- **npm 11.17.0**

## ✨ Fonctionnalités

- ✅ Layout **responsive** (Desktop ≥ 900px / Tablette 600–900px / Mobile < 600px)
- ✅ **Menu burger** mobile animé (hamburger → croix), zones tactiles ≥ 44px
- ✅ **Hero** avec image de fond dynamique (`[style.background-image]`) et overlay lisible
- ✅ Carte interactive des plats avec **filtre par catégorie** et badges colorés
  (`@for` + `@switch` + `[ngClass]`)
- ✅ **Témoignages** clients avec étoiles dynamiques (`@for` imbriqué) et fond
  variable selon la note (`[class.bg-success/warning/danger]`)
- ✅ **Horaires** avec détection du jour courant et statut **« Ouvert maintenant »**
  calculé en temps réel (jour + heure)
- ✅ **Footer** multi-colonnes (coordonnées, réseaux sociaux, navigation)
- ✅ Palette camerounaise imposée respectée (vert forêt, terracotta, or, crème)
- ✅ Accessibilité : focus visible, `aria-label`, respect de `prefers-reduced-motion`

## 🎨 Palette de couleurs

| Rôle        | Nom                  | Code      |
|-------------|----------------------|-----------|
| Vert foncé  | Forêt camerounaise   | `#2D4A3E` |
| Terracotta  | Terre rouge          | `#C84B31` |
| Or          | Soleil tropical      | `#E9B824` |
| Crème       | Sable Kribi          | `#FAF3E0` |

## 🧩 Architecture des composants

```
src/app/
├── app.ts                  (composant racine — assemble les 6 sections)
├── app.html
├── app.config.ts
└── components/
    ├── header/             (navbar responsive + burger)
    ├── hero/               (image de fond dynamique + CTA)
    ├── menu/               (cards Bootstrap, @for / @switch / ngClass)
    ├── temoignages/        (étoiles dynamiques, @for imbriqué)
    ├── horaires/           (statut OUVERT/FERMÉ selon jour + heure)
    └── footer/             (3 colonnes responsives)
```

## 🚀 Lancer le projet en local

```bash
git clone https://github.com/[VOTRE_USERNAME]/le-calao-dore.git
cd le-calao-dore
npm install
ng serve --port 8080 --open
```

Ouvrir [http://localhost:8080](http://localhost:8080).

> 💡 Bootstrap, Bootstrap Icons et Popper sont déjà déclarés dans `angular.json`
> et installés via `npm install` — aucune étape supplémentaire n'est requise.

## 🏗️ Build de production

```bash
ng build
```

Les fichiers optimisés sont générés dans `dist/le-calao-dore/`.

## 👤 Auteur

**Christian** — Apprenant Angular Talent Lab 2026 — Cohorte Douala
