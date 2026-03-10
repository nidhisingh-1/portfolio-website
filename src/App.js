import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SpeedInsights } from '@vercel/speed-insights/react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';

import Navigation from './components/ui/Navigation';
import MobileHeader from './components/ui/MobileHeader';
import Footer from './components/ui/Footer';
import ThemeToggle from './components/ui/ThemeToggle';
import ContrastToggle from './components/ui/ContrastToggle';
import CustomCursor from './components/ui/CustomCursor';
import ResumeModal from './components/ui/ResumeModal';
import AvailabilityStamp from './components/ui/AvailabilityStamp';
import SEO from './components/ui/SEO';

import Hero from './components/sections/Hero';
import Projects from './components/sections/Projects';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Hobbies from './components/sections/Hobbies';
import Contact from './components/sections/Contact';
import ProjectDetail from './components/sections/ProjectDetail';
import InstantMediaDetail from './components/sections/InstantMediaDetail';
import InventoryListingDetail from './components/sections/InventoryListingDetail';
import ViniDetail from './components/sections/ViniDetail';
import SpyneFlipDetail from './components/sections/SpyneFlipDetail';

import { content } from './content';

const HomePage = ({ onResumeClick }) => (
  <div className="App">
    <SEO
      title="Product Designer"
      description="Nidhi Singh is a Product Designer with 3+ years of experience crafting AI-powered platforms and user-centered digital experiences. Currently at Spyne AI, Gurugram."
      url="/"
    />
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
    <AvailabilityStamp />
  </div>
);

const ProjectDetailPage = () => (
  <div className="App">
    <SEO
      title="Case Study"
      description="Explore a product design case study by Nidhi Singh, covering research, interaction design, and outcomes."
      url="/work"
    />
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <ProjectDetail />
  </div>
);

const InstantMediaDetailPage = () => (
  <div className="App">
    <SEO
      title="Instant Media: Reducing Time-to-Live in Automotive Retail"
      description="Case study: Designed a zero-friction media publishing feature enabling dealers to list vehicles same-day, reducing time-to-live by up to 80%. By Nidhi Singh, Product Designer at Spyne AI."
      url="/work/instant-media"
    />
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <InstantMediaDetail />
  </div>
);

const InventoryListingDetailPage = () => (
  <div className="App">
    <SEO
      title="Inventory Listing & VDP: Intelligence Dashboard"
      description="Case study: Transformed Spyne's inventory view into an action-item intelligence dashboard with Website Listing Score, Time to Market metrics, and actionable VDP. By Nidhi Singh."
      url="/work/inventory-listing-vdp"
    />
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <InventoryListingDetail />
  </div>
);

const ViniDetailPage = () => (
  <div className="App">
    <SEO
      title="Vini: AI Receptionist for Automotive Dealer Websites"
      description="Case study: Designed Vini, a vehicle-aware AI receptionist embedded inside the Spyne viewer, solving iframe isolation and generic chat UX in automotive retail. By Nidhi Singh."
      url="/work/vini"
    />
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <ViniDetail />
  </div>
);

const SpyneFlipDetailPage = () => (
  <div className="App">
    <SEO
      title="Spyne Flip: Transforming Automotive Sales Demos"
      description="Case study: Designed a Chrome extension that lets sales teams transform any dealership website live with Spyne AI studio backgrounds, cutting demo prep to zero. By Nidhi Singh."
      url="/work/spyne-flip"
    />
    <CustomCursor />
    <ThemeToggle />
    <ContrastToggle />
    <SpyneFlipDetail />
  </div>
);

function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Routes>
            <Route path="/" element={<HomePage onResumeClick={() => setResumeOpen(true)} />} />
            <Route path="/work/instant-media" element={<InstantMediaDetailPage />} />
            <Route path="/work/inventory-listing-vdp" element={<InventoryListingDetailPage />} />
            <Route path="/work/vini" element={<ViniDetailPage />} />
            <Route path="/work/spyne-flip" element={<SpyneFlipDetailPage />} />
            <Route path="/work/:slug" element={<ProjectDetailPage />} />
          </Routes>
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
          <SpeedInsights />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
