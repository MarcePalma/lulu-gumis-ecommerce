'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import Image from 'next/image';
import { InstagramIcon } from '@/app/utils/icons/icons';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const navLinks = [
    {
      title: `CATALOGO`,
      path: '/catalogo',
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-20 bg-white shadow-lg">
      <div className="container flex items-center justify-between mx-auto px-6 py-4">
        <Link className="flex items-center" href={'/'}>
        <InstagramIcon/>
          <Image
            className="rounded-full"
            width={80}
            height={80}
            src="/images/logo.webp"
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
            {!navbarOpen ? <Bars3Icon className="h-6 w-6" /> : <XMarkIcon className="h-6 w-6" />}
          </button>
        </div>
        <div className={`w-full md:flex md:items-center md:w-auto ${navbarOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  className="ml-3 text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors duration-300"
                  href={link.path}
                  title={link.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
            {/* @ts-expect-error */} 
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
}
