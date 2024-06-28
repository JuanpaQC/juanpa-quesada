import React, { useEffect, useState } from 'react';
import Navbar from './Navbar'; // Asegúrate de importar el Navbar
import { InView } from 'react-intersection-observer'; // Importar InView
import '../styles/Welcome.css';
import foto1 from '../img-welcoming/1.jpg';
import foto2 from '../img-welcoming/1saturada.jpg';
import foto3 from '../img-welcoming/2prea.jpg';
import gif1 from '../img-welcoming/scroll-down1.gif';

const images = [foto1, foto2, foto3];

const Welcome = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState(1);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setNextImage((prevNext) => (prevNext + 1) % images.length);
      setTimeout(() => {
        setCurrentImage(nextImage);
      }, 1000); // Espera 1 segundo antes de cambiar la imagen actual
    }, 3000); // Cambiar cada 3 segundos

    return () => clearInterval(interval);
  }, [nextImage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId, event) => {
    event.preventDefault(); // Evita la acción predeterminada del navegador
    
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section id="welcome" className="welcome">
      <Navbar /> {/* Agregar el Navbar aquí */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`slide ${index === currentImage ? 'active' : ''}`}
        />
      ))}
      <InView triggerOnce>
        {({ inView, ref }) => (
          <h1 ref={ref} className={`welcome-text ${inView ? 'visible' : ''}`}>
            Welcome to My Portfolio
          </h1>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <p ref={ref} className={`name-text ${inView ? 'visible' : ''}`}>
            Juanpa Quesada Photography
          </p>
        )}
      </InView>
      <img src={gif1} alt="Scroll down" className="scroll-down" />
      <p className="final-text">Please Scroll down</p>
      
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
        <span className="navbar-toggle-icon"></span>
      </button>
      
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>&times;</button>
        <ul>
          <li><a href="#welcome" onClick={(e) => scrollToSection('welcome', e)} className='welcome-button'>Principle</a></li>
          <li><a href="#portfolio" onClick={(e) => scrollToSection('portfolio', e)} className='portfolio-button'>Portfolio</a></li>
          <li><a href="#albums" onClick={(e) => scrollToSection('albums', e)} className='album-button'>Albums</a></li>
          <li><a href="#about" onClick={(e) => scrollToSection('about', e)} className='about-button'>About</a></li>
          <li><a href="#contact" onClick={(e) => scrollToSection('contact', e)} className='contact-button'>Contact</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Welcome;
