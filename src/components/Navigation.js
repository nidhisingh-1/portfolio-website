import React, { useState, useEffect } from 'react';
import './Navigation.css';
import { content } from '../content';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = content.navigation
        .filter(item => item.type !== 'download')
        .map(item => item.id);
      
      let currentSection = 'hero';
      
      // Check which section is currently in view
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider section active if it's in the top half of viewport
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = sectionId;
            break;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="side-menu">
      <ul>
        {content.navigation.map((item) => (
          <li key={item.id} className={activeSection === item.id ? 'active' : ''}>
            {item.type === 'download' ? (
              <a href={item.url} download className="download-link">
                {item.label}
              </a>
            ) : (
              <a href={`#${item.id}`}>{item.label}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
