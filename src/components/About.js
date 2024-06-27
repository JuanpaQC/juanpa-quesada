import React from 'react';
import { InView } from 'react-intersection-observer'; // Importar InView
import '../styles/About.css';
import foto1 from "../about-photos/me.jpg";

const About = () => {
  return (
    <section id="about" className="about">
      <InView triggerOnce>
        {({ inView, ref }) => (
          <h2 ref={ref} className={inView ? 'visible' : ''}>
            About Me
          </h2>
        )}
      </InView>
      <div className="about-container">
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div ref={ref} className={`about-photo ${inView ? 'visible' : ''}`}>
              <img src={foto1} alt="Sobre mí" />
            </div>
          )}
        </InView>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <div ref={ref} className={`about-bio ${inView ? 'visible' : ''}`}>
              <h3>¡Hello! I'm Juanpa</h3>
              <p>
              I am a nature Photographer and Software Engineering student, a young Costa Rican passionate about technology, photography, nature, traveling and showing the world the beauties found in them.
              </p>
            </div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default About;
