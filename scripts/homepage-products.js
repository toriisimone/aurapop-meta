document.addEventListener("DOMContentLoaded", async function () {
  const container = document.getElementById("homepage-products");
  if (!container) return;

  try {
    const response = await fetch("/data/products.json");
    const products = await response.json();

    const homepageProducts = products.slice(0, 12);

    container.innerHTML = homepageProducts.map(p => `
      <div class="ap-category-card" onclick="location.href='${p.link}'">
        <img src="${p.image}" alt="${p.name}" class="ap-product-image" />
        <div class="ap-category-label">${p.brand}</div>
        <div class="ap-category-title">${p.name}</div>
        <div class="ap-category-tagline">${p.price}</div>
        <div class="ap-category-chip">Shop Now</div>
      </div>
    `).join("");

  } catch (error) {
    console.error("Failed to load products:", error);
  }
});
