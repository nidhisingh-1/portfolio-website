import React, { useRef, useEffect } from 'react';
import './Hero.css';
import { content } from '../content';
import { ReactComponent as SpyneLogo } from '../Spyne Logo.svg';
import { ReactComponent as SpyneLogo2 } from '../Spyne Logo 2.svg';
import profileImage from '../nidhi.JPG';
import gsap from 'gsap';
import { useTheme } from '../ThemeContext';

const Hero = () => {
  const { hero } = content;
  const { theme } = useTheme();
  const avatarRef = useRef(null);
  const largeAvatarRef = useRef(null);
  
  useEffect(() => {
    const avatar = avatarRef.current;
    const largeAvatar = largeAvatarRef.current;
    
    const handleMouseEnter = () => {
      gsap.to(largeAvatar, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    };
    
    const handleMouseLeave = () => {
      gsap.to(largeAvatar, {
        scale: 0.5,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    };
    
    if (avatar) {
      avatar.addEventListener('mouseenter', handleMouseEnter);
      avatar.addEventListener('mouseleave', handleMouseLeave);
    }
    
    return () => {
      if (avatar) {
        avatar.removeEventListener('mouseenter', handleMouseEnter);
        avatar.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);
  
  return (
    <section id="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            I'm {hero.name}<span className="avatar-wrapper">
              <img 
                ref={avatarRef}
                src={profileImage} 
                alt="Nidhi" 
                className="hero-avatar" 
              />
              <img 
                ref={largeAvatarRef}
                src={profileImage} 
                alt="Nidhi large" 
                className="hero-avatar-large" 
              />
            </span>, a {hero.title}.<br />
            {hero.tagline}
          </h1>
          
          <p className="subtitle">
            Currently designing at {theme === 'dark' ? <SpyneLogo2 className="inline-logo" /> : <SpyneLogo className="inline-logo" />}, {hero.currentLocation}.
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
