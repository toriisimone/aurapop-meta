document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("couponContainer");

  // Load coupons from JSON
  fetch("/data/coupons.json")
    .then(res => res.json())
    .then(coupons => {
      startCouponRotation(coupons);
    });

  function startCouponRotation(coupons) {
    renderRandomCoupons(coupons);

    // Refresh every 6 seconds
    setInterval(() => {
      renderRandomCoupons(coupons);
    }, 6000);
  }

  function renderRandomCoupons(coupons) {
    container.innerHTML = "";

    // Pick 6 random coupons
    const selected = shuffle(coupons).slice(0, 6);

    selected.forEach(coupon => {
      const card = document.createElement("div");
      card.className = "coupon-card sparkle-cloud";

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
    });
  }

  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }

});
