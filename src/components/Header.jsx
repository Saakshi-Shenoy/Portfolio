import React, { useState, useRef, useEffect } from "react";
import "../App.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollRef = useRef();
  const scrollToSection = (item) => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience"},
  ];

  return (
    <div id="header" className="font-heading">
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'navbar-scrolled backdrop-blur-xl bg-slate-900/80 shadow-2xl shadow-teal-500/10' 
            : 'backdrop-blur-md bg-slate-900/60'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
          

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => scrollToSection(link.label.toLowerCase())}
                  className="nav-link group"
                >
                  <span className="nav-link-icon">{link.icon}</span>
                  <span className="nav-link-text text-xl">{link.label}</span>
                  <div className="nav-link-indicator"></div>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden mobile-menu-button group"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={`menu-line ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`menu-line ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`menu-line ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isOpen ? 'mobile-nav-open' : ''}`}>
            <div className="flex flex-col gap-2 py-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => {
                    scrollToSection(link.label.toLowerCase());
                    setIsOpen(false);
                  }}
                  className="mobile-nav-link group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <span className="text-2xl">{link.icon}</span>
                  <span className="font-semibold text-lg">{link.label}</span>
                  <svg 
                    className="w-5 h-5 text-teal-400 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
              
            </div>
          </div>
        </div>

        {/* Bottom Border Glow */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent"></div>
      </header>
    </div>
  );
}

export default Header;