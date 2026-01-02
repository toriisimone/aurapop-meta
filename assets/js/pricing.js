// Load pricing rules
async function loadPricingRules() {
    const response = await fetch('/data/pricing.json');
    return await response.json();
}

// Calculate final price with markup logic
async function calculateFinalPrice(basePrice, category, brand) {
    const pricing = await loadPricingRules();

    let price = parseFloat(basePrice.replace('$', ''));

    // 1. Apply global markup
    price = price * pricing.globalMarkup;

    // 2. Apply category markup (if exists)
    if (pricing.categoryMarkup[category]) {
        price = price * pricing.categoryMarkup[category];
    }

    // 3. Apply brand markup (if exists)
    if (pricing.brandMarkup[brand]) {
        price = price * pricing.brandMarkup[brand];
    }

    // 4. Enforce minimum profit
    if (price < price + pricing.minimumProfit) {
        price = price + pricing.minimumProfit;
    }

    // 5. Format final price
    return `$${price.toFixed(2)}`;
}
