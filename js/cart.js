let cart = [];

// Function to add an item to the cart
function addToCart(product) {
    console.log('Product to add:', product);
    
    // Convert price to string format if it's not already
    if (typeof product.price !== 'string') {
        product.price = `$${product.price}`;
    }

    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1; // Increment quantity if it already exists
    } else {
        product.quantity = 1; // Initialize quantity for new product
        cart.push(product);
    }

    // Save the updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    alert(`${product.name} has been added to your cart.`);
    viewCart(); // Call viewCart() to display updated cart
}

// Function to update cart item count displayed
function updateCartCount() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').innerText = cartCount > 0 ? `(${cartCount})` : '';
}

function viewCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear existing items

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <div class="cart-item-details">
                    <strong class="cart-item-title">${item.title || item.name}</strong>
                    <div class="cart-item-price">Price: ${item.price}</div>
                    <div>Quantity: ${item.quantity}</div>
                </div>
                <i class="fas fa-trash-alt remove-btn" onclick="removeFromCart(${item.id})" title="Remove Item"></i>
            `;
            cartContainer.appendChild(itemElement);
        });
    }

    // Update total price display
    const totalPrice = calculateTotal();
    const totalElement = document.createElement('div');
    totalElement.className = 'text-right';
    totalElement.innerHTML = `<strong>Total Price: $${totalPrice.toFixed(2)}</strong>`;
    cartContainer.appendChild(totalElement);
}

// Function to calculate total price
function calculateTotal() {
    return cart.reduce((total, item) => {
        // Ensure item.price is in string format, and log it
        console.log(`Calculating price for item: ${item.title || item.name}, Price: ${item.price}, Quantity: ${item.quantity}`);
        
        // Convert price to a number (handle both formats)
        const priceStr = item.price.replace("$", "").replace(",", ""); // Remove $ and any commas if present
        const price = parseFloat(priceStr);
        
        if (isNaN(price)) {
            console.error(`Invalid price for item ${item.title || item.name}: ${item.price}`);
            return total; // Skip this item if price is invalid
        }
        
        return total + (price);
    }, 0);
}

// Function to remove an item from the cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    viewCart();
    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Prepare order details for checkout
    const orderDetails = cart.map(item => {
        return `${item.title || item.name}: ${item.price}`;
    }).join("\n");

    const totalPrice = calculateTotal();
    alert(`Proceeding to checkout...\n\nOrder Details:\n${orderDetails}\n\nTotal Price: $${totalPrice.toFixed(2)}`);
    
    // Navigate to the place order page
    window.location.href = 'orderplace.html'; // Replace with the actual URL for your place order page

    // Optionally, you may want to clear the cart after navigation
    clearCart();
}


// Function to clear the cart
function clearCart() {
    cart = [];
    viewCart();
    updateCartCount();
    localStorage.setItem("cart", JSON.stringify(cart)); // Update localStorage
}

// Retrieve cart from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem("cart")) || []; // Load cart from localStorage
    console.log('Loaded cart:', cart); // Debugging output
    updateCartCount(); // Set initial cart count display
    viewCart(); // Display the cart
});
