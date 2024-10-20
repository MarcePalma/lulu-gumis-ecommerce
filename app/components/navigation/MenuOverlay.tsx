'use client'
import React from 'react';
import NavLink from './NavLink';
import path from 'path';

const links = [
  { path: '/catalogo', title: 'Catalogo' },
  { path: '/catalogo/amigurumis', title: 'Amigurumis' },
  { path: '/catalogo/flores', title: 'Flores' },
  { path: '/catalogo/ropa', title: 'Ropa' },
];

export default function MenuOverlay() {
  return (
    <div className='fixed inset-0 bg-white bg-opacity-90 z-30 flex items-center justify-center'>
      <ul className='flex flex-col py-4 items-center space-y-4'>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              className="ml-3 text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors duration-300"
            />


          </li>
        ))}
      </ul>
    </div>
  );
}
