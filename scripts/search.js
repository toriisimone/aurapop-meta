// scripts/search.js

let allProducts = [];

// Load all products once (relative path for GitHub Pages compatibility)
fetch('data/products/all.json')
  .then(res => res.json())
  .then(data => {
    // Flatten object-style or array-style JSON
    allProducts = Array.isArray(data)
      ? data
      : Object.values(data).flat();
  })
  .catch(err => console.error("Failed to load products:", err));

const input = document.getElementById('searchInput');
const results = document.getElementById('searchResults');

input.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();

  if (query.length === 0) {
    results.innerHTML = '';
    return;
  }

  const matches = allProducts.filter(p => {
    const name = (p.name || "").toLowerCase();
    const brand = (p.brand || "").toLowerCase();
    const category = (p.category || "").toLowerCase();

    return (
      name.includes(query) ||
      brand.includes(query) ||
      category.includes(query)
    );
  });

  if (matches.length === 0) {
    results.innerHTML = `<p class="no-results">No products found.</p>`;
    return;
  }

  results.innerHTML = matches
    .map(p => {
      const image = p.image || "images/default-product.jpg";
      const brand = p.brand || "";
      const price = p.price || "";
      return `
        <a href="product.html?id=${p.id}" class="product-card">
          <img src="${image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p class="brand">${brand}</p>
          <p class="price">${price}</p>
        </a>
      `;
    })
    .join('');
});
