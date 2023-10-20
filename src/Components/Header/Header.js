import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="text-container">
          <Link to="/" className="link">          
            <p className="metallic-text">Trey Marshall</p>
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;



