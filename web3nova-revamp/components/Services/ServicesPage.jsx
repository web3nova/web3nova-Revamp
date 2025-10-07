// Components/Services/ServicesPage.jsx
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import TechTicker from './TechTicker';
import ServicesGrid from './ServicesGrid';
import TechStack from './TechStack';
import CTASection from './CTASection';
import BackgroundEffects from './BackgroundEffects';

export default function ServicesPage() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen relative transition-colors duration-500 ${darkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background Effects */}
      <BackgroundEffects darkMode={darkMode} />

      {/* Dark Mode Toggle - Position it where your header is */}
      <div className="relative z-10 container mx-auto px-6 py-4">
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-lg transition-all duration-300 ${darkMode ? 'bg-white/10 text-white' : 'bg-gray-100 text-black'}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Tech Ticker */}
      <TechTicker />

      {/* Hero Section */}
      <HeroSection darkMode={darkMode} />

      {/* Services Grid */}
      <ServicesGrid darkMode={darkMode} />

      {/* Tech Stack */}
      <TechStack darkMode={darkMode} />

      {/* CTA Section */}
      <CTASection />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}