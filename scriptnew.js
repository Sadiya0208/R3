document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const dropdown = document.getElementById("dropdown");
    const searchButton = document.getElementById("searchButton");
    const defaultOptions = document.querySelector(".default-options");
    const searchSuggestions = document.querySelector(".search-suggestions");

    // Product categories with their respective pages
    const productCategories = {
        "cement": "sell.html",
        "brick": "sell.html",
        "shoes": "sell.html",
        "wood": "sell.html",
        "sofa": "sell.html",
        "book": "sell.html",
        "tempo": "sell.html",
        "grain": "sell.html",
        "cupboard": "xchange.html",
        "rack": "xchange.html",
        "television": "xchange.html",
        "car": "xchange.html",
        "sewing": "xchange.html",
        "chair": "xchange.html",
        "gas": "xchange.html",
        "clock": "xchange.html",
        "plastic": "upcycle.html",
        "jeans": "upcycle.html",
        "tyre": "upcycle.html",
        "cane": "upcycle.html",
        "toycar": "upcycle.html"
    };

    // Show dropdown when clicking on search bar
    searchInput.addEventListener("focus", () => {
        dropdown.style.display = "block";
    });

    // Live search suggestions
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase().trim();
        searchSuggestions.innerHTML = ""; // Clear previous suggestions

        if (query === "") {
            defaultOptions.style.display = "block";
            searchSuggestions.style.display = "none";
        } else {
            defaultOptions.style.display = "none";
            searchSuggestions.style.display = "block";

            const matches = Object.keys(productCategories).filter(item => item.includes(query));
            if (matches.length > 0) {
                searchSuggestions.innerHTML = matches.map(item => 
                    `<div class="suggestion-item" data-url="${productCategories[item]}">${item}</div>`
                ).join("");
            } else {
                searchSuggestions.innerHTML = `<div class="no-results">No results found</div>`;
            }
        }
    });

    // Hide dropdown when clicking outside
    document.addEventListener("click", (event) => {
        if (!searchInput.contains(event.target) && !dropdown.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });

    // Perform search when pressing "Enter"
    searchInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            performSearch();
        }
    });

    // Perform search when clicking search button
    searchButton.addEventListener("click", performSearch);

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (productCategories[query]) {
            window.location.href = `${productCategories[query]}?search=${query}`;
        } else {
            alert("No matching products found! Try searching for something else.");
        }
    }

    // Redirect when clicking dropdown suggestions
    searchSuggestions.addEventListener("click", (event) => {
        if (event.target.classList.contains("suggestion-item")) {
            window.location.href = event.target.dataset.url;
        }
    });
});


const ball = document.querySelector('.ball');

document.addEventListener('mousemove', (e) => {
    // Use pageX and pageY to account for scrolling
    const mouseX = e.pageX;
    const mouseY = e.pageY;

    // Move the ball with the cursor, adjusting for its size
    ball.style.transform = `translate(${mouseX - 25}px, ${mouseY - 25}px)`; // Adjust based on ball size (assuming 50px width/height)
});

document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".image-slider");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    if (!slider || !prevBtn || !nextBtn) {
        console.error("Slider or buttons not found!");
        return;
    }

    const scrollAmount = 300; // Adjust scroll step

    prevBtn.addEventListener("click", () => {
        slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

function scrollSlider(direction) {
    const slider = document.getElementById("slider"); 
    if (!slider) {
        console.error("Slider not found!");
        return;
    }

    const scrollAmount = 300; // Adjust the scroll distance
    slider.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
}
