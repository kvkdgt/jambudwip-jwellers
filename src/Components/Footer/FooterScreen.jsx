import React, { useState } from "react";
import "./footer.css"

const FooterScreen = () => {
  return (
   <footer>
    <div className="main-content">
      <div className="footer-company-details">
      <div className="footer-logo">SHRINGAR.COM</div>
      <div className="contact-icons">
      <i class="fa-brands fa-facebook contact-icons-icon"></i>
      <i class="fa-brands fa-instagram contact-icons-icon"></i>
      <i class="fa-regular fa-envelope-open contact-icons-icon"></i>
      </div>
      </div>
      <div className="footer-links">
      <div className="footer-logo">Menu</div><hr/>
        <ul className="footer-link-lists">
          <li>Home</li>
          <li>Trending</li>
          <li>Categories</li>
          <li>Blogs</li>
        </ul>
      </div>
      <div className="contact-details">
      <div className="footer-logo">Subscribe Newsletter</div><hr/>
    <div className="newsletter-form">
        <input type="text" placeholder="Enter your email" className="newsletter-input"/><br/><br/>
        <span className="subscribe-btn">SUBSCRIBE</span></div>
      </div>
     
    </div>
    <div className="horizontal-line-block">
    <div className="horizontal-line"></div></div>
    <div className="copyright">All Rights Reserved for &nbsp; <span style={{color:'yellow'}}><b>SHRINGAR.COM</b></span> &nbsp; by KVKDGT Group</div>
   </footer>
  );
};

export default FooterScreen;
