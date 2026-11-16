/* Routeur par ancre (#/page/param/…). Chaque vue s'enregistre avec VIA.router.add(nom, fonction).
   Une vue reçoit les segments d'adresse suivants et renvoie true si elle a géré le défilement elle-même. */
(function (VIA) {
  "use strict";
  var routes = {};
  var main = document.getElementById("main");
  var lastView = "";

  function add(name, fn) { routes[name] = fn; }

  function notFound() {
    VIA.u.setNav("");
    main.innerHTML = '<p class="empty">Page introuvable. <a href="#/">Retour à l\'accueil</a></p>';
  }

  // Remet la page dans un état neutre avant d'afficher une nouvelle vue
  function reset() {
    main.classList.remove("big");
    document.body.classList.remove("vp-open");
    document.onkeydown = null;
  }

  function route() {
    var parts = (location.hash.replace(/^#\/?/, "") || "").split("/");
    var name = parts[0] || "accueil";
    reset();
    var fn = routes[name];
    var result = fn ? fn(parts.slice(1)) : notFound();
    if (result === true) return;
    if (result && result.anchor) {
      var el = document.getElementById(result.anchor);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo(0, 0);
  }

  function start() {
    window.addEventListener("hashchange", function () {
      // Dans une formation, un clic sur le sommaire ne doit que défiler, pas tout redessiner
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
  }

  VIA.main = main;
  VIA.router = { add: add, start: start, notFound: notFound };
})(window.VIA = window.VIA || {});
