fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    // Insert footer at the end of the body
    document.body.insertAdjacentHTML("beforeend", html);

    /* --------------------------------------------- */
    /* LOAD FOOTER STYLES                            */
    /* --------------------------------------------- */
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles/footer.css";
    document.head.appendChild(link);

    /* --------------------------------------------- */
    /* NEWSLETTER MODULE ACTIVATION                  */
    /* --------------------------------------------- */
    const newsletter = document.getElementById("apNewsletter");
    if (newsletter) {
      newsletter.classList.add("ap-newsletter-loaded");
    }

    /* --------------------------------------------- */
    /* FLOATING CLOUDS (AURAPOP SIGNATURE)           */
    /* --------------------------------------------- */
    const footer = document.querySelector("footer");
    if (footer) {
      footer.classList.add("ap-footer-clouds");

      // Create 6 soft floating clouds
      for (let i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.className = "ap-footer-cloud";
        cloud.style.left = Math.random() * 100 + "%";
        cloud.style.animationDelay = (Math.random() * 4) + "s";
        cloud.style.opacity = 0.7 + Math.random() * 0.3;
        footer.appendChild(cloud);
      }
    }

    /* --------------------------------------------- */
    /* FLOATING SPARKLES (GIRLY, SOFT, PREMIUM)      */
    /* --------------------------------------------- */
    if (footer) {
      for (let i = 0; i < 14; i++) {
        const sparkle = document.createElement("div");
        sparkle.className = "ap-footer-sparkle";
        sparkle.style.left = Math.random() * 100 + "%";
        sparkle.style.animationDelay = (Math.random() * 3) + "s";
        sparkle.style.opacity = 0.5 + Math.random() * 0.5;
        footer.appendChild(sparkle);
      }
    }

    /* --------------------------------------------- */
    /* SMOOTH SCROLL TO TOP BUTTON                   */
    /* --------------------------------------------- */
    const toTop = document.getElementById("apToTop");
    if (toTop) {
      toTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }
  })
  .catch(err => console.error("Footer failed to load:", err));
