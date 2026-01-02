// scripts/search.js

let allProducts = [];

// Load pricing rules
async function loadPricingRules() {
  const response = await fetch('data/pricing.json');
  return await response.json();
}

// Calculate final price with markup logic
async function calculateFinalPrice(basePrice, category, brand) {
  const pricing = await loadPricingRules();

  let price = parseFloat((basePrice || "0").replace('$', ''));

  // Apply global markup
  price = price * pricing.globalMarkup;

  // Apply category markup
  if (pricing.categoryMarkup[category]) {
    price = price * pricing.categoryMarkup[category];
  }

  // Apply brand markup
  if (pricing.brandMarkup[brand]) {
    price = price * pricing.brandMarkup[brand];
  }

  // Enforce minimum profit
  if (price < pricing.minimumProfit) {
    price = pricing.minimumProfit;
  }

  return `$${price.toFixed(2)}`;
}

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

input.addEventListener('input', async () => {
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

  // Build cards with placeholder price first
  results.innerHTML = matches
    .map(p => {
      const image = p.image || "images/default-product.jpg";
      const brand = p.brand || "";

      return `
        <a href="product.html?id=${p.id}" class="product-card">
          <img src="${image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p class="brand">${brand}</p>
          <p class="price" id="price-${p.id}">Loading...</p>
        </a>
      `;
    })
    .join('');

  // Apply pricing to each result
  for (const p of matches) {
    const finalPrice = await calculateFinalPrice(p.price, p.category, p.brand);
    const priceElement = document.getElementById(`price-${p.id}`);
    if (priceElement) priceElement.textContent = finalPrice;
  }
});
