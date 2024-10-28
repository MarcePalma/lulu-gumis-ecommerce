'use client';
import React from 'react';
import NavLink from './NavLink';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { MenuOverlayProps } from '@/app/types/types';
import { useUser } from '@/app/userContext/userContext';

const links = [
  { path: '/catalogo', title: 'Catalogo' },
  { path: '/catalogo/amigurumis', title: 'Amigurumis' },
  { path: '/catalogo/flores', title: 'Flores' },
  { path: '/catalogo/ropa', title: 'Ropa' },
];

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const { isAuthenticated } = useUser();

  return (
    <div className='fixed inset-0 bg-pink-200 bg-opacity-95 z-30 flex items-center justify-center shadow-lg transition-transform transform duration-300 ease-in-out translate-y-0'>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 text-white bg-pink-500 rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg"
      >
        <XMarkIcon className="h-8 w-8" />
      </button>
      <ul className='flex flex-col py-4 items-center space-y-6'>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              className="ml-3 text-3xl font-bold text-gray-800 hover:text-pink-600 transition-colors duration-300"
            />
          </li>
        ))}
        {isAuthenticated && (
          <li>
            <NavLink
              href="/dashboard"
              title="Dashboard"
              className="ml-3 text-3xl font-bold text-gray-800 hover:text-pink-600 transition-colors duration-300"
            />
          </li>
        )}
      </ul>
    </div>
  );
}