import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';
import { content } from '../../content';
import { ReactComponent as SpyneLogo } from '../../assets/logos/Spyne Logo.svg';
import { ReactComponent as SpyneLogo2 } from '../../assets/logos/Spyne Logo 2.svg';
import gsap from 'gsap';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const { hero } = content;
  const { theme } = useTheme();
  const avatarRef = useRef(null);
  const largeAvatarRef = useRef(null);
  const profileImage = '/nidhi.jpg'; // Reference from public folder
  
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
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
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
            Currently designing at <a 
              href="https://www.spyne.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="logo-link"
              data-tooltip="https://www.spyne.ai"
            >
              {theme === 'dark' ? <SpyneLogo2 className="inline-logo" /> : <SpyneLogo className="inline-logo" />}
            </a>, {hero.currentLocation}.
          </p>
          
          <p>
            I previously solved for {hero.previousWork} at <a 
              href="https://www.intervue.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="company-link"
              data-tooltip="https://www.intervue.io/"
            >
              <strong>{hero.previousCompany1}</strong>
            </a> + {hero.previousWork2} at <a 
              href="https://coto.world/global" 
              target="_blank" 
              rel="noopener noreferrer"
              className="company-link"
              data-tooltip="https://coto.world/global"
            >
              <strong>{hero.previousCompany2}</strong>
            </a>. {hero.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
