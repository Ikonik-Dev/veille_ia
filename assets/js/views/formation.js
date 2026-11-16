/* Fiche d'une formation (#/formation/<id>/<onglet>/<ancre>) : notes, à retenir, programme, outils, liens. */
(function (VIA) {
  "use strict";
  var u = VIA.u, d = VIA.data;

  // Contenu de chaque onglet
  var PANELS = {
    notes: function (f) {
      var toc = f.notes.map(function (s) {
        return '<li><a href="#/formation/' + u.esc(f.id) + "/notes/" + u.slug(s.titre) + '">' + u.esc(s.titre) + "</a></li>";
      }).join("");
      var body = f.notes.map(function (s, i) {
        return '<section class="note-section prose" id="' + u.slug(s.titre) + '">' +
          '<h2><span class="num">' + String(i + 1).padStart(2, "0") + "</span>" + u.esc(s.titre) + "</h2>" +
          (s.citation ? '<blockquote class="quote">« ' + u.fmt(s.citation.texte) + " »<cite>— " + u.esc(s.citation.auteur) + "</cite></blockquote>" : "") +
          (s.intro ? "<p>" + u.fmt(s.intro) + "</p>" : "") +
          u.list(s.points) +
          (s.encadre ? '<div class="callout">' + u.fmt(s.encadre) + "</div>" : "") +
          "</section>";
      }).join("");
      return '<div class="layout-notes"><nav class="toc" aria-label="Sommaire des notes"><p>Sommaire</p><ol>' + toc + "</ol></nav><div>" + body + "</div></div>";
    },
    retenir: function (f) {
      return '<div class="card"><ol class="keypoints">' + f.aRetenir.map(function (x) { return "<li><div>" + u.fmt(x) + "</div></li>"; }).join("") + "</ol></div>";
    },
    programme: function (f) {
      var html = "";
      if (f.objectifs && f.objectifs.length) {
        html += '<h2>Objectifs</h2><ul class="objectifs prose">' + f.objectifs.map(function (o) { return "<li>" + u.fmt(o) + "</li>"; }).join("") + "</ul>";
      }
      if (f.programme && f.programme.length) {
        html += '<h2 style="margin-top:28px">Contenu</h2><div class="modules">' + f.programme.map(function (m) {
          return '<div class="card"><h3>' + u.esc(m.titre) + "</h3>" + u.list(m.points) + "</div>";
        }).join("") + "</div>";
      }
      return html;
    },
    outils: function (f, outils) { return VIA.outils.grid(outils); },
    liens: function (f) {
      return '<ul class="links">' + f.liens.map(function (l) {
        return '<li><a href="' + u.esc(l.url) + '" target="_blank" rel="noopener">' + u.esc(l.titre) + "</a></li>";
      }).join("") + "</ul>";
    }
  };

  function facts(f) {
    return [
      ["Date", u.formatDate(f.date) || "À compléter"],
      ["Organisme", f.organisme], ["Intervenant", f.intervenant],
      ["Durée", f.duree], ["Format", f.format]
    ].filter(function (x) { return x[1]; }).map(function (x) {
      return "<div><dt>" + u.esc(x[0]) + "</dt><dd>" + u.esc(x[1]) + "</dd></div>";
    }).join("");
  }

  function view(args) {
    var f = d.findFormation(args[0]);
    if (!f) return VIA.router.notFound();
    var tab = args[1];
    u.setNav("accueil");
    document.title = f.titre + " — Veille IA";
    var outils = d.outilsDeFormation(f.id);

    var tabsDef = [
      { key: "notes", label: "Mes notes", show: f.notes && f.notes.length },
      { key: "retenir", label: "À retenir", show: f.aRetenir && f.aRetenir.length },
      { key: "programme", label: "Programme", show: (f.programme && f.programme.length) || (f.objectifs && f.objectifs.length) },
      { key: "outils", label: "Outils", count: outils.length, show: outils.length },
      { key: "liens", label: "Liens", count: (f.liens || []).length, show: f.liens && f.liens.length }
    ].filter(function (t) { return t.show; });
    if (!tabsDef.some(function (t) { return t.key === tab; })) tab = tabsDef.length ? tabsDef[0].key : "";

    var main = VIA.main;
    main.innerHTML =
      '<a class="back" href="#/">← Accueil</a>' +
      '<header class="f-head">' +
        "<h1>" + u.esc(f.titre) + "</h1>" +
        (f.sousTitre ? '<p class="sub">' + u.esc(f.sousTitre) + "</p>" : "") +
        (f.resume ? "<p>" + u.fmt(f.resume) + "</p>" : "") +
        '<dl class="facts">' + facts(f) + "</dl>" +
        u.tags(f.tags) +
      "</header>" +
      '<div class="tabs" role="tablist">' + tabsDef.map(function (t) {
        return '<button role="tab" id="tab-' + t.key + '" aria-controls="panel-' + t.key + '" aria-selected="' + (t.key === tab) + '" data-tab="' + t.key + '">' +
          u.esc(t.label) + (t.count ? '<span class="count">' + t.count + "</span>" : "") + "</button>";
      }).join("") + "</div>" +
      tabsDef.map(function (t) {
        return '<section role="tabpanel" id="panel-' + t.key + '" aria-labelledby="tab-' + t.key + '"' + (t.key === tab ? "" : " hidden") + ">" + PANELS[t.key](f, outils) + "</section>";
      }).join("");

    main.querySelectorAll("[data-tab]").forEach(function (b) {
      b.addEventListener("click", function () {
        history.replaceState(null, "", "#/formation/" + f.id + "/" + b.getAttribute("data-tab"));
        main.querySelectorAll("[data-tab]").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
        main.querySelectorAll('[role="tabpanel"]').forEach(function (p) { p.hidden = p.id !== "panel-" + b.getAttribute("data-tab"); });
      });
    });
    return { anchor: args[2] };
  }

  VIA.router.add("formation", view);
})(window.VIA = window.VIA || {});
