// Toggle tag active
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("active");
    });
});

// Guests slider
const guestSlider = document.getElementById("guests");
const guestValue = document.getElementById("guestValue");

guestSlider.addEventListener("input", () => {
    guestValue.textContent = guestSlider.value + " personer";
});

// Price slider
const priceSlider = document.getElementById("price");
const priceValue = document.getElementById("priceValue");

priceSlider.addEventListener("input", () => {
    priceValue.textContent = "$" + priceSlider.value;
});

// Search button
document.querySelector(".search-btn").addEventListener("click", () => {
    alert("Searching...");
});


/*Search result*/

// Button actions
document.querySelectorAll(".actions button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Clicked!");
    });
});