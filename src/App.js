import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';

import Navigation from './components/ui/Navigation';
import MobileHeader from './components/ui/MobileHeader';
import Footer from './components/ui/Footer';
import ThemeToggle from './components/ui/ThemeToggle';
import ContrastToggle from './components/ui/ContrastToggle';
import CustomCursor from './components/ui/CustomCursor';
import ResumeModal from './components/ui/ResumeModal';

import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Hobbies from './components/sections/Hobbies';
import Contact from './components/sections/Contact';
import ProjectDetail from './components/sections/ProjectDetail';

import { content } from './content';

const HomePage = ({ onResumeClick }) => (
  <div className="App">
    <CustomCursor />
    <MobileHeader navigationItems={content.navigation} onResumeClick={onResumeClick} />
    <ThemeToggle />
    <ContrastToggle />
    <Navigation onResumeClick={onResumeClick} />
    <Hero />
    <Projects />
    <About />
    <Experience />
    <Hobbies />
    <Contact />
    <Footer />
  </div>
);

const ProjectDetailPage = () => (
  <div className="App">
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <ProjectDetail />
  </div>
);

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<HomePage onResumeClick={() => setResumeOpen(true)} />} />
          <Route path="/work/:slug" element={<ProjectDetailPage />} />
        </Routes>
        <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
