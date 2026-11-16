/* Animer — contenu HTML des onglets d'une séance (déroulé, questions, définitions, plan B, avant / après). */
(function (VIA) {
  "use strict";
  var u = VIA.u;

  function heure(h) { return h.replace(":", " h "); }

  function demo(d, i) {
    var prompts = [d.prompt].concat(d.suite || []);
    return '<div class="demo"><h4>' + u.esc(d.nom) + ' <span class="vmeta">' + d.duree + " min</span></h4>" +
      prompts.map(function (p, j) {
        return '<div class="prompt"><p>' + u.esc(p) + '</p><button class="chip copy" data-copy="' + i + "-" + j + '">Copier</button></div>';
      }).join("") +
      '<p class="observe"><strong>On observe :</strong> ' + u.esc(d.observer) + "</p></div>";
  }

  function etape(s, e, n) {
    return '<p class="step-meta">Étape ' + (n + 1) + " / " + s.etapes.length + " · prévue à " + u.esc(heure(e.heure)) + " · " + e.duree + " min · diapos " + u.esc(e.diapos) + "</p>" +
      "<h2>" + u.esc(e.titre) + "</h2>" +
      '<p class="key">' + u.esc(e.message) + "</p>" +
      u.list(e.points) +
      (e.demos || []).map(demo).join("");
  }

  function deroule(s, cur) {
    var next = s.etapes[cur + 1];
    return '<div class="guide">' +
      '<nav class="steps" aria-label="Étapes">' + s.etapes.map(function (e, n) {
        return '<button class="stepbtn' + (n === cur ? " on" : "") + '" data-step="' + n + '"><b>' + u.esc(heure(e.heure)) + "</b> " + u.esc(e.titre) + "</button>";
      }).join("") + "</nav>" +
      '<article class="card step prose" aria-live="polite">' + etape(s, s.etapes[cur], cur) +
      '<div class="stepnav"><button class="chip" data-move="-1"' + (cur === 0 ? " disabled" : "") + '>← Précédente</button>' +
      '<button class="chip" data-move="1"' + (cur === s.etapes.length - 1 ? " disabled" : "") + '>Suivante →</button></div>' +
      (next ? '<p class="next">Ensuite, à ' + u.esc(heure(next.heure)) + " : " + u.esc(next.titre) + "</p>" : "") +
      "</article></div>";
  }

  function qa(q) { return '<details class="card qa"><summary>' + u.esc(q.q) + "</summary><p>" + u.esc(q.r) + "</p></details>"; }

  function questions(s) {
    var themes = [];
    s.questions.forEach(function (q) { if (themes.indexOf(q.theme) === -1) themes.push(q.theme); });
    return '<input class="search" type="search" placeholder="Chercher une question…" aria-label="Chercher une question">' +
      themes.map(function (t) {
        return '<section class="qtheme"><h3>' + u.esc(t) + "</h3>" + s.questions.filter(function (q) { return q.theme === t; }).map(qa).join("") + "</section>";
      }).join("") +
      '<div class="callout">Si je ne sais pas : « Je vérifie et je vous réponds. » Noter la question, répondre par mail ou en début de séance suivante.</div>';
  }

  function definitions(s) {
    return '<dl class="glossary">' + s.definitions.map(function (d) { return "<div><dt>" + u.esc(d[0]) + "</dt><dd>" + u.esc(d[1]) + "</dd></div>"; }).join("") + "</dl>";
  }

  function planB(s) {
    return '<div class="callout"><strong>À ne jamais couper :</strong> ' + u.esc(s.intouchables) + "</div>" +
      "<h3>Si je suis en retard, je raccourcis dans cet ordre</h3><ol>" + s.coupes.map(function (c) { return "<li>" + u.esc(c) + "</li>"; }).join("") + "</ol>" +
      "<h3>Si une démo plante</h3>" + s.incidents.map(qa).join("");
  }

  function checklist(items) {
    return '<ul class="checks">' + items.map(function (a) { return '<li><label><input type="checkbox"> ' + u.esc(a) + "</label></li>"; }).join("") + "</ul>";
  }

  function avantApres(s) {
    return "<h3>Règles de la séance</h3><ol>" + s.regles.map(function (r) { return "<li>" + u.esc(r) + "</li>"; }).join("") + "</ol>" +
      "<h3>Avant</h3>" + checklist(s.avant) +
      "<h3>Après</h3>" + checklist(s.apres);
  }

  VIA.animer = VIA.animer || {};
  VIA.animer.contenu = {
    heure: heure,
    onglets: [["deroule", "Déroulé"], ["questions", "Questions"], ["mots", "Définitions"], ["planb", "Plan B"], ["avant", "Avant / après"]],
    rendre: function (tab, s, cur) {
      if (tab === "deroule") return deroule(s, cur);
      if (tab === "questions") return questions(s);
      if (tab === "mots") return definitions(s);
      if (tab === "planb") return planB(s);
      return avantApres(s);
    }
  };
})(window.VIA = window.VIA || {});
