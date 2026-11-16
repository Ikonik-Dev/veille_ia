/* Page d'accueil (#/) : formations suivies et vidéos de veille prioritaires. */
(function (VIA) {
  "use strict";
  var u = VIA.u, d = VIA.data;

  function metaLine(f) {
    var items = [f.organisme, f.duree, f.format].filter(Boolean);
    return '<ul class="meta">' + items.map(function (x) { return "<li>" + u.esc(x) + "</li>"; }).join("") + "</ul>";
  }

  function formationCard(f) {
    return '<li class="card formation-card">' +
      '<span class="date-badge">' + u.esc(u.formatDate(f.date) || "Date à compléter") + "</span>" +
      '<h3><a href="#/formation/' + u.esc(f.id) + '">' + u.esc(f.titre) + "</a></h3>" +
      (f.sousTitre ? '<p class="sub">' + u.esc(f.sousTitre) + "</p>" : "") +
      metaLine(f) +
      (f.resume ? "<p>" + u.fmt(f.resume) + "</p>" : "") +
      u.tags(f.tags) +
      "</li>";
  }

  function ficheResume(v) {
    return '<li class="card vmini"><a href="#/veille/' + u.esc(v.id) + '">' + u.esc(v.titre) + "</a>" +
      '<span class="vmeta">' + u.esc(v.chaine) + " · " + u.esc(u.duree(v.duree)) + "</span>" +
      "<p>" + u.esc(v.resume) + "</p></li>";
  }

  function view() {
    u.setNav("accueil");
    document.title = "Veille IA — Formations et veille technique";
    // Fiches d'intérêt élevé pour la structure, les plus récentes d'abord
    var top = d.VEILLE.filter(function (v) { return v.interet === 3; })
      .sort(function (a, b) { return b.lot.localeCompare(a.lot); });
    var cards = d.FORMATIONS.map(formationCard).join("");
    var nbF = d.FORMATIONS.length;

    VIA.main.innerHTML =
      '<section class="hero">' +
        "<h1>Ce que j'apprends sur l'IA, partagé avec l'équipe</h1>" +
        "<p>Deux sources réunies : les formations suivies (notes structurées et outils présentés) et une veille sur des vidéos YouTube, chacune résumée avec un avis sur son utilité pour la structure.</p>" +
        '<ul class="stats">' +
          "<li><b>" + nbF + "</b><span>formation" + (nbF > 1 ? "s" : "") + "</span></li>" +
          "<li><b>" + d.VEILLE.length + "</b><span>fiches de veille</span></li>" +
          "<li><b>" + d.OUTILS.length + "</b><span>outils référencés</span></li>" +
        "</ul>" +
      "</section>" +
      '<div class="section-title"><h2>Formations suivies</h2><a href="#/outils">Voir la boîte à outils →</a></div>' +
      (cards ? '<ol class="timeline">' + cards + "</ol>" : '<p class="empty">Aucune formation pour le moment.</p>') +
      '<div class="section-title"><h2>Veille : les vidéos à voir en priorité</h2><a href="#/veille">Toute la veille →</a></div>' +
      (top.length ? '<ul class="vlist">' + top.map(ficheResume).join("") + "</ul>" : '<p class="empty">Aucune fiche pour le moment.</p>');
  }

  VIA.router.add("accueil", view);
})(window.VIA = window.VIA || {});
