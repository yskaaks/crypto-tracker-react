import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header">
      <div className="navbar">
        <div className="site-name">Ystracker</div>
        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Market</a>
          <a href="#">What We Offer</a>
          <a href="#">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
