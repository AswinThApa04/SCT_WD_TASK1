import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-blue-600">
          Learnly
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
            About
          </a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Sign Up
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${
          isOpen ? 'block' : 'hidden'
        } bg-white w-full absolute top-16 left-0 shadow-md`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#features" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Features
          </a>
          <a href="#about" className="text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a
            href="#contact"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;