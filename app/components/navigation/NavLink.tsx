import React from 'react';
import Link from 'next/link';
import { NavLinkProps } from '@/app/types/types';

const NavLink: React.FC<NavLinkProps> = ({ href, title, options, onHover }) => {
  return (
    <div className="relative" onMouseEnter={onHover} onMouseLeave={onHover}>
      <Link
        href={href}
        title={title}
        className="text-lg font-medium text-gray-800 hover:text-pink-500 transition duration-300 ease-in-out"
      >
        {title}
      </Link>
      {options && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg">
          {options.map((option, index) => (
            <Link
              key={index}
              href={option.path}
              className="block px-4 py-2 text-gray-800 hover:bg-pink-500 hover:text-white transition duration-300"
            >
              {option.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;
