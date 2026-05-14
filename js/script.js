/* =========================
   CARLOS JOHANSEN
   SCRIPT PRINCIPAL
========================= */


/* =========================
   HEADER DINÁMICO
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(17, 24, 39, 0.98)";
        header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25)";

    } else {

        header.style.background = "rgba(17, 24, 39, 0.95)";
        header.style.boxShadow = "none";
    }

});


/* =========================
   SCROLL SUAVE EXTRA
========================= */

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        window.scrollTo({

            top: targetSection.offsetTop - 80,
            behavior: "smooth"

        });

    });

});


/* =========================
   ANIMACIÓN DE APARICIÓN
========================= */

const animatedElements = document.querySelectorAll(
    ".beer-card, .step, .historia-text, .historia-image, .contact-box"
);

const revealOnScroll = () => {

    const triggerBottom = window.innerHeight * 0.85;

    animatedElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(40px)";
    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =========================
   EFECTO HERO
========================= */

const heroTitle = document.querySelector(".hero-content h2");

window.addEventListener("load", () => {

    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(30px)";

    setTimeout(() => {

        heroTitle.style.transition = "all 1s ease";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";

    }, 300);

});


/* =========================
   AÑO AUTOMÁTICO FOOTER
========================= */

const footer = document.querySelector(".footer p");

const currentYear = new Date().getFullYear();

footer.innerHTML =
    `© ${currentYear} Carlos Johansen – Cerveza Artesanal`;


/* =========================
   MENSAJE CONSOLA
========================= */

console.log(`
========================================
   CARLOS JOHANSEN - CERVEZA ARTESANAL
========================================

Sitio web cargado correctamente.
Desarrollado para el proyecto académico
de gestión de proveedores y aprovisionamiento.

========================================
`);