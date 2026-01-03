document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("homepage-products");
  if (!container) return;

  const products = [
    {
      "id": "accessories-001",
      "name": "Beautyblender Original Makeup Sponge",
      "brand": "Beautyblender",
      "price": "$20.00",
      "image": "https://www.beautyblender.com/cdn/shop/products/beautyblender_original.jpg",
      "link": "https://www.beautyblender.com/products/beautyblender-original"
    },
    {
      "id": "accessories-002",
      "name": "Real Techniques Miracle Complexion Sponge",
      "brand": "Real Techniques",
      "price": "$6.00",
      "image": "https://realtechniques.com/cdn/shop/products/miracle_complexion_sponge.jpg",
      "link": "https://realtechniques.com/products/miracle-complexion-sponge"
    },
    {
      "id": "accessories-003",
      "name": "EcoTools Start the Day Beautifully Brush Set",
      "brand": "EcoTools",
      "price": "$12.00",
      "image": "https://ecotools.com/cdn/shop/products/start_the_day_brush_set.jpg",
      "link": "https://ecotools.com/products/start-the-day-beautifully-kit"
    },
    {
      "id": "accessories-004",
      "name": "Sigma Beauty F80 Flat Kabuki Brush",
      "brand": "Sigma Beauty",
      "price": "$28.00",
      "image": "https://www.sigmabeauty.com/cdn/shop/products/sigma_f80.jpg",
      "link": "https://www.sigmabeauty.com/products/f80-flat-kabuki"
    },
    {
      "id": "accessories-005",
      "name": "Tweezerman Classic Slant Tweezer",
      "brand": "Tweezerman",
      "price": "$23.00",
      "image": "https://www.tweezerman.com/media/export/cms/products/1000x1000/tweezerman_slant_tweezer.jpg",
      "link": "https://www.tweezerman.com/slant-tweezer"
    },
    {
      "id": "accessories-006",
      "name": "Shiseido Eyelash Curler",
      "brand": "Shiseido",
      "price": "$23.00",
      "image": "https://www.shiseido.com/media/export/cms/products/1000x1000/shiseido_eyelash_curler.jpg",
      "link": "https://www.shiseido.com/eyelash-curler"
    },
    {
      "id": "accessories-007",
      "name": "Revlon One-Step Volumizer Plus Hair Dryer Brush",
      "brand": "Revlon",
      "price": "$69.00",
      "image": "https://www.revlonhairtools.com/cdn/shop/products/revlon_one_step_plus.jpg",
      "link": "https://www.revlonhairtools.com/products/one-step-volumizer-plus"
    },
    {
      "id": "accessories-008",
      "name": "Dyson Airwrap Multi-Styler Complete",
      "brand": "Dyson",
      "price": "$599.00",
      "image": "https://www.dyson.com/cdn/shop/products/dyson_airwrap.jpg",
      "link": "https://www.dyson.com/hair-care/dyson-airwrap"
    },
    {
      "id": "accessories-009",
      "name": "Hot Tools 24K Gold Curling Iron",
      "brand": "Hot Tools",
      "price": "$49.00",
      "image": "https://www.hottools.com/cdn/shop/products/hottools_24k_curling_iron.jpg",
      "link": "https://www.hottools.com/products/24k-gold-curling-iron"
    },
    {
      "id": "accessories-010",
      "name": "Conair InfinitiPRO Hair Dryer",
      "brand": "Conair",
      "price": "$39.00",
      "image": "https://www.conair.com/media/export/cms/products/1000x1000/conair_infinitipro_dryer.jpg",
      "link": "https://www.conair.com/products/infinitipro-hair-dryer"
    },
    {
      "id": "accessories-011",
      "name": "Tangle Teezer The Original Detangling Hairbrush",
      "brand": "Tangle Teezer",
      "price": "$14.00",
      "image": "https://www.tangleteezer.com/cdn/shop/products/tangle_teezer_original.jpg",
      "link": "https://www.tangleteezer.com/products/the-original"
    },
    {
      "id": "accessories-012",
      "name": "Wet Brush Original Detangler",
      "brand": "Wet Brush",
      "price": "$9.00",
      "image": "https://www.wetbrush.com/cdn/shop/products/wetbrush_original.jpg",
      "link": "https://www.wetbrush.com/products/original-detangler"
    },
    {
      "id": "accessories-013",
      "name": "Slip Pure Silk Scrunchies",
      "brand": "Slip",
      "price": "$39.00",
      "image": "https://www.slip.com/cdn/shop/products/slip_silk_scrunchies.jpg",
      "link": "https://www.slip.com/products/pure-silk-scrunchies"
    },
    {
      "id": "accessories-014",
      "name": "Kitsch Satin Heatless Curling Set",
      "brand": "Kitsch",
      "price": "$18.00",
      "image": "https://www.mykitsch.com/cdn/shop/products/kitsch_heatless_curling_set.jpg",
      "link": "https://www.mykitsch.com/products/satin-heatless-curling-set"
    },
    {
      "id": "accessories-015",
      "name": "Sephora Collection Color Switch Brush Cleaner",
      "brand": "Sephora Collection",
      "price": "$20.00",
      "image": "https://www.sephora.com/productimages/sku/switch_cleaner.jpg",
      "link": "https://www.sephora.com/product/color-switch-brush-cleaner"
    },
    {
      "id": "accessories-016",
      "name": "Anastasia Beverly Hills Brow Scissors",
      "brand": "Anastasia Beverly Hills",
      "price": "$20.00",
      "image": "https://www.anastasiabeverlyhills.com/media/export/cms/products/1000x1000/abh_brow_scissors.jpg",
      "link": "https://www.anastasiabeverlyhills.com/products/brow-scissors"
    },
    {
      "id": "accessories-017",
      "name": "E.l.f. Cosmetics Eyelash Curler",
      "brand": "e.l.f. Cosmetics",
      "price": "$4.00",
      "image": "https://www.elfcosmetics.com/media/export/cms/products/1000x1000/elf_eyelash_curler.jpg",
      "link": "https://www.elfcosmetics.com/eyelash-curler"
    },
    {
      "id": "accessories-018",
      "name": "Tweezerman G.E.A.R. Nail Clipper Set",
      "brand": "Tweezerman",
      "price": "$12.00",
      "image": "https://www.tweezerman.com/media/export/cms/products/1000x1000/tweezerman_nail_clippers.jpg",
      "link": "https://www.tweezerman.com/gear-nail-clipper-set"
    },
    {
      "id": "accessories-019",
      "name": "Revlon Compact Emery Boards",
      "brand": "Revlon",
      "price": "$3.00",
      "image": "https://www.revlon.com/media/export/cms/products/1000x1000/revlon_emery_boards.jpg",
      "link": "https://www.revlon.com/products/compact-emery-boards"
    },
    {
      "id": "accessories-020",
      "name": "Kitsch Microfiber Hair Towel",
      "brand": "Kitsch",
      "price": "$18.00",
      "image": "https://www.mykitsch.com/cdn/shop/products/kitsch_hair_towel.jpg",
      "link": "https://www.mykitsch.com/products/microfiber-hair-towel"
    }
  ];

  container.innerHTML = products.map(p => `
    <div class="ap-category-card" onclick="location.href='${p.link}'">
      <img src="${p.image}" alt="${p.name}" class="ap-product-image" />
      <div class="ap-category-label">${p.brand}</div>
      <div class="ap-category-title">${p.name}</div>
      <div class="ap-category-tagline">${p.price}</div>
      <div class="ap-category-chip">Shop Now</div>
    </div>
  `).join("");
});
