// ------------------------------
// AuraPop Homepage Featured Products
// ------------------------------

(async function () {
  try {
    // Load your master product file
    const response = await fetch('/data/all.json');
    const products = await response.json();

    // Pick 4 featured products (you can change this number)
    const featured = products.slice(0, 4);

    // Create the container
    const section = document.createElement('section');
    section.className = 'ap-section';

    section.innerHTML = `
      <div class="ap-section-header">
        <div class="ap-section-title-block">
          <span class="ap-section-kicker">Featured</span>
          <h2 class="ap-section-title">Curated picks just for you</h2>
        </div>
        <div class="ap-section-link" onclick="location.href='/shop.html'">
          Shop all
        </div>
      </div>

      <div class="ap-category-grid" id="ap-featured-grid"></div>
    `;

    // Insert before the footer
    const footer = document.querySelector('.ap-footer');
    document.body.insertBefore(section, footer);

    // Fill the grid
    const grid = document.getElementById('ap-featured-grid');

    featured.forEach(product => {
      const card = document.createElement('div');
      card.className = 'ap-category-card';
      card.onclick = () => location.href = `/product.html?id=${product.id}`;

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="
          width: 100%;
          border-radius: 20px;
          margin-bottom: 10px;
        ">
        <div class="ap-category-title">${product.name}</div>
        <div class="ap-category-tagline">${product.brand}</div>
        <div class="ap-category-chip">View</div>
      `;

      grid.appendChild(card);
    });

  } catch (err) {
    console.error('Featured products failed to load:', err);
  }
})();
