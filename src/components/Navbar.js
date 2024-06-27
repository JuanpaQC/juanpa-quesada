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
        <li><a onClick={() => scrollToSection('portfolio')} className='portfolio-button'>Portfolio</a></li>
        <li><a onClick={() => scrollToSection('albums')} className='album-button'>Albums</a></li>
      </ul>
      <img src={logo} alt='Juanpa Quesada Photography Logo' className='navbar-logo' onClick={() => scrollToSection('welcome')} />
      <ul className="right">
        <li><a onClick={() => scrollToSection('about')} className='about-button'>About</a></li>
        <li><a onClick={() => scrollToSection('contact')} className='contact-button'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
