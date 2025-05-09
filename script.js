document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector(".hero-section");

    // Navbar scroll effect
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".navbar-nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbar.offsetHeight,
                    behavior: "smooth"
                });
            }
        });
    });

    // ScrollReveal animations
    const sr = ScrollReveal({
        origin: "bottom",
        distance: "60px",
        duration: 1000,
        delay: 200,
        reset: false // Animations will only occur once
    });

    sr.reveal(".hero-title, .hero-subtitle, .hero-sub-provocador, .btn-hero, .autor-mention", { interval: 150 });
    sr.reveal(".section-title, .section-subtitle, .section-text", { interval: 100 });
    sr.reveal(".rule-card", { interval: 100 });
    sr.reveal(".benefit-item", { interval: 100 });
    sr.reveal(".author-image-container, .author-text-container", { origin: "left", interval: 100 });
    sr.reveal(".book-cover, .btn-cta", { interval: 100 });

    // Placeholder for interactive rules (if we want to expand on click/hover later)
    const ruleCards = document.querySelectorAll(".rule-card");
    ruleCards.forEach(card => {
        card.addEventListener("mouseenter", () => {
            // Example: card.style.transform = "scale(1.03)";
        });
        card.addEventListener("mouseleave", () => {
            // Example: card.style.transform = "scale(1)";
        });
    });

});

