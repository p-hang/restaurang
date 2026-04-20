document.querySelectorAll(".section").forEach(section => {
    const icon = section.querySelector(".toggle-icon");
    const tagsContainer = section.querySelector(".tags");
    const selectedTagsContainer = section.querySelector(".selected-tags");
    const tags = section.querySelectorAll(".tag");

    if (!icon || !tagsContainer || !selectedTagsContainer) {
        return;
    }

    tags.forEach(tag => {
        tag.addEventListener("click", () => {
            tag.classList.toggle("active");

            if (tagsContainer.classList.contains("hidden")) {
                updateSelectedTags(tags, selectedTagsContainer);
            }
        });
    });

    icon.addEventListener("click", () => {
        const isClosing = !tagsContainer.classList.contains("hidden");

        tagsContainer.classList.toggle("hidden");
        icon.classList.toggle("rotated");

        if (isClosing) {
            updateSelectedTags(tags, selectedTagsContainer);
            selectedTagsContainer.classList.add("show");
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

            // text
            const text = document.createElement("span");
            text.textContent = tag.textContent;

            // icon
            const icon = document.createElement("img");
            icon.src = "acess/Icon-close.png";
            icon.alt = "remove";
            icon.classList.add("close-icon");

            icon.addEventListener("click", (e) => {
                e.stopPropagation();
                tag.classList.remove("active");
                updateSelectedTags(tags, container);
            });

            selectedTag.appendChild(text);
            selectedTag.appendChild(icon);

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
    alert("Searching...");
});


/*Search result*/

// Button actions
document.querySelectorAll(".actions button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Clicked!");
    });
});