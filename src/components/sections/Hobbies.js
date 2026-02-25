import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hobbies.css';
import { content } from '../../content';

const Hobbies = () => {
  const { hobbies } = content;
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const [isManualScroll, setIsManualScroll] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-scroll horizontally with faster speed
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1.2;

    const scroll = () => {
      if (scrollContainer && !isManualScroll) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isManualScroll]);

  // Handle touch events for mobile swipe
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      setIsManualScroll(true);
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      setTimeout(() => {
        setIsManualScroll(false);
      }, 2000);
    };

    const handleScroll = () => {
      setIsManualScroll(true);
      setTimeout(() => {
        setIsManualScroll(false);
      }, 2000);
    };

    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchmove', handleTouchMove);
    scrollContainer.addEventListener('touchend', handleTouchEnd);
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchmove', handleTouchMove);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      setIsManualScroll(true);
      // Scroll by exactly one image width + gap (200px + 16px gap)
      scrollRef.current.scrollBy({ left: -216, behavior: 'smooth' });
      
      // Resume auto-scroll after 2 seconds
      setTimeout(() => {
        setIsManualScroll(false);
      }, 2000);
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      setIsManualScroll(true);
      // Scroll by exactly one image width + gap (200px + 16px gap)
      scrollRef.current.scrollBy({ left: 216, behavior: 'smooth' });
      
      // Resume auto-scroll after 2 seconds
      setTimeout(() => {
        setIsManualScroll(false);
      }, 2000);
    }
  };

  return (
    <section id="hobbies">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="section-title">{hobbies.sectionTitle}</h2>
          {hobbies.description && (
            <p className="hobbies-description">{hobbies.description}</p>
          )}
        </motion.div>
        
        <motion.div 
          className="hobbies-gallery"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="gallery-wrapper">
            <button 
              className="gallery-arrow gallery-arrow-left" 
              onClick={handleScrollLeft}
              aria-label="Scroll left"
            >
              ←
            </button>
            
            <div className="gallery-scroll-container" ref={scrollRef}>
              <div className="gallery-row">
                {hobbies.images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="gallery-item"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <div className="gallery-image-wrapper">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="gallery-image"
                      />
                    </div>
                    {image.caption && (
                      <p className="gallery-caption">{image.caption}</p>
                    )}
                  </motion.div>
                ))}
                {/* Duplicate images for seamless loop */}
                {hobbies.images.map((image, index) => (
                  <div
                    key={`duplicate-${index}`}
                    className="gallery-item"
                  >
                    <div className="gallery-image-wrapper">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="gallery-image"
                      />
                    </div>
                    {image.caption && (
                      <p className="gallery-caption">{image.caption}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button 
              className="gallery-arrow gallery-arrow-right" 
              onClick={handleScrollRight}
              aria-label="Scroll right"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
