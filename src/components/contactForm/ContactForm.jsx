import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className='bg-blue-950 py-10' id='contact'>
      <div className="max-w-md mx-auto">
        <h2 className="text-4xl mb-4 text-green-300 font-bold text-center md:text-5xl">Contact Me</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
              rows="4"
              required
            />
          </div>
          <button
            type="submit"
            className="self-center bg-green-300 border-r-4 border-b-4 border-black text-black py-2 px-4 rounded hover:bg-blue-300 transition duration-300 mt-4 flex items-center"
          >
            Send Message 
            <FaEnvelope className="ml-2" />
          </button>
        </form>
      </div>
    </section>
  );
}
