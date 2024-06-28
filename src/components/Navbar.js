import React from 'react';
import '../styles/Navbar.css';
import logo from '../imgs/logo-blanco.PNG';

const Navbar = () => {
  const scrollToSection = (sectionId, event) => {
    event.preventDefault(); // Evita la acción predeterminada del navegador
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <ul className="left">
        <li><a href="#portfolio" onClick={(e) => scrollToSection('portfolio', e)} className='portfolio-button'>Portfolio</a></li>
        <li><a href="#albums" onClick={(e) => scrollToSection('albums', e)} className='album-button'>Albums</a></li>
      </ul>
      <img src={logo} alt='Juanpa Quesada Photography Logo' className='navbar-logo' onClick={() => scrollToSection('welcome')} />
      <ul className="right">
        <li><a href="#about" onClick={(e) => scrollToSection('about', e)} className='about-button'>About</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection('contact', e)} className='contact-button'>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
