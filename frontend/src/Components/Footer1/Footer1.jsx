import React from 'react';
import './Footer1.css'; // Import the improved CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About</h3>
          <p>Infinity Events is a full-service event planning and design company providing a wide array of event services from venue styling to vendor management, event staffing, and more.</p>
        </div>
        <div className="footer-section hospitality-group">
          <h3>Infinity Events Group</h3>
          <ul>
            <li>The Bridge Building Event Spaces</li>
            <li>The Bell Tower</li>
            <li>The Estate at Cherokee Dock</li>
            <li>Saddle Woods Farm</li>
          </ul>
        </div>
        <div className="footer-section contact-us">
          <h3>Contact Us</h3>
          <address>
            Coimbatore,TamilNadu<br />
            641006<br />
            <a href="mailto:sales@infinityevents.net" id="footer1-email">sales@infinityevents.net</a>
          </address>
        </div>
        <div className="footer-section newsletter">
          <h3>Sign Up for Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="logo">
         
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
