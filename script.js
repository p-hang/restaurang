// =======================
// FILTER PAGE (index)
// =======================

//deals with togle and selected filters
document.querySelectorAll(".section").forEach(section => {
    const icon = section.querySelector(".toggle-icon");
    const content = section.querySelector(".section-content");
    const selectedTagsContainer = section.querySelector(".selected-tags");
    const tags = section.querySelectorAll(".tag");
    const slider = section.querySelector('input[type="range"]');
    const valueText = section.querySelector(".slider-value");

    if (!icon || !content || !selectedTagsContainer) {
        return;
    }

    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            tag.classList.toggle("active");

            if (content.classList.contains("hidden")) {
                updateSelectedTags(tags, selectedTagsContainer);
            }
        });
    });

    icon.addEventListener("click", () => {
        const isClosing = !content.classList.contains("hidden");

        content.classList.toggle("hidden");
        icon.classList.toggle("rotated");

        if (isClosing) {
            if (tags.length > 0) {
                updateSelectedTags(tags, selectedTagsContainer);
                selectedTagsContainer.classList.add("show");
            } else if (slider && valueText) {
                selectedTagsContainer.innerHTML = "";

                const selectedValue = document.createElement("button");
                selectedValue.className = "tag active selected-tag";
                selectedValue.type = "button";
                selectedValue.textContent = valueText.textContent;

                selectedTagsContainer.appendChild(selectedValue);
                selectedTagsContainer.classList.add("show");
            }
        } else {
            selectedTagsContainer.classList.remove("show");
            selectedTagsContainer.innerHTML = "";
        }
    });
});

//creates copies of active tags
function updateSelectedTags(tags, container) {
    container.innerHTML = "";

    tags.forEach(originalTag => {
        if (originalTag.classList.contains("active")) {
            const selectedTag = document.createElement("button");
            selectedTag.className = "tag active selected-tag";
            selectedTag.type = "button";

            const text = document.createElement("span");
            text.textContent = originalTag.textContent;

            const icon = document.createElement("img");
            icon.src = "assets/Icon-close.png";
            icon.alt = "remove";
            icon.classList.add("close-icon");

            selectedTag.appendChild(text);
            selectedTag.appendChild(icon);

            selectedTag.addEventListener("click", () => {
                originalTag.classList.remove("active");
                updateSelectedTags(tags, container);
            });

            container.appendChild(selectedTag);
        }
    });
}

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
        priceValue.textContent = "€" + priceSlider.value;
    });
}

// Search button
function filterUI() {
    document.querySelectorAll(".section").forEach(section => {
        const tags = section.querySelectorAll(".tag");

        tags.forEach(tag => {
            if (!tag.classList.contains("active")) {
                tag.style.display = "none";
            }
        });
    });
}

//saves filters and sends you to next page
const searchBtn = document.querySelector(".search-btn");

if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        saveFilters();
        window.location.href = "search-results.html";
    });
}

//stores filters
function saveFilters() {
    const filters = {};

    document.querySelectorAll(".section").forEach(section => {
        const title = section.querySelector("h4")?.textContent;
        const activeTags = [];

        section.querySelectorAll(".tag.active").forEach(tag => {
            activeTags.push(tag.textContent.trim());
        });

        const slider = section.querySelector('input[type="range"]');
        if (slider) {
            filters[title] = slider.value;
        } else {
            filters[title] = activeTags;
        }
    });

    localStorage.setItem("filters", JSON.stringify(filters));
}


// =======================
// SEARCH RESULTS PAGE
// =======================

// Delete filter when clicked
document.querySelectorAll(".tag").forEach(tag => {
    tag.addEventListener("click", () => {
        tag.remove();
    });
});

// Expande/close recepies
document.querySelectorAll(".info-btn").forEach(button => {
    button.addEventListener("click", (e) => {
        e.stopPropagation();

        const card = button.closest(".card");
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

            const actions = card.querySelector(".actions");
            actions.before(extra);
        }
    });
});