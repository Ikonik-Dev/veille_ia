/* Veille IA — rendu du site (aucune dépendance).
   Contenus : data/formations.js (formations et leurs outils) et data/veille.js (fiches vidéo et leurs outils). */
(function () {
  "use strict";

  var FORMATIONS = (window.FORMATIONS || []).slice();
  var VEILLE = (window.VEILLE || []).slice();
  var SYNTHESE = window.VEILLE_SYNTHESE || null;
  var OUTILS = fusionOutils(window.OUTILS || [], window.OUTILS_VEILLE || []);
  var main = document.getElementById("main");

  var INTERET = { 3: "Intérêt élevé", 2: "Intérêt moyen", 1: "Intérêt faible" };

  /* ---------- Utilitaires ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Mise en forme légère : **gras** et [lien](url)
  function fmt(s) {
    return esc(s)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  }
  var MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  function formatDate(d) {
    if (!d) return "";
    var parts = d.split("-");
    if (parts.length === 3) return parseInt(parts[2], 10) + " " + MOIS[parseInt(parts[1], 10) - 1] + " " + parts[0];
    if (parts.length === 2) return MOIS[parseInt(parts[1], 10) - 1] + " " + parts[0];
    return d;
  }
  function duree(sec) {
    if (!sec) return "Post";
    var h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    if (h) return h + " h " + String(m).padStart(2, "0");
    if (m) return m + " min" + (m < 3 && s ? " " + s + " s" : "");
    return s + " s";
  }
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function slug(s) { return norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }
  function list(items) {
    if (!items || !items.length) return "";
    return "<ul>" + items.map(function (it) {
      if (typeof it === "string") return "<li>" + fmt(it) + "</li>";
      return "<li>" + fmt(it.t) + list(it.sous) + "</li>";
    }).join("") + "</ul>";
  }
  function findFormation(id) {
    for (var i = 0; i < FORMATIONS.length; i++) if (FORMATIONS[i].id === id) return FORMATIONS[i];
    return null;
  }
  function findFiche(id) {
    for (var i = 0; i < VEILLE.length; i++) if (VEILLE[i].id === id) return VEILLE[i];
    return null;
  }
  function outilsDe(id) {
    return OUTILS.filter(function (o) { return o.formations.indexOf(id) !== -1; });
  }
  function setNav(key) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }
  function tags(t) {
    if (!t || !t.length) return "";
    return '<ul class="tags">' + t.map(function (x) { return '<li class="tag">' + esc(x) + "</li>"; }).join("") + "</ul>";
  }
  function badge(i) { return '<span class="badge i' + i + '">' + esc(INTERET[i] || "") + "</span>"; }
  function videoUrl(v) { return v.url || "https://www.youtube.com/watch?v=" + v.id; }

  // Un outil cité en formation et en veille n'apparaît qu'une fois (rapprochement par nom).
  function fusionOutils(deFormations, deVeille) {
    var out = [], index = {};
    function cle(nom) { return norm(nom).replace(/[^a-z0-9]/g, ""); }
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

  // Plus récentes en premier ; sans date = en tête (en cours de rédaction)
  FORMATIONS.sort(function (a, b) { return (b.date || "9999").localeCompare(a.date || "9999"); });

  /* ---------- Accueil ---------- */
  function metaLine(f) {
    var items = [f.organisme, f.duree, f.format].filter(Boolean);
    return '<ul class="meta">' + items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>";
  }

  function viewAccueil() {
    setNav("accueil");
    document.title = "Veille IA — Formations et veille technique";
    var top = VEILLE.filter(function (v) { return v.interet === 3; });
    var cards = FORMATIONS.map(function (f) {
      return '<li class="card formation-card">' +
        '<span class="date-badge">' + esc(formatDate(f.date) || "Date à compléter") + "</span>" +
        '<h3><a href="#/formation/' + esc(f.id) + '">' + esc(f.titre) + "</a></h3>" +
        (f.sousTitre ? '<p class="sub">' + esc(f.sousTitre) + "</p>" : "") +
        metaLine(f) +
        (f.resume ? "<p>" + fmt(f.resume) + "</p>" : "") +
        tags(f.tags) +
        "</li>";
    }).join("");

    main.innerHTML =
      '<section class="hero">' +
        "<h1>Ce que j'apprends sur l'IA, partagé avec l'équipe</h1>" +
        "<p>Deux sources réunies : les formations suivies (notes structurées et outils présentés) et une veille sur des vidéos YouTube, chacune résumée avec un avis sur son utilité pour la structure.</p>" +
        '<ul class="stats">' +
          "<li><b>" + FORMATIONS.length + "</b><span>formation" + (FORMATIONS.length > 1 ? "s" : "") + "</span></li>" +
          "<li><b>" + VEILLE.length + "</b><span>fiches de veille</span></li>" +
          "<li><b>" + OUTILS.length + "</b><span>outils référencés</span></li>" +
        "</ul>" +
      "</section>" +
      '<div class="section-title"><h2>Formations suivies</h2><a href="#/outils">Voir la boîte à outils →</a></div>' +
      (cards ? '<ol class="timeline">' + cards + "</ol>" : '<p class="empty">Aucune formation pour le moment.</p>') +
      '<div class="section-title"><h2>Veille : les vidéos à voir en priorité</h2><a href="#/veille">Toute la veille →</a></div>' +
      (top.length ? '<ul class="vlist">' + top.map(ficheResume).join("") + "</ul>" : '<p class="empty">Aucune fiche pour le moment.</p>');
  }

  function ficheResume(v) {
    return '<li class="card vmini"><a href="#/veille/' + esc(v.id) + '">' + esc(v.titre) + "</a>" +
      '<span class="vmeta">' + esc(v.chaine) + " · " + esc(duree(v.duree)) + "</span>" +
      "<p>" + esc(v.resume) + "</p></li>";
  }

  /* ---------- Fiche formation ---------- */
  function viewFormation(id, tab) {
    var f = findFormation(id);
    if (!f) return viewNotFound();
    setNav("accueil");
    document.title = f.titre + " — Veille IA";
    var outils = outilsDe(f.id);

    var tabsDef = [
      { key: "notes", label: "Mes notes", show: f.notes && f.notes.length },
      { key: "retenir", label: "À retenir", show: f.aRetenir && f.aRetenir.length },
      { key: "programme", label: "Programme", show: (f.programme && f.programme.length) || (f.objectifs && f.objectifs.length) },
      { key: "outils", label: "Outils", count: outils.length, show: outils.length },
      { key: "liens", label: "Liens", count: (f.liens || []).length, show: f.liens && f.liens.length }
    ].filter(function (t) { return t.show; });
    if (!tabsDef.some(function (t) { return t.key === tab; })) tab = tabsDef.length ? tabsDef[0].key : "";

    var facts = [
      ["Date", formatDate(f.date) || "À compléter"],
      ["Organisme", f.organisme], ["Intervenant", f.intervenant],
      ["Durée", f.duree], ["Format", f.format]
    ].filter(function (x) { return x[1]; }).map(function (x) {
      return "<div><dt>" + esc(x[0]) + "</dt><dd>" + esc(x[1]) + "</dd></div>";
    }).join("");

    var panels = {
      notes: function () {
        var toc = f.notes.map(function (s) {
          return '<li><a href="#/formation/' + esc(f.id) + "/notes/" + slug(s.titre) + '">' + esc(s.titre) + "</a></li>";
        }).join("");
        var body = f.notes.map(function (s, i) {
          return '<section class="note-section prose" id="' + slug(s.titre) + '">' +
            '<h2><span class="num">' + String(i + 1).padStart(2, "0") + "</span>" + esc(s.titre) + "</h2>" +
            (s.citation ? '<blockquote class="quote">« ' + fmt(s.citation.texte) + " »<cite>— " + esc(s.citation.auteur) + "</cite></blockquote>" : "") +
            (s.intro ? "<p>" + fmt(s.intro) + "</p>" : "") +
            list(s.points) +
            (s.encadre ? '<div class="callout">' + fmt(s.encadre) + "</div>" : "") +
            "</section>";
        }).join("");
        return '<div class="layout-notes"><nav class="toc" aria-label="Sommaire des notes"><p>Sommaire</p><ol>' + toc + "</ol></nav><div>" + body + "</div></div>";
      },
      retenir: function () {
        return '<div class="card"><ol class="keypoints">' + f.aRetenir.map(function (x) { return "<li><div>" + fmt(x) + "</div></li>"; }).join("") + "</ol></div>";
      },
      programme: function () {
        var html = "";
        if (f.objectifs && f.objectifs.length) {
          html += '<h2>Objectifs</h2><ul class="objectifs prose">' + f.objectifs.map(function (o) { return "<li>" + fmt(o) + "</li>"; }).join("") + "</ul>";
        }
        if (f.programme && f.programme.length) {
          html += '<h2 style="margin-top:28px">Contenu</h2><div class="modules">' + f.programme.map(function (m) {
            return '<div class="card"><h3>' + esc(m.titre) + "</h3>" + list(m.points) + "</div>";
          }).join("") + "</div>";
        }
        return html;
      },
      outils: function () { return toolsGrid(outils); },
      liens: function () {
        return '<ul class="links">' + f.liens.map(function (l) {
          return '<li><a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.titre) + "</a></li>";
        }).join("") + "</ul>";
      }
    };

    main.innerHTML =
      '<a class="back" href="#/">← Accueil</a>' +
      '<header class="f-head">' +
        "<h1>" + esc(f.titre) + "</h1>" +
        (f.sousTitre ? '<p class="sub">' + esc(f.sousTitre) + "</p>" : "") +
        (f.resume ? "<p>" + fmt(f.resume) + "</p>" : "") +
        '<dl class="facts">' + facts + "</dl>" +
        tags(f.tags) +
      "</header>" +
      '<div class="tabs" role="tablist">' + tabsDef.map(function (t) {
        return '<button role="tab" id="tab-' + t.key + '" aria-controls="panel-' + t.key + '" aria-selected="' + (t.key === tab) + '" data-tab="' + t.key + '">' +
          esc(t.label) + (t.count ? '<span class="count">' + t.count + "</span>" : "") + "</button>";
      }).join("") + "</div>" +
      tabsDef.map(function (t) {
        return '<section role="tabpanel" id="panel-' + t.key + '" aria-labelledby="tab-' + t.key + '"' + (t.key === tab ? "" : " hidden") + ">" + panels[t.key]() + "</section>";
      }).join("");

    main.querySelectorAll("[data-tab]").forEach(function (b) {
      b.addEventListener("click", function () {
        history.replaceState(null, "", "#/formation/" + f.id + "/" + b.getAttribute("data-tab"));
        main.querySelectorAll("[data-tab]").forEach(function (x) { x.setAttribute("aria-selected", x === b); });
        main.querySelectorAll('[role="tabpanel"]').forEach(function (p) { p.hidden = p.id !== "panel-" + b.getAttribute("data-tab"); });
      });
    });
  }

  /* ---------- Veille ---------- */
  function ficheHtml(v, open) {
    var outils = OUTILS.filter(function (o) { return o.videos.indexOf(v.id) !== -1; });
    return '<li><details class="card vfiche" id="v-' + esc(v.id) + '"' + (open ? " open" : "") + ">" +
      "<summary>" +
        '<span class="vtitle">' + esc(v.titre) + "</span>" +
        badge(v.interet) +
        '<span class="vmeta">' + esc(v.chaine) + " · " + esc(duree(v.duree)) + " · " + esc(v.categorie) + " · ajoutée en " + esc(formatDate(v.lot.slice(0, 7))) + "</span>" +
        '<span class="vresume">' + esc(v.resume) + "</span>" +
      "</summary>" +
      '<div class="vbody prose">' +
        "<h3>Points clés</h3>" + list(v.points) +
        '<div class="callout"><strong>Pour la structure :</strong> ' + esc(v.avis) + "</div>" +
        (outils.length ? '<p class="vtools"><strong>Outils cités :</strong> ' + outils.map(function (o) { return '<a href="#/outils/' + esc(slug(o.nom)) + '">' + esc(o.nom) + "</a>"; }).join(", ") + "</p>" : "") +
        tags(v.tags) +
        '<p><a class="watch" href="' + esc(videoUrl(v)) + '" target="_blank" rel="noopener">' + (v.url ? "Voir le post sur YouTube" : "Voir la vidéo sur YouTube") + "</a></p>" +
      "</div></details></li>";
  }

  function viewVeille(openId) {
    setNav("veille");
    document.title = "Veille vidéo — Veille IA";
    var cats = [], chaines = {}, lots = [];
    VEILLE.forEach(function (v) {
      if (cats.indexOf(v.categorie) === -1) cats.push(v.categorie);
      chaines[v.chaine] = (chaines[v.chaine] || 0) + 1;
      if (lots.indexOf(v.lot) === -1) lots.push(v.lot);
    });
    cats.sort(function (a, b) { return a.localeCompare(b, "fr"); });
    lots.sort().reverse();
    var chaineList = Object.keys(chaines).sort(function (a, b) { return chaines[b] - chaines[a] || a.localeCompare(b, "fr"); });
    var state = { q: "", i: "", cat: "", ch: "", lot: "", tri: "interet" };

    var synth = "";
    if (SYNTHESE) {
      synth = '<section class="synthese">' +
        '<details class="card"' + (openId ? "" : " open") + "><summary><h2>L'essentiel</h2></summary>" + list(SYNTHESE.essentiel) + "</details>" +
        '<details class="card"><summary><h2>Tendances</h2></summary>' + list(SYNTHESE.tendances) + "</details>" +
        '<details class="card"><summary><h2>Points de vigilance</h2></summary>' + list(SYNTHESE.vigilance) + "</details>" +
      "</section>";
    }

    function select(id, label, opts) {
      return '<label class="sel"><span>' + esc(label) + '</span><select id="' + id + '"><option value="">Tous</option>' +
        opts.map(function (o) { return '<option value="' + esc(o[0]) + '">' + esc(o[1]) + "</option>"; }).join("") + "</select></label>";
    }

    main.innerHTML =
      '<section class="hero"><h1>Veille vidéo</h1><p>Des vidéos YouTube sur l\'IA, résumées à partir de leurs sous-titres, avec un avis sur leur utilité pour la structure. Les affirmations des vidéos sont rapportées, pas validées : chiffres et promesses sont à vérifier avant d\'être relayés.</p></section>' +
      synth +
      '<div class="toolbar">' +
        '<input class="search" type="search" placeholder="Rechercher un sujet, un outil, une chaîne…" aria-label="Rechercher dans la veille">' +
        '<div class="chips" role="group" aria-label="Filtrer par intérêt">' +
          '<button class="chip" aria-pressed="true" data-i="">Tous</button>' +
          [3, 2, 1].map(function (i) { return '<button class="chip" aria-pressed="false" data-i="' + i + '">' + INTERET[i] + "</button>"; }).join("") +
        "</div>" +
        '<div class="selects">' +
          select("f-cat", "Catégorie", cats.map(function (c) { return [c, c]; })) +
          select("f-ch", "Chaîne", chaineList.map(function (c) { return [c, c + " (" + chaines[c] + ")"]; })) +
          select("f-lot", "Ajout", lots.map(function (l) { return [l, formatDate(l)]; })) +
          '<label class="sel"><span>Tri</span><select id="f-tri"><option value="interet">Par intérêt</option><option value="recent">Ajouts récents</option><option value="duree">Plus courtes</option><option value="titre">Titre</option></select></label>' +
        "</div>" +
      "</div>" +
      '<p class="count" id="vcount" aria-live="polite"></p>' +
      '<ul class="vlist" id="vlist"></ul>';

    var out = document.getElementById("vlist");
    function render() {
      var q = norm(state.q);
      var arr = VEILLE.filter(function (v) {
        if (state.i && String(v.interet) !== state.i) return false;
        if (state.cat && v.categorie !== state.cat) return false;
        if (state.ch && v.chaine !== state.ch) return false;
        if (state.lot && v.lot !== state.lot) return false;
        if (!q) return true;
        return norm([v.titre, v.chaine, v.resume, v.avis, (v.points || []).join(" "), (v.tags || []).join(" ")].join(" ")).indexOf(q) !== -1;
      });
      arr.sort(function (a, b) {
        if (state.tri === "recent") return b.lot.localeCompare(a.lot) || b.interet - a.interet;
        if (state.tri === "duree") return (a.duree || 0) - (b.duree || 0);
        if (state.tri === "titre") return a.titre.localeCompare(b.titre, "fr");
        return b.interet - a.interet || b.lot.localeCompare(a.lot) || a.titre.localeCompare(b.titre, "fr");
      });
      document.getElementById("vcount").textContent = arr.length === VEILLE.length ? VEILLE.length + " fiches" : arr.length + " fiche" + (arr.length > 1 ? "s" : "") + " sur " + VEILLE.length;
      out.innerHTML = arr.length ? arr.map(function (v) { return ficheHtml(v, v.id === openId); }).join("") : '<li class="empty">Aucune fiche ne correspond.</li>';
    }
    main.querySelector(".search").addEventListener("input", function (e) { state.q = e.target.value; render(); });
    main.querySelectorAll("[data-i]").forEach(function (b) {
      b.addEventListener("click", function () {
        state.i = b.getAttribute("data-i");
        main.querySelectorAll("[data-i]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        render();
      });
    });
    [["f-cat", "cat"], ["f-ch", "ch"], ["f-lot", "lot"], ["f-tri", "tri"]].forEach(function (p) {
      document.getElementById(p[0]).addEventListener("change", function (e) { state[p[1]] = e.target.value; render(); });
    });
    render();
    if (openId) {
      var el = document.getElementById("v-" + openId);
      if (el) { el.scrollIntoView({ block: "start" }); return true; }
    }
    return false;
  }

  /* ---------- Boîte à outils ---------- */
  function toolCard(o) {
    var from = o.formations.map(findFormation).filter(Boolean).map(function (f) {
      return '<a href="#/formation/' + esc(f.id) + '">' + esc(f.titre) + "</a>";
    }).concat(o.videos.map(findFiche).filter(Boolean).map(function (v) {
      return '<a href="#/veille/' + esc(v.id) + '">' + esc(v.titre) + "</a>";
    })).join(" · ");
    var nom = o.url ? '<a href="' + esc(o.url) + '" target="_blank" rel="noopener">' + esc(o.nom) + "</a>" : esc(o.nom);
    return '<li class="card tool' + (o.aVerifier ? " warn" : "") + '" id="o-' + esc(slug(o.nom)) + '">' +
      '<div class="tool-top"><span class="tool-icon" aria-hidden="true">' + esc(o.nom.charAt(0)) + "</span>" +
      "<div><h3>" + nom + "</h3>" +
      '<span class="tag">' + esc(o.categorie) + "</span>" +
      (o.donnees ? ' <span class="tag data-' + esc(slug(o.donnees)) + '" title="Où vont les données">' + esc(o.donnees) + "</span>" : "") +
      (o.interet ? " " + badge(o.interet) : "") +
      (o.aVerifier ? ' <span class="badge-warn">À vérifier</span>' : "") + "</div></div>" +
      "<p>" + fmt(o.description) + "</p>" +
      (from ? '<span class="from">Vu dans : ' + from + "</span>" : "") +
      "</li>";
  }
  function toolsGrid(arr) {
    if (!arr.length) return '<p class="empty">Aucun outil ne correspond.</p>';
    return '<ul class="tools-grid">' + arr.map(toolCard).join("") + "</ul>";
  }

  function viewOutils(focus) {
    setNav("outils");
    document.title = "Boîte à outils — Veille IA";
    var cats = [];
    OUTILS.forEach(function (o) { if (cats.indexOf(o.categorie) === -1) cats.push(o.categorie); });
    cats.sort(function (a, b) { return a.localeCompare(b, "fr"); });
    var state = { q: "", cat: "", src: "", data: "" };

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
          '<label class="sel"><span>Catégorie</span><select id="t-cat"><option value="">Toutes</option>' + cats.map(function (c) { return '<option value="' + esc(c) + '">' + esc(c) + "</option>"; }).join("") + "</select></label>" +
          '<label class="sel"><span>Données</span><select id="t-data"><option value="">Toutes</option><option>Local</option><option>Variable</option><option>En ligne</option></select></label>' +
        "</div>" +
      "</div>" +
      '<p class="count" id="tcount" aria-live="polite"></p>' +
      '<div id="tools-out"></div>';

    var out = document.getElementById("tools-out");
    function render() {
      var q = norm(state.q);
      var arr = OUTILS.filter(function (o) {
        if (state.cat && o.categorie !== state.cat) return false;
        if (state.data && o.donnees !== state.data) return false;
        if (state.src === "f" && !o.formations.length) return false;
        if (state.src === "v" && !o.videos.length) return false;
        if (!q) return true;
        return norm(o.nom + " " + o.description + " " + o.categorie).indexOf(q) !== -1;
      }).sort(function (a, b) {
        return (a.aVerifier ? 1 : 0) - (b.aVerifier ? 1 : 0) ||
          (b.formations.length ? 1 : 0) - (a.formations.length ? 1 : 0) ||
          (b.interet || 0) - (a.interet || 0) || a.nom.localeCompare(b.nom, "fr");
      });
      document.getElementById("tcount").textContent = arr.length + " outil" + (arr.length > 1 ? "s" : "");
      out.innerHTML = toolsGrid(arr);
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

  /* ---------- Méthode ---------- */
  function viewMethode() {
    setNav("methode");
    document.title = "Méthode — Veille IA";
    var m = window.METHODE || [];
    main.innerHTML = '<section class="hero"><h1>Méthode</h1><p>Comment ce site est alimenté, et comment lire ce qu\'il contient.</p></section>' +
      m.map(function (s) { return '<section class="card prose note-section"><h2>' + esc(s.titre) + "</h2>" + list(s.points) + "</section>"; }).join("");
  }

  function viewNotFound() {
    setNav("");
    main.innerHTML = '<p class="empty">Page introuvable. <a href="#/">Retour à l\'accueil</a></p>';
  }

  /* ---------- Routeur (#/...) ---------- */
  function route() {
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    var anchor = null, scrolled = false;
    if (parts[0] === "") viewAccueil();
    else if (parts[0] === "veille") scrolled = viewVeille(parts[1]);
    else if (parts[0] === "outils") scrolled = viewOutils(parts[1]);
    else if (parts[0] === "methode") viewMethode();
    else if (parts[0] === "formation") { viewFormation(parts[1], parts[2]); anchor = parts[3]; }
    else viewNotFound();

    if (scrolled) return;
    if (anchor) {
      var el = document.getElementById(anchor);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo(0, 0);
  }
  var lastView = "";
  window.addEventListener("hashchange", function () {
    // Un clic sur le sommaire ne doit que défiler, pas tout redessiner
    var p = location.hash.split("/");
    var key = p.slice(0, 4).join("/");
    if (p[1] === "formation" && p[4] && key === lastView) {
      var el = document.getElementById(p[4]);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    lastView = key;
    route();
  });
  lastView = location.hash.split("/").slice(0, 4).join("/");
  route();

  /* ---------- Thème clair / sombre ---------- */
  var root = document.documentElement;
  try { var saved = localStorage.getItem("theme"); if (saved) root.setAttribute("data-theme", saved); } catch (e) {}
  document.querySelector(".theme-toggle").addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") ? root.getAttribute("data-theme") === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    var next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();
