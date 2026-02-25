import React from 'react';
import './ContrastToggle.css';
import { useTheme } from '../../contexts/ThemeContext';

const ContrastToggle = () => {
  const { contrast, toggleContrast } = useTheme();

  return (
    <button 
      className={`contrast-toggle ${contrast ? 'active' : ''}`}
      onClick={toggleContrast}
      aria-label={`Switch to ${contrast ? 'normal' : 'high'} contrast`}
      title={`${contrast ? 'Normal' : 'High'} Contrast`}
    >
      <span className={`bold-a ${contrast ? 'high-contrast' : ''}`}>A</span>
    </button>
  );
};

export default ContrastToggle;
