import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hobbies.css';
import { content } from '../content';

const Hobbies = () => {
  const { hobbies } = content;
  const scrollRef = useRef(null);

  // Auto-scroll horizontally
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        scrollContainer.scrollLeft = scrollAmount;

        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0;
        }
      }
    };

    const intervalId = setInterval(scroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="hobbies">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">{hobbies.sectionTitle}</h2>
          {hobbies.description && (
            <p className="hobbies-description">{hobbies.description}</p>
          )}
        </motion.div>
        
        <motion.div 
          className="hobbies-gallery"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="gallery-scroll-container" ref={scrollRef}>
            <div className="gallery-row">
              {hobbies.images.map((image, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hobbies;
