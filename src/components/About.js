import React from 'react';
import { motion } from 'framer-motion';
import './About.css';
import { content } from '../content';
import { ReactComponent as SpyneLogo } from '../assets/logos/Spyne Logo.svg';
import { ReactComponent as SpyneLogo2 } from '../assets/logos/Spyne Logo 2.svg';
import { useTheme } from '../contexts/ThemeContext';

const About = () => {
  const { about } = content;
  const { theme } = useTheme();
  
  // Create array of logos for marquee (duplicate for seamless loop)
  const logos = Array(12).fill(null);
  
  return (
    <section id="about">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">{about.sectionTitle}</h2>
        </motion.div>
        
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>

        {/* Tools Marquee */}
        <motion.div 
          className="tools-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className="tools-title">Tools & Technologies</h3>
          <div className="marquee">
            <div className="marquee-content">
              {logos.map((_, index) => (
                <div key={index} className="marquee-item">
                  {theme === 'dark' ? 
                    <SpyneLogo2 className="marquee-logo" /> : 
                    <SpyneLogo className="marquee-logo" />
                  }
                </div>
              ))}
            </div>
            <div className="marquee-content" aria-hidden="true">
              {logos.map((_, index) => (
                <div key={`duplicate-${index}`} className="marquee-item">
                  {theme === 'dark' ? 
                    <SpyneLogo2 className="marquee-logo" /> : 
                    <SpyneLogo className="marquee-logo" />
                  }
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
