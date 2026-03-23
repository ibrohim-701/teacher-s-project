import React from "react";
import "./Footer.css";
import link from '../../assets/image/LINK.png'

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

     
        <div className="footer-texti">
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <p>Get 10% off your first order</p>

          <div className="email">
            <input type="email" placeholder="Enter your email" />
            <button>➤</button>
          </div>
        </div>

        
        <div className="footer-texti">
          <h4>Support</h4>
          <p>111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

    
        <div className="footer-texti">
          <h4>Account</h4>
          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

   
        <div className="footer-texti">
          <h4>Quick Link</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        
        <div className="footer-texti">
          <h4>Download App</h4>
          <p>Save $3 with App New User Only</p>

          <div className="footer-rasm">
           <img src={link} alt="" />
          </div>

          
        </div>

      </div>

    </footer>
  );
}

export default Footer;