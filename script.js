document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".menu-toggle").addEventListener("click", () => {
        document.querySelector(".nav-links").classList.toggle("active");
    });
});
