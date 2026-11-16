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
  // Deux lectures d'une même fiche : utilité pour la structure (interet) et pour le développeur (dev).
  var USAGES = [
    { k: "fondamentaux", label: "Fondamentaux et sécurité", sub: "Comprendre l'IA, vérifier, protéger les données" },
    { k: "copilot", label: "Copilot", sub: "Microsoft 365 et Copilot Chat" },
    { k: "local", label: "IA locale et RAG", sub: "Modèles sur nos machines, documents internes" },
    { k: "metiers", label: "Métiers et compétences", sub: "Évolution du travail, compétences à acquérir" },
    { k: "dev", label: "Développement", sub: "Agents de code, outils et techniques" }
  ];
  var LENS = {
    structure: { label: "Pour la structure", score: function (v) { return v.interet || 0; },
      niveaux: { 3: "À voir", 2: "Contexte", 1: "Faible", 0: "Faible" },
      groupes: { 3: "À voir en priorité", 2: "Bon éclairage de contexte", 1: "Moins prioritaires" } },
    dev: { label: "Pour mon dev", score: function (v) { return v.dev || 0; },
      niveaux: { 3: "À tester", 2: "Utile", 1: "Marginal", 0: "Hors dev" },
      groupes: { 3: "À tester ou à approfondir", 2: "Bon éclairage technique", 1: "Peu ou pas technique" } }
  };
  function usageLabel(k) {
    for (var i = 0; i < USAGES.length; i++) if (USAGES[i].k === k) return USAGES[i].label;
    return k;
  }
  function lastLot() {
    return VEILLE.reduce(function (m, v) { return v.lot > m ? v.lot : m; }, "");
  }
  function scoreBadge(lensKey, s) {
    var l = LENS[lensKey];
    return '<span class="badge i' + Math.max(1, s) + '" title="' + esc(l.label) + '">' +
      (lensKey === "dev" ? "Dev : " : "") + esc(l.niveaux[s]) + "</span>";
  }

  function ficheDetail(v) {
    var outils = OUTILS.filter(function (o) { return o.videos.indexOf(v.id) !== -1; });
    return '<header class="vp-head">' +
        '<p class="vmeta">' + esc(v.chaine) + " · " + esc(duree(v.duree)) + " · " + esc(v.categorie) + " · ajoutée le " + esc(formatDate(v.lot)) + "</p>" +
        '<h2 id="vp-title">' + esc(v.titre) + "</h2>" +
        '<p class="vp-badges">' + scoreBadge("structure", v.interet || 0) + " " + scoreBadge("dev", v.dev || 0) +
          (v.usages || []).map(function (u) { return ' <span class="tag">' + esc(usageLabel(u)) + "</span>"; }).join("") + "</p>" +
      "</header>" +
      '<div class="prose">' +
        '<p class="vp-resume">' + esc(v.resume) + "</p>" +
        "<h3>Points clés</h3>" + list(v.points) +
        '<div class="callout"><strong>Pour la structure :</strong> ' + esc(v.avis) + "</div>" +
        (v.avisDev ? '<div class="callout dev"><strong>Pour le dev :</strong> ' + esc(v.avisDev) + "</div>" : "") +
        (outils.length ? '<p class="vtools"><strong>Outils cités :</strong> ' + outils.map(function (o) { return '<a href="#/outils/' + esc(slug(o.nom)) + '">' + esc(o.nom) + "</a>"; }).join(", ") + "</p>" : "") +
        tags(v.tags) +
        '<p><a class="watch" href="' + esc(videoUrl(v)) + '" target="_blank" rel="noopener">' + (v.url ? "Voir le post sur YouTube" : "Voir la vidéo sur YouTube") + "</a></p>" +
      "</div>";
  }

  function viewVeille(openId) {
    setNav("veille");
    document.title = "Veille vidéo — Veille IA";
    var chaines = {}, lots = [];
    VEILLE.forEach(function (v) {
      chaines[v.chaine] = (chaines[v.chaine] || 0) + 1;
      if (lots.indexOf(v.lot) === -1) lots.push(v.lot);
    });
    lots.sort().reverse();
    var dernier = lots[0] || "";
    var chaineList = Object.keys(chaines).sort(function (a, b) { return chaines[b] - chaines[a] || a.localeCompare(b, "fr"); });
    var lens = store("veille:lens") === "dev" ? "dev" : "structure";
    var state = { q: "", u: "", ch: "", lot: "", court: false, tri: "score" };

    var nbDernier = VEILLE.filter(function (v) { return v.lot === dernier; }).length;
    var stats = '<ul class="stats">' +
      "<li><b>" + VEILLE.length + "</b><span>fiches</span></li>" +
      "<li><b>" + VEILLE.filter(function (v) { return v.interet === 3; }).length + "</b><span>à voir pour la structure</span></li>" +
      "<li><b>" + VEILLE.filter(function (v) { return v.dev === 3; }).length + "</b><span>à tester pour le dev</span></li>" +
      (dernier ? "<li><b>" + nbDernier + "</b><span>ajoutées le " + esc(formatDate(dernier)) + "</span></li>" : "") +
      "</ul>";

    var synth = "";
    if (SYNTHESE) {
      synth = '<section class="synthese">' +
        '<details class="card"><summary><h2>L\'essentiel</h2></summary>' + list(SYNTHESE.essentiel) + "</details>" +
        '<details class="card"><summary><h2>Tendances</h2></summary>' + list(SYNTHESE.tendances) + "</details>" +
        '<details class="card"><summary><h2>Points de vigilance</h2></summary>' + list(SYNTHESE.vigilance) + "</details>" +
      "</section>";
    }

    function select(id, label, opts) {
      return '<label class="sel"><span>' + esc(label) + '</span><select id="' + id + '"><option value="">Tous</option>' +
        opts.map(function (o) { return '<option value="' + esc(o[0]) + '">' + esc(o[1]) + "</option>"; }).join("") + "</select></label>";
    }

    main.innerHTML =
      '<section class="hero"><h1>Veille vidéo</h1><p>Des vidéos YouTube sur l\'IA, résumées à partir de leurs sous-titres. Chaque fiche a deux avis : son utilité pour la structure et son intérêt pour le développeur. Les affirmations des vidéos sont rapportées, pas validées.</p>' + stats + "</section>" +
      '<div class="lens" role="group" aria-label="Lecture des notes">' +
        Object.keys(LENS).map(function (k) { return '<button class="lens-btn" data-lens="' + k + '" aria-pressed="' + (k === lens) + '">' + esc(LENS[k].label) + "</button>"; }).join("") +
      "</div>" +
      '<ul class="usages" id="usages"></ul>' +
      '<div class="toolbar">' +
        '<input class="search" type="search" placeholder="Rechercher un sujet, un outil, une chaîne…" aria-label="Rechercher dans la veille">' +
        '<div class="selects">' +
          select("f-ch", "Chaîne", chaineList.map(function (c) { return [c, c + " (" + chaines[c] + ")"]; })) +
          select("f-lot", "Ajout", lots.map(function (l) { return [l, formatDate(l)]; })) +
          '<label class="sel"><span>Tri</span><select id="f-tri"><option value="score">Par intérêt</option><option value="recent">Ajouts récents</option><option value="duree">Plus courtes</option><option value="titre">Titre</option></select></label>' +
          '<label class="check"><input type="checkbox" id="f-court"> Vidéos courtes seulement</label>' +
        "</div>" +
      "</div>" +
      '<p class="count" id="vcount" aria-live="polite"></p>' +
      '<div id="vlist"></div>' +
      synth +
      '<div class="vp-backdrop" id="vp-backdrop" hidden></div>' +
      '<aside class="vpanel" id="vpanel" role="dialog" aria-modal="false" aria-labelledby="vp-title" hidden>' +
        '<button class="vp-close" id="vp-close" aria-label="Fermer la fiche">×</button><div id="vp-body"></div>' +
      "</aside>";

    var out = document.getElementById("vlist");
    var panel = document.getElementById("vpanel"), backdrop = document.getElementById("vp-backdrop");
    var lastRow = null;

    function filtre(ignoreUsage) {
      var q = norm(state.q);
      return VEILLE.filter(function (v) {
        if (!ignoreUsage && state.u && (v.usages || []).indexOf(state.u) === -1) return false;
        if (state.ch && v.chaine !== state.ch) return false;
        if (state.lot && v.lot !== state.lot) return false;
        if (state.court && !(v.duree && v.duree < 180)) return false;
        if (!q) return true;
        return norm([v.titre, v.chaine, v.resume, v.avis, v.avisDev || "", (v.points || []).join(" "), (v.tags || []).join(" ")].join(" ")).indexOf(q) !== -1;
      });
    }

    function renderUsages() {
      var base = filtre(true), sc = LENS[lens].score;
      document.getElementById("usages").innerHTML = USAGES.map(function (u) {
        var arr = base.filter(function (v) { return (v.usages || []).indexOf(u.k) !== -1; });
        var top = arr.filter(function (v) { return sc(v) === 3; }).length;
        return '<li><button class="usage" data-u="' + u.k + '" aria-pressed="' + (state.u === u.k) + '">' +
          '<span class="u-label">' + esc(u.label) + "</span>" +
          '<span class="u-sub">' + esc(u.sub) + "</span>" +
          '<span class="u-count"><b>' + arr.length + "</b> fiche" + (arr.length > 1 ? "s" : "") +
          (top ? ' · <b class="u-top">' + top + "</b> " + (lens === "dev" ? "à tester" : "à voir") : "") + "</span>" +
        "</button></li>";
      }).join("");
      main.querySelectorAll("[data-u]").forEach(function (b) {
        b.addEventListener("click", function () {
          var k = b.getAttribute("data-u");
          state.u = state.u === k ? "" : k;
          render();
        });
      });
    }

    function row(v) {
      var s = LENS[lens].score(v);
      var flags = (v.duree && v.duree < 180 ? '<span class="flag">Court</span>' : "") +
        (v.lot === dernier ? '<span class="flag new">Nouveau</span>' : "");
      return '<li><button class="vrow s' + s + '" data-id="' + esc(v.id) + '" aria-haspopup="dialog">' +
        '<span class="pip p' + s + '" aria-hidden="true"></span>' +
        '<span class="vr-main"><span class="vr-title">' + esc(v.titre) + "</span>" +
        '<span class="vmeta">' + esc(v.chaine) + " · " + esc(duree(v.duree)) + " · " + esc((v.usages || []).map(usageLabel).join(", ")) + "</span></span>" +
        '<span class="vr-side">' + flags + scoreBadge(lens, s) + "</span>" +
      "</button></li>";
    }

    function render() {
      var sc = LENS[lens].score;
      var arr = filtre(false);
      arr.sort(function (a, b) {
        if (state.tri === "recent") return b.lot.localeCompare(a.lot) || sc(b) - sc(a);
        if (state.tri === "duree") return (a.duree || 0) - (b.duree || 0);
        if (state.tri === "titre") return a.titre.localeCompare(b.titre, "fr");
        return sc(b) - sc(a) || b.lot.localeCompare(a.lot) || a.titre.localeCompare(b.titre, "fr");
      });
      document.getElementById("vcount").textContent = (arr.length === VEILLE.length ? VEILLE.length + " fiches" : arr.length + " fiche" + (arr.length > 1 ? "s" : "") + " sur " + VEILLE.length) +
        (state.u ? " · " + usageLabel(state.u) : "") + " · classées « " + LENS[lens].label.toLowerCase() + " »";
      if (!arr.length) { out.innerHTML = '<p class="empty">Aucune fiche ne correspond.</p>'; }
      else if (state.tri === "score") {
        var g = { 3: [], 2: [], 1: [] };
        arr.forEach(function (v) { g[Math.max(1, sc(v))].push(v); });
        out.innerHTML = [3, 2, 1].filter(function (k) { return g[k].length; }).map(function (k) {
          return '<section class="vgroup g' + k + '"><h2 class="vg-title">' + esc(LENS[lens].groupes[k]) + ' <span class="vmeta">' + g[k].length + "</span></h2>" +
            '<ul class="vrows">' + g[k].map(row).join("") + "</ul></section>";
        }).join("");
      } else {
        out.innerHTML = '<ul class="vrows">' + arr.map(row).join("") + "</ul>";
      }
      out.querySelectorAll("[data-id]").forEach(function (b) {
        b.addEventListener("click", function () { lastRow = b; open(b.getAttribute("data-id"), true); });
      });
      renderUsages();
    }

    function open(id, push) {
      var v = findFiche(id);
      if (!v) return;
      document.getElementById("vp-body").innerHTML = ficheDetail(v);
      panel.hidden = false; backdrop.hidden = false;
      document.body.classList.add("vp-open");
      panel.scrollTop = 0;
      if (push) history.replaceState(null, "", "#/veille/" + id);
      document.getElementById("vp-close").focus();
    }
    function close() {
      panel.hidden = true; backdrop.hidden = true;
      document.body.classList.remove("vp-open");
      history.replaceState(null, "", "#/veille");
      if (lastRow && document.body.contains(lastRow)) lastRow.focus();
    }
    document.getElementById("vp-close").addEventListener("click", close);
    backdrop.addEventListener("click", close);
    document.onkeydown = function (ev) { if (ev.key === "Escape" && !panel.hidden) close(); };

    main.querySelector(".search").addEventListener("input", function (e) { state.q = e.target.value; render(); });
    main.querySelectorAll("[data-lens]").forEach(function (b) {
      b.addEventListener("click", function () {
        lens = b.getAttribute("data-lens");
        store("veille:lens", lens);
        main.querySelectorAll("[data-lens]").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
        render();
      });
    });
    [["f-ch", "ch"], ["f-lot", "lot"], ["f-tri", "tri"]].forEach(function (p) {
      document.getElementById(p[0]).addEventListener("change", function (e) { state[p[1]] = e.target.value; render(); });
    });
    document.getElementById("f-court").addEventListener("change", function (e) { state.court = e.target.checked; render(); });
    render();
    if (openId) open(openId, false);
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

  /* ---------- Animer : guides des séances que je donne ---------- */
  var ANIMATIONS = window.ANIMATIONS || [];
  function findSeance(id) {
    for (var i = 0; i < ANIMATIONS.length; i++) if (ANIMATIONS[i].id === id) return ANIMATIONS[i];
    return null;
  }
  function hm(s) { var p = s.split(":"); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); }
  function fmtHm(min) { return Math.floor(min / 60) + " h " + String(min % 60).padStart(2, "0"); }
  function store(key, val) {
    try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; }
  }
  function copyText(text, btn) {
    function done() { var t = btn.textContent; btn.textContent = "Copié"; setTimeout(function () { btn.textContent = t; }, 1200); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallback(); });
    } else fallback();
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  function viewAnimer() {
    setNav("animer");
    document.title = "Animer — Veille IA";
    main.innerHTML =
      '<section class="hero"><h1>Formations que j\'anime</h1><p>Un guide par séance, à ouvrir sur un second écran pendant la projection : étape en cours, minutage, prompts des démos à copier, questions probables et plan B.</p></section>' +
      (ANIMATIONS.length ? '<ul class="vlist">' + ANIMATIONS.map(function (s) {
        return '<li class="card vmini"><a href="#/animer/' + esc(s.id) + '">' + esc(s.titre) + "</a>" +
          '<span class="vmeta">' + esc(formatDate(s.date)) + " · " + esc(s.debut.replace(":", " h ")) + " – " + esc(s.fin.replace(":", " h ")) + " · " + s.etapes.length + " étapes · " + s.diapos + " diapos</span>" +
          "<p>" + esc(s.sousTitre) + "</p></li>";
      }).join("") + "</ul>" : '<p class="empty">Aucune séance pour le moment.</p>');
  }

  var clockTimer = null;
  function viewSeance(id, tab) {
    var s = findSeance(id);
    if (!s) return viewNotFound();
    setNav("animer");
    document.title = s.titre + " — Animer";
    var key = "seance:" + s.id;
    var cur = parseInt(store(key) || "0", 10);
    if (!(cur >= 0 && cur < s.etapes.length)) cur = 0;
    var big = store("seance:big") === "1";
    var tabs = [["deroule", "Déroulé"], ["questions", "Questions (" + s.questions.length + ")"], ["mots", "Définitions"], ["planb", "Plan B"], ["avant", "Avant / après"]];
    if (!tabs.some(function (t) { return t[0] === tab; })) tab = "deroule";

    function demoHtml(d, i) {
      var prompts = [d.prompt].concat(d.suite || []);
      return '<div class="demo"><h4>' + esc(d.nom) + ' <span class="vmeta">' + d.duree + " min</span></h4>" +
        prompts.map(function (p, j) {
          return '<div class="prompt"><p>' + esc(p) + '</p><button class="chip copy" data-copy="' + i + "-" + j + '">Copier</button></div>';
        }).join("") +
        '<p class="observe"><strong>On observe :</strong> ' + esc(d.observer) + "</p></div>";
    }
    function stepHtml(e, n) {
      return '<p class="step-meta">Étape ' + (n + 1) + " / " + s.etapes.length + " · prévue à " + esc(e.heure.replace(":", " h ")) + " · " + e.duree + " min · diapos " + esc(e.diapos) + "</p>" +
        "<h2>" + esc(e.titre) + "</h2>" +
        '<p class="key">' + esc(e.message) + "</p>" +
        list(e.points) +
        (e.demos || []).map(demoHtml).join("");
    }
    function panel() {
      if (tab === "deroule") {
        return '<div class="guide">' +
          '<nav class="steps" aria-label="Étapes">' + s.etapes.map(function (e, n) {
            return '<button class="stepbtn' + (n === cur ? " on" : "") + '" data-step="' + n + '"><b>' + esc(e.heure.replace(":", " h ")) + "</b> " + esc(e.titre) + "</button>";
          }).join("") + "</nav>" +
          '<article class="card step prose" aria-live="polite">' + stepHtml(s.etapes[cur], cur) +
          '<div class="stepnav"><button class="chip" data-move="-1"' + (cur === 0 ? " disabled" : "") + '>← Précédente</button>' +
          '<button class="chip" data-move="1"' + (cur === s.etapes.length - 1 ? " disabled" : "") + '>Suivante →</button></div>' +
          (s.etapes[cur + 1] ? '<p class="next">Ensuite, à ' + esc(s.etapes[cur + 1].heure.replace(":", " h ")) + " : " + esc(s.etapes[cur + 1].titre) + "</p>" : "") +
          "</article></div>";
      }
      if (tab === "questions") {
        var themes = [];
        s.questions.forEach(function (q) { if (themes.indexOf(q.theme) === -1) themes.push(q.theme); });
        return '<input class="search" type="search" placeholder="Chercher une question…" aria-label="Chercher une question">' +
          themes.map(function (t) {
            return '<section class="qtheme"><h3>' + esc(t) + "</h3>" + s.questions.filter(function (q) { return q.theme === t; }).map(function (q) {
              return '<details class="card qa"><summary>' + esc(q.q) + "</summary><p>" + esc(q.r) + "</p></details>";
            }).join("") + "</section>";
          }).join("") +
          '<div class="callout">Si je ne sais pas : « Je vérifie et je vous réponds. » Noter la question, répondre par mail ou en début de séance suivante.</div>';
      }
      if (tab === "mots") {
        return '<dl class="glossary">' + s.definitions.map(function (d) { return "<div><dt>" + esc(d[0]) + "</dt><dd>" + esc(d[1]) + "</dd></div>"; }).join("") + "</dl>";
      }
      if (tab === "planb") {
        return '<div class="callout"><strong>À ne jamais couper :</strong> ' + esc(s.intouchables) + "</div>" +
          "<h3>Si je suis en retard, je raccourcis dans cet ordre</h3><ol>" + s.coupes.map(function (c) { return "<li>" + esc(c) + "</li>"; }).join("") + "</ol>" +
          "<h3>Si une démo plante</h3>" + s.incidents.map(function (q) {
            return '<details class="card qa"><summary>' + esc(q.q) + "</summary><p>" + esc(q.r) + "</p></details>";
          }).join("");
      }
      return "<h3>Règles de la séance</h3><ol>" + s.regles.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ol>" +
        "<h3>Avant</h3><ul class=\"checks\">" + s.avant.map(function (a) { return "<li><label><input type=\"checkbox\"> " + esc(a) + "</label></li>"; }).join("") + "</ul>" +
        "<h3>Après</h3><ul class=\"checks\">" + s.apres.map(function (a) { return "<li><label><input type=\"checkbox\"> " + esc(a) + "</label></li>"; }).join("") + "</ul>";
    }

    function render() {
      main.classList.toggle("big", big);
      main.innerHTML =
        '<a class="back" href="#/animer">← Toutes les séances</a>' +
        '<header class="seance-head"><div><h1>' + esc(s.titre) + "</h1>" +
        '<p class="vmeta">' + esc(formatDate(s.date)) + " · " + esc(s.debut.replace(":", " h ")) + " – " + esc(s.fin.replace(":", " h ")) + " · " + esc(s.public) + "</p></div>" +
        '<div class="clock"><span id="clk"></span><span id="drift" class="vmeta"></span>' +
        '<button class="chip" id="bigbtn" aria-pressed="' + big + '">Grand texte</button></div></header>' +
        '<div class="tabs" role="tablist">' + tabs.map(function (t) {
          return '<button role="tab" aria-selected="' + (t[0] === tab) + '" data-stab="' + t[0] + '">' + esc(t[1]) + "</button>";
        }).join("") + "</div>" +
        '<section role="tabpanel">' + panel() + "</section>";
      bind();
      tick();
    }
    function go(n) {
      cur = Math.max(0, Math.min(s.etapes.length - 1, n));
      store(key, String(cur));
      render();
    }
    function bind() {
      main.querySelectorAll("[data-stab]").forEach(function (b) {
        b.addEventListener("click", function () {
          tab = b.getAttribute("data-stab");
          history.replaceState(null, "", "#/animer/" + s.id + "/" + tab);
          render();
        });
      });
      main.querySelectorAll("[data-step]").forEach(function (b) {
        b.addEventListener("click", function () { go(parseInt(b.getAttribute("data-step"), 10)); });
      });
      main.querySelectorAll("[data-move]").forEach(function (b) {
        b.addEventListener("click", function () { go(cur + parseInt(b.getAttribute("data-move"), 10)); });
      });
      main.querySelectorAll("[data-copy]").forEach(function (b) {
        b.addEventListener("click", function () {
          var ij = b.getAttribute("data-copy").split("-"), d = s.etapes[cur].demos[parseInt(ij[0], 10)];
          copyText([d.prompt].concat(d.suite || [])[parseInt(ij[1], 10)], b);
        });
      });
      document.getElementById("bigbtn").addEventListener("click", function () {
        big = !big; store("seance:big", big ? "1" : "0"); render();
      });
      var q = main.querySelector(".search");
      if (q) q.addEventListener("input", function () {
        var v = norm(q.value);
        main.querySelectorAll(".qa").forEach(function (d) {
          var hit = !v || norm(d.textContent).indexOf(v) !== -1;
          d.hidden = !hit; if (v && hit) d.open = true;
        });
      });
    }
    // Horloge + écart avec le minutage, seulement le jour de la séance
    function tick() {
      var clk = document.getElementById("clk"), drift = document.getElementById("drift");
      if (!clk) return;
      var now = new Date();
      clk.textContent = fmtHm(now.getHours() * 60 + now.getMinutes());
      var today = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
      if (today !== s.date || tab !== "deroule") { drift.textContent = ""; return; }
      var e = s.etapes[cur], m = now.getHours() * 60 + now.getMinutes(), start = hm(e.heure), end = start + e.duree;
      var txt, cls;
      if (m < start) { txt = "en avance de " + (start - m) + " min"; cls = "ok"; }
      else if (m <= end) { txt = "il reste " + (end - m) + " min pour cette étape"; cls = end - m <= 2 ? "warn" : "ok"; }
      else { txt = "en retard de " + (m - end) + " min : voir le plan B"; cls = "late"; }
      drift.textContent = txt; drift.className = "vmeta drift " + cls;
    }
    if (clockTimer) clearInterval(clockTimer);
    clockTimer = setInterval(function () {
      if (!document.getElementById("clk")) { clearInterval(clockTimer); clockTimer = null; return; }
      tick();
    }, 15000);
    document.onkeydown = function (ev) {
      if (!document.getElementById("clk") || tab !== "deroule") return;
      if (/input|textarea/i.test(ev.target.tagName)) return;
      if (ev.key === "ArrowRight" || ev.key === "PageDown") { ev.preventDefault(); go(cur + 1); }
      if (ev.key === "ArrowLeft" || ev.key === "PageUp") { ev.preventDefault(); go(cur - 1); }
    };
    render();
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
    main.classList.remove("big");
    document.body.classList.remove("vp-open");
    document.onkeydown = null;
    if (parts[0] === "") viewAccueil();
    else if (parts[0] === "veille") scrolled = viewVeille(parts[1]);
    else if (parts[0] === "outils") scrolled = viewOutils(parts[1]);
    else if (parts[0] === "methode") viewMethode();
    else if (parts[0] === "animer") { if (parts[1]) viewSeance(parts[1], parts[2]); else viewAnimer(); }
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

  /* ---------- Onglet Animer : visible seulement sur les navigateurs déverrouillés ----------
     Triple-clic sur le logo « IA » : affiche ou masque l'onglet sur ce navigateur.
     Ce n'est pas une protection (l'adresse #/animer reste accessible), juste de la discrétion. */
  var animerLink = document.querySelector('[data-nav="animer"]');
  function showAnimer(on) { if (animerLink) animerLink.hidden = !on; }
  showAnimer(store("animer:on") === "1");
  var mark = document.querySelector(".brand-mark");
  if (mark) mark.addEventListener("click", function (ev) {
    if (ev.detail !== 3) return;
    ev.preventDefault();
    var on = store("animer:on") !== "1";
    store("animer:on", on ? "1" : "0");
    showAnimer(on);
    if (on) location.hash = "#/animer";
  });

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
