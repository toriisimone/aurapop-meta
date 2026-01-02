// ------------------------------------------------------
// AuraPop Homepage Dynamic Sections (ALL FEATURES)
// ------------------------------------------------------

(async function () {
  try {
    // Load your master product file
    const response = await fetch('/data/all.json');
    const products = await response.json();

    // Utility: create a section wrapper
    function createSection(titleKicker, title, link = '/shop.html') {
      const section = document.createElement('section');
      section.className = 'ap-section';
      section.innerHTML = `
        <div class="ap-section-header">
          <div class="ap-section-title-block">
            <span class="ap-section-kicker">${titleKicker}</span>
            <h2 class="ap-section-title">${title}</h2>
          </div>
          <div class="ap-section-link" onclick="location.href='${link}'">
            View all
          </div>
        </div>
        <div class="ap-category-grid"></div>
      `;
      return section;
    }

    // Utility: create a product card
    function createProductCard(product) {
      const card = document.createElement('div');
      card.className = 'ap-category-card';
      card.onclick = () => location.href = `/product.html?id=${product.id}`;

      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="
          width: 100%;
          border-radius: 20px;
          margin-bottom: 10px;
        ">
        <div class="ap-category-title">${product.name}</div>
        <div class="ap-category-tagline">${product.brand}</div>
        <div class="ap-category-chip">View</div>
      `;
      return card;
    }

    // ------------------------------------------------------
    // 1. FEATURED PRODUCTS (first 4)
    // ------------------------------------------------------
    const featured = products.slice(0, 4);
    const featuredSection = createSection("Featured", "Curated picks just for you");
    const featuredGrid = featuredSection.querySelector('.ap-category-grid');
    featured.forEach(p => featuredGrid.appendChild(createProductCard(p)));

    // ------------------------------------------------------
    // 2. NEW ARRIVALS (last 4)
    // ------------------------------------------------------
    const newArrivals = products.slice(-4);
    const newSection = createSection("New Arrivals", "Fresh drops you’ll love");
    const newGrid = newSection.querySelector('.ap-category-grid');
    newArrivals.forEach(p => newGrid.appendChild(createProductCard(p)));

    // ------------------------------------------------------
    // 3. TRENDING NOW (random 4)
    // ------------------------------------------------------
    const trending = [...products].sort(() => Math.random() - 0.5).slice(0, 4);
    const trendingSection = createSection("Trending Now", "What everyone is loving");
    const trendingGrid = trendingSection.querySelector('.ap-category-grid');
    trending.forEach(p => trendingGrid.appendChild(createProductCard(p)));

    // ------------------------------------------------------
    // 4. CATEGORY IMAGE BLOCKS
    // ------------------------------------------------------
    const categories = [
      { name: "Makeup", image: "images/makeup-category.jpg", link: "/makeup.html" },
      { name: "Skincare", image: "images/skincare-category.jpg", link: "/skincare.html" },
      { name: "Wellness", image: "images/wellness-category.jpg", link: "/womens-wellness.html" },
      { name: "Travel", image: "images/travel-category.jpg", link: "/travel.html" }
    ];

    const catSection = createSection("Shop by vibe", "Explore categories");
    const catGrid = catSection.querySelector('.ap-category-grid');

    categories.forEach(cat => {
      const card = document.createElement('div');
      card.className = 'ap-category-card';
      card.onclick = () => location.href = cat.link;

      card.innerHTML = `
        <img src="${cat.image}" alt="${cat.name}" style="
          width: 100%;
          border-radius: 20px;
          margin-bottom: 10px;
        ">
        <div class="ap-category-title">${cat.name}</div>
        <div class="ap-category-chip">Shop ${cat.name}</div>
      `;
      catGrid.appendChild(card);
    });

    // ------------------------------------------------------
    // 5. SLIDER (horizontal scroll)
    // ------------------------------------------------------
    const sliderSection = document.createElement('section');
    sliderSection.className = 'ap-section';
    sliderSection.innerHTML = `
      <div class="ap-section-header">
        <div class="ap-section-title-block">
          <span class="ap-section-kicker">Hot Picks</span>
          <h2 class="ap-section-title">Swipe through the glow</h2>
        </div>
      </div>
      <div id="ap-slider" style="
        display: flex;
        gap: 14px;
        overflow-x: auto;
        padding-bottom: 10px;
        scroll-snap-type: x mandatory;
      "></div>
    `;

    const slider = sliderSection.querySelector('#ap-slider');
    products.slice(0, 10).forEach(p => {
      const card = document.createElement('div');
      card.style.cssText = `
        min-width: 180px;
        scroll-snap-align: start;
      `;
      card.className = 'ap-category-card';
      card.onclick = () => location.href = `/product.html?id=${p.id}`;

      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}" style="
          width: 100%;
          border-radius: 20px;
          margin-bottom: 10px;
        ">
        <div class="ap-category-title">${p.name}</div>
        <div class="ap-category-tagline">${p.brand}</div>
      `;
      slider.appendChild(card);
    });

    // ------------------------------------------------------
    // INSERT EVERYTHING ABOVE FOOTER
    // ------------------------------------------------------
    const footer = document.querySelector('.ap-footer');
    document.body.insertBefore(featuredSection, footer);
    document.body.insertBefore(newSection, footer);
    document.body.insertBefore(trendingSection, footer);
    document.body.insertBefore(catSection, footer);
    document.body.insertBefore(sliderSection, footer);

  } catch (err) {
    console.error('Homepage dynamic sections failed:', err);
  }
})();
