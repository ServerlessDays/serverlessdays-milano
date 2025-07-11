import Logo2025 from '../assets/Logo no date 5000.png';
// import CircularLogo from "../assets/Meetup Logo Circular.png";
import { Button } from '@/Components/ui/button';
import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-slate-100 rounded-b-md">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="block h-10 p-0 md:hidden">
          <img src={Logo2025} alt="logo" className="w-full h-full" />
        </div>
        <div className="hidden w-48 p-0 md:block">
          <img src={Logo2025} alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-9">
          <div>
            <a href="/">Home</a>
          </div>
          <div>
            <a href="#agenda">Agenda</a>
          </div>

          <div className="relative">
            <a href="#aboutUs" className="pointer-events-none">
              About us
            </a>
            <div className="absolute -rotate-[5deg] w-28 top-4 -left-2 text-sm font-normal text-fuchsia-700 handwriting-1">
              coming soon
            </div>
            <div className="absolute top-3 w-20 -left-2 h-[2px] opacity-70 rotate-[175deg] bg-fuchsia-700 rounded-xl"></div>
          </div>
          <div>
            <a href="https://www.eventbrite.it/e/serverlessdays-milano-2025-tickets-1460042399119" target="_blank">
              <Button
                variant={'default'}
                className="font-bold text-purple-800 rounded-xl bg-white border-2 border-purple-800 text-xs sm:text-sm px-2 sm:px-4 py-1 sm:py-2 w-auto min-w-[80px] sm:min-w-[100px] shadow-lg hover:shadow-purple-500/50 hover:bg-purple-50 transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-600"
              >
                Buy Ticket
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex flex-col items-center justify-center w-6 h-6 space-y-1"
          >
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-slate-100 border-t border-slate-200">
          <div className="px-4 py-2 space-y-2">
            <div className="block py-2">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            </div>
            <div className="block py-2">
              <a href="#agenda" onClick={() => setIsMobileMenuOpen(false)}>Agenda</a>
            </div>
            <div className="block py-2">
              <a href="#aboutUs" className="pointer-events-none text-gray-400">About us (coming soon)</a>
            </div>
            <div className="block py-2">
              <a href="https://www.eventbrite.it/e/serverlessdays-milano-2025-tickets-1460042399119" target="_blank" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant={'default'}
                  className="font-bold text-purple-800 rounded-xl bg-white border-2 border-purple-800 text-sm px-4 py-2 w-full shadow-lg hover:shadow-purple-500/50 hover:bg-purple-50 transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-600"
                >
                  🎫 Buy Ticket
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
