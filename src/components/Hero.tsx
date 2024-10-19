import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Elegant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h2 className="text-5xl font-serif font-bold mb-4">Welcome to Galla Interior</h2>
        <p className="text-xl mb-8">Transforming spaces into timeless elegance</p>
        <a
          href="#contact"
          className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;