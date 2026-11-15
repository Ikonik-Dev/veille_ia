# Veille IA — Formations et veille technique

Site statique (HTML, CSS, JavaScript, sans dépendance) qui réunit deux sources pour l'équipe :

- les **formations IA suivies** : notes structurées, points à retenir, outils présentés ;
- une **veille sur des vidéos YouTube** : une fiche par vidéo, avec un avis sur son utilité pour la structure.

Les outils des deux sources sont regroupés dans une seule boîte à outils.

## Structure

```
index.html              → la page (change rarement)
assets/css/style.css    → l'apparence
assets/js/app.js        → l'affichage : accueil, formations, veille, outils, méthode
data/formations.js      → les formations et leurs outils
data/veille.js          → les fiches vidéo, leurs outils, la synthèse et la page Méthode
data/animations.js      → les guides des séances que j'anime (onglet Animer)
```

Pages : `#/` (accueil), `#/animer` et `#/animer/<id-séance>` (guide à ouvrir sur un second écran pendant la projection ; flèches ← → pour changer d'étape), `#/veille`, `#/veille/<id-vidéo>`, `#/outils`, `#/outils/<nom>`, `#/methode`, `#/formation/<id>`.

## Voir le site en local

Double-cliquer sur `index.html` : il s'ouvre dans le navigateur, sans serveur.

## Ajouter une formation

Dans `data/formations.js`, copier le bloc `{ ... }` d'une formation existante et le remplir. Les champs sont décrits en tête du fichier.

**Règles d'anonymisation, à respecter avant chaque publication :**

- pas de nom d'organisme ni d'intervenant : une description générique suffit (« organisme de formation du secteur ») ;
- la date au mois près (`"2026-11"`), pas au jour ;
- pas de titre officiel de formation ni de programme recopié : des thèmes reformulés ;
- pas de lien vers le site de l'organisme ni vers un support de formation ;
- les notes sont reformulées, sans citation des supports.

## Ajouter une fiche de veille

Dans `data/veille.js`, ajouter un objet au tableau `window.VEILLE` :

```js
{
  "id": "identifiant YouTube (11 caractères)",
  "titre": "Titre court et neutre",
  "chaine": "Nom de la chaîne",
  "duree": 600,               // en secondes ; 0 pour un post
  "lot": "2026-11-10",        // date d'ajout
  "categorie": "Analyse",     // Actualité, Analyse, Business, Outil, Ressource, Technique, Témoignage
  "interet": 2,               // 3 élevé, 2 moyen, 1 faible
  "resume": "…",
  "points": ["…"],
  "avis": "Ce que ça apporte à la structure, et les réserves.",
  "tags": ["…"]
}
```

Pour un post (pas une vidéo), ajouter `"url": "https://www.youtube.com/post/…"`.

Un outil cité dans une vidéo s'ajoute dans `window.OUTILS_VEILLE` avec `nom`, `quoi`, `donnees` (`Local`, `Variable` ou `En ligne`), `interet`, `categorie` et `videos` (la liste des identifiants). S'il existe déjà côté formations sous le même nom, les deux sont fusionnés automatiquement ; sinon, utiliser `alias` pour indiquer le nom côté formations.

## Publier sur GitHub Pages

1. Dans le dépôt : **Settings → Pages → Source : Deploy from a branch → `main` / `(root)`** → Save.
2. Après une minute, le site est en ligne à `https://<compte>.github.io/<dépôt>/`.

> ⚠️ Le site publié est **public**, même si le dépôt est privé. Ne jamais y mettre de données sur des personnes accompagnées, des collègues ou d'informations internes, ni d'élément permettant d'identifier les formations suivies.
