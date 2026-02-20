// ===============================
// TEMPLE DATA
// ===============================
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: 1893,
    area: 253000,
    imageUrl: "images/salt-lake-temple.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Manti, Utah",
    dedicated: 1888,
    area: 74792,
    imageUrl: "images/manti-utah-temple.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: 1919,
    area: 42100,
    imageUrl: "images/laie-hawaii-temple.jpg"
  },
  {
    name: "Aba Nigeria Temple",
    location: "Aba, Nigeria",
    dedicated: 2005,
    area: 11500,
    imageUrl: "images/aba-nigeria-temple.jpg"
  },
  {
    name: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: 2004,
    area: 17500,
    imageUrl: "images/accra-ghana-temple.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: 2019,
    area: 41000,
    imageUrl: "images/rome-italy-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedicated: 2017,
    area: 44000,
    imageUrl: "images/paris-france-temple.jpg"
  },
  {
    name: "San Diego California Temple",
    location: "San Diego, California",
    dedicated: 1993,
    area: 72000,
    imageUrl: "images/san-diego-temple.jpg"
  },
  {
    name: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: 2016,
    area: 85000,
    imageUrl: "images/provo-city-center-temple.jpg"
  }
];

// ===============================
// SELECT ELEMENTS
// ===============================
const container = document.querySelector(".temple-container");
const title = document.getElementById("page-title");
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

// ===============================
// DISPLAY FUNCTION
// ===============================
function displayTemples(list, titleText) {
  container.innerHTML = "";
  title.textContent = titleText;

  list.forEach(temple => {
    const card = document.createElement("section");

    card.innerHTML = `
      <h3>${temple.name}</h3>
      <p>${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// ===============================
// INITIAL DISPLAY
// ===============================
displayTemples(temples, "All Temples");

// ===============================
// FILTER EVENTS
// ===============================
document.getElementById("home").addEventListener("click", () => {
  displayTemples(temples, "All Temples");
});

document.getElementById("old").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => t.dedicated < 1900),
    "Old Temples"
  );
});

document.getElementById("new").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => t.dedicated >= 2000),
    "New Temples"
  );
});

document.getElementById("large").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => t.area > 90000),
    "Large Temples"
  );
});

document.getElementById("small").addEventListener("click", () => {
  displayTemples(
    temples.filter(t => t.area < 20000),
    "Small Temples"
  );
});

// ===============================
// HAMBURGER MENU
// ===============================
hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ===============================
// FOOTER INFO
// ===============================
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent =
  "Last Modified: " + document.lastModified;
