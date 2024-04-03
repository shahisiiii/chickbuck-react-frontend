import React from 'react'

function Footer() {
    return (
        <footer class="footer bg-body-tertiary text-center text-secondary p-4">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 class="text-uppercase">Navigation</h5>
                        <ul class="list-unstyled mb-0 ">
                            <li><a href="#" class="text-light">Home</a></li>
                            <li><a href="#" class="text-light">About Us</a></li>
                            <li><a href="#" class="text-light">Services</a></li>
                            <li><a href="#" class="text-light">Portfolio</a></li>
                            <li><a href="#" class="text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <h5 class="text-uppercase">Social Media</h5>
                        <ul class="list-unstyled mb-0">
                            <li><a href="#" class="text-light"><i class="fab fa-facebook-f me-2"></i>Facebook</a></li>
                            <li><a href="#" class="text-light"><i class="fab fa-twitter me-2"></i>Twitter</a></li>
                            <li><a href="#" class="text-light"><i class="fab fa-instagram me-2"></i>Instagram</a></li>
                            <li><a href="#" class="text-light"><i class="fab fa-linkedin-in me-2"></i>LinkedIn</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-12">
                        <h5 class="text-uppercase">Contact Us</h5>
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas fa-map-marker-alt me-2"></i>123 Main Street, City, Country</li>
                            <li><i class="fas fa-envelope me-2"></i>info@example.com</li>
                            <li><i class="fas fa-phone me-2"></i>+123 456 7890</li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <p class="mb-0">&copy; 2023 Your Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer