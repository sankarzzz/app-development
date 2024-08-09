import React from 'react';
import facebook from '../Assets/facebook.png';
import insta from '../Assets/instagram.png';
import twitter from '../Assets/twitter.png';
import youtube from '../Assets/youtube.png';
import './Footer2.css'; // Use a different CSS file for this component

const NewFooter = () => {
  return (
    <footer className="new-footer" id="contact">
      <div className="new-footer-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={insta} alt="Instagram" />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtube} alt="YouTube" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={twitter} alt="twitter" />
        </a>
      </div>
      <div className="new-footer-copyright">
        <p>© 2024 Infinity Events. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default NewFooter;
