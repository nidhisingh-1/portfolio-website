import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import MobileHeader from './components/MobileHeader';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experience';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import ContrastToggle from './components/ContrastToggle';
import CustomCursor from './components/CustomCursor';
import { content } from './content';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <CustomCursor />
        <MobileHeader navigationItems={content.navigation} />
        <ThemeToggle />
        <ContrastToggle />
        <Navigation />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Hobbies />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
