import React from 'react';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink to="/projects" activeClassName="active-link">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/hobbies" activeClassName="active-link">Hobbies</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeClassName="active-link">Contact Me</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;




