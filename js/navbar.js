// navbar.js
const navbarHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Elegant Furniture</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="index.html" style="font-size: 18px;">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="products.html" style="font-size: 18px;">Products</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html" style="font-size: 18px;">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html" style="font-size: 18px;">Contact</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="faqs.html" style="font-size: 18px;">FAQs</a>
                </li>
            </ul>
        </div>
        <a class="btn btn-warning d-flex align-items-center" href="cart.html">
            <i class="fas fa-shopping-cart"></i>
            <span class="ml-1">Cart <span id="cart-count"></span></span>
        </a>
    </div>
</nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("navbar").innerHTML = navbarHTML;

  // Set the active class for the current page
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Function to update cart count
  function updateCartCount() {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      console.log("Current cart:", cart); // Debugging output
      const cartCount = cart.length;
      document.getElementById("cart-count").innerText =
        cartCount > 0 ? `(${cartCount})` : "";
    } catch (error) {
      console.error("Error reading cart from localStorage", error);
      document.getElementById("cart-count").innerText = "";
    }
  }

  // Call the function to update cart count on page load
  updateCartCount();
});
