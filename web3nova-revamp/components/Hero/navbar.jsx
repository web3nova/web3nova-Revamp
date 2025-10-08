import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Training', href: '#training' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '#events' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const scrolledNavLinks = [
    { name: 'Home', href: '/' },
    { name: 'Training', href: '#training' },
    { name: 'Services', href: '#services' },
    { name: 'Events', href: '/events' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const displayLinks = isScrolled ? scrolledNavLinks : navLinks;

  return (
    <>
      {/* Desktop & Tablet Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out hidden md:block ${
          isScrolled
            ? 'py-3'
            : 'py-6'
        }`}
      >
        {/* Background that appears when scrolled */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? 'bg-[#1a1a2e]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl opacity-100'
              : 'opacity-0'
          }`}
        ></div>

        <div className={`relative mx-auto px-6 lg:px-8 transition-all duration-500 ${
          isScrolled ? 'max-w-7xl' : 'max-w-full px-8 lg:px-16'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div 
                className={`relative flex items-center justify-center transition-all duration-500 ${
                  isScrolled ? 'w-16 h-16' : 'w-24 h-24'
                }`}
              >
                <Image 
                  src="/web3Nova.svg" 
                  alt="Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
             
            </div>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-8">
              {displayLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2E7BD1] to-[#92B4E4] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* CTA Button - Only visible when scrolled */}
            <div className={`transition-all duration-500 ${
              isScrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none absolute'
            }`}>
              <button
                className="group relative px-6 py-2.5 bg-gradient-to-r from-[#2E7BD1] to-[#92B4E4] text-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 text-sm whitespace-nowrap"
                style={{
                  boxShadow: '0 8px 32px rgba(46, 123, 209, 0.4)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                }}
              >
                <span className="relative z-10">Book a call now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a5a9f] via-[#2E7BD1] to-[#1a5a9f] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Decorative line at bottom when scrolled */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2E7BD1] to-transparent opacity-50"></div>
        )}
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        {/* Mobile Nav Bar */}
        <div
          className={`transition-all duration-500 ${
            isScrolled
              ? 'bg-[#1a1a2e]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
              : 'bg-transparent backdrop-blur-md'
          }`}
        >
          <div className="px-4 py-3 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image 
                  src="/web3Nova.svg" 
                  alt="Logo" 
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right side: CTA + Menu */}
            <div className="flex items-center gap-3">
              {/* Mobile CTA - visible only when scrolled */}
              {isScrolled && (
                <button
                  className="px-4 py-2 bg-gradient-to-r from-[#2E7BD1] to-[#92B4E4] text-white rounded-lg text-sm transition-all duration-300 active:scale-95 whitespace-nowrap"
                  style={{
                    boxShadow: '0 4px 20px rgba(46, 123, 209, 0.4)',
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontWeight: 600,
                  }}
                >
                  Book a call now
                </button>
              )}

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white transition-colors relative z-50"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-xl transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-br from-[#0a0a0a] via-[#0f0f1a] to-[#0a0a0a] border-l border-white/10 shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Menu Header */}
          <div className="pt-13 pb-6 px-6 border-b border-white/10">
            
          </div>

          {/* Menu Links */}
          <div className={`py-6 px-6 space-y-1 overflow-y-auto ${
            isScrolled ? 'max-h-[calc(100vh-200px)]' : 'max-h-[calc(100vh-280px)]'
          }`}>
            {displayLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3.5 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 group"
                style={{
                  animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.05}s forwards` : 'none',
                  opacity: 0,
                }}
              >
                <span className="font-medium text-base">{link.name}</span>
                <div className="w-0 h-0.5 bg-gradient-to-r from-[#2E7BD1] to-[#92B4E4] transition-all duration-300 group-hover:w-full mt-1"></div>
              </a>
            ))}
          </div>

          {/* Mobile CTA at bottom - Only show when not scrolled */}
          {!isScrolled && (
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a] to-transparent">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-gradient-to-r from-[#2E7BD1] via-[#92B4E4] to-[#2E7BD1] text-white rounded-xl transition-all duration-300 active:scale-95 shadow-lg"
                style={{
                  boxShadow: '0 8px 32px rgba(46, 123, 209, 0.5)',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: 600,
                }}
              >
                Book a call now
              </button>
            </div>
          )}

          {/* Decorative gradient */}
          <div 
            className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(46, 123, 209, 0.6), transparent)',
              filter: 'blur(60px)',
            }}
          ></div>
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}