document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("product-list");
    const categoryFilter = document.getElementById("category-filter");
    const loadingSpinner = document.querySelector(".loading-spinner");
    const cartCount = document.getElementById("cart-count");

    // Retrieve cart from localStorage; initialize as empty array if not found
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Dummy data for products
    const products = [
        { id: 1, name: "Modern Chair", category: "chair", price: "$150", image: "../assets/Modern Chair.webp" },
        { id: 2, name: "Wooden Table", category: "table", price: "$200", image: "../assets/Wooden Table.jpg" },
        { id: 3, name: "Luxury Sofa", category: "sofa", price: "$500", image: "../assets/Luxury Sofa.jpg" },
        { id: 4, name: "Dining Chair", category: "chair", price: "$120", image: "../assets/Dining Chair.jpg" },
        { id: 5, name: "Office Table", category: "table", price: "$250", image: "../assets/Office Table.jpg" },
        { id: 6, name: "Comfort Sofa", category: "sofa", price: "$450", image: "../assets/Comfort Sofa.jpg" }
    ];

    // Function to create product card HTML
    function createProductCard(product) {
        return `
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <button class="btn btn-primary add-to-cart" data-id="${product.id}">Add to Cart</button>
                        <button class="btn btn-success buy-now" data-id="${product.id}">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
    }

    // Function to load products based on category
    function loadProducts(category = "") {
        productList.innerHTML = ""; // Clear previous products
        loadingSpinner.style.display = "block"; // Show loading spinner

        setTimeout(() => {
            // Filter products based on selected category
            const filteredProducts = category
                ? products.filter(product => product.category === category)
                : products;

            if (filteredProducts.length === 0) {
                productList.innerHTML = `<div class="col-12"><p class="text-center">No products available in this category.</p></div>`;
            } else {
                filteredProducts.forEach(product => {
                    productList.innerHTML += createProductCard(product);
                });
            }

            loadingSpinner.style.display = "none"; // Hide loading spinner
            attachEventListeners(); // Attach event listeners to newly created buttons
        }, 1000); // Simulate network delay
    }

    // Function to attach event listeners to product buttons
    function attachEventListeners() {
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', addToCart);
        });

        document.querySelectorAll('.buy-now').forEach(button => {
            button.addEventListener('click', buyNow);
        });
    }

    // Function to handle adding items to cart
    function addToCart(event) {
        const productId = parseInt(event.target.dataset.id);
        const product = products.find(p => p.id === productId);

        // Check if the product is already in the cart
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            alert(`${product.name} is already in your cart. You can increase the quantity in the cart.`);
        } else {
            cart.push(product);
            alert(`${product.name} has been added to your cart.`);
            updateCartCount(); // Update cart count after adding
        }
    }

    // Function to handle Buy Now (navigate to cart page)
    function buyNow(event) {
        const productId = parseInt(event.target.dataset.id);
        const product = products.find(p => p.id === productId);
        cart.push(product);

        // Save cart to localStorage
        localStorage.setItem("cart", JSON.stringify(cart));

        // Redirect to cart page
        window.location.href = "cart.html";
    }

    // Function to update cart count in the navbar
    function updateCartCount() {
        if (cartCount) {
            cartCount.innerText = cart.length; // Update displayed cart count
        }
        localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
    }

    // Initial load of all products and set the cart count
    loadProducts();
    updateCartCount(); // Set cart count on page load

    // Filter products based on category selection
    categoryFilter.addEventListener("change", (e) => {
        const selectedCategory = e.target.value;
        loadProducts(selectedCategory);
    });
});
