import React from 'react';
import { InView } from 'react-intersection-observer';
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
              <h3><span className="hello-text">Hello! </span> I'm Juanpa Quesada Caballero</h3>
              <p>
                I am a Nature Photographer and Software Engineering student from Costa Rica, deeply passionate about technology, photography, nature, and travel. My goal is to capture and showcase the beauty of the world through my lens.
              </p>
            </div>
          )}
        </InView>
      </div>
    </section>
  );
};

export default About;
