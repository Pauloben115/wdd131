// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Last modified
document.getElementById("last-modified").textContent =
    "Last Modified: " + document.lastModified;

// Hamburger menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
