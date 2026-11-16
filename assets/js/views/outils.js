/* Boîte à outils (#/outils/<nom>) : outils vus en formation et repérés en veille.
   Expose VIA.outils.grid(), réutilisé par l'onglet « Outils » d'une formation. */
(function (VIA) {
  "use strict";
  var u = VIA.u, d = VIA.data;
  var INTERET = { 3: "Intérêt élevé", 2: "Intérêt moyen", 1: "Intérêt faible" };

  function badge(i) { return '<span class="badge i' + i + '">' + u.esc(INTERET[i] || "") + "</span>"; }

  function card(o) {
    var from = o.formations.map(d.findFormation).filter(Boolean).map(function (f) {
      return '<a href="#/formation/' + u.esc(f.id) + '">' + u.esc(f.titre) + "</a>";
    }).concat(o.videos.map(d.findFiche).filter(Boolean).map(function (v) {
      return '<a href="#/veille/' + u.esc(v.id) + '">' + u.esc(v.titre) + "</a>";
    })).join(" · ");
    var nom = o.url ? '<a href="' + u.esc(o.url) + '" target="_blank" rel="noopener">' + u.esc(o.nom) + "</a>" : u.esc(o.nom);
    return '<li class="card tool' + (o.aVerifier ? " warn" : "") + '" id="o-' + u.esc(u.slug(o.nom)) + '">' +
      '<div class="tool-top"><span class="tool-icon" aria-hidden="true">' + u.esc(o.nom.charAt(0)) + "</span>" +
      "<div><h3>" + nom + "</h3>" +
      '<span class="tag">' + u.esc(o.categorie) + "</span>" +
      (o.donnees ? ' <span class="tag data-' + u.esc(u.slug(o.donnees)) + '" title="Où vont les données">' + u.esc(o.donnees) + "</span>" : "") +
      (o.interet ? " " + badge(o.interet) : "") +
      (o.aVerifier ? ' <span class="badge-warn">À vérifier</span>' : "") + "</div></div>" +
      "<p>" + u.fmt(o.description) + "</p>" +
      (from ? '<span class="from">Vu dans : ' + from + "</span>" : "") +
      "</li>";
  }

  function grid(arr) {
    if (!arr.length) return '<p class="empty">Aucun outil ne correspond.</p>';
    return '<ul class="tools-grid">' + arr.map(card).join("") + "</ul>";
  }

  // Outils vérifiés d'abord, puis vus en formation, puis par intérêt et par nom
  function compare(a, b) {
    return (a.aVerifier ? 1 : 0) - (b.aVerifier ? 1 : 0) ||
      (b.formations.length ? 1 : 0) - (a.formations.length ? 1 : 0) ||
      (b.interet || 0) - (a.interet || 0) || a.nom.localeCompare(b.nom, "fr");
  }

  function view(args) {
    var focus = args[0];
    u.setNav("outils");
    document.title = "Boîte à outils — Veille IA";
    var cats = [];
    d.OUTILS.forEach(function (o) { if (cats.indexOf(o.categorie) === -1) cats.push(o.categorie); });
    cats.sort(function (a, b) { return a.localeCompare(b, "fr"); });
    var state = { q: "", cat: "", src: "", data: "" };
    var main = VIA.main;

    main.innerHTML =
      '<section class="hero"><h1>Boîte à outils</h1><p>Les outils présentés en formation ou repérés en veille. L\'indication « Local / Variable / En ligne » dit où partent les données. Avant d\'y mettre des données de personnes accompagnées ou de collègues : vérifier avec le DPO.</p></section>' +
      '<div class="toolbar">' +
        '<input class="search" type="search" placeholder="Rechercher un outil, un usage…" aria-label="Rechercher un outil">' +
        '<div class="chips" role="group" aria-label="Filtrer par origine">' +
          '<button class="chip" aria-pressed="true" data-src="">Toutes origines</button>' +
          '<button class="chip" aria-pressed="false" data-src="f">Vus en formation</button>' +
          '<button class="chip" aria-pressed="false" data-src="v">Repérés en veille</button>' +
        "</div>" +
        '<div class="selects">' +
          '<label class="sel"><span>Catégorie</span><select id="t-cat"><option value="">Toutes</option>' + cats.map(function (c) { return '<option value="' + u.esc(c) + '">' + u.esc(c) + "</option>"; }).join("") + "</select></label>" +
          '<label class="sel"><span>Données</span><select id="t-data"><option value="">Toutes</option><option>Local</option><option>Variable</option><option>En ligne</option></select></label>' +
        "</div>" +
      "</div>" +
      '<p class="count" id="tcount" aria-live="polite"></p>' +
      '<div id="tools-out"></div>';

    var out = document.getElementById("tools-out");
    function render() {
      var q = u.norm(state.q);
      var arr = d.OUTILS.filter(function (o) {
        if (state.cat && o.categorie !== state.cat) return false;
        if (state.data && o.donnees !== state.data) return false;
        if (state.src === "f" && !o.formations.length) return false;
        if (state.src === "v" && !o.videos.length) return false;
        if (!q) return true;
        return u.norm(o.nom + " " + o.description + " " + o.categorie).indexOf(q) !== -1;
      }).sort(compare);
      document.getElementById("tcount").textContent = arr.length + " outil" + (arr.length > 1 ? "s" : "");
      out.innerHTML = grid(arr);
    }
    main.querySelector(".search").addEventListener("input", function (e) { state.q = e.target.value; render(); });
    main.querySelectorAll("[data-src]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.src = b.getAttribute("data-src");
        main.querySelectorAll("[data-src]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        render();
      });
    });
    document.getElementById("t-cat").addEventListener("change", function (e) { state.cat = e.target.value; render(); });
    document.getElementById("t-data").addEventListener("change", function (e) { state.data = e.target.value; render(); });
    render();
    if (focus) {
      var el = document.getElementById("o-" + focus);
      if (el) { el.classList.add("focus"); el.scrollIntoView({ block: "center" }); return true; }
    }
    return false;
  }

  VIA.outils = { grid: grid };
  VIA.router.add("outils", view);
})(window.VIA = window.VIA || {});
