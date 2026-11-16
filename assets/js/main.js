/* Démarrage : chargé en dernier, une fois les données, le cœur et toutes les vues enregistrés. */
(function (VIA) {
  "use strict";
  VIA.router.start();
  VIA.header.init();
})(window.VIA = window.VIA || {});
