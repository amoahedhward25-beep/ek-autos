// ============================
// SCROLL REVEAL ANIMATION
// ============================
window.addEventListener("scroll", function () {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});


// ============================
// SEARCH & FILTER (INDEX PAGE)
// ============================
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const cars = document.querySelectorAll(".car-card");

function filterCars() {
    if (!searchInput || !priceFilter) return;

    const searchValue = searchInput.value.toLowerCase();
    const priceValue = priceFilter.value;

    cars.forEach(car => {
        const title = car.querySelector("h3").textContent.toLowerCase();
        const price = parseInt(car.getAttribute("data-price"));

        let matchesSearch = title.includes(searchValue);
        let matchesPrice = true;

        if (priceValue === "low") {
            matchesPrice = price < 40000;
        } else if (priceValue === "high") {
            matchesPrice = price >= 40000;
        }

        car.style.display = (matchesSearch && matchesPrice) ? "block" : "none";
    });
}

// Only attach if elements exist
if (searchInput && priceFilter) {
    searchInput.addEventListener("input", filterCars);
    priceFilter.addEventListener("change", filterCars);
}


// ============================
// WHATSAPP CONTACT FUNCTIONS
// ============================
function contactCar(carName) {
    const phoneNumber = "233552807040";
    const message = `Hi, I'm interested in the ${carName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}

function contactPart(partName) {
    const phoneNumber = "233552807040";
    const message = `Hi, I'm interested in the ${partName}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}


// ============================
// VIEW CAR (SEND DATA TO DETAILS PAGE)
// ============================
function viewCar(name, price, description, images) {
    localStorage.setItem("carName", name);
    localStorage.setItem("carPrice", price);
    localStorage.setItem("carDescription", description);
    localStorage.setItem("carImages", JSON.stringify(images));

    window.location.href = "car.html";
}


// ============================
// LOAD CAR DETAILS (car.html)
// ============================
if (window.location.pathname.includes("car.html")) {

    const name = localStorage.getItem("carName");
    const price = localStorage.getItem("carPrice");
    const description = localStorage.getItem("carDescription");
    const images = JSON.parse(localStorage.getItem("carImages"));

    const mainImage = document.getElementById("mainImage");
    const thumbnails = document.getElementById("thumbnails");

    // SET TEXT CONTENT
    if (name) document.getElementById("carName").textContent = name;
    if (price) document.getElementById("carPrice").textContent = price;
    if (description) document.getElementById("carDescription").textContent = description;

    console.log("IMAGES:", images);

    // DISPLAY IMAGES
    if (images && images.length > 0) {

        mainImage.src = images[0];

        images.forEach((img) => {
            const thumb = document.createElement("img");
            thumb.src = img;

            thumb.addEventListener("click", () => {
                mainImage.src = img;
            });

            thumbnails.appendChild(thumb);
        });

    } else {
        console.error("No images found in localStorage");
    }

    // WHATSAPP BUTTON
    const whatsappBtn = document.getElementById("whatsappBtn");

    if (whatsappBtn) {
        whatsappBtn.onclick = function () {
            const phoneNumber = "233552807040";
            const message = `Hi EK AUTOS, I'm interested in the ${name}`;
            const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(url, "_blank");
        };
    }
}
const storedImages = localStorage.getItem("carImages");

let images = [];

if (storedImages) {
    images = JSON.parse(storedImages);
} else {
    console.warn("No images found in storage");
}
