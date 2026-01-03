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
          <div class="ap-category-image-wrapper">
            <img src="/images/${cat.image}" alt="${cat.title}" class="ap-category-image">
          </div>

          <div class="ap-category-overlay">
            <div class="ap-category-overlay-title">${cat.title}</div>
            <button class="ap-category-overlay-button">Shop Now</button>
          </div>
        `;

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading categories:", err);
    });
});
