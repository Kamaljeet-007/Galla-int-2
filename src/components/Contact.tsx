import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-medium">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-4 py-2 border rounded-md" required></textarea>
            </div>
            <button type="submit" className="bg-gray-800 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;