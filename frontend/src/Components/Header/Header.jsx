import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const userName = localStorage.getItem('userName');

  useEffect(() => {
    // Check the login state from localStorage or an API call
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    // Perform logout actions, such as clearing tokens or updating state
    localStorage.removeItem('userId'); // Remove the userId from localStorage
    localStorage.removeItem('userName'); // Remove the userName from localStorage
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
    alert('Logged out successfully'); // Show alert message
    navigate(location.pathname); // Redirect to the same page after logout
  };
  

  const handleLogin = () => {
    // Perform login actions, such as setting tokens or updating state
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    navigate(location.pathname); // Redirect to the same page after login
  };
  

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="about-us" smooth={true} duration={500}>
              ABOUT US
            </Link>
          </li>
          <li className="nav-item">
            <Link to="services" smooth={true} duration={500}>
              SERVICES
            </Link>
          </li>
          <li className="nav-item logo">
            <RouterLink to="/" smooth={true} duration={500}>
              <i className="fas fa-infinity"></i> INFINITY
              <div className="sub-text">EVENTS</div>
            </RouterLink>
          </li>
          <li className="nav-item">
            <RouterLink to="/corporate-events" smooth={true} duration={500}>
              EVENTS
            </RouterLink>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500}>
              CONTACT
            </Link>
          </li>
          <li className="nav-item profile-menu">
            {isLoggedIn ? (
              <div className="dropdown">
                <button className="dropbtn">
                  <i className="fas fa-user"></i>                     {userName}

                </button>
                <div className="dropdown-content">
                  {/* <RouterLink to="/profile">Profile</RouterLink> */}
                  <button onClick={handleLogout}>Logout</button>
                </div>
              </div>
            ) : (
              <div className="dropdown">
                <button className="dropbtn">
                  <i className="fas fa-user"></i>
                </button>
                <div className="dropdown-content">
                  <RouterLink to="/login" onClick={handleLogin}>Login</RouterLink>
                  <RouterLink to="/register">Register</RouterLink>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
