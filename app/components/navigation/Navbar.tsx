'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const navLinks = [
    {
      title: 'CATALOGO',
      path: '/catalogo',
      options: [
        { title: 'Amigurumis', path: '/catalogo/amigurumis' },
        { title: 'Flores', path: '/catalogo/flores' },
        { title: 'Ropa', path: '/catalogo/ropa' },
      ],
    },
  ];

  const handleMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
    setHoverTimeout(timeout);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-pink-200 shadow-lg">
      <div className="container flex items-center justify-between mx-auto px-6 py-4">
        <Link className="flex items-center" href={'/'}>
          <Image
            className="rounded-full"
            width={80}
            height={80}
            src="/images/LOGO.webp"
            alt="Logo"
          />
          <span className="ml-3 text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors duration-300">
            Amigurumis
          </span>
        </Link>
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="p-2 text-gray-800 hover:text-pink-500 focus:outline-none transition-colors duration-300"
          >
            {!navbarOpen ? <Bars3Icon className="h-6 w-6" /> : <XMarkIcon className="h-6 w-6 text-gray-800" />}
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${navbarOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <NavLink
                  href={link.path}
                  title={link.title}
                  options={dropdownOpen ? link.options : []}
                  onHover={handleMouseEnter}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}

    </nav>
  );
}
