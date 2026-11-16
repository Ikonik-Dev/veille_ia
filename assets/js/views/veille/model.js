/* Veille — règles de lecture des fiches, sans rendu HTML.
   Deux lectures d'une même fiche : utilité pour la structure (champ interet) et intérêt pour le développeur (champ dev). */
(function (VIA) {
  "use strict";
  var u = VIA.u;

  // Tuiles d'entrée ; « k » est la valeur du champ usages des fiches
  var USAGES = [
    { k: "fondamentaux", label: "Fondamentaux et sécurité", sub: "Comprendre l'IA, vérifier, protéger les données" },
    { k: "copilot", label: "Copilot", sub: "Microsoft 365 et Copilot Chat" },
    { k: "local", label: "IA locale et RAG", sub: "Modèles sur nos machines, documents internes" },
    { k: "metiers", label: "Métiers et compétences", sub: "Évolution du travail, compétences à acquérir" },
    { k: "dev", label: "Développement", sub: "Agents de code, outils et techniques" }
  ];

  var LENS = {
    structure: {
      label: "Pour la structure", prefixe: "", top: "à voir",
      score: function (v) { return v.interet || 0; },
      niveaux: { 3: "À voir", 2: "Contexte", 1: "Faible", 0: "Faible" },
      groupes: { 3: "À voir en priorité", 2: "Bon éclairage de contexte", 1: "Moins prioritaires" }
    },
    dev: {
      label: "Pour mon dev", prefixe: "Dev : ", top: "à tester",
      score: function (v) { return v.dev || 0; },
      niveaux: { 3: "À tester", 2: "Utile", 1: "Marginal", 0: "Hors dev" },
      groupes: { 3: "À tester ou à approfondir", 2: "Bon éclairage technique", 1: "Peu ou pas technique" }
    }
  };

  var COURT = 180; // secondes : en dessous, la vidéo est marquée « Court »

  function usageLabel(k) {
    for (var i = 0; i < USAGES.length; i++) if (USAGES[i].k === k) return USAGES[i].label;
    return k;
  }

  function hasUsage(v, k) { return (v.usages || []).indexOf(k) !== -1; }
  function isCourt(v) { return !!(v.duree && v.duree < COURT); }

  function texte(v) {
    return u.norm([v.titre, v.chaine, v.resume, v.avis, v.avisDev || "", (v.points || []).join(" "), (v.tags || []).join(" ")].join(" "));
  }

  // state : { q, u, ch, lot, court } ; ignoreUsage sert au calcul des compteurs des tuiles
  function filtre(fiches, state, ignoreUsage) {
    var q = u.norm(state.q || "");
    return fiches.filter(function (v) {
      if (!ignoreUsage && state.u && !hasUsage(v, state.u)) return false;
      if (state.ch && v.chaine !== state.ch) return false;
      if (state.lot && v.lot !== state.lot) return false;
      if (state.court && !isCourt(v)) return false;
      return !q || texte(v).indexOf(q) !== -1;
    });
  }

  function trier(arr, tri, lensKey) {
    var sc = LENS[lensKey].score;
    return arr.sort(function (a, b) {
      if (tri === "recent") return b.lot.localeCompare(a.lot) || sc(b) - sc(a);
      if (tri === "duree") return (a.duree || 0) - (b.duree || 0);
      if (tri === "titre") return a.titre.localeCompare(b.titre, "fr");
      return sc(b) - sc(a) || b.lot.localeCompare(a.lot) || a.titre.localeCompare(b.titre, "fr");
    });
  }

  // Regroupe par niveau 3 / 2 / 1 (le 0 rejoint le 1)
  function grouper(arr, lensKey) {
    var sc = LENS[lensKey].score, g = { 3: [], 2: [], 1: [] };
    arr.forEach(function (v) { g[Math.max(1, sc(v))].push(v); });
    return g;
  }

  VIA.veille = VIA.veille || {};
  VIA.veille.model = {
    USAGES: USAGES, LENS: LENS, usageLabel: usageLabel, hasUsage: hasUsage, isCourt: isCourt,
    filtre: filtre, trier: trier, grouper: grouper
  };
})(window.VIA = window.VIA || {});
