/* Accès aux données chargées par les fichiers data/ (window.FORMATIONS, window.VEILLE, …).
   Les outils cités en formation et en veille sont fusionnés par nom. */
(function (VIA) {
  "use strict";
  var u = VIA.u;

  var FORMATIONS = (window.FORMATIONS || []).slice();
  // Plus récentes en premier ; sans date = en tête (en cours de rédaction)
  FORMATIONS.sort(function (a, b) { return (b.date || "9999").localeCompare(a.date || "9999"); });

  var VEILLE = (window.VEILLE || []).slice();
  var ANIMATIONS = window.ANIMATIONS || [];

  // Un outil cité en formation et en veille n'apparaît qu'une fois (rapprochement par nom ou par alias).
  function fusionOutils(deFormations, deVeille) {
    var out = [], index = {};
    function cle(nom) { return u.norm(nom).replace(/[^a-z0-9]/g, ""); }
    deFormations.forEach(function (o) {
      var x = { nom: o.nom, url: o.url, categorie: o.categorie, description: o.description, aVerifier: o.aVerifier,
        formations: (o.formations || []).slice(), videos: [], interet: o.interet || 0, donnees: o.donnees || "" };
      index[cle(o.nom)] = x; out.push(x);
    });
    deVeille.forEach(function (o) {
      var k = cle(o.nom), x = index[k] || (o.alias && index[cle(o.alias)]);
      if (x) {
        x.videos = x.videos.concat(o.videos || []);
        x.interet = Math.max(x.interet, o.interet || 0);
        if (!x.donnees) x.donnees = o.donnees || "";
        if (!x.url && o.url) x.url = o.url;
        return;
      }
      x = { nom: o.nom, url: o.url || "", categorie: o.categorie || "Repéré en veille", description: o.quoi,
        formations: [], videos: (o.videos || []).slice(), interet: o.interet || 0, donnees: o.donnees || "" };
      index[k] = x; out.push(x);
    });
    return out;
  }
  var OUTILS = fusionOutils(window.OUTILS || [], window.OUTILS_VEILLE || []);

  function findBy(arr, id) {
    for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i];
    return null;
  }

  VIA.data = {
    FORMATIONS: FORMATIONS,
    VEILLE: VEILLE,
    OUTILS: OUTILS,
    ANIMATIONS: ANIMATIONS,
    SYNTHESE: window.VEILLE_SYNTHESE || null,
    METHODE: window.METHODE || [],
    findFormation: function (id) { return findBy(FORMATIONS, id); },
    findFiche: function (id) { return findBy(VEILLE, id); },
    findSeance: function (id) { return findBy(ANIMATIONS, id); },
    outilsDeFormation: function (id) { return OUTILS.filter(function (o) { return o.formations.indexOf(id) !== -1; }); },
    outilsDeVideo: function (id) { return OUTILS.filter(function (o) { return o.videos.indexOf(id) !== -1; }); },
    videoUrl: function (v) { return v.url || "https://www.youtube.com/watch?v=" + v.id; }
  };
})(window.VIA = window.VIA || {});
