import React from 'react';
import '../styles/Navbar.css';
import logo from '../imgs/logo-blanco.PNG';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="left">
        <li><a href="#portfolio" onClick={() => scrollToSection('portfolio')} className='portfolio-button'>Portfolio</a></li>
        <li><a href="#albums" onClick={() => scrollToSection('albums')} className='album-button'>Albums</a></li>
      </ul>
      <img src={logo} alt='Juanpa Quesada Photography Logo' className='navbar-logo' onClick={() => scrollToSection('welcome')} />
      <ul className="right">
        <li><a href="#about" onClick={() => scrollToSection('about')} className='about-button'>About</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('contact')} className='contact-button'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
