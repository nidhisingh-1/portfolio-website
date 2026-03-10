import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Hobbies.css';
import { content } from '../../content';

const Hobbies = () => {
  const { hobbies } = content;
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateArrows = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    return () => el.removeEventListener('scroll', updateArrows);
  }, [updateArrows]);

  const scrollBy = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('.gallery-item')?.offsetWidth ?? 216;
    const gap = 16;
    el.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' });
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
              onClick={() => scrollBy(-1)}
              aria-label="Scroll left"
              disabled={!canScrollLeft}
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
                        draggable={false}
                      />
                    </div>
                    {image.caption && (
                      <p className="gallery-caption">{image.caption}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              className="gallery-arrow gallery-arrow-right"
              onClick={() => scrollBy(1)}
              aria-label="Scroll right"
              disabled={!canScrollRight}
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
