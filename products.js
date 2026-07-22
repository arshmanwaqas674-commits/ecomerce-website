const products = [
    {
        name: "Classic Black Drop Shoulder Tee",
        price: "$18.00",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Oversized White Vintage Tee",
        price: "$19.00",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Sage Green Drop Shoulder Shirt",
        price: "$21.00",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Charcoal Grey Heavyweight Tee",
        price: "$22.00",
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Navy Blue Relaxed Fit T-Shirt",
        price: "$20.00",
        image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Graphic Streetwear Oversized Tee",
        price: "$24.00",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Beige Neutral Drop Shoulder",
        price: "$19.00",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Brown Earth Tone Boxy Tee",
        price: "$23.00",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Olive Green Street Tee",
        price: "$21.00",
        image: "https://images.unsplash.com/photo-1625910513418-5c234a2e88a3?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Minimalist Aesthetic Oversized Tee",
        price: "$22.00",
        image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Washed Blue Drop Shoulder",
        price: "$25.00",
        image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Dark Maroon Boxy Fit Tee",
        price: "$20.00",
        image: "https://images.unsplash.com/photo-1534747065972-744318c54536?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Off-White Casual Drop Shoulder",
        price: "$18.00",
        image: "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Slate Grey Oversized T-Shirt",
        price: "$21.00",
        image: "https://images.unsplash.com/photo-1568461152431-ae2309ceac73?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Urban Print Drop Shoulder",
        price: "$26.00",
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Sand Color Heavy Tee",
        price: "$22.00",
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Teal Blue Relaxed Tee",
        price: "$19.00",
        image: "https://images.unsplash.com/photo-1574184555718-243dc7e786b5?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Mustard Yellow Boxy Fit",
        price: "$20.00",
        image: "https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Mocha Brown Oversized Tee",
        price: "$23.00",
        image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=400&auto=format&fit=crop&q=80"
    },
    {
        name: "Jet Black Premium Drop Shoulder",
        price: "$27.00",
        image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&auto=format&fit=crop&q=80"
    }
];

const container = document.getElementById("product-container");
container.innerHTML = "";

products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
    `;

    container.appendChild(card);
});

