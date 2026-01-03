document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".ap-category-grid");
  if (!grid) return;

  fetch("/data/products/all.json")
    .then(r => r.json())
    .then(data => {
      const categories = data.categories || [];
      grid.innerHTML = ""; // clear the hard-coded cards

      categories.forEach(cat => {
        const card = document.createElement("div");
        card.className = "ap-category-card";
        card.onclick = () => {
          // basic routing: /{id}.html  (e.g., /makeup.html)
          window.location.href = `/${cat.id}.html`;
        };

        card.innerHTML = `
          <div class="ap-category-label">AuraPop Edit</div>
          <div class="ap-category-title">${cat.title}</div>
          <div class="ap-category-tagline">Curated picks from the AuraPop universe.</div>
          <div class="ap-category-chip">Shop ${cat.title}</div>
          <div class="ap-category-image-shell">
            <img src="/images/${cat.image}" alt="${cat.title}" />
          </div>
        `;

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading categories:", err);
    });
});
