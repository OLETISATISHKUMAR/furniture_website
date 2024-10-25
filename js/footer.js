const footerHTML = `
    <footer class="text-center bg-dark text-white py-4">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="text-uppercase">About Us</h5>
                    <p>We provide high-quality furniture with the best comfort and design at affordable prices.</p>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                    <h5 class="text-uppercase">Quick Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="home.html" class="text-white">Home</a></li>
                        <li><a href="products.html" class="text-white">Products</a></li>
                        <li><a href="about.html" class="text-white">About Us</a></li>
                        <li><a href="contact.html" class="text-white">Contact</a></li>
                    </ul>
                </div>

                <div class="col-lg-4 col-md-12 mb-4">
                    <h5 class="text-uppercase">Follow Us</h5>
                    <a href="#" class="social-icon" style="font-size: 24px; color: #fff; margin-right: 15px;">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social-icon" style="font-size: 24px; color: #fff; margin-right: 15px;">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a href="#" class="social-icon" style="font-size: 24px; color: #fff; margin-right: 15px;">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="social-icon" style="font-size: 24px; color: #fff; margin-right: 15px;">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="text-center py-3" style="background-color: #23272b;">
            &copy; 2024 Furniture Store. All rights reserved. 
            <br>Made with <i class="fas fa-heart text-danger"></i> by Our Team.
        </div>
    </footer>
`;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("footer").innerHTML = footerHTML;

    // Add hover effects to social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.color = '#f8d210'; // Gold on hover
        });
        icon.addEventListener('mouseout', () => {
            icon.style.color = '#ffffff'; // White when not hovered
        });
    });
});
