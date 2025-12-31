fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "styles/footer.css";
    document.head.appendChild(link);
  });
