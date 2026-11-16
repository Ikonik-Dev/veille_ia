/* En-tête : bascule de thème clair / sombre et onglet « Animer » discret.
   Triple-clic sur le logo « IA » : affiche ou masque l'onglet Animer sur ce navigateur.
   Ce n'est pas une protection (l'adresse #/animer reste accessible), juste de la discrétion. */
(function (VIA) {
  "use strict";
  var u = VIA.u;

  function initTheme() {
    var root = document.documentElement;
    var saved = u.store("theme");
    if (saved) root.setAttribute("data-theme", saved);
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      var dark = current ? current === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
      var next = dark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      u.store("theme", next);
    });
  }

  function initAnimerToggle() {
    var link = document.querySelector('[data-nav="animer"]');
    function show(on) { if (link) link.hidden = !on; }
    show(u.store("animer:on") === "1");
    var mark = document.querySelector(".brand-mark");
    if (!mark) return;
    mark.addEventListener("click", function (ev) {
      if (ev.detail !== 3) return;
      ev.preventDefault();
      var on = u.store("animer:on") !== "1";
      u.store("animer:on", on ? "1" : "0");
      show(on);
      if (on) location.hash = "#/animer";
    });
  }

  VIA.header = { init: function () { initAnimerToggle(); initTheme(); } };
})(window.VIA = window.VIA || {});
