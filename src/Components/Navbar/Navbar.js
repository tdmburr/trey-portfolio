import React from 'react';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className="navbar-list">
                <li>
                    <NavLink to="/projects" activeclassname="active-link">Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/skills" activeclassname="active-link">Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeclassname="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" activeclassname="active-link">Contact Me</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;




