/* Page Méthode (#/methode) : comment le site est alimenté et comment le lire. */
(function (VIA) {
  "use strict";
  var u = VIA.u;

  VIA.router.add("methode", function () {
    u.setNav("methode");
    document.title = "Méthode — Veille IA";
    VIA.main.innerHTML = '<section class="hero"><h1>Méthode</h1><p>Comment ce site est alimenté, et comment lire ce qu\'il contient.</p></section>' +
      VIA.data.METHODE.map(function (s) {
        return '<section class="card prose note-section"><h2>' + u.esc(s.titre) + "</h2>" + u.list(s.points) + "</section>";
      }).join("");
  });
})(window.VIA = window.VIA || {});
