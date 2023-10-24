import React from 'react';
import { FaEnvelope, FaYahoo, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import './ContactPage.css'
import Turing from '../../assets/turing_logo_gray-2bc6bdc736890907f536f2d188d7d20ffe8e8b28764bdc724867dcfb78cd1b77.png'

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact Me</h1>
      <div className="contact-icons">
        <div className="contact-icon">
          <a href="mailto:tdmburr@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
          <span>Gmail: tdmburr@gmail.com</span>
        </div>
        <div className="contact-icon">
          <a href="mailto:marshall.trey92@yahoo.com" aria-label="Yahoo">
            <FaYahoo />
          </a>
          <span>Yahoo: marshall.trey92@yahoo.com</span>
        </div>
        <div className="contact-icon">
          <a href="https://www.linkedin.com/in/tdmars" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <span>LinkedIn: linkedin.com/in/tdmars</span>
        </div>
        <div className="contact-icon">
          <a href="https://github.com/tdmburr" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <span>GitHub: github.com/tdmburr</span>
        </div>
        <div className="contact-icon">
          <a href="https://terminal.turing.edu/profiles/1887">
            <img src={Turing}></img>
          </a>
          <span>Terminal Profile: https://terminal.turing.edu/profiles/1887</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
