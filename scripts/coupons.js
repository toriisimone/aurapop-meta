document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("couponContainer");

  // Load coupons from JSON
  fetch("/data/coupons.json")
    .then(res => res.json())
    .then(coupons => {
      startCouponUniverse(coupons);
    });

  function startCouponUniverse(coupons) {
    // Fill the page based on screen size
    const count = calculateCouponCount();
    renderInitialCoupons(coupons, count);

    // Replace one coupon at a time forever
    setInterval(() => {
      replaceRandomCoupon(coupons);
    }, 2500);
  }

  function calculateCouponCount() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Rough estimate: 1 coupon per 180x180 area
    return Math.floor((width * height) / (180 * 180));
  }

  function renderInitialCoupons(coupons, count) {
    for (let i = 0; i < count; i++) {
      createCouponCard(randomCoupon(coupons));
    }
  }

  function replaceRandomCoupon(coupons) {
    const cards = document.querySelectorAll(".coupon-card");
    if (cards.length === 0) return;

    const randomCard = cards[Math.floor(Math.random() * cards.length)];

    randomCard.classList.remove("visible");

    setTimeout(() => {
      randomCard.replaceWith(createCouponCard(randomCoupon(coupons), true));
    }, 500);
  }

  function randomCoupon(coupons) {
    return coupons[Math.floor(Math.random() * coupons.length)];
  }

  function createCouponCard(coupon, returnElement = false) {
    const card = document.createElement("div");

    // 1 in 12 chance of being a soft banner
    const isBanner = Math.random() < 0.08;

    card.className = isBanner
      ? "coupon-card coupon-banner sparkle-cloud"
      : "coupon-card sparkle-cloud";

    card.innerHTML = `
      <div class="coupon-brand">${coupon.brand}</div>
      <div class="coupon-offer">${coupon.offer}</div>
      <div class="coupon-code">Use Code: <strong>${coupon.code}</strong></div>
      <a href="${coupon.link}" target="_blank" class="coupon-btn">Get Deal</a>
    `;

    container.appendChild(card);

    // Animate in
    setTimeout(() => {
      card.classList.add("visible");
    }, 50);

    return returnElement ? card : null;
  }

});
