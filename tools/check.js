#!/usr/bin/env node
/* Vérifie les données du site avant publication. Aucune dépendance : `node tools/check.js`.
   - charge les fichiers data/ dans l'ordre de index.html, comme le navigateur ;
   - vérifie que chaque lot de data/veille/fiches/ est bien référencé dans index.html ;
   - contrôle chaque fiche de veille et les liens entre outils et fiches.
   Code de sortie 1 s'il y a au moins une erreur ; les avertissements n'empêchent pas la publication. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const USAGES = ["fondamentaux", "copilot", "local", "metiers", "dev"];
const CATEGORIES = ["Actualité", "Analyse", "Business", "Outil", "Ressource", "Technique", "Témoignage"];
const DONNEES = ["Local", "Variable", "En ligne"];

const errors = [], warnings = [];
const err = (m) => errors.push(m), warn = (m) => warnings.push(m);

// 1. Fichiers de données, dans l'ordre de index.html
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
const dataFiles = scripts.filter((s) => s.startsWith("data/"));
for (const s of scripts) if (!fs.existsSync(path.join(ROOT, s))) err(`index.html charge ${s}, qui n'existe pas`);

const lotsDir = path.join(ROOT, "data/veille/fiches");
for (const f of fs.readdirSync(lotsDir).filter((f) => f.endsWith(".js"))) {
  if (!dataFiles.includes("data/veille/fiches/" + f)) err(`data/veille/fiches/${f} n'est pas chargé par index.html`);
}

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of dataFiles) {
  try { vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), sandbox, { filename: f }); }
  catch (e) { err(`${f} : ${e.message}`); }
}
const W = sandbox.window;
const VEILLE = W.VEILLE || [];

// 2. Fiches de veille
const ids = new Set();
const lotDe = {};
for (const f of dataFiles.filter((f) => f.startsWith("data/veille/fiches/"))) lotDe[path.basename(f, ".js")] = true;

VEILLE.forEach((v, i) => {
  const at = `fiche ${v.id || "#" + i}`;
  if (!v.id) return err(`${at} : id manquant`);
  if (ids.has(v.id)) err(`${at} : id en double`);
  ids.add(v.id);
  for (const k of ["titre", "chaine", "lot", "categorie", "resume", "avis"]) if (!v[k]) err(`${at} : champ « ${k} » manquant`);
  if (!Number.isInteger(v.duree) || v.duree < 0) err(`${at} : duree doit être un nombre de secondes`);
  if (![1, 2, 3].includes(v.interet)) err(`${at} : interet doit valoir 1, 2 ou 3`);
  if (![0, 1, 2, 3].includes(v.dev)) err(`${at} : dev doit valoir 0, 1, 2 ou 3`);
  if (!Array.isArray(v.usages) || !v.usages.length || v.usages.length > 2) err(`${at} : usages doit contenir 1 ou 2 valeurs`);
  else v.usages.forEach((u) => { if (!USAGES.includes(u)) err(`${at} : usage inconnu « ${u} »`); });
  if (v.dev >= 2 && !v.avisDev) err(`${at} : avisDev attendu quand dev vaut 2 ou 3`);
  if (v.dev < 2 && v.avisDev) warn(`${at} : avisDev présent alors que dev vaut ${v.dev}`);
  if (v.categorie && !CATEGORIES.includes(v.categorie)) warn(`${at} : catégorie inhabituelle « ${v.categorie} »`);
  if (v.lot && !lotDe[v.lot]) warn(`${at} : lot ${v.lot} sans fichier data/veille/fiches/${v.lot}.js`);
  const np = (v.points || []).length, nt = (v.tags || []).length;
  if (np < 4 || np > 8) warn(`${at} : ${np} points (4 à 8 attendus)`);
  if (nt < 3 || nt > 6) warn(`${at} : ${nt} tags (3 à 6 attendus)`);
});

// 3. Outils de veille
(W.OUTILS_VEILLE || []).forEach((o) => {
  const at = `outil « ${o.nom} »`;
  if (!o.nom || !o.quoi) err(`${at} : nom ou description manquant`);
  if (!DONNEES.includes(o.donnees)) err(`${at} : donnees doit valoir Local, Variable ou En ligne`);
  if (![1, 2, 3].includes(o.interet)) err(`${at} : interet doit valoir 1, 2 ou 3`);
  (o.videos || []).forEach((id) => { if (!ids.has(id)) err(`${at} : vidéo ${id} inconnue`); });
});

// 4. Bilan
const parLot = {};
VEILLE.forEach((v) => { parLot[v.lot] = (parLot[v.lot] || 0) + 1; });
console.log(`${VEILLE.length} fiches, ${(W.OUTILS_VEILLE || []).length} outils de veille, ${(W.FORMATIONS || []).length} formations.`);
console.log("Par lot : " + Object.keys(parLot).sort().map((l) => `${l} (${parLot[l]})`).join(", "));
if (warnings.length) {
  const max = process.argv.includes("--tout") ? warnings.length : 10;
  console.log(`\n${warnings.length} avertissement(s)` + (warnings.length > max ? ` (les ${max} premiers ; --tout pour la liste complète)` : "") + " :\n- " + warnings.slice(0, max).join("\n- "));
}
if (errors.length) {
  console.error(`\n${errors.length} erreur(s) :\n- ` + errors.join("\n- "));
  process.exit(1);
}
console.log("\nOK : aucune erreur.");
