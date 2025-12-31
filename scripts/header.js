fetch("header.html")
  .then(res => res.text())
  .then(html => {
    // Insert header at the very top of the body
    document.body.insertAdjacentHTML("afterbegin", html);

    // Load header stylesheet
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles/header.css";
    document.head.appendChild(link);
  })
  .catch(err => console.error("Header failed to load:", err));
