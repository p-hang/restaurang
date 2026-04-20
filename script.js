// =======================
// FILTER PAGE (index)
// =======================

// Toggle tag active
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        tag.classList.toggle("active");
    });
});

// Guests slider
const guestSlider = document.getElementById("guests");
const guestValue = document.getElementById("guestValue");

if (guestSlider && guestValue) {
    guestSlider.addEventListener("input", () => {
        guestValue.textContent = guestSlider.value + " personer";
    });
}

// Price slider
const priceSlider = document.getElementById("price");
const priceValue = document.getElementById("priceValue");

if (priceSlider && priceValue) {
    priceSlider.addEventListener("input", () => {
        priceValue.textContent = "$" + priceSlider.value;
    });
}

// Search button
const searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        alert("Searching...");
    });
}


// =======================
// SEARCH RESULTS PAGE
// =======================

// Button actions
document.querySelectorAll(".actions button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Clicked!");
    });
});

// Ta bort filter-tags när man klickar
document.querySelectorAll(".tag2").forEach(tag => {
    tag.addEventListener("click", () => {
        tag.remove();
    });
});

// Expandera / stäng receptkort
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        const existing = card.querySelector(".extra-info");

        if (existing) {
            existing.remove();
        } else {
            const extra = document.createElement("div");
            extra.classList.add("extra-info");

            extra.innerHTML = `
                <div class="extra-info-content">
                    <div class="ingredients-column">
                        <ul>
                            <li>baby spinach</li>
                            <li>olive oil</li>
                            <li>onions</li>
                            <li>garlic</li>
                            <li>eggs</li>
                        </ul>
                    </div>

                    <div class="nutrition-column">
                        <div class="nutrition-row"><span>kcal</span><span>306 g</span></div>
                        <div class="nutrition-row"><span>fat</span><span>17 g</span></div>
                        <div class="nutrition-row"><span>saturates</span><span>3 g</span></div>
                        <div class="nutrition-row"><span>carbs</span><span>26 g</span></div>
                        <div class="nutrition-row"><span>sugars</span><span>9 g</span></div>
                        <div class="nutrition-row"><span>fibre</span><span>5 g</span></div>
                        <div class="nutrition-row"><span>protein</span><span>9 g</span></div>
                        <div class="nutrition-row"><span>salt</span><span>0.4 g</span></div>
                    </div>
                </div>
            `;

            card.querySelector(".card-body").appendChild(extra);
        }
    });
});