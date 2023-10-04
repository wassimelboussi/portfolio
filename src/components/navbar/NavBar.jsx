import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      id="nav-on-scroll"
      className={`${
        scrolling
          ? 'fixed top-0 left-0 right-0 bg-green-300 bg-opacity-95 animate-slide-in'
          : 'hidden md:block lg:block'
      } duration-300 ease shadow left-0 w-full p-4 text-gray-900 z-40 nav-top-visible`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="kill-link-style xl:mr-6">
              <span className="inline-block animate__animated animate__fadeInDown rounded-md border-4 border-gray-900 text-gray-900 select-none p-2 inline-block text-2xl rxl:text-3xl font-extrabold">
                wassim.elboussi
              </span>
            </Link>
          </div>
          <div className="flex justify-between space-x-4">
            <Link
              to="/stack"
              className={`inline-block animate__animated animate__fadeInDown kill-link-style delay1 text-2xl xl:text-3xl cursor-pointer hover:underline font-extrabold`}
            >
              Stack
            </Link>
            <Link
              to="/projects"
              className={`inline-block animate__animated animate__fadeInDown kill-link-style delay1 text-2xl xl:text-3xl cursor-pointer hover:underline font-extrabold`}
            >
              Projects
            </Link>
            <Link
              to="/resume"
              className={`inline-block animate__animated animate__fadeInDown kill-link-style delay1 text-2xl xl:text-3xl cursor-pointer hover:underline font-extrabold`}
            >
              Resume
            </Link>
          </div>
          <div>
            <span
              onClick={() => toggleContactMe('show')}
              className="inline-block animate__animated animate__flipInX delay4 text-2xl xl:text-3xl cursor-pointer border-4 rounded-md px-4 p-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 font-extrabold"
            >
              Contact Me
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
