import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black font-bold py-6">
      <div className="container mx-auto flex justify-center items-center flex-col gap-4">
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/wassimelboussi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition duration-300 mr-5"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/wassimelboussi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-yellow-400 transition duration-300"
          >
            <FaGithub />
          </a>
        </div>
        <p className="text-sm md:text-xl lg:text-xl ml-4">© 2024 Mohamed Wassim El Boussi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
