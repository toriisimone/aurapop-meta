// Mobile Menu Toggle — Soft Pink + White Theme

document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".ap-menu-toggle");
    const nav = document.querySelector(".ap-nav");

    if (!toggle || !nav) {
        console.warn("Mobile menu elements not found in the DOM.");
        return;
    }

    // Open / close mobile menu
    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        toggle.classList.toggle("open");
    });

    // Close menu when a link is clicked (optional but recommended)
    const links = nav.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle.classList.remove("open");
        });
    });
});
