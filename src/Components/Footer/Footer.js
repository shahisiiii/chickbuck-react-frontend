import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer class="footer footer-bg-color text-center footer-txt-color p-4">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-4 col-4 col-md-6 mb-4 mb-lg-0">
                        <h5 class="text-uppercase footer-txt-title">Navigation</h5>
                        <ul class="list-unstyled mb-0 ">
                            <li><a href="#" class="footer-txt-color no-text-decoration">Home</a></li>
                            <li><a href="#" class="footer-txt-color no-text-decoration">About Us</a></li>
                            <li><a href="#" class="footer-txt-color no-text-decoration">Services</a></li>
                            <li><a href="#" class="footer-txt-color no-text-decoration">Portfolio</a></li>
                            <li><a href="#" class="footer-txt-color no-text-decoration">Contact</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-md-6 col-4 mb-4 mb-lg-0">
                        <h5 class="text-uppercase footer-txt-title">Social Media</h5>
                        <ul class="list-unstyled footer-txt-color mb-0">
                            <li><a href="#" class=" no-text-decoration footer-txt-color"><i class="fab fa-facebook-f  me-2"></i>Facebook</a></li>
                            <li><a href="#" class="footer-txt-color no-text-decoration"><i class="fab fa-twitter me-2"></i>Twitter</a></li>
                            <li><a href="#" class="footer-txt-color no-text-decoration"><i class="fab fa-instagram me-2"></i>Instagram</a></li>
                            <li><a href="#" class="footer-txt-color no-text-decoration"><i class="fab fa-linkedin-in me-2"></i>LinkedIn</a></li>
                        </ul>
                    </div>
                    <div class="col-lg-4 col-4 col-md-12">
                        <h5 class="text-uppercase footer-txt-title">Contact Us</h5>
                        <ul class="list-unstyled mb-0">
                            <li><i class="fas footer-txt-color fa-map-marker-alt me-2"></i>123 Main Street, City, Country</li>
                            <li><i class="fas footer-txt-color fa-envelope me-2"></i>info@example.com</li>
                            <li><i class="fas footer-txt-color fa-phone me-2"></i>+123 456 7890</li>
                        </ul>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12 text-center">
                        <p class="mb-0 footer-txt-color">&copy; 2023 Your Company. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer