import React from 'react';
import { FaEnvelope, FaYahoo, FaLinkedin, FaGithub } from 'react-icons/fa'; 
import './ContactPage.css'
import Turing from '../../assets/turing-logo.svg'

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
            <img src={Turing} className="t-logo" alt="turing logo"></img>
          </a>
          <span>Turing Terminal Profile</span>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
