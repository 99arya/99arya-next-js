import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold">
          <Link href="/" passHref>
            <span className="cursor-pointer">99ARYA</span>
          </Link>
        </div>
        <button
          className="lg:hidden block"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-0.5 bg-black mb-1.5`}></span>
          <span className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-0.5 bg-black mb-1.5`}></span>
          <span className={`${isMenuOpen ? 'hidden' : 'block'} w-6 h-0.5 bg-black`}></span>
        </button>
        <nav
          className={`${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transform fixed top-0 right-0 w-full h-full bg-white z-20 transition-transform duration-300 lg:relative lg:w-auto lg:flex lg:items-center lg:gap-4 lg:bg-transparent`}
        >
          <button
            className="lg:hidden absolute top-4 right-4 z-50"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            Close
            <span className="w-4 h-0.5 bg-black transform -rotate-45"></span>
            <span className="w-4 h-0.5 bg-black transform rotate-45 mt-1.5"></span>
          </button>
          <ul className="pt-8 m-4 space-y-4 lg:pt-0 lg:m-2 lg:space-y-0 lg:space-x-4 lg:flex">
            <li>
              <Link href="/about" passHref>
                <span className="block py-2 px-6 text-black hover:bg-gray-200 cursor-pointer">
                   About Me
                </span>
              </Link>
            </li>
            <li>
              <Link href="/blog" passHref>
                <span className="block py-2 px-6 text-black hover:bg-gray-200 cursor-pointer">
                  My Blog
                </span>
              </Link>
            </li>
          </ul>
          <div className="mt-4 pt-4 lg:pt-0 lg:mt-0 m-4 lg:m-0">
            <Link href="/contact" passHref>
              <span className="bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
                Contact
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;