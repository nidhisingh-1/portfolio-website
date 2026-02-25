import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';
import { useTheme } from '../../contexts/ThemeContext';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorLabelRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    const cursorLabel = cursorLabelRef.current;

    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });

      gsap.to(cursorDot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      gsap.to(cursorLabel, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });

      const target = e.target;
      const isProjectImage = target.closest('.project-image');
      const isInteractive = target.closest('a, button, .project-card, input, textarea, [role="button"]');

      if (isProjectImage) {
        cursor.classList.add('cursor-view');
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.add('cursor-view');
        cursorLabel.classList.add('cursor-label-visible');
      } else if (isInteractive) {
        cursor.classList.add('cursor-hover');
        cursor.classList.remove('cursor-view');
        cursorDot.classList.remove('cursor-view');
        cursorDot.classList.add('cursor-hover');
        cursorLabel.classList.remove('cursor-label-visible');
      } else {
        cursor.classList.remove('cursor-hover', 'cursor-view');
        cursorDot.classList.remove('cursor-hover', 'cursor-view');
        cursorLabel.classList.remove('cursor-label-visible');
      }

      // Inversion logic
      const computedStyle = window.getComputedStyle(target);
      const bgColor = computedStyle.backgroundColor;
      const color = computedStyle.color;
      const isDarkElement = shouldInvert(bgColor, color);

      if (isDarkElement) {
        cursor.classList.add('cursor-invert');
        cursorDot.classList.add('cursor-invert');
      } else {
        cursor.classList.remove('cursor-invert');
        cursorDot.classList.remove('cursor-invert');
      }
    };

    const shouldInvert = (bgColor, textColor) => {
      const getBrightness = (color) => {
        const rgb = color.match(/\d+/g);
        if (!rgb || rgb.length < 3) return 255;
        const [r, g, b] = rgb.map(Number);
        return (r * 299 + g * 587 + b * 114) / 1000;
      };
      const bgBrightness = getBrightness(bgColor);
      const textBrightness = getBrightness(textColor);
      return bgBrightness < 128 || textBrightness > 128;
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorDot, cursorLabel], { opacity: 0, duration: 0.2 });
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorDot], { opacity: 1, duration: 0.2 });
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [theme]);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={cursorDotRef} className="custom-cursor-dot" />
      <div ref={cursorLabelRef} className="custom-cursor-label">View</div>
    </>
  );
};

export default CustomCursor;
