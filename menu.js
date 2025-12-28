document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".main-nav");

    if (hamburger && nav) {
        // Toggle main menu
        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
        });

        // Toggle submenus on mobile
        nav.querySelectorAll("li > a").forEach((link) => {
            link.addEventListener("click", function (e) {
                let submenu = this.nextElementSibling;
                if (submenu && submenu.tagName === "UL") {
                    e.preventDefault(); // stop navigation
                    submenu.classList.toggle("open");
                }
            });
        });
    }
});
