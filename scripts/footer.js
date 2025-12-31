fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    // Insert footer at the end of the body
    document.body.insertAdjacentHTML("beforeend", html);

    // Load footer stylesheet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles/footer.css";
    document.head.appendChild(link);
  })
  .catch(err => console.error("Footer failed to load:", err));
