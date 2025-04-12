import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 700 && !isVisible) {
        setIsVisible(true);
      } else if (scrollY <= 700 && isVisible) {
        setIsVisible(false);
      }

      setScrolled(scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Progetto', href: '#project-section' },
    { label: 'Team', href: '#team' },
    { label: 'Contatti', href: '#contatti' },
  ];

  return (
    <nav
      className={`fixed w-full z-20 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      } ${scrolled ? 'bg-[#02d1ff] shadow-md' : 'bg-transparent'}`}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-40">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              className="block h-16 w-auto"
              src="madagabot.png"
              alt="RoboCup Team Logo"
            />
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:space-x-10">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-900 hover:opacity-75 inline-flex items-center px-1 pt-1 text-base font-medium"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Hamburger toggle (mobile only) */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#02d1ff]"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
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

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 pt-2 space-y-2 bg-white shadow-md">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-gray-900 hover:text-[#02d1ff] text-base font-medium"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
