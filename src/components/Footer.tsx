import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-serif font-bold">Galla Interior</h3>
            <p className="mt-2">Transforming spaces into timeless elegance</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Facebook size={24} /></a>
            <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Galla Interior. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;