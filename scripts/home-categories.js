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

        // When you click anywhere on the card, go to that category page
        card.onclick = () => {
          window.location.href = `/${cat.id}.html`;
        };

        // The visual structure of the card: image + overlay
        card.innerHTML = `
          <div class="ap-category-image-wrapper">
            <img src="/images/${cat.image}" alt="${cat.title}" class="ap-category-image">
          </div>

          <div class="ap-category-overlay">
            <div class="ap-category-overlay-title">${cat.title}</div>
            <button class="ap-category-overlay-button">Shop Now</button>
          </div>
        `;

        // This makes the Shop Now button work as its own click
        const button = card.querySelector(".ap-category-overlay-button");
        button.addEventListener("click", (event) => {
          event.stopPropagation(); // don't trigger the card click
          window.location.href = `/${cat.id}.html`;
        });

        grid.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading categories:", err);
    });
});
