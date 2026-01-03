document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("homepage-products");
  if (!container) return;

  container.innerHTML = `
    <div class="ap-category-card" onclick="location.href='/product/cloudskin-foundation.html'">
      <div class="ap-category-label">AuraPick</div>
      <div class="ap-category-title">CloudSkin Foundation</div>
      <div class="ap-category-tagline">Soft‑blur finish with skin‑loving hydration.</div>
      <div class="ap-category-chip">Shop Now</div>
    </div>

    <div class="ap-category-card" onclick="location.href='/product/lip-cloud-gloss.html'">
      <div class="ap-category-label">AuraPick</div>
      <div class="ap-category-title">Lip Cloud Gloss</div>
      <div class="ap-category-tagline">Juicy tint with plush shine and zero stick.</div>
      <div class="ap-category-chip">Shop Now</div>
    </div>

    <div class="ap-category-card" onclick="location.href='/product/skin-melt-serum.html'">
      <div class="ap-category-label">AuraPick</div>
      <div class="ap-category-title">Skin Melt Serum</div>
      <div class="ap-category-tagline">Dewy hydration with skin‑calming adaptogens.</div>
      <div class="ap-category-chip">Shop Now</div>
    </div>
  `;
});
