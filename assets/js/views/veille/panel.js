/* Veille — panneau latéral qui affiche une fiche complète (plein écran sur téléphone).
   L'adresse suit la fiche ouverte (#/veille/<id>) sans redessiner la page. */
(function (VIA) {
  "use strict";

  function html() {
    return '<div class="vp-backdrop" id="vp-backdrop" hidden></div>' +
      '<aside class="vpanel" id="vpanel" role="dialog" aria-modal="false" aria-labelledby="vp-title" hidden>' +
        '<button class="vp-close" id="vp-close" aria-label="Fermer la fiche">×</button><div id="vp-body"></div>' +
      "</aside>";
  }

  // À appeler une fois le HTML du panneau inséré dans la page
  function create() {
    var panel = document.getElementById("vpanel");
    var backdrop = document.getElementById("vp-backdrop");
    var closeBtn = document.getElementById("vp-close");
    var returnFocus = null;

    function open(v, opener) {
      document.getElementById("vp-body").innerHTML = VIA.veille.fiche.detail(v);
      panel.hidden = false; backdrop.hidden = false;
      document.body.classList.add("vp-open");
      panel.scrollTop = 0;
      returnFocus = opener || null;
      history.replaceState(null, "", "#/veille/" + v.id);
      closeBtn.focus();
    }

    function close() {
      panel.hidden = true; backdrop.hidden = true;
      document.body.classList.remove("vp-open");
      history.replaceState(null, "", "#/veille");
      if (returnFocus && document.body.contains(returnFocus)) returnFocus.focus();
    }

    closeBtn.addEventListener("click", close);
    backdrop.addEventListener("click", close);
    document.onkeydown = function (ev) { if (ev.key === "Escape" && !panel.hidden) close(); };

    return { open: open, close: close };
  }

  VIA.veille.panel = { html: html, create: create };
})(window.VIA = window.VIA || {});
