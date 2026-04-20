document.querySelectorAll(".section").forEach(section => {
    const icon = section.querySelector(".toggle-icon");
    const content = section.querySelector(".section-content");
    const selectedTagsContainer = section.querySelector(".selected-tags");
    const tags = section.querySelectorAll(".tag");
    const slider = section.querySelector('input[type="range"]');
    const valueText = section.querySelector("p");

    if (!icon || !content || !selectedTagsContainer) {
        return;
    }

    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            tag.classList.toggle("active");

            if (content.classList.contains("hidden") && selectedTagsContainer) {
                updateSelectedTags(tags, selectedTagsContainer);
            }
        });
    });

    icon.addEventListener("click", () => {
        const isClosing = !content.classList.contains("hidden");

        content.classList.toggle("hidden");
        icon.classList.toggle("rotated");

        if (!selectedTagsContainer) {
            return;
        }

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
        
        }
    });
});

function updateSelectedTags(tags, container) {
    container.innerHTML = "";

    tags.forEach(tag => {
        if (tag.classList.contains("active")) {
            const selectedTag = document.createElement("button");
            selectedTag.className = "tag active selected-tag";
            selectedTag.type = "button";

            const text = document.createElement("span");
            text.textContent = tag.textContent;

            const icon = document.createElement("img");
            icon.src = "acess/Icon-close.png";
            icon.alt = "remove";
            icon.classList.add("close-icon");

            selectedTag.appendChild(text);
            selectedTag.appendChild(icon);

            selectedTag.addEventListener("click", () => {
                tag.classList.remove("active");
                updateSelectedTags(tags, container);
            });

            container.appendChild(selectedTag);
        }
    });
}
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
    window.location.href = "search-results.html";
});


/*Search result*/

// Button actions
document.querySelectorAll(".actions button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Clicked!");
    });
});