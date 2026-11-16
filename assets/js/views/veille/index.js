/* Veille — page #/veille et #/veille/<id> : chiffres, bascule structure / dev, tuiles par usage,
   filtres, liste groupée par priorité, synthèse et panneau de fiche. */
(function (VIA) {
  "use strict";
  var u = VIA.u, d = VIA.data, m = VIA.veille.model, fiche = VIA.veille.fiche;

  function lotsEtChaines() {
    var chaines = {}, lots = [];
    d.VEILLE.forEach(function (v) {
      chaines[v.chaine] = (chaines[v.chaine] || 0) + 1;
      if (lots.indexOf(v.lot) === -1) lots.push(v.lot);
    });
    lots.sort().reverse();
    var chaineList = Object.keys(chaines).sort(function (a, b) { return chaines[b] - chaines[a] || a.localeCompare(b, "fr"); });
    return { lots: lots, chaines: chaines, chaineList: chaineList };
  }

  // Chiffres calculés à partir des fiches : ils ne peuvent pas se périmer
  function statsHtml(dernier) {
    var V = d.VEILLE;
    var n = function (f) { return V.filter(f).length; };
    return '<ul class="stats">' +
      "<li><b>" + V.length + "</b><span>fiches</span></li>" +
      "<li><b>" + n(function (v) { return v.interet === 3; }) + "</b><span>à voir pour la structure</span></li>" +
      "<li><b>" + n(function (v) { return v.dev === 3; }) + "</b><span>à tester pour le dev</span></li>" +
      (dernier ? "<li><b>" + n(function (v) { return v.lot === dernier; }) + "</b><span>ajoutées le " + u.esc(u.formatDate(dernier)) + "</span></li>" : "") +
      "</ul>";
  }

  function syntheseHtml() {
    var S = d.SYNTHESE;
    if (!S) return "";
    var bloc = function (titre, items) { return '<details class="card"><summary><h2>' + titre + "</h2></summary>" + u.list(items) + "</details>"; };
    return '<section class="synthese">' + bloc("L'essentiel", S.essentiel) + bloc("Tendances", S.tendances) + bloc("Points de vigilance", S.vigilance) + "</section>";
  }

  function select(id, label, opts) {
    return '<label class="sel"><span>' + u.esc(label) + '</span><select id="' + id + '"><option value="">Tous</option>' +
      opts.map(function (o) { return '<option value="' + u.esc(o[0]) + '">' + u.esc(o[1]) + "</option>"; }).join("") + "</select></label>";
  }

  function toolbarHtml(meta) {
    return '<div class="toolbar">' +
      '<input class="search" type="search" placeholder="Rechercher un sujet, un outil, une chaîne…" aria-label="Rechercher dans la veille">' +
      '<div class="selects">' +
        select("f-ch", "Chaîne", meta.chaineList.map(function (c) { return [c, c + " (" + meta.chaines[c] + ")"]; })) +
        select("f-lot", "Ajout", meta.lots.map(function (l) { return [l, u.formatDate(l)]; })) +
        '<label class="sel"><span>Tri</span><select id="f-tri"><option value="score">Par intérêt</option><option value="recent">Ajouts récents</option><option value="duree">Plus courtes</option><option value="titre">Titre</option></select></label>' +
        '<label class="check"><input type="checkbox" id="f-court"> Vidéos courtes seulement</label>' +
      "</div>" +
    "</div>";
  }

  function lensHtml(lens) {
    return '<div class="lens" role="group" aria-label="Lecture des notes">' +
      Object.keys(m.LENS).map(function (k) {
        return '<button class="lens-btn" data-lens="' + k + '" aria-pressed="' + (k === lens) + '">' + u.esc(m.LENS[k].label) + "</button>";
      }).join("") + "</div>";
  }

  function usagesHtml(base, state, lens) {
    var L = m.LENS[lens];
    return m.USAGES.map(function (us) {
      var arr = base.filter(function (v) { return m.hasUsage(v, us.k); });
      var top = arr.filter(function (v) { return L.score(v) === 3; }).length;
      return '<li><button class="usage" data-u="' + us.k + '" aria-pressed="' + (state.u === us.k) + '">' +
        '<span class="u-label">' + u.esc(us.label) + "</span>" +
        '<span class="u-sub">' + u.esc(us.sub) + "</span>" +
        '<span class="u-count"><b>' + arr.length + "</b> fiche" + (arr.length > 1 ? "s" : "") +
        (top ? ' · <b class="u-top">' + top + "</b> " + L.top : "") + "</span>" +
      "</button></li>";
    }).join("");
  }

  function listHtml(arr, state, lens, dernier) {
    if (!arr.length) return '<p class="empty">Aucune fiche ne correspond.</p>';
    var rows = function (items) { return '<ul class="vrows">' + items.map(function (v) { return fiche.row(v, lens, dernier); }).join("") + "</ul>"; };
    if (state.tri !== "score") return rows(arr);
    var g = m.grouper(arr, lens);
    return [3, 2, 1].filter(function (k) { return g[k].length; }).map(function (k) {
      return '<section class="vgroup g' + k + '"><h2 class="vg-title">' + u.esc(m.LENS[lens].groupes[k]) + ' <span class="vmeta">' + g[k].length + "</span></h2>" + rows(g[k]) + "</section>";
    }).join("");
  }

  function countText(arr, state, lens) {
    var total = d.VEILLE.length;
    return (arr.length === total ? total + " fiches" : arr.length + " fiche" + (arr.length > 1 ? "s" : "") + " sur " + total) +
      (state.u ? " · " + m.usageLabel(state.u) : "") + " · classées « " + m.LENS[lens].label.toLowerCase() + " »";
  }

  function view(args) {
    var openId = args[0];
    u.setNav("veille");
    document.title = "Veille vidéo — Veille IA";
    var meta = lotsEtChaines(), dernier = meta.lots[0] || "";
    var lens = u.store("veille:lens") === "dev" ? "dev" : "structure";
    var state = { q: "", u: "", ch: "", lot: "", court: false, tri: "score" };
    var main = VIA.main;

    main.innerHTML =
      '<section class="hero"><h1>Veille vidéo</h1><p>Des vidéos YouTube sur l\'IA, résumées à partir de leurs sous-titres. Chaque fiche a deux avis : son utilité pour la structure et son intérêt pour le développeur. Les affirmations des vidéos sont rapportées, pas validées.</p>' + statsHtml(dernier) + "</section>" +
      lensHtml(lens) +
      '<ul class="usages" id="usages"></ul>' +
      toolbarHtml(meta) +
      '<p class="count" id="vcount" aria-live="polite"></p>' +
      '<div id="vlist"></div>' +
      syntheseHtml() +
      VIA.veille.panel.html();

    var panel = VIA.veille.panel.create();
    var out = document.getElementById("vlist"), tiles = document.getElementById("usages");

    function render() {
      var arr = m.trier(m.filtre(d.VEILLE, state, false), state.tri, lens);
      document.getElementById("vcount").textContent = countText(arr, state, lens);
      out.innerHTML = listHtml(arr, state, lens, dernier);
      tiles.innerHTML = usagesHtml(m.filtre(d.VEILLE, state, true), state, lens);
    }

    // Délégation d'événements : les listes sont redessinées à chaque filtre
    out.addEventListener("click", function (e) {
      var b = e.target.closest("[data-id]");
      var v = b && d.findFiche(b.getAttribute("data-id"));
      if (v) panel.open(v, b);
    });
    tiles.addEventListener("click", function (e) {
      var b = e.target.closest("[data-u]");
      if (!b) return;
      var k = b.getAttribute("data-u");
      state.u = state.u === k ? "" : k;
      render();
    });
    main.querySelectorAll("[data-lens]").forEach(function (b) {
      b.addEventListener("click", function () {
        lens = b.getAttribute("data-lens");
        u.store("veille:lens", lens);
        main.querySelectorAll("[data-lens]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        render();
      });
    });
    main.querySelector(".search").addEventListener("input", function (e) { state.q = e.target.value; render(); });
    [["f-ch", "ch"], ["f-lot", "lot"], ["f-tri", "tri"]].forEach(function (p) {
      document.getElementById(p[0]).addEventListener("change", function (e) { state[p[1]] = e.target.value; render(); });
    });
    document.getElementById("f-court").addEventListener("change", function (e) { state.court = e.target.checked; render(); });

    render();
    var initial = openId && d.findFiche(openId);
    if (initial) panel.open(initial, null);
    return false;
  }

  VIA.router.add("veille", view);
})(window.VIA = window.VIA || {});
