import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900">xcllusive Business Valuation</Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex header-nav space-x-8">
            <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="/team" className="text-gray-600 hover:text-gray-900">Team</Link>
            <Link to="/why-us" className="text-gray-600 hover:text-gray-900">Why Us</Link>
            <Link to="/testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
          </nav>
          
          {/* Desktop Contact Info & Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:1300-520-121" className="text-primary font-semibold">Call: 1300 520 121</a>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 bg-white shadow-md rounded-full flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-7 w-7 text-gray-700" strokeWidth={2.5} />
              ) : (
                <Bars3Icon className="h-7 w-7 text-gray-700" strokeWidth={2.5} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
              onClick={closeMobileMenu}
            ></div>
            
            {/* Menu */}
            <div className="relative z-50 md:hidden animate-fadeIn">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200 shadow-lg">
                <Link 
                  to="/services" 
                  className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link 
                  to="/team" 
                  className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Team
                </Link>
                <Link 
                  to="/why-us" 
                  className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Why Us
                </Link>
                <Link 
                  to="/testimonials" 
                  className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Testimonials
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-3 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
                
                {/* Mobile Contact Info */}
                <div className="px-3 py-3 border-t border-gray-200 mt-2">
                  <a 
                    href="tel:1300-520-121" 
                    className="block text-primary font-semibold mb-3 text-center"
                  >
                    📞 Call: 1300 520 121
                  </a>
                  <Link 
                    to="/contact" 
                    className="btn btn-primary w-full text-center"
                    onClick={closeMobileMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
