import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Ensure the path to your CSS file is correct
import LogoImage from './Piggylogo.png'; // Adjust the path to your image file as necessary

function NavigationBar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LogoImage} alt="Logo" style={{ height: '50px' }} /> {/* Adjust size as needed */}
      </div>
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/contactform" className="navbar-link">Contact</Link>
      </div>
    </nav>
  );
}

export default NavigationBar;
