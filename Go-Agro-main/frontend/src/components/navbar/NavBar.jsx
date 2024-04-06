import React from 'react';
import { Link } from 'react-router-dom';
import { SearchBar } from '../SearchBar';
import './NavBar.css'; 

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <h1>GO AGRO</h1>
      </Link>

      <div className="search-bar-container">
        <SearchBar />
      </div>

      <div className="nav-links">
        <ul style={{fontFamily:'serif'}}>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/signup">
            <li>Sign Up</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};


