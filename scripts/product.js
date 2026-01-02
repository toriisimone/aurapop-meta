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

// Load product and apply pricing
async function loadProduct() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const response = await fetch('/data/all.json');
    const products = await response.json();

    const product = products.find(p => p.id === productId);

    if (!product) return;

    document.getElementById('product-name').textContent = product.name;
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-link').href = product.link;

    // Apply pricing
    calculateFinalPrice(product.price, product.category, product.brand)
        .then(finalPrice => {
            document.getElementById('product-price').textContent = finalPrice;
        });
}

loadProduct();
