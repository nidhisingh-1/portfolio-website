import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './CustomCursor.css';
import { useTheme } from '../contexts/ThemeContext';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;

    // Hide default cursor
    document.body.style.cursor = 'none';

    // Mouse move handler
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

      // Check if hovering over interactive elements
      const target = e.target;
      const isInteractive = target.closest('a, button, .project-card, input, textarea, [role="button"]');
      
      if (isInteractive) {
        cursor.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
      } else {
        cursor.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
      }

      // Check background color for inversion
      const computedStyle = window.getComputedStyle(target);
      const bgColor = computedStyle.backgroundColor;
      const color = computedStyle.color;
      
      // Detect if we're on a dark or light element
      const isDarkElement = shouldInvert(bgColor, color);
      
      if (isDarkElement) {
        cursor.classList.add('cursor-invert');
        cursorDot.classList.add('cursor-invert');
      } else {
        cursor.classList.remove('cursor-invert');
        cursorDot.classList.remove('cursor-invert');
      }
    };

    // Function to determine if cursor should invert
    const shouldInvert = (bgColor, textColor) => {
      // Parse RGB values
      const getBrightness = (color) => {
        const rgb = color.match(/\d+/g);
        if (!rgb || rgb.length < 3) return 255;
        const [r, g, b] = rgb.map(Number);
        return (r * 299 + g * 587 + b * 114) / 1000;
      };

      const bgBrightness = getBrightness(bgColor);
      const textBrightness = getBrightness(textColor);
      
      // If background is dark (brightness < 128) or text is light, invert cursor
      return bgBrightness < 128 || textBrightness > 128;
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      gsap.to([cursor, cursorDot], {
        opacity: 0,
        duration: 0.2
      });
    };

    // Mouse enter handler
    const handleMouseEnter = () => {
      gsap.to([cursor, cursorDot], {
        opacity: 1,
        duration: 0.2
      });
    };

    // Add event listeners
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
    </>
  );
};

export default CustomCursor;
