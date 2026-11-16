/* Veille — rendu d'une fiche : badge de niveau, ligne de liste, détail complet (panneau). */
(function (VIA) {
  "use strict";
  var u = VIA.u, d = VIA.data, m = VIA.veille.model;

  function badge(lensKey, s) {
    var l = m.LENS[lensKey];
    return '<span class="badge i' + Math.max(1, s) + '" title="' + u.esc(l.label) + '">' + l.prefixe + u.esc(l.niveaux[s]) + "</span>";
  }

  function row(v, lensKey, dernierLot) {
    var s = m.LENS[lensKey].score(v);
    var flags = (m.isCourt(v) ? '<span class="flag">Court</span>' : "") +
      (v.lot === dernierLot ? '<span class="flag new">Nouveau</span>' : "");
    return '<li><button class="vrow s' + s + '" data-id="' + u.esc(v.id) + '" aria-haspopup="dialog">' +
      '<span class="pip p' + s + '" aria-hidden="true"></span>' +
      '<span class="vr-main"><span class="vr-title">' + u.esc(v.titre) + "</span>" +
      '<span class="vmeta">' + u.esc(v.chaine) + " · " + u.esc(u.duree(v.duree)) + " · " + u.esc((v.usages || []).map(m.usageLabel).join(", ")) + "</span></span>" +
      '<span class="vr-side">' + flags + badge(lensKey, s) + "</span>" +
    "</button></li>";
  }

  function detail(v) {
    var outils = d.outilsDeVideo(v.id);
    return '<header class="vp-head">' +
        '<p class="vmeta">' + u.esc(v.chaine) + " · " + u.esc(u.duree(v.duree)) + " · " + u.esc(v.categorie) + " · ajoutée le " + u.esc(u.formatDate(v.lot)) + "</p>" +
        '<h2 id="vp-title">' + u.esc(v.titre) + "</h2>" +
        '<p class="vp-badges">' + badge("structure", v.interet || 0) + " " + badge("dev", v.dev || 0) +
          (v.usages || []).map(function (k) { return ' <span class="tag">' + u.esc(m.usageLabel(k)) + "</span>"; }).join("") + "</p>" +
      "</header>" +
      '<div class="prose">' +
        '<p class="vp-resume">' + u.esc(v.resume) + "</p>" +
        "<h3>Points clés</h3>" + u.list(v.points) +
        '<div class="callout"><strong>Pour la structure :</strong> ' + u.esc(v.avis) + "</div>" +
        (v.avisDev ? '<div class="callout dev"><strong>Pour le dev :</strong> ' + u.esc(v.avisDev) + "</div>" : "") +
        (outils.length ? '<p class="vtools"><strong>Outils cités :</strong> ' + outils.map(function (o) { return '<a href="#/outils/' + u.esc(u.slug(o.nom)) + '">' + u.esc(o.nom) + "</a>"; }).join(", ") + "</p>" : "") +
        u.tags(v.tags) +
        '<p><a class="watch" href="' + u.esc(d.videoUrl(v)) + '" target="_blank" rel="noopener">' + (v.url ? "Voir le post sur YouTube" : "Voir la vidéo sur YouTube") + "</a></p>" +
      "</div>";
  }

  VIA.veille.fiche = { badge: badge, row: row, detail: detail };
})(window.VIA = window.VIA || {});
