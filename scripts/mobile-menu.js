// Mobile Menu Toggle — Soft Pink + White Theme

document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.getElementById("mobileMenuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!mobileMenuToggle || !mobileMenu) {
        console.warn("Mobile menu elements not found in the DOM.");
        return;
    }

    mobileMenuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("open");
    });

    // Optional: close menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll("a");
    mobileMenuLinks.forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
        });
    });
});
