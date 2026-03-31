window.addEventListener("scroll", function() {
    let reveals = document.querySelectorAll(".reveal");

    reveals.forEach((el) => {
        let windowHeight = window.innerHeight;
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
const searchInput = document.getElementById("searchInput");
const priceFilter = document.getElementById("priceFilter");
const cars = document.querySelectorAll(".car-card");

function filterCars() {
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

        if (matchesSearch && matchesPrice) {
            car.style.display = "block";
        } else {
            car.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterCars);
priceFilter.addEventListener("change", filterCars);
function contactCar(carName) {
    let phoneNumber = "233552807040"; // your number (no +)

    let message = `Hi, I'm interested in the ${carName}`;
    let encodedMessage = encodeURIComponent(message);

    let url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
}
function contactPart(partName) {
    let phoneNumber = "233552807040";

    let message = `Hi, I'm interested in the ${partName}`;
    let encodedMessage = encodeURIComponent(message);

    let url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(url, "_blank");
}
let message = `Hi EK AUTOS, I'm interested in the ${carName}. Is it still available?`;