import React from 'react'
import "./Footer.css"
const Footer = () => {
    return (
        <div>
            <div className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h4 className="footer-heading">Foxy Fashion E-Commerce</h4>
                            <div className="footer-underline"></div>
                            <p>
                            E-commerce is revolutionizing the way we all shop in India. Why do you want to hop from one store to another in search of the latest phone when you can find it on the Internet in a single click? Not only mobiles. Foxy Fashion houses everything you can possibly imagine, from trending electronics like laptops, tablets, smartphones, and mobile accessories to in-vogue fashion staples like shoes, clothing and lifestyle accessories.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Quick Links</h4>
                            <div className="footer-underline"></div>
                            <div className="mb-2"><a href="/" className="text-white">Home</a></div>
                            <div className="mb-2"><a href="/" className="text-white">About Us</a></div>
                            <div className="mb-2"><a href="/" className="text-white">Contact Us</a></div>
                            <div className="mb-2"><a href="/" className="text-white">Blogs</a></div>
                            <div className="mb-2"><a href="/" className="text-white">Sitemaps</a></div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Shop Now</h4>
                            <div className="footer-underline"></div>
                            <div className="mb-2"><a href="/" className="text-white">Collections</a></div>
                            <div className="mb-2"><a href="/" className="text-white">Trending Products</a></div>
                            <div className="mb-2"><a href="/" className="text-white">New Arrivals Products</a></div>
                            <div className="mb-2"><a href="/" className="text-white">Featured Products</a></div>
                            <div className="mb-2"><a href="/" className="text-white">Cart</a></div>
                        </div>
                        <div className="col-md-3">
                            <h4 className="footer-heading">Reach Us</h4>
                            <div className="footer-underline"></div>
                            <div className="mb-2">
                                <p>
                                    <i className="fa fa-map-marker"></i> #444, some main road, some area, some street, bangalore, india - 560077
                                </p>
                            </div>
                            <div className="mb-2">
                                <a href="/" className="text-white">
                                    <i className="fa fa-phone"></i> +91 888-XXX-XXXX
                                </a>
                            </div>
                            <div className="mb-2">
                                <a href="/" className="text-white">
                                    <i className="fa fa-envelope"></i> fundaofwebit@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <p className=""> &copy; 2024 - Foxy Fashion. All rights reserved.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="social-media">
                                Get Connected:
                                <a href="/"><i className="fa fa-facebook"></i></a>
                                <a href="/"><i className="fa fa-twitter"></i></a>
                                <a href="/"><i className="fa fa-instagram"></i></a>
                                <a href="/"><i className="fa fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
