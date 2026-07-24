// ==========================
// StitchFit Ecommerce Script
// ==========================

const productsContainer = document.getElementById("products-container");
const filterButtons = document.querySelectorAll(".filter-btn");
const cartCount = document.getElementById("cart-count");

let cart = 0;

// ==========================
// Show Products
// ==========================

function displayProducts(productList) {

    productsContainer.innerHTML = "";

    productList.forEach(product => {

        productsContainer.innerHTML += `

        <div class="product-card">

            <span class="badge">New</span>

            <div class="wishlist">
                <i class="fa-regular fa-heart"></i>
            </div>

            <div class="product-img">
                <img src="${product.image}" alt="${product.name}">
            </div>

            <div class="product-info">

                <p class="product-category">
                    ${product.category}
                </p>

                <h3 class="product-title">
                    ${product.name}
                </h3>

                <div class="rating">

                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>

                </div>

                <div class="price-box">

                    <span class="price">
                        Rs. ${product.price}
                    </span>

                </div>

                <div class="card-buttons">

                    <button class="add-cart"
                    onclick="addToCart()">

                    Add To Cart

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

// ==========================
// Filter Products
// ==========================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

        const category = button.dataset.category;

        if(category === "all"){

            displayProducts(products);

        }

        else{

            const filteredProducts = products.filter(product => product.category === category);

            displayProducts(filteredProducts);

        }

    });

});

// ==========================
// Cart
// ==========================

function addToCart(){

    cart++;

    cartCount.innerText = cart;

    alert("Product Added To Cart");

}

// ==========================
// Search
// ==========================

const searchIcon = document.querySelector(".fa-search");

searchIcon.addEventListener("click",()=>{

    const keyword = prompt("Search Product");

    if(keyword==null) return;

    const result = products.filter(product=>

        product.name.toLowerCase().includes(keyword.toLowerCase())

    );

    displayProducts(result);

});

// ==========================
// Wishlist
// ==========================

document.addEventListener("click",function(e){

    if(e.target.classList.contains("fa-heart")){

        e.target.classList.toggle("fa-solid");

        e.target.style.color="#e63946";

    }

});

// ==========================
// Page Load
// ==========================

displayProducts(products);