import React from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif font-bold text-gray-800">Galla Interior</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#services" className="text-gray-600 hover:text-gray-800">Services</a>
          <a href="#portfolio" className="text-gray-600 hover:text-gray-800">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-800">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 bg-white">
            <a href="#home" className="py-2 text-gray-600 hover:text-gray-800">Home</a>
            <a href="#services" className="py-2 text-gray-600 hover:text-gray-800">Services</a>
            <a href="#portfolio" className="py-2 text-gray-600 hover:text-gray-800">Portfolio</a>
            <a href="#contact" className="py-2 text-gray-600 hover:text-gray-800">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;