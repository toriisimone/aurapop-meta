fetch('/data/products/all.json')
  .then(response => response.json())
  .then(products => {
    const category = document.body.getAttribute('data-category');
    const container = document.getElementById('product-list');
    if (!container) return;

    // Filter products by category
    const filtered = category === "all"
      ? products
      : products.filter(p => p.category === category);

    container.innerHTML = filtered.map(product => `
      <a href="product.html?id=${product.id}" class="product-card">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p class="brand">${product.brand}</p>
        <p class="description">${product.description}</p>
        <p class="price">${product.price}</p>
      </a>
    `).join('');
  })
  .catch(error => {
    console.error('Error loading products:', error);
  });
