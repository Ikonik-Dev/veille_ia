/* Utilitaires partagés : échappement, mise en forme, dates, stockage local.
   Chaque module du site s'enregistre dans l'espace de noms window.VIA (scripts classiques,
   pour que le site s'ouvre en double-cliquant sur index.html, sans serveur). */
(function (VIA) {
  "use strict";

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

  // "2026-11-16" → "16 novembre 2026" ; "2026-11" → "novembre 2026"
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

  // Minuscules sans accents, pour la recherche
  function norm(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }
  function slug(s) { return norm(s).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  // Liste à puces ; un élément peut être une chaîne ou { t, sous: [...] }
  function list(items) {
    if (!items || !items.length) return "";
    return "<ul>" + items.map(function (it) {
      if (typeof it === "string") return "<li>" + fmt(it) + "</li>";
      return "<li>" + fmt(it.t) + list(it.sous) + "</li>";
    }).join("") + "</ul>";
  }

  function tags(t) {
    if (!t || !t.length) return "";
    return '<ul class="tags">' + t.map(function (x) { return '<li class="tag">' + esc(x) + "</li>"; }).join("") + "</ul>";
  }

  // localStorage peut être indisponible (navigation privée, fichier local) : on ignore l'erreur.
  function store(key, val) {
    try {
      if (val === undefined) return localStorage.getItem(key);
      localStorage.setItem(key, val);
    } catch (e) { return null; }
  }

  function copyText(text, btn) {
    function done() { var t = btn.textContent; btn.textContent = "Copié"; setTimeout(function () { btn.textContent = t; }, 1200); }
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) {}
      document.body.removeChild(ta);
    }
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  }

  // Met en évidence l'entrée du menu correspondant à la page affichée
  function setNav(key) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === key) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  VIA.u = {
    esc: esc, fmt: fmt, formatDate: formatDate, duree: duree, norm: norm, slug: slug,
    list: list, tags: tags, store: store, copyText: copyText, setNav: setNav
  };
})(window.VIA = window.VIA || {});
