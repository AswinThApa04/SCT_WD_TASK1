import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import About from './components/About';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <main>
        <HeroSection />
        <Features />
        <About />
        <CTA />
      </main>
    </div>
  );
}

export default App;