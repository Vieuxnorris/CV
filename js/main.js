/*
 * CV — Julien Wins
 * Amélioration progressive : bascule clair/sombre et bouton d'export PDF.
 * Sans JavaScript, la page reste complète et suit le thème du système.
 */
"use strict";

(function () {
  var STORAGE_KEY = "theme";
  var root = document.documentElement;
  var toolbar = document.querySelector("[data-js-only]");
  var themeButton = document.getElementById("theme-toggle");
  var printButton = document.getElementById("print-cv");
  var darkQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  if (!toolbar || !themeButton || !printButton) {
    return;
  }

  function currentTheme() {
    var forced = root.getAttribute("data-theme");
    if (forced === "light" || forced === "dark") {
      return forced;
    }
    return darkQuery && darkQuery.matches ? "dark" : "light";
  }

  function saveTheme(theme) {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (err) {
      // Stockage indisponible : le choix vaut pour la visite en cours seulement.
    }
  }

  function syncButton() {
    themeButton.setAttribute("aria-pressed", String(currentTheme() === "dark"));
  }

  themeButton.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    saveTheme(next);
    syncButton();
  });

  printButton.addEventListener("click", function () {
    window.print();
  });

  if (darkQuery && typeof darkQuery.addEventListener === "function") {
    darkQuery.addEventListener("change", syncButton);
  }

  syncButton();
  toolbar.hidden = false;
})();
