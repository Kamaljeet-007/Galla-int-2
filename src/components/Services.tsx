import React from 'react';
import { Home, PenTool, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: 'Interior Design',
      description: 'Full-service interior design for residential and commercial spaces.',
    },
    {
      icon: <PenTool size={48} />,
      title: 'Space Planning',
      description: 'Optimize your space for functionality and aesthetics.',
    },
    {
      icon: <Palette size={48} />,
      title: 'Color Consultation',
      description: 'Expert color advice to create the perfect ambiance.',
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-gray-800 mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;