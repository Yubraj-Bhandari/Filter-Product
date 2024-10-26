const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

function filterProducts() {
    const searchValue = searchInput.value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
    const activeCategory = document.querySelector(".category-btn.active").dataset.category;

    productItems.forEach(item => {
        const title = item.querySelector("h3").innerText.toLowerCase();
        const category = item.dataset.category;

        if ((title.includes(searchValue) || searchValue === "") && 
            (category === activeCategory || activeCategory === "all")) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function setCategory(e) {
    categoryBtns.forEach(btn => btn.classList.remove("active"));
    e.target.classList.add("active");
    filterProducts();
}

searchBtn.addEventListener("click", filterProducts);
searchInput.addEventListener("keyup", filterProducts);
categoryBtns.forEach(btn => {
    btn.addEventListener("click", setCategory);
});

// Initial filter
filterProducts();