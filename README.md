# Veille IA — Formations et veille technique

Site statique (HTML, CSS, JavaScript, sans dépendance) qui réunit deux sources pour l'équipe :

- les **formations IA suivies** : notes structurées, points à retenir, outils présentés ;
- une **veille sur des vidéos YouTube** : une fiche par vidéo, avec un avis sur son utilité pour la structure.

Les outils des deux sources sont regroupés dans une seule boîte à outils.

## Structure

Pas de framework ni d'outil de build : des scripts classiques, chargés dans l'ordre par `index.html`, pour que le site s'ouvre en double-cliquant dessus (les modules ES ne fonctionnent pas en `file://`). Chaque fichier JavaScript s'enregistre dans l'objet global `window.VIA`.

```
index.html                       → la page et l'ordre de chargement des fichiers
assets/css/
  base.css                       → couleurs (thème clair / sombre) et styles de base
  layout.css                     → en-tête, pied de page
  components.css                 → cartes, badges, filtres, onglets, encadrés
  views/<page>.css               → un fichier par page (accueil, formation, outils, veille, animer)
assets/js/
  core/utils.js                  → échappement, dates, listes, stockage local
  core/data.js                   → accès aux données, fusion des outils formations + veille
  core/router.js                 → navigation par ancre (#/page/…) ; chaque vue s'y enregistre
  views/accueil.js, formation.js, outils.js, methode.js
  views/veille/model.js          → usages, lectures « structure / dev », filtres et tri (sans HTML)
  views/veille/fiche.js          → ligne de liste et fiche complète
  views/veille/panel.js          → panneau latéral
  views/veille/index.js          → assemblage de la page Veille
  views/animer/contenu.js        → onglets d'une séance ; animer/index.js → guide, horloge, clavier
  ui/header.js                   → thème clair / sombre, onglet Animer discret
  main.js                        → démarrage (chargé en dernier)
data/
  formations/formations.js       → les formations suivies
  formations/outils.js           → les outils présentés en formation
  veille/fiches/AAAA-MM-JJ.js    → un fichier par lot de fiches vidéo
  veille/outils.js               → les outils repérés en veille
  veille/synthese.js             → L'essentiel, Tendances, Points de vigilance
  veille/methode.js              → la page Méthode
  animations.js                  → les guides des séances que j'anime (onglet Animer)
tools/check.js                   → vérification des données : `node tools/check.js`
```

Ajouter une page : créer `assets/js/views/<page>.js` qui appelle `VIA.router.add("<page>", fonction)`, le charger dans `index.html` avant `main.js`, et ajouter son CSS dans `assets/css/views/`.

Pages : `#/` (accueil), `#/animer` et `#/animer/<id-séance>` (guide à ouvrir sur un second écran pendant la projection ; flèches ← → pour changer d’étape ; l’onglet n’apparaît dans le menu qu’après un triple-clic sur le logo « IA », mémorisé par le navigateur — discrétion, pas protection), `#/veille`, `#/veille/<id-vidéo>`, `#/outils`, `#/outils/<nom>`, `#/methode`, `#/formation/<id>`.

## Voir le site en local

Double-cliquer sur `index.html` : il s'ouvre dans le navigateur, sans serveur.

## Ajouter une formation

Dans `data/formations/formations.js`, copier le bloc `{ ... }` d'une formation existante et le remplir. Les champs sont décrits en tête du fichier.

**Règles d'anonymisation, à respecter avant chaque publication :**

- pas de nom d'organisme ni d'intervenant : une description générique suffit (« organisme de formation du secteur ») ;
- la date au mois près (`"2026-11"`), pas au jour ;
- pas de titre officiel de formation ni de programme recopié : des thèmes reformulés ;
- pas de lien vers le site de l'organisme ni vers un support de formation ;
- les notes sont reformulées, sans citation des supports.

## Ajouter une fiche de veille

Chaque lot a son fichier : `data/veille/fiches/AAAA-MM-JJ.js`, qui commence par `window.VEILLE = (window.VEILLE || []).concat([` et se termine par `]);`. Pour un nouveau lot, créer ce fichier et ajouter sa ligne `<script>` dans `index.html`, après le lot précédent. Chaque fiche :

```js
{
  "id": "identifiant YouTube (11 caractères)",
  "titre": "Titre court et neutre",
  "chaine": "Nom de la chaîne",
  "duree": 600,               // en secondes ; 0 pour un post
  "lot": "2026-11-10",        // date d'ajout
  "categorie": "Analyse",     // Actualité, Analyse, Business, Outil, Ressource, Technique, Témoignage
  "interet": 2,               // utilité pour la structure : 3 élevé, 2 moyen, 1 faible
  "dev": 2,                   // intérêt pour le développeur : 3 à tester, 2 utile, 1 marginal, 0 hors dev
  "usages": ["local", "dev"], // 1 ou 2, le principal d'abord : fondamentaux, copilot, local, metiers, dev
  "resume": "…",
  "points": ["…"],
  "avis": "Ce que ça apporte à la structure, et les réserves.",
  "avisDev": "Une phrase : ce que ça apporte au développeur (seulement si dev >= 2).",
  "tags": ["…"]
}
```

Pour un post (pas une vidéo), ajouter `"url": "https://www.youtube.com/post/…"`.

Un outil cité dans une vidéo s'ajoute dans `window.OUTILS_VEILLE` (`data/veille/outils.js`) avec `nom`, `quoi`, `donnees` (`Local`, `Variable` ou `En ligne`), `interet`, `categorie` et `videos` (la liste des identifiants). S'il existe déjà côté formations sous le même nom, les deux sont fusionnés automatiquement ; sinon, utiliser `alias` pour indiquer le nom côté formations.

Avant de publier : `node tools/check.js` (ids uniques, champs obligatoires, valeurs autorisées, lots bien chargés par `index.html`).

## Publier sur GitHub Pages

1. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → `main` / `(root)`** → Save.
2. Après une minute, le site est en ligne à `https://<compte>.github.io/<dépôt>/`.

> ⚠️ Le site publié est **public**, même si le dépôt est privé. Ne jamais y mettre de données sur des personnes accompagnées, des collègues ou d'informations internes, ni d'élément permettant d'identifier les formations suivies.
