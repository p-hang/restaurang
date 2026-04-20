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
            icon.src = "acess/Icon-close.png";
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
        priceValue.textContent = "$" + priceSlider.value;
    });
}

// Search button
const searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
    searchBtn.addEventListener("click", () => {
        window.location.href = "search-results.html";
    });
}


// FILTER PAGE (index)
// SEARCH RESULTS PAGE

// Button actions
document.querySelectorAll(".actions button").forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        alert("Clicked!");
    });
});