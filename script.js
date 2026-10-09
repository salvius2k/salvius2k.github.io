const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const year = document.getElementById("year");

// Display current year
year.textContent = new Date().getFullYear();

// Open and close dropdown menu
menuBtn.addEventListener("click", function () {
    const opening = menu.classList.contains("hidden");

    menu.classList.toggle("hidden", !opening);
    menuBtn.setAttribute("aria-expanded", String(opening));
    menuBtn.textContent = opening ? "✕ Close" : "☰ Menu";
});

// Close menu after selecting a section
menu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.add("hidden");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰ Menu";
    });
});

// Highlight the current section
const sections = document.querySelectorAll("main section");
const menuLinks = menu.querySelectorAll("a");

function updateActiveLink() {
    let current = "home";

    sections.forEach(function (section) {
        if (window.scrollY >= section.offsetTop - 150) {
            current = section.id;
        }
    });

    menuLinks.forEach(function (link) {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current
        );
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();