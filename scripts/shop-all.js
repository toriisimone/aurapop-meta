// Load pricing rules
async function loadPricingRules() {
    const response = await fetch('/data/pricing.json');
    return await response.json();
}

// Calculate final price with markup logic
async function calculateFinalPrice(basePrice, category, brand) {
    const pricing = await loadPricingRules();

    let price = parseFloat(basePrice.replace('$', ''));

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

// Load all products for the Shop-All page
async function loadShopAllProducts() {
    const response = await fetch('/data/all.json');
    const products = await response.json();

    const container = document.getElementById('shop-all-products');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="brand">${product.brand}</p>
            <p class="price" id="price-${product.id}">Loading...</p>
            <a href="/product.html?id=${product.id}" class="view-btn">View</a>
        `;

        container.appendChild(card);

        // Apply pricing
        calculateFinalPrice(product.price, product.category, product.brand)
            .then(finalPrice => {
                document.getElementById(`price-${product.id}`).textContent = finalPrice;
            });
    });
}

loadShopAllProducts();
