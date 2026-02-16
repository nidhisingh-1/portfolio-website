import React from 'react';
import './ThemeToggle.css';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Function to play realistic electrical switch click sound
  const playThemeSound = (isDark) => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const masterGain = audioContext.createGain();
    masterGain.connect(audioContext.destination);
    masterGain.gain.setValueAtTime(0.3, audioContext.currentTime);

    // Create white noise for realistic click
    const bufferSize = audioContext.sampleRate * 0.05;
    const noiseBuffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    if (isDark) {
      // Light OFF - mechanical click down
      const noise = audioContext.createBufferSource();
      noise.buffer = noiseBuffer;
      
      const noiseFilter = audioContext.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(1800, audioContext.currentTime);
      noiseFilter.Q.setValueAtTime(1, audioContext.currentTime);
      
      const noiseGain = audioContext.createGain();
      noiseGain.gain.setValueAtTime(0.4, audioContext.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.03);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      
      noise.start(audioContext.currentTime);
      noise.stop(audioContext.currentTime + 0.03);

      // Second click for mechanical feel
      const noise2 = audioContext.createBufferSource();
      noise2.buffer = noiseBuffer;
      
      const noiseFilter2 = audioContext.createBiquadFilter();
      noiseFilter2.type = 'bandpass';
      noiseFilter2.frequency.setValueAtTime(1200, audioContext.currentTime + 0.02);
      noiseFilter2.Q.setValueAtTime(1.5, audioContext.currentTime + 0.02);
      
      const noiseGain2 = audioContext.createGain();
      noiseGain2.gain.setValueAtTime(0.25, audioContext.currentTime + 0.02);
      noiseGain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.045);
      
      noise2.connect(noiseFilter2);
      noiseFilter2.connect(noiseGain2);
      noiseGain2.connect(masterGain);
      
      noise2.start(audioContext.currentTime + 0.02);
      noise2.stop(audioContext.currentTime + 0.045);
    } else {
      // Light ON - mechanical click up
      const noise = audioContext.createBufferSource();
      noise.buffer = noiseBuffer;
      
      const noiseFilter = audioContext.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(2200, audioContext.currentTime);
      noiseFilter.Q.setValueAtTime(1, audioContext.currentTime);
      
      const noiseGain = audioContext.createGain();
      noiseGain.gain.setValueAtTime(0.4, audioContext.currentTime);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.03);
      
      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterGain);
      
      noise.start(audioContext.currentTime);
      noise.stop(audioContext.currentTime + 0.03);

      // Second click for mechanical feel
      const noise2 = audioContext.createBufferSource();
      noise2.buffer = noiseBuffer;
      
      const noiseFilter2 = audioContext.createBiquadFilter();
      noiseFilter2.type = 'bandpass';
      noiseFilter2.frequency.setValueAtTime(1500, audioContext.currentTime + 0.018);
      noiseFilter2.Q.setValueAtTime(1.5, audioContext.currentTime + 0.018);
      
      const noiseGain2 = audioContext.createGain();
      noiseGain2.gain.setValueAtTime(0.25, audioContext.currentTime + 0.018);
      noiseGain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.04);
      
      noise2.connect(noiseFilter2);
      noiseFilter2.connect(noiseGain2);
      noiseGain2.connect(masterGain);
      
      noise2.start(audioContext.currentTime + 0.018);
      noise2.stop(audioContext.currentTime + 0.04);
    }

    // Clean up audio context
    setTimeout(() => {
      audioContext.close();
    }, 150);
  };

  const handleToggle = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    playThemeSound(newTheme === 'dark');
    toggleTheme();
  };

  return (
    <button 
      className={`theme-toggle ${theme === 'dark' ? 'active' : ''}`}
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 3V1M10 19V17M17 10H19M1 10H3M15.657 4.343L17.071 2.929M2.929 17.071L4.343 15.657M15.657 15.657L17.071 17.071M2.929 2.929L4.343 4.343M14 10C14 12.2091 12.2091 14 10 14C7.79086 14 6 12.2091 6 10C6 7.79086 7.79086 6 10 6C12.2091 6 14 7.79086 14 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 10.5C16.8 14.6 13.4 18 9.3 18C5.2 18 2 14.8 2 10.7C2 6.6 5.4 3.2 9.5 3C9.2 3.6 9 4.3 9 5C9 7.8 11.2 10 14 10C15.3 10 16.5 9.5 17.4 8.7C17.1 9.3 17 9.9 17 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
