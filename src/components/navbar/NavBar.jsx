import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaEnvelope } from 'react-icons/fa';

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      id="nav-on-scroll"
      className={`${
        scrolling
          ? 'fixed md:fixed top-0 left-0 right-0 bg-white md:bg-green-300 lg:bg-green-300 bg-opacity-95 animate-slide-in'
          : 'sm:hidden md:block lg:block'
      } duration-600 ease shadow left-0 w-full p-4 text-gray-900 z-40 nav-top-visible`}
    >
      <div className="lg:container lg:mx-auto justify-between">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" 
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-150}
            duration={500}
            className="kill-link-style xl:mr-6">
              <span className="hidden md:inline-block lg:inline-block animate__animated animate__fadeInDown rounded-md border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl rxl:text-3xl font-extrabold cursor-pointer">
                wassim.elboussi
              </span>
              <span className="md:hidden lg:hidden inline-block animate__animated animate__fadeInDown rounded-md border-4 border-gray-900 text-gray-900 select-none p-2 text-2xl rxl:text-3xl font-extrabold cursor-pointer">
                W
              </span>
            </Link>
          </div>
          <div className="flex justify-between space-x-4">
            <Link
              to="stack"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-180}
              duration={500}
              className={`inline-block animate__animated animate__fadeInDown kill-link-style delay1 text-2xl xl:text-3xl cursor-pointer hover:underline font-extrabold`}
            >
              Stack
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-40}
              duration={500}
              className={`inline-block animate__animated animate__fadeInDown kill-link-style delay1 text-2xl xl:text-3xl cursor-pointer hover:underline font-extrabold`}
            >
              Projects
            </Link>
            <div className={`inline-block animate__animated animate__fadeInDown kill-link-style delay1 text-2xl xl:text-3xl cursor-pointer hover:underline font-extrabold`}>
              <a href='https://github.com/wassimelboussi/resume/blob/main/cv.pdf'
              target="_blank"
              rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
          <div>
          <Link
          to='contact'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}>
            <span
              className="hidden md:inline-block lg:inline-block animate__animated animate__flipInX delay4 md:text-2xl xl:text-3xl cursor-pointer border-none md:border-4 lg:border-4 rounded-md md:px-4 md:py-2 lg:px-4 lg:py-2 border-gray-900 hover:bg-gray-900 hover:text-gray-50 font-extrabold">
              Contact Me
            </span>
            </Link>
          <Link
          to='contact'
          spy={true}
          smooth={true}
          hashSpy={true}
          offset={50}
          duration={500}>
            <span className='md:hidden lg:hidden text-2xl'>
              <FaEnvelope />
            </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
