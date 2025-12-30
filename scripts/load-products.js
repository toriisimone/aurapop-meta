fetch('/data/products/all.json')
  .then(response => response.json())
  .then(data => {
    const category = document.body.getAttribute('data-category');
    const products = data[category] || [];

    const container = document.getElementById('product-list');
    if (!container) return;

    container.innerHTML = products.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="brand">${product.brand}</p>
        <p class="description">${product.description}</p>
        <p class="price">$${product.price.toFixed(2)}</p>
        <p class="rating">⭐ ${product.rating}</p>
      </div>
    `).join('');
  })
  .catch(error => {
    console.error('Error loading products:', error);
  });
