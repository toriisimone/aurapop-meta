// scripts/load-products.js
(function () {
  const container = document.getElementById('product-list');
  if (!container) return;

  const rawCategory = document.body.getAttribute('data-category') || 'all';
  const category = rawCategory.toLowerCase();

  function normalizeProduct(product) {
    const normalizedCategory = (product.category || category || 'general').toLowerCase();

    let priceString = product.price;
    if (typeof priceString === 'number') {
      priceString = `$${priceString.toFixed(2)}`;
    }

    const link =
      product.link && product.link.trim() !== ''
        ? product.link
        : `product.html?id=${encodeURIComponent(product.id || '')}`;

    const image = product.image || 'images/default-product.jpg';

    return {
      ...product,
      category: normalizedCategory,
      price: priceString,
      link,
      image
    };
  }

  function renderProducts(products) {
    if (!products || products.length === 0) {
      container.innerHTML = `
        <p class="no-products">
          No products found for this category yet. Check back soon.
        </p>
      `;
      return;
    }

    const cards = products.map((product) => {
      const p = normalizeProduct(product);

      return `
        <a href="${p.link}" class="product-card">
          <img src="${p.image}" alt="${p.name}" />
          <h3>${p.name}</h3>
          <p class="brand">${p.brand || ''}</p>
          <p class="price">${p.price}</p>
        </a>
      `;
    });

    container.innerHTML = cards.join('');
  }

  function filterByCategory(products) {
    if (!Array.isArray(products)) return [];

    if (category === 'all') return products;

    return products.filter((p) => {
      const c = (p.category || '').toLowerCase();
      return c === category;
    });
  }

  function flattenIfObject(data) {
    if (Array.isArray(data)) return data;
    if (data && typeof data === 'object') {
      return Object.values(data).flat();
    }
    return [];
  }

  function tryCategoryJsonFallback() {
    const url = `data/products/${category}.json`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Category JSON not found');
        }
        return response.json();
      })
      .then((data) => {
        const products = Array.isArray(data) ? data : flattenIfObject(data);
        renderProducts(products);
      })
      .catch((err) => {
        console.warn('Category-specific JSON not found or failed:', err);
        renderProducts([]);
      });
  }

  fetch('data/products/all.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('all.json not found');
      }
      return response.json();
    })
    .then((data) => {
      const allProducts = flattenIfObject(data);
      const filtered = filterByCategory(allProducts);

      if (filtered.length === 0) {
        return tryCategoryJsonFallback();
      }

      renderProducts(filtered);
    })
    .catch((error) => {
      console.error('Error loading from all.json, trying category JSON:', error);
      return tryCategoryJsonFallback();
    });
})();
