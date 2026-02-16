import React, { useState, useEffect } from 'react';
import './MobileHeader.css';
import ThemeToggle from './ThemeToggle';
import ContrastToggle from './ContrastToggle';

const MobileHeader = ({ navigationItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the hero section
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsScrolled(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`mobile-header ${isScrolled ? 'scrolled' : ''}`}>
      <button 
        className="hamburger-button" 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
      </button>

      <div className="mobile-controls">
        <ThemeToggle />
        <ContrastToggle />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={closeMenu}>
        <nav className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <ul>
            {navigationItems.map((item) => (
              <li key={item.id}>
                {item.type === 'download' ? (
                  <a href={item.url} download onClick={closeMenu}>
                    {item.label}
                  </a>
                ) : (
                  <a href={`#${item.id}`} onClick={closeMenu}>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MobileHeader;
