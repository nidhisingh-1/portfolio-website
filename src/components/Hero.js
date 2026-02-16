import React from 'react';
import './Hero.css';
import { content } from '../content';

const Hero = () => {
  const { hero } = content;
  
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            I'm {hero.name}, a {hero.title}.<br />
            {hero.tagline}
          </h1>
          
          <p className="subtitle">
            Currently designing at <strong>{hero.currentCompany}</strong>, {hero.currentLocation}.
          </p>
          
          <p>
            I previously solved for {hero.previousWork} at <strong>{hero.previousCompany1}</strong> + {hero.previousWork2} at <strong>{hero.previousCompany2}</strong>. {hero.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
