let container = document.getElementById("product-container");

data.products.forEach(product => {

    container.innerHTML += `
    
    <div class="card">

        <img src="${product.thumbnail}" alt="">

        <h3>${product.title}</h3>

        <p>${product.brand}</p>

        <h4 class="price">$${product.price}</h4>

        <button>Buy Now</button>

    </div>

    `;

});