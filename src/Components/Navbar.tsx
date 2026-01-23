import Logo2025 from '../assets/Logo no date 5000.png';
// import CircularLogo from "../assets/Meetup Logo Circular.png";
import { Button } from '@/Components/ui/button';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [salesOpened] = useState(true); // Example state

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-200'
        : 'bg-white/80 backdrop-blur-sm'
    } rounded-2xl mx-2 mt-2 sm:mx-4 sm:mt-4`}>
      <div className="flex items-center justify-between p-3 sm:p-5">
        {/* Logo */}
        <div className="block h-8 p-0 sm:h-10 md:hidden">
          <img src={Logo2025} alt="logo" className="w-full h-full drop-shadow-md" />
        </div>
        <div className="hidden w-36 p-0 sm:w-48 md:block">
          <img src={Logo2025} alt="logo" className="drop-shadow-md" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-9">
          <div className="group">
            <Link to="/" className="relative font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300">
              🏠 Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <div className="group">
            <a href="#agenda" className="relative font-semibold text-gray-700 hover:text-purple-600 transition-colors duration-300">
              📅 Agenda
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="relative group">
            <a href="#aboutUs" className="pointer-events-none text-gray-400 font-semibold">
              👥 About us
            </a>
            <div className="absolute -rotate-[8deg] w-28 top-5 -left-2 text-xs font-bold text-fuchsia-600 handwriting-1 animate-pulse">
              coming soon!
            </div>
            <div className="absolute top-4 w-20 -left-2 h-[2px] opacity-70 rotate-[175deg] bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-xl"></div>
          </div>

          <div className="relative">
            <a
              href={salesOpened ? undefined : "eventbrite link goes here"}
              target="_blank"
              className={salesOpened ? "cursor-not-allowed" : ""}
              onClick={(e) => salesOpened && e.preventDefault()} // Extra safety: prevents click if true
            >
              <Button
                variant={'default'}
                disabled={salesOpened}
                className={`relative overflow-hidden font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 border-0 rounded-2xl text-sm px-6 py-3 shadow-xl transition-all duration-300 ease-in-out group
                  ${salesOpened
                    ? 'opacity-50 grayscale pointer-events-none' // Disables interaction & dims colors
                    : 'hover:shadow-purple-500/50 hover:scale-105'
                  }`}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">
                  {salesOpened ? '🚫 Sales Paused' : '🎫 Buy Ticket'}
                </span>
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative flex flex-col items-center justify-center w-8 h-8 p-1 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 transition-all duration-300"
          >
            <span
              className={`block w-5 h-0.5 bg-purple-600 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-purple-600 rounded-full transition-all duration-300 my-0.5 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-5 h-0.5 bg-purple-600 rounded-full transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-white/95 to-purple-50/95 backdrop-blur-md border-t border-purple-200 rounded-b-2xl">
          <div className="px-4 py-4 space-y-3">
            <div className="block">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 text-gray-700 hover:text-purple-600 font-semibold"
              >
                <span>🏠</span>
                <span>Home</span>
              </Link>
            </div>

            <div className="block">
              <a
                href="#agenda"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 text-gray-700 hover:text-blue-600 font-semibold"
              >
                <span>📅</span>
                <span>Agenda</span>
              </a>
            </div>

            <div className="block">
              <div className="flex items-center space-x-3 py-3 px-4 rounded-xl bg-gray-100 text-gray-400 font-semibold relative">
                <span>👥</span>
                <span>About us</span>
                <span className="absolute right-3 text-xs text-fuchsia-500 font-bold animate-pulse">Coming soon!</span>
              </div>
            </div>

            <div className="block pt-2">
              <a
                href="https://www.eventbrite.it/e/serverlessdays-milano-2025-tickets-1460042399119"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Button
                  variant={'default'}
                  className="relative overflow-hidden font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 border-0 rounded-2xl text-base px-6 py-4 w-full shadow-xl hover:shadow-purple-500/50 transition-all duration-300 ease-in-out hover:scale-[1.02] group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center space-x-2">
                    <span>🎫</span>
                    <span>Get Your Ticket Now!</span>
                    <span>✨</span>
                  </span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
