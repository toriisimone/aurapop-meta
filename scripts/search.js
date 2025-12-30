// scripts/search.js

let allProducts = [];

// Load all products once
fetch('/data/products/all.json')
  .then(res => res.json())
  .then(data => {
    // Flatten object-style or array-style JSON
    allProducts = Array.isArray(data) 
      ? data 
      : Object.values(data).flat();
  });

const input = document.getElementById('searchInput');
const results = document.getElementById('searchResults');

input.addEventListener('input', () => {
  const query = input.value.toLowerCase().trim();

  if (query.length === 0) {
    results.innerHTML = '';
    return;
  }

  const matches = allProducts.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query) ||
    p.category.toLowerCase().includes(query)
  );

  if (matches.length === 0) {
    results.innerHTML = `<p class="no-results">No products found.</p>`;
    return;
  }

  results.innerHTML = matches.map(p => `
    <a href="product.html?id=${p.id}" class="product-card">
      <img src="${p.image}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p class="brand">${p.brand}</p>
      <p class="price">${p.price}</p>
    </a>
  `).join('');
});
