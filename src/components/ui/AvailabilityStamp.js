import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './AvailabilityStamp.css';

const AvailabilityStamp = () => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 8 },
      { opacity: 0.5, y: 0, duration: 0.6, delay: 1.6, ease: 'power2.out' }
    );
  }, []);

  const handleMouseEnter = () => gsap.to(ref.current, { opacity: 1, duration: 0.2 });
  const handleMouseLeave = () => gsap.to(ref.current, { opacity: 0.5, duration: 0.3 });

  return (
    <div
      ref={ref}
      className="avail-badge"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className="avail-status">
        <span className="avail-dot" />
        Open to new opportunities
      </p>
      <p className="avail-date">updated Mar 3 &rsquo;26</p>
    </div>
  );
};

export default AvailabilityStamp;
