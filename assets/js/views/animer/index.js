/* Animer — liste des séances (#/animer) et guide d'une séance (#/animer/<id>/<onglet>) :
   étape en cours mémorisée, horloge avec écart au minutage le jour J, flèches ← → pour changer d'étape. */
(function (VIA) {
  "use strict";
  var u = VIA.u, d = VIA.data, c = VIA.animer.contenu;
  var clockTimer = null;

  function hm(s) { var p = s.split(":"); return parseInt(p[0], 10) * 60 + parseInt(p[1], 10); }
  function fmtHm(min) { return Math.floor(min / 60) + " h " + String(min % 60).padStart(2, "0"); }
  function today() {
    var now = new Date();
    return now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
  }

  function liste() {
    u.setNav("animer");
    document.title = "Animer — Veille IA";
    VIA.main.innerHTML =
      '<section class="hero"><h1>Formations que j\'anime</h1><p>Un guide par séance, à ouvrir sur un second écran pendant la projection : étape en cours, minutage, prompts des démos à copier, questions probables et plan B.</p></section>' +
      (d.ANIMATIONS.length ? '<ul class="vlist">' + d.ANIMATIONS.map(function (s) {
        return '<li class="card vmini"><a href="#/animer/' + u.esc(s.id) + '">' + u.esc(s.titre) + "</a>" +
          '<span class="vmeta">' + u.esc(u.formatDate(s.date)) + " · " + u.esc(c.heure(s.debut)) + " – " + u.esc(c.heure(s.fin)) + " · " + s.etapes.length + " étapes · " + s.diapos + " diapos</span>" +
          "<p>" + u.esc(s.sousTitre) + "</p></li>";
      }).join("") + "</ul>" : '<p class="empty">Aucune séance pour le moment.</p>');
  }

  function seance(s, tab) {
    u.setNav("animer");
    document.title = s.titre + " — Animer";
    var main = VIA.main;
    var key = "seance:" + s.id;
    var cur = parseInt(u.store(key) || "0", 10);
    if (!(cur >= 0 && cur < s.etapes.length)) cur = 0;
    var big = u.store("seance:big") === "1";
    if (!c.onglets.some(function (t) { return t[0] === tab; })) tab = "deroule";

    function label(t) { return t[0] === "questions" ? t[1] + " (" + s.questions.length + ")" : t[1]; }

    function render() {
      main.classList.toggle("big", big);
      main.innerHTML =
        '<a class="back" href="#/animer">← Toutes les séances</a>' +
        '<header class="seance-head"><div><h1>' + u.esc(s.titre) + "</h1>" +
        '<p class="vmeta">' + u.esc(u.formatDate(s.date)) + " · " + u.esc(c.heure(s.debut)) + " – " + u.esc(c.heure(s.fin)) + " · " + u.esc(s.public) + "</p></div>" +
        '<div class="clock"><span id="clk"></span><span id="drift" class="vmeta"></span>' +
        '<button class="chip" id="bigbtn" aria-pressed="' + big + '">Grand texte</button></div></header>' +
        '<div class="tabs" role="tablist">' + c.onglets.map(function (t) {
          return '<button role="tab" aria-selected="' + (t[0] === tab) + '" data-stab="' + t[0] + '">' + u.esc(label(t)) + "</button>";
        }).join("") + "</div>" +
        '<section role="tabpanel">' + c.rendre(tab, s, cur) + "</section>";
      bind();
      tick();
    }

    function go(n) {
      cur = Math.max(0, Math.min(s.etapes.length - 1, n));
      u.store(key, String(cur));
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
          var ij = b.getAttribute("data-copy").split("-"), dm = s.etapes[cur].demos[parseInt(ij[0], 10)];
          u.copyText([dm.prompt].concat(dm.suite || [])[parseInt(ij[1], 10)], b);
        });
      });
      document.getElementById("bigbtn").addEventListener("click", function () {
        big = !big; u.store("seance:big", big ? "1" : "0"); render();
      });
      var q = main.querySelector(".search");
      if (q) q.addEventListener("input", function () {
        var v = u.norm(q.value);
        main.querySelectorAll(".qa").forEach(function (el) {
          var hit = !v || u.norm(el.textContent).indexOf(v) !== -1;
          el.hidden = !hit; if (v && hit) el.open = true;
        });
      });
    }

    // Horloge + écart avec le minutage, seulement le jour de la séance
    function tick() {
      var clk = document.getElementById("clk"), drift = document.getElementById("drift");
      if (!clk) return;
      var now = new Date(), m = now.getHours() * 60 + now.getMinutes();
      clk.textContent = fmtHm(m);
      if (today() !== s.date || tab !== "deroule") { drift.textContent = ""; return; }
      var e = s.etapes[cur], start = hm(e.heure), end = start + e.duree, txt, cls;
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

  VIA.router.add("animer", function (args) {
    if (!args[0]) return liste();
    var s = d.findSeance(args[0]);
    if (!s) return VIA.router.notFound();
    seance(s, args[1]);
  });
})(window.VIA = window.VIA || {});
