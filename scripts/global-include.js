// MASTER GLOBAL INJECTOR — FIXES EVERY PAGE AUTOMATICALLY

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------------------------- */
  /* 1. Inject global-head.html into <head>             */
  /* -------------------------------------------------- */
  fetch("/includes/global-head.html")
    .then(res => res.text())
    .then(content => {
      document.head.insertAdjacentHTML("beforeend", content);

      /* -------------------------------------------------- */
      /* 1B. Load aura-core.js AFTER global-head loads      */
      /* -------------------------------------------------- */
      const core = document.createElement("script");
      core.src = "/scripts/aura-core.js";
      document.body.appendChild(core);
    });

  /* -------------------------------------------------- */
  /* 2. Remove duplicate old header/footer if present   */
  /* -------------------------------------------------- */
  const oldHeader = document.querySelector("header");
  if (oldHeader) oldHeader.remove();

  const oldFooter = document.querySelector("footer");
  if (oldFooter) oldFooter.remove();

  /* -------------------------------------------------- */
  /* 3. Remove old inline scripts that conflict         */
  /* -------------------------------------------------- */
  document.querySelectorAll("script").forEach(s => {
    const bad = [
      "header.js",
      "footer.js",
      "mobile-menu.js"
    ];
    if (s.src && bad.some(b => s.src.includes(b))) {
      s.remove();
    }
  });

  /* -------------------------------------------------- */
  /* 4. Remove inline <style> blocks                    */
  /* -------------------------------------------------- */
  document.querySelectorAll("style").forEach(style => {
    style.remove();
  });

});
