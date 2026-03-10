import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Reusable full-screen carousel modal for case study design screens.
 *
 * Props:
 *   images  — array of { src, caption? } objects
 *   title   — string shown in the modal header
 *   startAt — optional index to open at (default 0)
 *   onClose — callback when modal is dismissed
 */
const DesignGalleryModal = ({ images, title, startAt = 0, onClose }) => {
  const [active, setActive] = useState(startAt);
  const total = images.length;

  const prev = useCallback(() => setActive(i => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setActive(i => (i + 1) % total), [total]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape')     onClose();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose, prev, next]);

  const pad = n => String(n).padStart(2, '0');

  return (
    <motion.div
      className="dg-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="dg-modal"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={e => e.stopPropagation()}
      >
        <div className="dg-header">
          <p className="dg-title">{title}</p>
          <span className="dg-counter">{pad(active + 1)} / {pad(total)}</span>
          <button className="dg-close" onClick={onClose} aria-label="Close gallery">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="dg-body">
          <img
            key={active}
            src={images[active].src}
            alt={images[active].caption || `Screen ${active + 1}`}
            className="dg-img"
          />
          <button className="dg-nav dg-nav--prev" onClick={prev} aria-label="Previous">&#8592;</button>
          <button className="dg-nav dg-nav--next" onClick={next} aria-label="Next">&#8594;</button>
        </div>

        {images[active].caption && (
          <p className="dg-caption">{images[active].caption}</p>
        )}

        <div className="dg-thumbs">
          {images.map((img, i) => (
            <button
              key={i}
              className={`dg-thumb${i === active ? ' dg-thumb--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`View screen ${i + 1}`}
            >
              <img src={img.src} alt="" aria-hidden="true" />
            </button>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

/**
 * Trigger + modal combined.
 *
 * Usage:
 *   <DesignGallery images={[...]} title="My Screens">
 *     {({ open }) => <button onClick={open}>View all screens</button>}
 *   </DesignGallery>
 */
const DesignGallery = ({ images, title, startAt = 0, children }) => {
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(startAt);

  const openAt = useCallback((idx = 0) => {
    setStart(idx);
    setOpen(true);
  }, []);

  return (
    <>
      {children({ open: () => openAt(startAt), openAt })}
      <AnimatePresence>
        {open && (
          <DesignGalleryModal
            images={images}
            title={title}
            startAt={start}
            onClose={() => setOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default DesignGallery;
